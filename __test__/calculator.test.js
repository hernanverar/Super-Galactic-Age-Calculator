
import Age from './../src/calculator.js';
import passAge from './../src/calculator.js';

describe('Age', () => {
test('should return age of all the ages from our constructor', () => {
  const myAge = new Age(1, .24, .62, 1.88, 11.86);
  expect(myAge.earthAge).toEqual(1);
  expect(myAge.mercuryAge).toEqual(.24);
  expect(myAge.venusAge).toEqual(.62);
  expect(myAge.marsAge).toEqual(1.88);
  expect(myAge.jupiterAge).toEqual(11.86);
  console.log(myAge);
  });
});

describe('passAge', () => {
test('should correctly convert passAge1 property value to mercuryHavePass, venusHavePass, marsHavePass, and jupiterHavePass', () => {
  const passAge1 = new passAge(5, 20.83, 8.06, 2.66, 0.42)
  expect(passAge1.earthAgeHavePass).toEqual(5);
  expect(passAge1.mercuryAgeHavePass).toEqual(20.83);
  expect(passAge1.venusAgeHavePass).toEqual(8.06);
  expect(passAge1.marsAgeHavePass).toEqual(2.66);
  expect(passAge1.jupiterAgeHavePass).toEqual(0.42);
  console.log(passAge1);
  });
}); 
// test('should return earthAge of myAge and convert it to mercury years', () => {
//   myAge.mercuryYears(myAge.earthAge)
//   expect(myAge.mercuryAge).toEqual(41.67);
// });
