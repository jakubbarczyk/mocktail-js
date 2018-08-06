import { parseWidePattern } from "./parse-wide-pattern";

describe("parseWidePatterns", () => {
    it("should parse a pattern with several wides", () => {
        expect(parseWidePattern("foo.bar,baz,boo")).toEqual(["foo.bar", "baz", "boo"]);
    });

    it("should parse a pattern with a single wide", () => {
        expect(parseWidePattern("foo.bar")).toEqual(["foo.bar"]);
    });

    it("should parse a pattern without wides", () => {
        expect(parseWidePattern("")).toEqual([""]);
    });
});
