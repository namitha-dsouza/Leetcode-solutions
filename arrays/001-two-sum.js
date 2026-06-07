/**
 * 001 - Two Su,
 * Difficulty: Easy 
 * Link: s://leetcode.com/problems/two-sum/
 * Pattern: e.g. Arrays
 *
 * Approach: one-line description of the strategy
 * Time:  O(n²)
 * Space: O(1)
 */



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        var index_1 = i;
        for (let j = i + 1; j < nums.length; j++) {
            var index_2 = j;
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
            continue;
        }
    }
};