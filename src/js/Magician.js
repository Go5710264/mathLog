import BalanceDetermination from './BalanceDetermination';

export default class Magician extends BalanceDetermination {
  constructor(...args) {
    super(...args);
  }

  stoned() {
    return super.stoned();
  }
}
