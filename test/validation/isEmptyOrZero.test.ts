import utilzed from '../../src';

const { isEmptyOrZero } = utilzed;

describe('should be true if 0, empty string, empty array or object', () => {
  it('0 returns true', () => {
    expect(isEmptyOrZero(0)).toEqual(true);
    expect(isEmptyOrZero(1)).toEqual(false);
  });

  it('empty string returns true', () => {
    expect(isEmptyOrZero('')).toEqual(true);
    expect(isEmptyOrZero('something')).toEqual(false);
  });

  it('empty object returns true', () => {
    expect(isEmptyOrZero({})).toEqual(true);
    expect(isEmptyOrZero({ test: 'something' })).toEqual(false);
  });

  it('empty array returns true', () => {
    expect(isEmptyOrZero([])).toEqual(true);
    expect(isEmptyOrZero([1, 2, 3])).toEqual(false);
  });
});
