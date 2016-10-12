"use strict";
/**
 * Parses the so-called `deep` object off of the provided pattern.
 *
 * @param objectPattern {String} the pattern off of which a `deep` object is parsed
 * @param nestedValue {*} the value/-s to be assigned to the nested keys
 * @returns {Object} the parsed `deep` object
 */
function parseDeepPattern(objectPattern, nestedValue) {
    var keys = objectPattern.split(".");
    function evaluate(fieldNames) {
        return fieldNames.length > 0 ? (_a = {}, _a[fieldNames.shift()] = evaluate(fieldNames), _a) : nestedValue;
        var _a;
    }
    return (_a = {}, _a[keys.shift()] = evaluate(keys), _a);
    var _a;
}
exports.parseDeepPattern = parseDeepPattern;
