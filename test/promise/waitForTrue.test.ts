import utilzed from '../../src';

const { waitForTrue } = utilzed;

describe('waitForTrue functionality', () => {
  // These are the following behaviour to override from lodash
  it('should able to proceed if the condition is true and before timeout', async () => {
    const checkCondition = async () => true;

    const prev = new Date().getTime();
    const result = await waitForTrue(500, checkCondition, 1000);
    const now = new Date().getTime();
    const lessThan1000 = now - prev < 1000;
    expect(lessThan1000).toEqual(true);
    expect(result).toEqual(true);
  });

  it('should able to proceed if the condition is false and after timeout', async () => {
    const checkCondition = async () => false;

    // expect to proceed on timeout
    const prev = new Date().getTime();
    const result = await waitForTrue(500, checkCondition, 1000);
    const now = new Date().getTime();
    const moreThan1000 = now - prev >= 1000;

    expect(moreThan1000).toEqual(true);
    expect(result).toEqual(false);
  });
});
