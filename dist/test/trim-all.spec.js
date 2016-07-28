"use strict";
var trim_all_1 = require("../src/trim-all");
describe("trimAll", function () {
    var trimAllWhitespace = trim_all_1.trimAll(" ");
    it("should trim all whitespace", function () {
        expect(trimAllWhitespace(" foo bar  ")).toEqual("foo bar");
    });
});
