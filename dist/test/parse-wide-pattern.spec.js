/// <reference path="../typings/index.d.ts" />
"use strict";
var parse_wide_pattern_1 = require("../src/parse-wide-pattern");
describe("Mocktail Expression Language", function () {
    describe("parseWidePatterns", function () {
        it("should parse a pattern with several wides", function () {
            expect(parse_wide_pattern_1.parseWidePattern("foo.bar,baz,boo")).toEqual(["foo.bar", "baz", "boo"]);
        });
        it("should parse a pattern with a single wide", function () {
            expect(parse_wide_pattern_1.parseWidePattern("foo.bar")).toEqual(["foo.bar"]);
        });
        it("should parse a pattern without wides", function () {
            expect(parse_wide_pattern_1.parseWidePattern("")).toEqual([""]);
        });
    });
});
