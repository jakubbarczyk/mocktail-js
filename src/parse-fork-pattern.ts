import { Fork } from "./fork";
import { trimAll } from "./trim-all";

/**
 * Parses the so-called `fork` object array off of the provided pattern.
 *
 * @param objectPattern {string} the pattern off of which a `fork` object array is parsed
 * @returns {object} the parsed `fork` object array
 */
export function parseForkPattern(objectPattern: string): Fork[] {
    const forkPattern: RegExp = /([a-z.]*):[a-z.,]*;/;
    const trimAllCommas = trimAll(",");
    const trimAllSemicolons = trimAll(";");
    const forks: Fork[] = [];
    let fork: RegExpExecArray;

    while (forkPattern.test(objectPattern)) {
        fork = forkPattern.exec(objectPattern) as RegExpExecArray;
        objectPattern = objectPattern.replace(fork[0], "");
        forks.push({ key: fork[1], value: trimAllSemicolons(fork[0].replace(fork[1] + ":", "")) });
    }

    if (objectPattern.length) {
        forks.push({ key: null, value: trimAllCommas(objectPattern) });
    }

    return forks;
}
