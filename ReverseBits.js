// https://leetcode.com/problems/reverse-bits/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let str = n.toString(2);
    str = str.split('').reverse().join('');
    return parseInt(str, 2);
};

console.log(reverseBits(11111111111111111111111111111101));