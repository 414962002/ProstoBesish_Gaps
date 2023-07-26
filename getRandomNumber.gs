/**
 * Returns a random number between the specified minimum and maximum values (inclusive).
 *
 * @param {number} min - The minimum value for the random number.
 * @param {number} max - The maximum value for the random number.
 * @return {number} The randomly generated number.
 */

function functionGetRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
