import {Fork} from "./fork";
import {parseDeepPattern} from "./parse-deep-pattern";
import {parseForkPattern} from "./parse-fork-pattern";
import {parseWidePattern} from "./parse-wide-pattern";

/**
 * Mocks a JavaScript object off of the provided pattern.
 *
 * @param objectPattern {String} the pattern off of which a mock object is built
 * @param nestedValue {*} the value/-s to be assigned to the nested keys
 * @returns {Object} the object parsed from the objectPattern
 */
export function mocktail(objectPattern: string, ...nestedValue: any[]): Object {
    let forks: Fork[] = parseForkPattern(objectPattern),
        wides: Object[] = [],
        deep: Object = {},
        mock: Object = {};

    forks.forEach(fork => {
        wides = parseWidePattern(fork.value).map(wide => parseDeepPattern(wide, nestedValue.shift()));

        if (fork.key === null) {
            deep = Object.assign.apply(null, wides);
        } else {
            deep = parseDeepPattern(fork.key, Object.assign.apply(null, wides));
        }

        Object.assign(mock, deep);
    });

    return mock;
}
