// https://leetcode.com/problems/climbing-stairs/

// Ý tưởng: 
// Bài này chịu, phải đi xem solution
// Ban đầu giải quyết bằng cách tìm ra tổ hợp các bước, trong mảng tổ hợp sẽ tìm tất cả hoán vị để cộng lại
// Tuy nhiên hoán vị chạy quá lâu nên leetcode từ chối, chạy trên IDE vẫn OK

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = new Array(n + 1).fill(-1);
    console.log(dp);
    return solve(0, n, dp);
};

var solve = function(i, n, dp) {
    if (i === n) return 1;
    if (i > n) return 0;

    if (dp[i] !== -1) return dp[i];

    dp[i] = solve(i + 1, n, dp) + solve(i + 2, n, dp);
    console.log(dp);
    
    return dp[i];
};
//console.log(uniquePermutations([2, 2, 1, 1]));
console.log(climbStairs(5));