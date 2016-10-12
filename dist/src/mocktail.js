"use strict";
var parse_deep_pattern_1 = require("./parse-deep-pattern");
var parse_fork_pattern_1 = require("./parse-fork-pattern");
var parse_wide_pattern_1 = require("./parse-wide-pattern");
/**
 * Mocks a JavaScript object off of the provided pattern.
 *
 * @param objectPattern {String} the pattern off of which a mock object is built
 * @param nestedValue {*} the value/-s to be assigned to the nested keys
 * @returns {Object} the object parsed from the objectPattern
 */
function mocktail(objectPattern) {
    var nestedValue = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nestedValue[_i - 1] = arguments[_i];
    }
    var forks = parse_fork_pattern_1.parseForkPattern(objectPattern), wides = [], deep = {}, mock = {};
    forks.forEach(function (fork) {
        wides = parse_wide_pattern_1.parseWidePattern(fork.value).map(function (wide) { return parse_deep_pattern_1.parseDeepPattern(wide, nestedValue.shift()); });
        if (fork.key === null) {
            deep = Object.assign.apply(null, wides);
        }
        else {
            deep = parse_deep_pattern_1.parseDeepPattern(fork.key, Object.assign.apply(null, wides));
        }
        Object.assign(mock, deep);
    });
    return mock;
}
exports.mocktail = mocktail;
