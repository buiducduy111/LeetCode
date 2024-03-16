// https://leetcode.com/problems/contains-duplicate/description/

// Đơn giản là dùng vòng lặp để check
// Tuy nhiên hãy cố gắng làm sao để độ phức tạp < O(n^2)

// Ý tưởng 1: dùng 1 array ngoài và dùng includes để check, nhưng bị timeout leetcode
// Ý tưởng 2: sắp xếp theo thứ tự tăng dần, chỉ việc so sánh 2 vị trí liền nhau nếu bằng nhau là ok
// Cách 3 : dùng Set (new Set sẽ đưa vào các số k trùng nhau, chỉ việc so sánh length)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });

    for (let i = 1; i < nums.length; i++){
        if (nums[i] === nums[i-1])
            return true;
    }

    return false;
};