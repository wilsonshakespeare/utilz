class Operator {
  public isMore: boolean;

  public isEqual: boolean;

  public isLess: boolean;

  constructor(isMore: boolean, isEqual: boolean, isLess: boolean) {
    this.isMore = isMore;
    this.isEqual = isEqual;
    this.isLess = isLess;
  }
}

export default Operator;
