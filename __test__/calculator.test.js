import Age from "../src/calculatorAge.js"

describe('Age', () => {

  let myAge;

  beforeEach(() => {
    myAge = new Age(10);
  });

  test('should correctly create an Age class with an earthAge Property of input', () => {
    expect(myAge.earthAge).toEqual(10);
  });
});
