import Age from "../src/currentYear.js";
import FutureAge from "../src/futureYear.js";

describe("Age constructor", () => {
  it("should create an object with correct properties and values", () => {
    const age = new Age(30, 125, 48, 16, 2);
    expect(age).toEqual({
      earthAge: 30,
      mercuryAge: 125,
      venusAge: 48,
      marsAge: 16,
      jupiterAge: 2,
    });
  });
});

describe("Age", () => {
  test("should return the correct age on Mercury", () => {
    const age = new Age(30, 125, 48, 16, 2);
    expect(age.getAgeOnPlanet("Mercury")).toBe(125);
  });
});

describe("Age", () => {
  test("should return the correct age on Venus", () => {
    const age = new Age(30, 125, 48, 16, 2);
    expect(age.getAgeOnPlanet("Venus")).toBe(48);
  });
});

describe("Age", () => {
  test("should return the correct age on Mars", () => {
    const age = new Age(30, 125, 48, 16, 2);
    expect(age.getAgeOnPlanet("Mars")).toBe(16);
  });
});

describe("Age", () => {
  test("should return the correct age on Jupiter", () => {
    const age = new Age(30, 125, 48, 16, 2);
    expect(age.getAgeOnPlanet("Jupiter")).toBe(2);
  });
});


//Here we have Future year calculations testing

describe("FutureAge", () => {
  describe("constructor", () => {
    it("should throw an error if the earthAgetill parameter is not a valid date", () => {
      expect(() => new FutureAge("not a date", 0.5, 0.5, 0.5, 0.5)).toThrow("Invalid date input");
    });
  });
    it("should set the instance variables correctly", () => {
      const earthAgetill = new Date("2022-01-01");
      const mercuryRatio = 0.5;
      const venusRatio = 0.7;
      const marsRatio = 1.2;
      const jupiterRatio = 3.0;

      const futureAge = new FutureAge(earthAgetill, mercuryRatio, venusRatio, marsRatio, jupiterRatio);

      expect(futureAge.earthAgetill).toEqual(earthAgetill);
      expect(futureAge.mercuryRatio).toEqual(mercuryRatio);
      expect(futureAge.venusRatio).toEqual(venusRatio);
      expect(futureAge.marsRatio).toEqual(marsRatio);
      expect(futureAge.jupiterRatio).toEqual(jupiterRatio);
    });
  });

  describe("getFutureAge", () => {
    it("should return the correct age on Mercury", () => {
      const earthAgetill = new Date("2022-01-01");
      const mercuryRatio = 0.5;
      const venusRatio = 0.7;
      const marsRatio = 1.2;
      const jupiterRatio = 3.0;

      const futureAge = new FutureAge(earthAgetill, mercuryRatio, venusRatio, marsRatio, jupiterRatio);

      expect(futureAge.getFutureAge("Mercury")).toEqual(futureAge.mercuryAge);
    });

    it("should return the correct age on Venus", () => {
      const earthAgetill = new Date("2022-01-01");
      const mercuryRatio = 0.5;
      const venusRatio = 0.7;
      const marsRatio = 1.2;
      const jupiterRatio = 3.0;

      const futureAge = new FutureAge(earthAgetill, mercuryRatio, venusRatio, marsRatio, jupiterRatio);

      expect(futureAge.getFutureAge("Venus")).toEqual(futureAge.venusAge);
    });

    it("should return the correct age on Mars", () => {
      const earthAgetill = new Date("2022-01-01");
      const mercuryRatio = 0.5;
      const venusRatio = 0.7;
      const marsRatio = 1.2;
      const jupiterRatio = 3.0;

      const futureAge = new FutureAge(earthAgetill, mercuryRatio, venusRatio, marsRatio, jupiterRatio);

      expect(futureAge.getFutureAge("Mars")).toEqual(futureAge.marsAge);
    });
  

  it("should return the correct age on jupiter", () => {
    const earthAgetill = new Date("2022-01-01");
    const mercuryRatio = 0.5;
    const venusRatio = 0.7;
    const marsRatio = 1.2;
    const jupiterRatio = 3.0;

    const futureAge = new FutureAge(earthAgetill, mercuryRatio, venusRatio, marsRatio, jupiterRatio);

    expect(futureAge.getFutureAge("Jupiter")).toEqual(futureAge.jupiterAge);
    });
  });

