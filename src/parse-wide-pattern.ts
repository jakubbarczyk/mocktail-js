/**
 * Parses the so-called `wide` object string off of the provided pattern.
 *
 * @param objectPattern {string} the pattern off of which a `wide` object string is parsed
 * @returns {string} the parsed `wide` object string
 */
export function parseWidePattern(objectPattern: string): string[] {
    return objectPattern.split(",");
}
