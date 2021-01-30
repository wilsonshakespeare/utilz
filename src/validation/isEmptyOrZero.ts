/**
 * This will return true if object is empty, string is empty, number is 0 or array is empty
 * In lodash _.isEmpty(1); returns true, unable to test number
 *
 * @param  {Record<string} value
 * @param  {} unknown>|string|number|unknown[]
 * @returns boolean
 */

function isEmptyOrZero(
  value: Record<string, unknown> | string | number | unknown[],
): boolean {
  if (typeof value === 'undefined' || value === null) {
    return true;
  }

  if (typeof value === 'string') {
    return value === '';
  }

  if (typeof value === 'number') {
    return value === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    const keys: string[] = Object.keys(value);
    if (keys.length === 0) {
      return true;
    }
  }

  return false;
}

export default isEmptyOrZero;
