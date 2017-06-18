"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parse_deep_pattern_1 = require("./parse-deep-pattern");
var parse_fork_pattern_1 = require("./parse-fork-pattern");
var parse_wide_pattern_1 = require("./parse-wide-pattern");
function mocktail(objectPattern) {
    var nestedValue = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nestedValue[_i - 1] = arguments[_i];
    }
    if (typeof objectPattern === "string" || objectPattern instanceof String) {
        var forks = parse_fork_pattern_1.parseForkPattern(objectPattern), wides_1 = [], deep_1 = {}, mock_1 = {};
        forks.forEach(function (fork) {
            wides_1 = parse_wide_pattern_1.parseWidePattern(fork.value).map(function (wide) { return parse_deep_pattern_1.parseDeepPattern(wide, nestedValue.shift()); });
            if (fork.key === null) {
                deep_1 = Object.assign.apply(null, wides_1);
            }
            else {
                deep_1 = parse_deep_pattern_1.parseDeepPattern(fork.key, Object.assign.apply(null, wides_1));
            }
            Object.assign(mock_1, deep_1);
        });
        return mock_1;
    }
    else {
        return {};
    }
}
exports.mocktail = mocktail;
