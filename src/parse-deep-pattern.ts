/**
 * Parses the so-called `deep` object off of the provided pattern.
 *
 * @param objectPattern {String} the pattern off of which a `deep` object is parsed
 * @param nestedValue {*} the value/-s to be assigned to the nested keys
 * @returns {Object} the parsed `deep` object
 */
export function parseDeepPattern(objectPattern: string, nestedValue?: any): Object {
    let keys: string[] = objectPattern.split(".");

    function evaluate(fieldNames: string[]): any {
        return fieldNames.length > 0 ? {[fieldNames.shift()]: evaluate(fieldNames)} : nestedValue;
    }

    return {[keys.shift()]: evaluate(keys)};
}
