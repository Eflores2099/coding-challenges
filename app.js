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

