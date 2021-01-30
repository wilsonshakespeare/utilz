export enum Format {
  MILISECONDS = 1, // bitwise 1
  SECONDS = 2, // bitwise 10
  MINS = 6, // bitwise 110
  HOURS = 14, // bitwise 1110
  DAYS = 30, // bitwise 11110
}

class TimeConverter {
  /**
   * Sets the target format to be converted
   * TimeConverter.target(Format.MILISECONDS).from(Format.SECONDS, 123)
   * Will convert to milisecs (123000) from secs (123)
   * @param  {Format} target
   * @returns TimeConverter
   */
  public static target(target: Format): TimeConverter {
    return new TimeConverter(target);
  }

  /**
   * base value to be multiplied or divided (milisecs)
   * @param  {Format} format
   * @returns number
   */
  public static getBaseValue(
    format: Format,
  ): number {
    const value = ((format & Format.SECONDS) === Format.SECONDS ? 1000 : 1)
      * ((format & Format.MINS) === Format.MINS ? 60 : 1)
      * ((format & Format.HOURS) === Format.HOURS ? 60 : 1)
      * ((format & Format.DAYS) === Format.DAYS ? 24 : 1);

    return value;
  }

  // private _target: Format;

  // this must be in miliseconds
  private value: number;

  // this is target's base value
  private baseValue: number;

  /**
   * Set the target format for conversion
   * @param  {Format} target
   */
  constructor(target: Format) {
    // this._target = target;
    this.baseValue = TimeConverter.getBaseValue(target);
    this.value = 0;
  }

  /**
   * Add time value of that format before getValue()
   * @param  {Format} format
   * @param  {number} value
   * @returns TimeConverter
   */
  public add(format: Format, value: number): TimeConverter {
    this.value += value * TimeConverter.getBaseValue(format);
    return this;
  }

  /**
   * Gets the value after converted
   * @param  {Format} format
   * @param  {number} value
   * @returns number
   */
  public from(format: Format, value: number): number {
    this.value = value * TimeConverter.getBaseValue(format);
    return this.getValue();
  }

  /**
   * Get the value after addtion or from is being called
   * @param  {} hasDecimal=true
   * @returns number
   */
  public getValue(hasDecimal = true): number {
    const value = this.value / this.baseValue;
    return hasDecimal ? value : Math.floor(value);
  }
}

export default TimeConverter;
