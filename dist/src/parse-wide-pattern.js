"use strict";
/**
 * Parses the so-called `wide` object string off of the provided pattern.
 *
 * @param objectPattern {String} the pattern off of which a `wide` object string is parsed
 * @returns {String} the parsed `wide` object string
 */
function parseWidePattern(objectPattern) {
    return objectPattern.split(",");
}
exports.parseWidePattern = parseWidePattern;
