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

// const singleNumber = function(nums) {
//   let a = 0
//   nums.forEach((i) => {
//       a^=i
//   })
  
//   return a
// }


//Happy Number

//Write an algorithm to determine if a number is "happy".

//A happy number is a number defined by the following process: Starting with any positive integer, 
//replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 
//(where it will stay), or it loops endlessly in a cycle which 
//does not include 1. Those numbers for which this process ends in 1 are happy numbers.

//Ex: input 9
//Output: true
//Explanation:
// 12 + 92 = 82 * (its 1 squared and 9 squared etc.)
// 82 + 22 = 68  (8 squared and 2 squared)
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// const isHappy = function(n, counter = 0) {
//   result = false
//  if(counter < 8){
//    let array = n.toString().split('').map(n => n*n)
//    let sum = array.reduce((accumulator, currentNum) => accumulator + currentNum, 0)
//    if(sum === 1) {
//        return result = true
//    }else {
//        counter++
//        isHappy(sum, counter)
//    }
     
//  }  
//    return result
// };

// MAXIMUM SUBARRAY
// given an integer array SVGAnimatedNumberList, find the contiguous subarray 
// (containing at least one number) which has the largest sum and returns its sum.

// Example:
//  Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

//Kadane's Algorithm

// someArr = [-2, -1, -3, 4, -1, 2, 1 ,-5, 4]

// function maxSubArray(nums) {
//     let solution = nums[0]
//     for(let i=1; i < nums.length; i++) {
//         nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
//         solution = Math.max(solution, nums[i])
//     }
     
//      return solution
  
   
    
// };


//Move Zeroes
//Given an array nums, write a function to move all 0's to the end of it while maintaning the relative order of the non-zero elements
//example:

//input: [0,1,1,3,12]
//output:[1,3,12,0,0]

// 1. You must do this in-place without making a copy of the array
// 2. Minimize the total number of operations
const moveZeroes = function(nums) {
    
for(let i = nums.length-1;i >=0; i--) {
    if(nums[i]=== 0) {
        nums.splice(i, 1)
        nums.push(0)
    }
}
return nums
   
};