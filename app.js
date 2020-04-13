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

const lastStoneWeight = function(stones) {
    const sorter = function(a, b) {
        if (a < b) {
            return 1
        }else if (a > b) {
            return -1
        }else {
            return 0
        }
    }
    if (stones.length === 0) {
        return 0
    }
    
    let difference
    
    while (stones.length > 1) {
        stones.sort (sorter)
                     
        difference = stones[0] - stones[1]
        
        if (difference === 0) {
            stones.shift()
            stones.shift()
        }else {
            stones.shift()
            stones[0] = difference
        }
    }
    return stones.length === 0 ? 0 : stones[0]
}