// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// function XO(str) {
//      str = str.toLowerCase();
    
//     const countX = 0;
//     const countO = 0;
    
//     for( let i = 0; i < str.length; i++) {
//       if(str[i] === 'x') {
//         countX++
//       } else 
//         if(str[i] === 'o') {
//       countO++
//       }
//   }
  
//     if(countX === countO) {
//         return true
//         } else {
//         return false
//     }
  
//   }

//   console.log(XO(''))

//   Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

//   Note: a and b are not ordered!
// function getSum(a,b){
//   let count = 0;

// if(a === b){
//   return a;
//   } else if (a < b)
//   {
//     for(a; a <= b; a++) {
//     count +=a;
//     }
//   } else if (b < a){
//   for(b; b <= a; b++) {
//   count +=b;
//     }
//   }
  
//   return count;
//   }
    

// function getSum(a,b) {
//   let count = 0;

//   if(a===b){
//     return a;
//   }else if (a < b){
//     for(a; a <= b; a++){
//       count +=a;
//     }
//     }else if (b < a){
//       for(b; b <= a; b++) {
//         count +=b;
//       }
//     }
//     return count;
//   }

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// let twoSum = function(nums, target) {
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//           if (nums[i] + nums[j] === target) {
//               result.push(i);
//               result.push(j);
//           }
//       }
//   }
//   return result;
// }

// Given a 32 bit signed integer, reverse digits of an integer.

// let reverse = function(x){
// let minus = 0;
// if(x < 0){
// minus = 1;
// x = -x;
// }
// x = x + '';
// x = x.split('');
// x = x.reverse();
// x = x.join('');
// if (x > 0x7FFFFFFF) {
// return 0;
// }
// return minus ? - parseInt(x): parseInt(x);
// }

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// var isPalindrome = function(x) {
//   if( x < 0) 
//       return false
//       // return the dtring representation of x
//   const reverse = `${x}`.split('').reverse().join('')
//   // compare the value regardless of types
  
//   return x == reverse
  
    
// };














// function addArray(a1, a2) {
//   const sum = []
//   for (let i=0; i < a1.length; a1++) {
//    let sum = a1[i] + a2[i] 
//   }
//   return sum
// }

// console.log(addArray([1, 2, 3, 4], [4, 5, 6, 7])); // should say [5, 7, 9, 11]



// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
// example: Input: [2,2,1]
//Output: 1

//input: [4,1,2,1,2]
//output: 4

const singleNumber = function(nums) {
  let a = 0
  nums.forEach((i) => {
      a^=i
  })
  
  return a
}