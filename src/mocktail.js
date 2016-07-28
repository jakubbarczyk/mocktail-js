var mocktail_expression_language_1 = require("./mocktail-expression-language");
exports.mocktail = function (objectPattern) {
    var nestedValue = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nestedValue[_i - 1] = arguments[_i];
    }
    var forks = mocktail_expression_language_1.MocktailExpressionLanguage.parseForkPattern(objectPattern), wides = [], deep = {}, mock = {};
    forks.forEach(function (fork) {
        wides = mocktail_expression_language_1.MocktailExpressionLanguage.parseWidePattern(fork.value).map(function (wide) { return mocktail_expression_language_1.MocktailExpressionLanguage.parseDeepPattern(wide, nestedValue.shift()); });
        if (fork.key === null) {
            deep = Object.assign.apply(null, wides);
        }
        else {
            deep = mocktail_expression_language_1.MocktailExpressionLanguage.parseDeepPattern(fork.key, Object.assign.apply(null, wides));
        }
        Object.assign(mock, deep);
    });
    return mock;
};
