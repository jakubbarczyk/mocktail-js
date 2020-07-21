/**
 * Parses the so-called `deep` object off of the provided pattern.
 */
export function parseDeepPattern(objectPattern: string, nestedValue?: unknown): Record<string, unknown> {
    const keys: string[] = objectPattern.split(".");

    function evaluate(fieldNames: string[]): Record<string, unknown> | unknown {
        return fieldNames.length > 0 ? { [fieldNames.shift() as string]: evaluate(fieldNames) } : nestedValue;
    }

    return evaluate(keys) as Record<string, unknown>;
}
