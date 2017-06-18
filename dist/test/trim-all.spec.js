"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trim_all_1 = require("../src/trim-all");
describe("trimAll", function () {
    it("should trim all whitespace", function () {
        var trimAllWhitespace = trim_all_1.trimAll(" ");
        expect(trimAllWhitespace(" foo bar  ")).toEqual("foo bar");
    });
    it("should trim all semicolons", function () {
        var trimAllSemicolons = trim_all_1.trimAll(";");
        expect(trimAllSemicolons(";foo:one,two;;")).toEqual("foo:one,two");
    });
});
