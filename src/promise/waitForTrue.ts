/**
 * In case you might be polling for a condition before proceed
 *
 * const checkCondition = async () => polled_condition;
 * this will waitForTrue checkCondition to be true
 * const success = await waitForTrue(100, checkCondition, 1000);
 * Meaning every 100 milisecs will run checkCondition and on 1000 will timeout and return false
 *
 * Important Note:
 * if poll results is failure and shall stop polling,
 * it should return true and then results must be store elsewhere
 *
 * @param  {number} time
 * @param  {()=>Promise<boolean>} conditionCheck
 * @param  {} timeout=60000
 * @returns Promise
 */

function waitForTrue(
  time: number,
  conditionCheck: () => Promise<boolean>,
  timeout = 60000,
): Promise<boolean> {
  // should not parse int
  const totalCount = timeout / time;
  let count = 0;
  return new Promise<boolean>((resolve) => {
    (async function waitForTrueComplete() {
      // if already timeout quit from the wait
      if (count >= totalCount) {
        return resolve(false);
      }
      count += 1;
      if (await conditionCheck()) return resolve(true);
      setTimeout(waitForTrueComplete, time);

      return false;
    }());
  });
}

export default waitForTrue;
