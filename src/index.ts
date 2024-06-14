import Chance from "chance";

const chance = new Chance();

function generateSeed(length: number = 4): string {
    return Array(length)
        .fill("")
        .reduce((accumulator) => accumulator + chance.integer({ min: 0, max: 9 }).toString(), "");
}

function verifySeed(seed: string): boolean {
    return /^[0-9]{1,4}$/.test(seed);
}

export { generateSeed, verifySeed };
