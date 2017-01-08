"use strict";
var mocktail_1 = require("../src/mocktail");
describe("Mocktail Expression Language", function () {
    describe("mocktail", function () {
        it("should mock off of deep pattern", function () {
            var objectMock = { foo: { bar: 123 } };
            expect(mocktail_1.mocktail("foo.bar", 123)).toEqual(objectMock);
        });
        it("should mock off of wide pattern", function () {
            var objectMock = { bar: 123, foo: 456 };
            expect(mocktail_1.mocktail("bar,foo", 123, 456)).toEqual(objectMock);
        });
        it("should mock off of fork pattern", function () {
            var objectMock = { foo: { bar: 123, baz: 456 } };
            expect(mocktail_1.mocktail("foo:bar,baz;", 123, 456)).toEqual(objectMock);
        });
        it("should mock off of deep and wide pattern", function () {
            var objectMock = { bar: { foo: 123 }, boo: { hoo: { baz: 456 } } };
            expect(mocktail_1.mocktail("bar.foo,boo.hoo.baz", 123, 456)).toEqual(objectMock);
        });
        it("should mock off of deep and wide and fork pattern", function () {
            var objectMock = { ban: { baz: { bar: 123 }, foo: 456 }, boo: { hoo: 789 }, moo: undefined };
            expect(mocktail_1.mocktail("ban:baz.bar,foo;boo.hoo,moo", 123, 456, 789)).toEqual(objectMock);
        });
    });
});
