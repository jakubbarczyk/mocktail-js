import { parseDeepPattern } from "./parse-deep-pattern";

describe("parseDeepPattern", () => {
    it("should mock shallow object off of provided pattern", () => {
        expect(parseDeepPattern("foo", 123)).toEqual({ foo: 123 });
    });

    it("should mock deep object off of provided pattern", () => {
        expect(parseDeepPattern("foo.bar", null)).toEqual({ foo: { bar: null } });
    });

    it("should not require passing nested value argument", () => {
        expect(parseDeepPattern("foo.bar.baz")).toEqual({ foo: { bar: { baz: undefined } } });
    });
});
