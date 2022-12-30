export default class BalanceDetermination {
  constructor(attack, distance) {
    this.attack = attack;
    this.distance = distance;
  }

  set distance(cell) {
    if (cell === 1) {
      // ...
    } else if (cell === 2) {
      this.attack *= 0.9;
    } else if (cell === 3) {
      this.attack *= 0.8;
    } else if (cell === 4) {
      this.attack *= 0.7;
    } else if (cell === 5) {
      this.attack *= 0.6;
    }
    /* eslint no-underscore-dangle: ["error", { "allow": ["_distance"] }] */
    this._distance = cell;
  }

  get distance() {
    return this._distance;
  }

  stoned() {
    this.mathStoned = Math.round(this.attack - Math.log2(this.distance) * 5);
    return this.mathStoned;
  }
}
