// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

// Một bài toán đơn giản khi đã có lib
// Ngoài ra có thể dùng vòng for theo needle để duyệt

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

haystack = "leetcode";
needle = "leeto";

console.log(console.log(strStr(haystack, needle)));

