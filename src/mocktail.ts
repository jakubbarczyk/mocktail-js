import { Fork } from "./fork";
import { isString } from "./is-string";
import { parseDeepPattern } from "./parse-deep-pattern";
import { parseForkPattern } from "./parse-fork-pattern";
import { parseWidePattern } from "./parse-wide-pattern";

/**
 * Mocks a JavaScript object off of the provided pattern.
 */
export function mocktail(objectPattern: string, ...nestedValue: unknown[]): Record<string, unknown> {
    const mock: Record<string, unknown> = {};

    if (isString(objectPattern)) {
        const forks: Fork[] = parseForkPattern(objectPattern);
        let wides: Array<Record<string, unknown>> = [];
        let deep: Record<string, unknown> = {};

        forks.forEach((fork: Fork) => {
            wides = parseWidePattern(fork.value).map((wide) => parseDeepPattern(wide, nestedValue.shift()));
            deep = fork.key === null
                ? Object.assign({}, ...wides) as Record<string, unknown>
                : parseDeepPattern(fork.key, Object.assign({}, ...wides));
            Object.assign(mock, deep);
        });
    }

    return mock;
}
