// https://leetcode.com/problems/count-complete-tree-nodes/description/


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    let count = 0;

    var recursive = function (node) {
        if (node === null)
            return;

        count++;
        recursive(node.left);
        recursive(node.right);
    }

    recursive(root);

    return count;
};