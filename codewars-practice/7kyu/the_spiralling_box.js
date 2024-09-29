/**
 * https://www.codewars.com/kata/63b84f54693cb10065687ae5/
 **/
function createBox(m, n) {
  const box = Array(n).fill(Array(m).fill(1))

  for (let i = 2; i < n; i++) {
   const row = box[i].slice()

   for (let j = i - 1; j <= m - i; j++) {
      row[j] = i;
   }

   for (let k = i - 1; k <= n - i; k++) {
      box[k] = row
   }
  }

  return box
}