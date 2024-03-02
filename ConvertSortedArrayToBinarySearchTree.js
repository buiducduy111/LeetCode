// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

// Vì cần convert sang cây có  height-balanced nên chia đôi mảng để lấy node làm head
 

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // Tính toán số ở giữa làm head
    let centerIndex = Math.floor(nums.length / 2);
    let centerVal = nums[centerIndex];
    let head = new TreeNode(centerVal, null, null);

    // Triển khai từ head qua trái
    for (let i = centerIndex-1; i >= 0; i--){
        
    }
};

nums = [1,3]
console.log(sortedArrayToBST(nums));