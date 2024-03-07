// https://leetcode.com/problems/binary-tree-postorder-traversal/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let nums = [];

    var rercusive = function(node){
        if (!node) return;
        rercusive(node.left);
        rercusive(node.right);

        nums.push(node.val);
    }

    rercusive(root);
    return nums;
};