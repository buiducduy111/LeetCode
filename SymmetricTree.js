// https://leetcode.com/problems/symmetric-tree/description/

// Cây đối xứng: 
    // Duyệt 2 cây left và right từ root
    // 1 thằng duyệt lấy từ trái qua
    // 1 thằng duyệt lấy từ phải qua
    // Nếu 2 mảng bằng nhau là ok

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root.left && !root.right)
        return true;

    let numsLeft = [];
    var recursiveLeft = function(node){
        if (node === undefined || node === null) {
            numsLeft.push(null);
            return;
        }

        recursiveLeft(node.left);
        recursiveLeft(node.right);
        numsLeft.push(node.val);
    }
    recursiveLeft(root.left);

    let numsRight = [];
    var recursiveRight = function(node){
        if (node === undefined || node === null) {
            numsRight.push(null);
            return;
        }

        recursiveRight(node.right);
        recursiveRight(node.left);
        numsRight.push(node.val);
    }
    recursiveRight(root.right);

    return numsLeft.toString() == numsRight.toString();
};