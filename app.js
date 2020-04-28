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
// const moveZeroes = function(nums) {
    
// for(let i = nums.length-1;i >=0; i--) {
//     if(nums[i]=== 0) {
//         nums.splice(i, 1)
//         nums.push(0)
//     }
// }
// return nums
   
// };

// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).


// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

// const maxProfit = function(prices) {
//     let profit = 0
    
//     for(let i = 1; i < prices.length; i++) {
//         if(prices[i] > prices[i - 1]) {
//             profit += prices[i] - prices [i - 1]
//         }
        
//     }  
    
//         return profit
// };

//Group Anagrams

//given an array of strings, group anagrams together

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// All imputs will be in lowercase and the order of your output does not matter.

// const groupAnagrams = function(strs) {
//     let hash = {}
//     strs.forEach(str => {
//         let letters = str.split('').sort()

//         hash[letters] ? hash[letters].push(str) : hash[letters] = [str]
//     })

//     const keys = Object.keys(hash)
//     const values = keys.map(function(v) { return hash[v]
//     })

//     return values
        
// }


//Counting Elements
//Given an integer array arr, count element x such that x + 1 is also in arr.

//If there're duplicates in arr, count them seperately.

//Example: 
// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

// one (element + 1) can satisfy the requirement for many elements (x)
// data structure: object to store counts, loops
//alg: -loop through array
//      -if obj[current int] is undefined
//           -declare it and assign it 0
//      -increment obj[current int] by 1

//      -loop through array
//      -if obj[current int +1] is (x >= 1)
//          -increment results += 1
//      - return results

// const countElements = function(arr) {
//     let counts = {}
//     let result = 0
    
//     arr.forEach(function(num) {
//         if(counts[num] === undefined) {
//             counts[num] = 0
//         }
        
//         counts[num] += 1
//     })
    
//     arr.forEach(function(num) {
//         if(counts[num + 1] >= 1) {
//            result += 1 
//         }
//     })
    
//     return result
// };

//Middle of the Linked List
//Given a non-empty, singly linked list with head node head, return a middle node of linked list.

//If there are two middle nodes, return the second middle node.

//Example:
// Input: [1,2,3,4,5]
// Output: Node 3 from this list (Serialization: [3,4,5])
// The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
// Note that we returned a ListNode object ans, such that:
// ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

//Data structure: linked list, while loop, and array for storing nodes
//Alg: create empy array, declare nodeHead as variable pointing at head, while head !== null
// push the current node to the array,reassign nodeHead to nodeHead.next

//if array length is even
// return array[array.lemgth /2]

//else
// -return Array.{math.floor(array.length /2)}


// const middleNode = function(head) {
//     let nodes =[]
//     let currentNode = head
//     while(currentNode !== null) {
//         nodes.push(currentNode)
//         currentNode = currentNode.next
        
//     }
//     return nodes.length % 2 === 0 ? nodes[nodes.length /2] : nodes[Math.floor(nodes.length / 2)]
// }


//OR this method: 
//initial state
//f
// 1 -> 2 -> 3 -> 4 -> 5
// s

// 1st loop
// 		  f
// 1 -> 2 -> 3 -> 4 -> 5
//      s
	 
// 2nd loop
// 		            f
// 1 -> 2 -> 3 -> 4 -> 5
//           s

// when f reach end of the linked list, s will be at the middle.

// f = fast pointer
// s = slow pointer
// */

// const middleNode = function(head) {
//     let fast = slow = head;
//     while (fast && fast.next) {
//         fast = fast.next.next;
//         slow = slow.next;
//     }
//     return slow;
// };

//Backspace String Compare
//Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character


// const backspaceCompare = function(S, T) {
//     const build = (S) => {
//         let st = []
//             for(let i=0, len = S.length; i < len; i++) {
//                 if(S[i] == '#') {
//                     st.pop()
//                 }else {
//                     st.push(S[i])
//                 }
//             }
//         return st.join('')
//     }
//     return build(S) === build(T)
// };



//Min stack

//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack

/**
 * initialize your data structure here.
 stack: a property which stores an array methofs on the stack: push, pop, top, getMin
 
 ds: stack/array
 alg: - initialize a property named store on MinStack constructor
 - push: use push method built in
 -pop use pop method built in
 -top: return the element at store[store.length -1]
 -getMin:store minimum element in property om minstack
 -each push we check to make sure the new element is larger than min
      if smaller than min
            -reassign property to point at new min
  -reassign property to point at new min
  -each pop, we must ensure the min element gets reassigned if the min was popped
    - Math.min(...)
    -for getMin, just return the property min from this
 */
