import { Fork } from "./fork";
import { trimAll } from "./trim-all";

export function parseForkPattern(objectPattern: string): Fork[] {
    const forkPattern: RegExp = /([a-z.]*):[a-z.,]*;/;

    let forks: Fork[] = [],
        fork: string[] = [];

    let trimAllCommas = trimAll(","),
        trimAllSemicolons = trimAll(";");

    while (forkPattern.test(objectPattern)) {
        fork = forkPattern.exec(objectPattern);
        objectPattern = objectPattern.replace(fork[0], "");
        forks.push({"key": fork[1], "value": trimAllSemicolons(fork[0].replace(fork[1] + ":", ""))});
    }

    if (objectPattern.length) {
        forks.push({"key": null, "value": trimAllCommas(objectPattern)});
    }

    return forks;
}
