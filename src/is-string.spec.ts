import { isString } from "./is-string";

describe("isString", () => {
    it("should return false when the argument is undefined", () => {
        expect(isString(undefined as any)).toBe(false);
    });

    it("should return false when the argument is null", () => {
        expect(isString(null as any)).toBe(false);
    });

    it("should return false when the argument is number", () => {
        expect(isString(123 as any)).toBe(false);
    });

    it("should return false when the argument is array", () => {
        expect(isString([] as any)).toBe(false);
    });

    it("should return false when the argument is object", () => {
        expect(isString({} as any)).toBe(false);
    });

    it("should return true when the argument is string literal", () => {
        expect(isString("" as any)).toBe(true);
    });
});
