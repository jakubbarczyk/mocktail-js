(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.mocktail = {}));
})(this, (function (exports) { 'use strict';

    function isString(value) {
        return typeof value === "string" || value instanceof String;
    }

    /**
     * Parses the so-called `deep` object off of the provided pattern.
     */
    function parseDeepPattern(objectPattern, nestedValue) {
        const keys = objectPattern.split(".");
        function evaluate(fieldNames) {
            return fieldNames.length > 0 ? { [fieldNames.shift()]: evaluate(fieldNames) } : nestedValue;
        }
        return evaluate(keys);
    }

    const leading = (char) => new RegExp(`^${char}*`);
    const trailing = (char) => new RegExp(`${char}*$`);
    /**
     * Trims all leading and trailing occurences of the specified character.
     */
    const trimAll = (char) => (value) => value.replace(leading(char), "").replace(trailing(char), "");

    /**
     * Parses the so-called `fork` object array off of the provided pattern.
     */
    function parseForkPattern(objectPattern) {
        const forkPattern = /([a-z.]*):[a-z.,]*;/;
        const trimAllCommas = trimAll(",");
        const trimAllSemicolons = trimAll(";");
        const forks = [];
        let fork;
        while (forkPattern.test(objectPattern)) {
            fork = forkPattern.exec(objectPattern);
            objectPattern = objectPattern.replace(fork[0], "");
            forks.push({ key: fork[1], value: trimAllSemicolons(fork[0].replace(fork[1] + ":", "")) });
        }
        if (objectPattern.length) {
            forks.push({ key: null, value: trimAllCommas(objectPattern) });
        }
        return forks;
    }

    /**
     * Parses the so-called `wide` object string off of the provided pattern.
     */
    function parseWidePattern(objectPattern) {
        return objectPattern.split(",");
    }

    /**
     * Mocks a JavaScript object off of the provided pattern.
     */
    function mocktail(objectPattern, ...nestedValue) {
        const mock = {};
        if (isString(objectPattern)) {
            const forks = parseForkPattern(objectPattern);
            let wides = [];
            let deep = {};
            forks.forEach((fork) => {
                wides = parseWidePattern(fork.value).map((wide) => parseDeepPattern(wide, nestedValue.shift()));
                deep = fork.key === null
                    ? Object.assign({}, ...wides)
                    : parseDeepPattern(fork.key, Object.assign({}, ...wides));
                Object.assign(mock, deep);
            });
        }
        return mock;
    }

    exports.mocktail = mocktail;

}));
//# sourceMappingURL=mocktail.js.map
