export default class PastAge {
  constructor(pastAge, mercuryRatio, venusRatio, marsRatio, jupiterRatio) {
    if (!pastAge || !(pastAge instanceof Date) || isNaN(pastAge.getTime())) {
    }
  
    this.pastAge = pastAge;
    this.mercuryRatio = mercuryRatio;
    this.venusRatio = venusRatio;
    this.marsRatio = marsRatio;
    this.jupiterRatio = jupiterRatio;
  }

  getPastAge(planet) {
    switch (planet) {
      case "Mercury":
        return this.mercuryAge;
      case "Venus":
        return this.venusAge;
      case "Mars":
        return this.marsAge;
      case "Jupiter":
        return this.jupiterAge;
      default:
        return this.earthAge;
    }
  }

  _calculateAge(date) {
    const ageDiffMs = Date.now() - date.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  _calculatePlanetDate(planet) {
    const planetRatio = {
      Mercury: 0.2408467,
      Venus: 0.61519726,
      Earth: 1,
      Mars: 1.8808158,
      Jupiter: 11.862615,
    };

    const earthAgeMs = Date.now() - this.pastAge.getTime();
    const planetAgeMs = earthAgeMs / (planetRatio[planet] * this.jupiterRatio);
    const planetDate = new Date(Date.now() - planetAgeMs);
    return planetDate;
  }
}
