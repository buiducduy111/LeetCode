// https://leetcode.com/problems/path-sum/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    var isHasPathSum = false;

    var recursive = function(node, currentSum, targetSum){
        if (!node) return;

        if (!node.left && !node.right){
            if (currentSum + node.val == targetSum)
                isHasPathSum = true;

            return;
        }

        recursive(node.left, currentSum+node.val, targetSum);
        recursive(node.right, currentSum+node.val, targetSum);
    }

    recursive(root, 0, targetSum);
    return isHasPathSum;
};