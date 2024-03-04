// https://leetcode.com/problems/minimum-depth-of-binary-tree/

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null)
        return 0;
    if (!root.left && !root.right)
        return 1;
    let minLevel = 99999;

    var recursive = function(node, lv){
        if (node === null)
            return;

        if (!node.left && !node.right && lv < minLevel)
            minLevel = lv;

        recursive(node.left, lv+1);
        recursive(node.right, lv+1);
    }

    recursive(root, 1);

    return minLevel;
};

node = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null)));
console.log(minDepth(node));