"use strict";
var mocktail_1 = require("../src/mocktail");
describe("Mocktail Expression Language", function () {
    describe("mocktail", function () {
        it("should mock off of deep pattern", function () {
            var objectMock = { "foo": { "bar": 123 } };
            expect(mocktail_1.mocktail("foo.bar", 123)).toEqual(objectMock);
        });
        it("should mock off of wide pattern", function () {
            var objectMock = { "foo": 123, "bar": 456 };
            expect(mocktail_1.mocktail("foo,bar", 123, 456)).toEqual(objectMock);
        });
        it("should mock off of fork pattern", function () {
            var objectMock = { "foo": { "bar": 123, "baz": 456 } };
            expect(mocktail_1.mocktail("foo:bar,baz;", 123, 456)).toEqual(objectMock);
        });
        it("should mock off of deep and wide pattern", function () {
            var objectMock = { "foo": { "bar": 123 }, "boo": { "hoo": { "baz": 456 } } };
            expect(mocktail_1.mocktail("foo.bar,boo.hoo.baz", 123, 456)).toEqual(objectMock);
        });
        it("should mock off of deep and wide and fork pattern", function () {
            var objectMock = { "foo": { "bar": { "baz": 123 }, "ban": 456 }, "boo": { "hoo": 789 }, "moo": undefined };
            expect(mocktail_1.mocktail("foo:bar.baz,ban;boo.hoo,moo", 123, 456, 789)).toEqual(objectMock);
        });
    });
});
