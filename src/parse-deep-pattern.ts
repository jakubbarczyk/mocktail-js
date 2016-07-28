export function parseDeepPattern(objectPattern: string, nestedValue?: any): Object {
    let keys: string[] = objectPattern.split(".");

    function evaluate(fieldNames: string[]): any {
        return fieldNames.length > 0 ? {[fieldNames.shift()]: evaluate(fieldNames)} : nestedValue;
    }

    return {[keys.shift()]: evaluate(keys)};
}
