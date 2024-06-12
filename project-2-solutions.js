// 2. Power of Two
/**
 *
 * @param {number} n
 * @returns boolean
 */
function isPowerOfTwo(n) {
  if (n <= 0) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

/**
 *
 * @param {string[]} names
 * @param {number[]} heights
 * @returns string[]
 */
function sortPeople(names, heights) {
  let length = heights.length;
  let map = new Map();
  for (let i = 0; i <= length; i++) {
    map.set(heights[i], names[i]);
  }
  heights.sort((a, b) => b - a);
  /**
   * @type {string[]}
   */
  let res = [];
  for (let height of heights) {
    res.push(map.get(height));
  }
  return res;
}

// console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));

/**
 *
 * @param {number} num
 * @returns boolean
 */
function isPalindrome(num) {
  /**
   * @type {string}
   */
  const str = num.toString();
  /**
   * @type {number}
   */
  let left = 0;
  /**
   * @type {number}
   */
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// console.log(isPalindrome(1221));

/**
 *
 * @param {number[]} nums
 * @returns number
 */
function maxCount(nums) {
  let positiveCount = 0;
  let negativeCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positiveCount++;
    } else if (nums[i] < 0) {
      negativeCount++;
    }
  }

  return Math.max(positiveCount, negativeCount);
}

// console.log(maxCount([-2, -1, 0, 1, 2, 3]));

// Input: 
// Output: [2, 7]

/**
 *  arr = [2, 7, 11, 15], N = 9
 *  output = [2, 7]
 *  Iteration 1 
 *  i = 0, 9 - 2 = 7
 *  numMap[2] === undefined
 *  numMap[7] = true
 * 
 *  Iteration 2
 *  i = 1, 9 - 7 = 2
 *  numMap[7] === true
 *  return [2, 7]
 * 
 * 
 */
