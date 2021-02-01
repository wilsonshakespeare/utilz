import utilzed from '../../src';

const { OPERATORS, isVersionValid } = utilzed.versionCheck;

describe('should perform node version check correctly, test all operators', () => {
  it('test isMoreThan', () => {
    // true conditions on major, minor, and patch
    expect(
      isVersionValid('v2.1.1', OPERATORS.MORE_THAN, 'v1.1.1'),
    ).toEqual(true);
    expect(
      isVersionValid('v1.2.1', OPERATORS.MORE_THAN, 'v1.1.1'),
    ).toEqual(true);
    expect(
      isVersionValid('v1.1.2', OPERATORS.MORE_THAN, 'v1.1.1'),
    ).toEqual(true);

    // false condition if equals
    expect(
      isVersionValid('v1.1.1', OPERATORS.MORE_THAN, 'v1.1.1'),
    ).toEqual(false);

    // false condition is less on major, minor, or patch
    expect(
      isVersionValid('v0.1.1', OPERATORS.MORE_THAN, 'v1.1.1'),
    ).toEqual(false);
    expect(
      isVersionValid('v1.0.1', OPERATORS.MORE_THAN, 'v1.1.1'),
    ).toEqual(false);
    expect(
      isVersionValid('v1.1.0', OPERATORS.MORE_THAN, 'v1.1.1'),
    ).toEqual(false);
  });

  it('test isMoreThanEquals', () => {
    // true conditions on major, minor, and patch
    expect(
      isVersionValid('v2.1.1', OPERATORS.MORE_THAN_EQUAL, 'v1.1.1'),
    ).toEqual(true);
    expect(
      isVersionValid('v1.2.1', OPERATORS.MORE_THAN_EQUAL, 'v1.1.1'),
    ).toEqual(true);
    expect(
      isVersionValid('v1.1.2', OPERATORS.MORE_THAN_EQUAL, 'v1.1.1'),
    ).toEqual(true);

    // true condition if equals
    expect(
      isVersionValid('v1.1.1', OPERATORS.MORE_THAN_EQUAL, 'v1.1.1'),
    ).toEqual(true);

    // false condition is less on major, minor, or patch
    expect(
      isVersionValid('v0.1.1', OPERATORS.MORE_THAN, 'v1.1.1'),
    ).toEqual(false);
    expect(
      isVersionValid('v1.0.1', OPERATORS.MORE_THAN, 'v1.1.1'),
    ).toEqual(false);
    expect(
      isVersionValid('v1.1.0', OPERATORS.MORE_THAN, 'v1.1.1'),
    ).toEqual(false);
  });

  it('test isEqual', () => {
    // false conditions on major, minor, and patch
    expect(isVersionValid('v2.1.1', OPERATORS.EQUAL, 'v1.1.1')).toEqual(false);
    expect(isVersionValid('v1.2.1', OPERATORS.EQUAL, 'v1.1.1')).toEqual(false);
    expect(isVersionValid('v1.1.2', OPERATORS.EQUAL, 'v1.1.1')).toEqual(false);

    // true condition if equals
    expect(isVersionValid('v1.1.1', OPERATORS.EQUAL, 'v1.1.1')).toEqual(true);

    // false condition is less on major, minor, or patch
    expect(isVersionValid('v0.1.1', OPERATORS.EQUAL, 'v1.1.1')).toEqual(false);
    expect(isVersionValid('v1.0.1', OPERATORS.EQUAL, 'v1.1.1')).toEqual(false);
    expect(isVersionValid('v1.1.0', OPERATORS.EQUAL, 'v1.1.1')).toEqual(false);
  });

  it('test isLessThanEquals', () => {
    // false conditions on major, minor, and patch
    expect(
      isVersionValid('v2.1.1', OPERATORS.LESS_THAN_EQUAL, 'v1.1.1'),
    ).toEqual(false);
    expect(
      isVersionValid('v1.2.1', OPERATORS.LESS_THAN_EQUAL, 'v1.1.1'),
    ).toEqual(false);
    expect(
      isVersionValid('v1.1.2', OPERATORS.LESS_THAN_EQUAL, 'v1.1.1'),
    ).toEqual(false);

    // true condition if equals
    expect(
      isVersionValid('v1.1.1', OPERATORS.LESS_THAN_EQUAL, 'v1.1.1'),
    ).toEqual(true);

    // false condition is less on major, minor, or patch
    expect(
      isVersionValid('v0.1.1', OPERATORS.LESS_THAN_EQUAL, 'v1.1.1'),
    ).toEqual(true);
    expect(
      isVersionValid('v1.0.1', OPERATORS.LESS_THAN_EQUAL, 'v1.1.1'),
    ).toEqual(true);
    expect(
      isVersionValid('v1.1.0', OPERATORS.LESS_THAN_EQUAL, 'v1.1.1'),
    ).toEqual(true);
  });

  it('test isLessThan', () => {
    // false conditions on major, minor, and patch
    expect(
      isVersionValid('v2.1.1', OPERATORS.LESS_THAN, 'v1.1.1'),
    ).toEqual(false);
    expect(
      isVersionValid('v1.2.1', OPERATORS.LESS_THAN, 'v1.1.1'),
    ).toEqual(false);
    expect(
      isVersionValid('v1.1.2', OPERATORS.LESS_THAN, 'v1.1.1'),
    ).toEqual(false);

    // false condition if equals
    expect(
      isVersionValid('v1.1.1', OPERATORS.LESS_THAN, 'v1.1.1'),
    ).toEqual(false);

    // false condition is less on major, minor, or patch
    expect(
      isVersionValid('v0.1.1', OPERATORS.LESS_THAN, 'v1.1.1'),
    ).toEqual(true);
    expect(
      isVersionValid('v1.0.1', OPERATORS.LESS_THAN, 'v1.1.1'),
    ).toEqual(true);
    expect(
      isVersionValid('v1.1.0', OPERATORS.LESS_THAN, 'v1.1.1'),
    ).toEqual(true);
  });
});
