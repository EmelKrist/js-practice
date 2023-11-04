/**
 * https://www.codewars.com/kata/56b29582461215098d00000f
 */

function pipeFix(numbers){
   let max = numbers[numbers.length - 1], min = numbers[0]

   let array = new Array()
   for (let i = min; i <= max; i++) {
        array.push(i)
   }

   return array
}