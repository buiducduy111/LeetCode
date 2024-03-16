// https://leetcode.com/problems/number-of-1-bits/description/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let str = n.toString(2);
    return str.split('').filter(i => i === '1').length;
};

console.log(hammingWeight(11111111111111111111111111111101));