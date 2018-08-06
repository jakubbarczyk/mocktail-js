import { parseForkPattern } from "./parse-fork-pattern";

describe("parseForkPattern", () => {
    it("should parse a pattern with several forks", () => {
        expect(parseForkPattern("foo.one,bar:one,two.baz;bi,tu.yo,four.bab.boo:one,two;")).toEqual([
            { key: "bar", value: "one,two.baz" },
            { key: "four.bab.boo", value: "one,two" },
            { key: null, value: "foo.one,bi,tu.yo" }
        ]);
    });

    it("should parse a pattern with a single fork", () => {
        expect(parseForkPattern("bar:one,two;")).toEqual([
            { key: "bar", value: "one,two" }
        ]);
    });

    it("should parse a pattern without forks", () => {
        expect(parseForkPattern("foo.one,bar")).toEqual([
            { key: null, value: "foo.one,bar" }
        ]);
    });
});
