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
