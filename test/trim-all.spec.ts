import { trimAll } from "../src/trim-all";

describe("trimAll", () => {
    let trimAllWhitespace = trimAll(" ");

    it("should trim all whitespace", () => {
        expect(trimAllWhitespace(" foo bar  ")).toEqual("foo bar");
    });
});
