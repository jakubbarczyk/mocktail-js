/// <reference path="../typings/index.d.ts" />

import {mocktail} from "../src/mocktail";

describe("Mocktail Expression Language", () => {
    describe("mocktail", () => {
        it("should mock off of deep pattern", () => {
            const objectMock = {foo: {bar: 123}};
            expect(mocktail("foo.bar", 123)).toEqual(objectMock);
        });

        it("should mock off of wide pattern", () => {
            const objectMock = {bar: 123, foo: 456};
            expect(mocktail("bar,foo", 123, 456)).toEqual(objectMock);
        });

        it("should mock off of fork pattern", () => {
            const objectMock = {foo: {bar: 123, baz: 456}};
            expect(mocktail("foo:bar,baz;", 123, 456)).toEqual(objectMock);
        });

        it("should mock off of deep and wide pattern", () => {
            const objectMock = {bar: {foo: 123}, boo: {hoo: {baz: 456}}};
            expect(mocktail("bar.foo,boo.hoo.baz", 123, 456)).toEqual(objectMock);
        });

        it("should mock off of deep and wide and fork pattern", () => {
            const objectMock = {ban: {baz: {bar: 123}, foo: 456}, boo: {hoo: 789}, moo: <any> undefined};
            expect(mocktail("ban:baz.bar,foo;boo.hoo,moo", 123, 456, 789)).toEqual(objectMock);
        });
    });
});
