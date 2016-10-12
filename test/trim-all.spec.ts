/// <reference path="../typings/index.d.ts" />

import {trimAll} from "../src/trim-all";

describe("trimAll", () => {
    it("should trim all whitespace", () => {
        const trimAllWhitespace = trimAll(" ");
        expect(trimAllWhitespace(" foo bar  ")).toEqual("foo bar");
    });

    it("should trim all semicolons", () => {
        const trimAllSemicolons = trimAll(";");
        expect(trimAllSemicolons(";foo:one,two;;")).toEqual("foo:one,two");
    });
});
