// https://leetcode.com/problems/binary-tree-preorder-traversal/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let nums = [];

    var rercusive = function(node){
        if (!node) return;
        nums.push(node.val);
        
        rercusive(node.left);
        rercusive(node.right);
    }

    rercusive(root);
    return nums;
};