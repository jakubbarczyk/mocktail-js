import { Fork } from "./fork";
import { isString } from "./is-string";
import { parseDeepPattern } from "./parse-deep-pattern";
import { parseForkPattern } from "./parse-fork-pattern";
import { parseWidePattern } from "./parse-wide-pattern";

/**
 * Mocks a JavaScript object off of the provided pattern.
 *
 * @param objectPattern {string} the pattern off of which a mock object is built
 * @param nestedValue {*} the value/-s to be assigned to the nested keys
 * @returns {object} the object parsed from the objectPattern
 */
export function mocktail(objectPattern: string, ...nestedValue: any[]): object {
    const { assign } = Object as any;

    if (isString(objectPattern)) {
        const forks: Fork[] = parseForkPattern(objectPattern);
        let wides: object[] = [];
        let deep: object = {};
        const mock: object = {};

        forks.forEach((fork: Fork) => {
            wides = parseWidePattern(fork.value).map((wide) => parseDeepPattern(wide, nestedValue.shift()));

            if (fork.key === null) {
                deep = assign.apply(null, wides);
            } else {
                deep = parseDeepPattern(fork.key, assign.apply(null, wides));
            }

            assign(mock, deep);
        });

        return mock;
    } else {
        return {};
    }
}