// var MinStack = function() {
//     this.min = undefined
//     this.store= []
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {
// this.store.push(x)
//     if(this.min === undefined || this.min > x) {
//         this.min = x
//     }
//     return
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//  this.store.pop()
//     this.min = Math.min(...this.store)
//     return
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
// //return the top element from the stack store 
//     return this.store[this.store.length -1]
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//    // return the smallest integer from the stack 
//     return this.min
// };

// /** 
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(x)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */


//Diameter of Binary Tree
// Given a binary tree, you need to compute the length of the diameter of the tree. 
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
// This path may or may not pass through the root.

// 1
// / \
// 2   3
// / \     
// 4   5

// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

// Note: The length of path between two nodes is represented by the number of edges between them.

// const diameterOfBinaryTree = function(root) {
//     let max = 0
//     let recurse = (node) => {
//         if (!node) { return 0 }
//         let leftDistance = recurse(node.left)
//         let rightDistance = recurse(node.right)
//      max = Math.max(max, leftDistance + rightDistance)  
        
//         return Math.max(leftDistance, rightDistance) + 1
//     }
    
//     recurse(root)
//     return max

// };

//Last Stone weight
// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

// const lastStoneWeight = function(stones) {
//     const sorter = function(a, b) {
//         if (a < b) {
//             return 1
//         }else if (a > b) {
//             return -1
//         }else {
//             return 0
//         }
//     }
//     if (stones.length === 0) {
//         return 0
//     }
    
//     let difference
    
//     while (stones.length > 1) {
//         stones.sort (sorter)
                     
//         difference = stones[0] - stones[1]
        
//         if (difference === 0) {
//             stones.shift()
//             stones.shift()
//         }else {
//             stones.shift()
//             stones[0] = difference
//         }
//     }
//     return stones.length === 0 ? 0 : stones[0]
// }


// Contiguous Array
// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1: 
// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.


// Idea: Iterate the numbers and count the number of 0s and 1s
// Save the first appearance of count in a hash map as hash = {count:index}
// When the same count appears again at i, it means between hash[count] to i, the number of 0s and 1s evened out and it's back to its previous level.

// const findMaxLength = function(nums) {
//     let hash = {0: -1}
//     let count = 0
//     let max = 0
    
//     for (let  i=0; i< nums.length; i++) {
//         if  (nums[i] == 0 ) count --
//         else count ++
        
//         if(hash[count] !=null) max = Math.max(max, i - hash[count])
//         else hash[count] = i
//     }
    
//     return max
// }


//Perform String Shifts

// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:

// direction can be 0 (for left shift) or 1 (for right shift). 
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.

// var stringShift = function(s, shift) {
//     let totalAmount = 0
//     let isNegative = false
    
//     shift.forEach(function(subArr) {
//         totalAmount += subArr[0] == 0 ? -(subArr[1]) : subArr[1]
//     })
    
//     if (totalAmount  === 0) {return s }
    
//     let firstHalf = ''
//     let secondHalf = ''
    
//     if (totalAmount < 0) {
//         isNegative = true
//         totalAmount *= -1
//     }
    
//     totalAmount = totalAmount % s.length
//     if(isNegative) {
//         firstHalf = s.slice(totalAmount)
//         secondHalf = s.slice(0, totalAmount)
//     }else {
//         firstHalf = s.slice(s.length - totalAmount)
//         secondHalf = s.slice(0, s.length - totalAmount)
//     }
    
//     return firstHalf + secondHalf
// };


//Product of Array Except Self

// Given an array nums of n integers where n > 1,  return an array output such that output[i] 
// is equal to the product of all the elements of nums except nums[i]

// example: 
// Input:  [1,2,3,4]
// Output: [24,12,8,6]

// Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

// const productExceptSelf = function(nums) {
//     let output = []  //empty array for holding products
    
//     for(let i = 0, acc = 1; i < nums.length; i += 1) {
//         output[i] = acc         //current elements is equal to accumulator of products to left of it
//         acc *= nums[i]          // accumulator now includes updated product with self multiplied in
//     }
    
//     for (let i = nums.length -1, acc = 1; i >= 0; i -= 1) {
//         output[i] *= acc        //current element is equal to accumulator of products to right of it
//         acc *= nums[i]          // accumulator now includes updated product with self included
//     }
    
//     return output
// };

//Valid Parenthesis String

// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.

// const checkValidString = function(s) {
//     let lefts = []
//     let freebies = []
    
//     for (let i=0; i < s.length; i +=1) {
//       if(s[i] === '(') {
//           lefts.push(i)
//       }  else if (s[i] === '*') {
//           freebies.push(i)
//       }else {
//           if (lefts.length === 0 && freebies.length === 0){
//               return false
//           }else if (lefts.length > 0) {
//               lefts.pop()
//           }else if (freebies.length > 0) {
//               freebies.pop()
//           }
//       }
//     }
    
//     while (lefts.length > 0 && freebies.length > 0) {
//         if (lefts.pop() >  freebies.pop()) {
//             return false
//         }
//     }
    
//     return lefts.length === 0
// }

//number of Islands
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.

// Example: Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

// var numIslands = function(grid) {
//     let islandCount = 0 //number of islands in grid
    
//     for(let row = 0; row < grid.length; row += 1) {
//         for(let col = 0; col < grid[row].length; col += 1) {
//             if (grid[row][col] === '1') { //current spot is LAND
//                 islandCount += 1            //number of islands is 1 greater
//                 dfs(row, col, grid)         //mark all adjacent spots and current spot with '0'
//             }
//         }
//     }
//     return islandCount
// };

// const dfs =function(row, col, grid) {
//     if (isWater(row, col, grid)) {
//         return 0                //return if water (stop looking for adjancet land)
//     }
    
//     grid[row][col] ='0'     //mark this spot as water
    
//     dfs(row +1, col, grid)  //search to right
//     dfs(row -1, col, grid)  // search to left
//     dfs(row, col + 1, grid) // search to bottom
//     dfs(row, col -1, grid) // search to top
    
//     return 0
// }

// const isWater = function(row, col, grid) {
//     return grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === '0'
// }

// Minimum Path Sum

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// example: 
// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

// const miniPathSum = function(grid) {
//     let newGrid = []
//     for (let i=0; i < grid.length; i+= 1) {
//         newGrid.push([])
        
//         for (let j = 0; j< grid[i].length; j += 1) {
//             if ( i > 0 && j > 0) {
//                 newGrid[i].push(Math.min(newGrid[i - 1][j], newGrid[i][j -1]) + grid[i][j])
//             }else if (i >0) {
//                 newGrid[i].push(newGrid[i -1][j] + grid[i][j])
//             }else if (j > 0) {
//                 newGrid[i].push(newGrid[i][j -1] + grid[i][j])
//             }else {
//                 newGrid[i].push(grid[i][j])
//             }
//         }
//     }
//     return newGrid[grid.length - 1][grid[0].length -1]
// }


// Search in Rotated Sorted Array

// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// example: Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// var search = function(nums, target) {
//     let bs = function(lo, hi) {
//         let mid = lo + Math.floor((hi - lo) / 2)
        
//         if (nums[mid] === target) {
//             return mid
//         }
        
//         if (hi -lo == 1) {
//             if (nums[lo] === target) {
//                 return lo
//             }else if (nums[hi] === target) {
//                 return hi
//             }else {
//                 return -1
//             }
//         }
        
//         if (lo >= hi) {
//             return -1
//         }
        
//         let left  = bs(lo, mid -1)
//         let right = bs(mid +1, hi)
        
//         return left !== -1 ? left : right
//     }
    
//     return bs(0, nums.length - 1)
// };

// Construct Binary Search Tree from Preorder Traversal

// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.left has a value < node.val, 
//     and any descendant of node.right has a value > node.val.  
//     Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

// const bstFromPreorder = function(preorder) {
//     let po = function(node, val) {
//         if (node === null) {
//             return new TreeNode(val)
//         } 
//          if (val < node.val) {
//              node.left = po(node.left, val)
//          }else if (val > node.val) {
//              node.right = po(node.right, val)
//          }
//          return node
//      }
     
//      let bst = null
//      preorder.forEach(function(value) {
//          bst = po(bst, value)
//      })
//      return bst
// }


// Leftmost Column with at Least a onemptied

// (This problem is an interactive problem.)

// A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.

// Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.

// You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:

// BinaryMatrix.get(x, y) returns the element of the matrix at index (x, y) (0-indexed).
// BinaryMatrix.dimensions() returns a list of 2 elements [m, n], which means the matrix is m * n.
// Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

// For custom testing purposes you're given the binary matrix mat as input in the following four examples. You will not have access the binary matrix directly.

// const leftMostColumnWithOne = function(binaryMatrix) {
//     const recurse = function(lo, hi, row) {
//         let mid = lo + Math.floor((hi - lo) / 2)
        
//         if (binaryMatrix.get(row, mid) === 1) {
//             ans = reassignAnswer(mid)
//             recurse(lo, mid -1, row)
//             return -1
//         } 
//         if (hi - lo ===1) {
//             if (binaryMatrix.get(row, lo) === 1) {
//                 ans === reassignAnswer(lo)
//             }else if (binaryMatrix.get(row, hi) === 1) {
//                 ans = reassignAnswer(hi)
//             }else {
//                 return -1
//             }
//         }
        
//         if (lo >= hi) {
//             return -1
//         }
        
//         return recurse(mid +1, hi, row)
//     }
    
//     const reassignAnswer = function(num) {
//         return ans === undefined || ans > num ? num : ans
//     }
    
//     let x = binaryMatrix.dimensions()[0]
//     let y = binaryMatrix.dimensions()[1]
//     let ans
    
//     for (let i = 0; i < x; i += 1) {
//         recurse(0, y -1, i)
//     }
    
//     return ans === undefined ? -1 : ans
// }

// Subarray Sum Equals K

// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example: Input:nums = [1,1,1], k = 2
// Output: 2

// Note:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

    // const subarraySum = function(nums, k) {
    //     let result =0 
    //     let sum
        
    //     for (let start = 0; start < nums.length; start += 1) {
    //         sum = 0
            
    //         for (let end = start; end < nums.length; end += 1) {
    //             sum += nums[end]
                
    //             if ( sum ===k) { result += 1}
    //         }
    //     }
    //     return result
    // };


//     Bitwise AND of Numbers Range
//     /given a range [m, n] where 0<= m <n
// 2147483647, return the bitwise AND of all numbers in this range, inclusive

// const rangeBitwiseAnd = function(m, n) {
//     let count = 0

//     while (n > m) {
//         count += 1
//         m = m >> 1
//         n = n >>1
//     }
//     return m << count
// }

// LRU Cache

// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity?

// Example:

// LRUCache cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
//     this.capacity = capacity;
//     this.store = {};
//     this.entries = 0;
//     this.usedOrder = [];
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//     if (this.store[key] !== undefined) {
//         for (let i = 0; i < this.usedOrder.length; i += 1) {
//             if (this.usedOrder[i] === key) {
//                 this.usedOrder.splice(i, 1)
//                 this.usedOrder.push(key)
//                 return this.store[key]
//             }
//         }
//     } else {
//         return -1
//     }
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//     if (this.store[key] !== undefined) {
//         this.store[key] = value
        
//         for (let i = 0; i < this.usedOrder.length; i += 1) {
//             if (this.usedOrder[i] === key) {
//                 this.usedOrder.splice(i, 1)
//                 this.usedOrder.push(key)
//                 return;
//             }
//         }
//     }
    
//     let first;
    
//     if (this.entries === this.capacity) {
//         first = this.usedOrder.shift()
//         delete this.store[first]
//         this.entries -=1       
//     }
    
// this.store[key] = value
// this.usedOrder.push(key)
// this.entries += 1
// return;
// }

// // /** 
// //  * Your LRUCache object will be instantiated and called as such:
// //  * var obj = new LRUCache(capacity)
// //  * var param_1 = obj.get(key)
// //  * obj.put(key,value)
// //  */

//Jump Game

// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example: 2

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.

// const canJump = function(nums) {
//     let stack= []
    
//     for (let i = nums.length -2; i > 0; i -= 1) {
//         if (i + nums[i] >= nums.length - 1 || i + nums[i] >= stack[stack.length - 1]) {
//             stack.push(i)
//         }
//     }
    
//     let currentIndex = 0
    
//     while (true) {
//         let sum = currentIndex + nums[currentIndex]
        
//         if (sum >= nums.length -1) {
//             return true
//         }else if (sum >= stack[stack.length -1]) {
//             currentIndex = stack.pop()
//         } else {
//             return false
//         }
//     }
// };


// Longest Common Subsequence

// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

 

// If there is no common subsequence, return 0.

// Example 1: 

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.

// Example 2: 

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.


const longestCommonSubsequence = function(text1, text2) {
    let matrixCreator = function(m,n) {
        let result = []
        
        for(let i= 0; i < n + 1; i += 1) {
            result.push(new Array(m + 1).fill(0))
        }
        return result
    }
    
    let m = matrixCreator(text1.length, text2.length)
    
    for (let i = 0; i < text2.length; i += 1) {
        for (let j = 0; j < text1.length; j += 1) {
            if (text1[j] === text2[i]) {
                m[i + 1][j + 1] = m[i][j] + 1
            }else {
                m[i + 1][j + 1] = Math.max(m[i + 1][j], m[i][j +1])
            }
        }
    }
    return m[text2.length][text1.length]
} 


// Maximal Square

// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Input: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4


var maximalSquare = function(matrix) {
    if(!matrix || !matrix[0])
        return 0
    
    let cache = [...matrix],
        height = matrix.length,
        width = matrix[0].length,
        solution = Math.max(...matrix[0])
    
    for (let i = 0; i < matrix.length; i++) {
        solution = Math.max(solution, matrix[i][0])
    }
    
    for (let row = 1; row < height; row++) {
        for (let col = 1; col < width; col++){
            
            if(matrix[row][col] === '1') {
                cache[row][col] = Math.min(cache[row-1][col], cache[row][col -1], cache[row -1][col -1]) +1
                solution = Math.max(cache[row][col], solution)
            }
        }
    }
    
    return solution * solution
    
};
