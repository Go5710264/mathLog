import BalanceDetermination from './BalanceDetermination';

export default class Magician extends BalanceDetermination {
  constructor(...args) {
    super(...args);
    this.mathStoned = '';
  }

  stoned() {
    return super.stoned();
  }
}
