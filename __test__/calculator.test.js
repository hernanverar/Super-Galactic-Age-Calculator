
import Age from './../src/calculator.js';

describe('Age', () => {
test('should return age of all the ages from our constructor', () => {
  const myAge = new Age(5, 3, 6, 7, 2);
  expect(myAge.earhtAge).toEqual(5);
  expect(myAge.mercuryAge).toEqual(3);
  expect(myAge.venusAge).toEqual(6);
  expect(myAge.marsAge).toEqual(7);
  expect(myAge.jupiterAge).toEqual(2);
  console.log(myAge);
});
});