"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parse_deep_pattern_1 = require("../src/parse-deep-pattern");
describe("Mocktail Expression Language", function () {
    describe("parseDeepPattern", function () {
        it("should mock shallow object off of provided pattern", function () {
            expect(parse_deep_pattern_1.parseDeepPattern("foo", 123)).toEqual({ foo: 123 });
        });
        it("should mock deep object off of provided pattern", function () {
            expect(parse_deep_pattern_1.parseDeepPattern("foo.bar", null)).toEqual({ foo: { bar: null } });
        });
        it("should not require passing nested value argument", function () {
            expect(parse_deep_pattern_1.parseDeepPattern("foo.bar.baz")).toEqual({ foo: { bar: { baz: undefined } } });
        });
    });
});
