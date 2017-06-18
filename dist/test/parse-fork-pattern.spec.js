"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parse_fork_pattern_1 = require("../src/parse-fork-pattern");
describe("Mocktail Expression Language", function () {
    describe("parseForkPattern", function () {
        it("should parse a pattern with several forks", function () {
            expect(parse_fork_pattern_1.parseForkPattern("foo.one,bar:one,two.baz;bi,tu.yo,four.bab.boo:one,two;")).toEqual([
                { key: "bar", value: "one,two.baz" },
                { key: "four.bab.boo", value: "one,two" },
                { key: null, value: "foo.one,bi,tu.yo" }
            ]);
        });
        it("should parse a pattern with a single fork", function () {
            expect(parse_fork_pattern_1.parseForkPattern("bar:one,two;")).toEqual([
                { key: "bar", value: "one,two" }
            ]);
        });
        it("should parse a pattern without forks", function () {
            expect(parse_fork_pattern_1.parseForkPattern("foo.one,bar")).toEqual([
                { key: null, value: "foo.one,bar" }
            ]);
        });
    });
});
