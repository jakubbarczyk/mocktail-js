/**
 * Parses the so-called `wide` object string off of the provided pattern.
 */
export function parseWidePattern(objectPattern: string): string[] {
    return objectPattern.split(",");
}
