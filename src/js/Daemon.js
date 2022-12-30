import BalanceDetermination from './BalanceDetermination';

export default class Deamon extends BalanceDetermination {
  constructor(...args) {
    super(...args);
    this.mathStoned = '';
  }

  stoned() {
    return super.stoned();
  }
}
