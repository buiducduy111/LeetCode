// https://leetcode.com/problems/search-insert-position/

// Ý tưởng tốt nhất (của người khác)
// Liên tục chia đôi chuỗi, nếu vị trí giữa nhỏ hơn target thì lấy khoảng trái, ngược lại lấy khoảng phải

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target < nums[0])
        return 0;

    for (let i = 0; i < nums.length; i++){
        if (target == nums[i])
            return i;

        if (i < nums.length-1 && target > nums[i] && target < nums[i+1])
            return i+1;
    }

    return nums.length;
};

const nums = [1,3,5,6];
console.log(searchInsert(nums, 7));