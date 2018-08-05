/**
 * Parses the so-called `deep` object off of the provided pattern.
 *
 * @param objectPattern {string} the pattern off of which a `deep` object is parsed
 * @param nestedValue {any} the value/-s to be assigned to the nested keys
 * @returns {object} the parsed `deep` object
 */
export function parseDeepPattern(objectPattern: string, nestedValue?: any): object {
    const keys: string[] = objectPattern.split(".");

    function evaluate(fieldNames: string[]): any {
        return fieldNames.length > 0 ? { [fieldNames.shift() as string]: evaluate(fieldNames) } : nestedValue;
    }

    return { [keys.shift() as string]: evaluate(keys) };
}
