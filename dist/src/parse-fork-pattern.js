"use strict";
var trim_all_1 = require("./trim-all");
/**
 * Parses the so-called `fork` object array off of the provided pattern.
 *
 * @param objectPattern {String} the pattern off of which a `fork` object array is parsed
 * @returns {Object} the parsed `fork` object array
 */
function parseForkPattern(objectPattern) {
    var forkPattern = /([a-z.]*):[a-z.,]*;/;
    var forks = [], fork;
    var trimAllCommas = trim_all_1.trimAll(","), trimAllSemicolons = trim_all_1.trimAll(";");
    while (forkPattern.test(objectPattern)) {
        fork = forkPattern.exec(objectPattern);
        objectPattern = objectPattern.replace(fork[0], "");
        forks.push({ key: fork[1], value: trimAllSemicolons(fork[0].replace(fork[1] + ":", "")) });
    }
    if (objectPattern.length) {
        forks.push({ key: null, value: trimAllCommas(objectPattern) });
    }
    return forks;
}
exports.parseForkPattern = parseForkPattern;
