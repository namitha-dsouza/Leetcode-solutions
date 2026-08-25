/**
 * {125} - {Valid Palindrome}
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/valid-palindrome/description/
 *
 * Approach: one-line description of the strategy
 * Time:  O(n)
 * Space: O(n)
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]+/g, '').trim().toLowerCase();


    let r = s.length - 1;
    for (let i = 0; i < r; i++) {

        if (s[i] != s[r]) {
            return false;
        } else {
            r--;
        }
    }
    return true
};