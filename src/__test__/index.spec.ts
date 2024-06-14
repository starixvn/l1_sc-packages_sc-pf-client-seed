import { generateSeed, verifySeed } from "../index";

describe("generateSeed", () => {
    it("should generate a seed with four numeric characters", () => {
        const seed = generateSeed();
        expect(seed).toMatch(/^\d{4}$/);
    });
});

describe("verifySeed", () => {
    test.each([["1234"], ["092"], ["1"], ["21"]])("verifySeed should correctly validate a valid seed", (validSeed) => {
        expect(verifySeed(validSeed)).toBe(true);
    });

    test.each([["12345"], ["ab"], ["!23"]])("verifySeed should correctly invalidate an invalid seed", (invalidSeed) => {
        expect(verifySeed(invalidSeed)).toBe(false);
    });
});
