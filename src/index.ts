import Chance from "chance";

const chance = new Chance();

function generateSeed(): string {
  return chance.ssn({ ssnFour: true });
}

function verifySeed(seed: string): boolean {
  return /^[0-9]{1,4}$/.test(seed);
}

export { generateSeed, verifySeed };