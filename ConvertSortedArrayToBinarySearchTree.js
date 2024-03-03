// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/

// Vì cần convert sang cây có  height-balanced nên chia đôi mảng để lấy node làm head
// Đệ quy mỗi nửa trái và nửa phải
 

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// Chia đôi chuỗi thành 2 phần bằng nhau
// Trả về OBJ 
var splitArray = function(nums){
    // Tính toán số ở giữa làm head, và 2 mảng trái + mảng phải
    let centerIndex = Math.floor(nums.length / 2);

    leftNums = [];
    rightNums = [];

    for (let i = 0; i < nums.length; i++){
        if (i < centerIndex) leftNums.push(nums[i]);
        else if (i > centerIndex) rightNums.push(nums[i]);
    }

    return {centerIndex : centerIndex, leftNums: leftNums, rightNums: rightNums};
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var head = null;

    // Đệ quy với nửa trái hoặc nửa phải của nums
    var recursive = function(nums, parentNode, leftOrRight){
        // Tính toán số ở giữa làm head, và 2 mảng trái + mảng phải
        let splitArrayResult = splitArray(nums);
        let centerNode = new TreeNode(nums[splitArrayResult.centerIndex], null, null);

        if (head === null){
            head = centerNode;
        }

        if (parentNode && leftOrRight)
           parentNode.left = centerNode;
        if (parentNode && !leftOrRight)
           parentNode.right = centerNode;

        // TH dừng ----------------------------------------------------
        if (splitArrayResult.leftNums.length == 1) {
            centerNode.left = new TreeNode(splitArrayResult.leftNums[0], null, null);
        } else if (splitArrayResult.leftNums.length > 1) {
            recursive(splitArrayResult.leftNums, centerNode, true);
        }

        if (splitArrayResult.rightNums.length == 1) {
            centerNode.right = new TreeNode(splitArrayResult.rightNums[0], null, null);
        } else if (splitArrayResult.rightNums.length > 1) {
            recursive(splitArrayResult.rightNums, centerNode, false);
        }
    }

    recursive(nums, null);
    return head;
};

nums = [1,3]
nums = [-10,-3,0,5,9]
nums = [0,1,2,3,4,5]
console.log(splitArray([0,1,2]));

let head = sortedArrayToBST(nums);
console.log(head);