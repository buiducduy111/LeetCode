// https://leetcode.com/problems/contains-duplicate-ii/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let table = new Map(); // num, index

    for (let i = 0; i < nums.length; i++){
        if (table.has(nums[i])) {
            if (Math.abs(i - table.get(nums[i])) <= k)
                return true;
            else
                table.set(nums[i], i); // Cập nhật index mới
        } else {
            table.set(nums[i], i);
        }
    }

    return false;
};