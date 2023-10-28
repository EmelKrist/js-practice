/**
 * https://www.codewars.com/kata/65127141a5de2b1dcb40927e
 */

function spinAround(turns) {
  let turnCount = 0;
  for (let turn of turns) {
    turnCount += turn == "left" ? -1 : 1
  }
  return Math.floor(Math.abs(turnCount) / 4);
}
