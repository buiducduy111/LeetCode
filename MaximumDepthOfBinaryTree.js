// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Ý tưởng:
// Duyệt qua toàn bộ cây, mỗi lần duyệt tăng level lên 1 và tìm max level

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let maxLevel = 0;

    var recursive = function(node, level){
        if (!node)
            return;

        if (maxLevel < level)
            maxLevel = level;

        recursive(node.left, level+1);
        recursive(node.right, level+1);
    }

    recursive(root, 1);

    return maxLevel;
};

treeNode = new TreeNode(1, new TreeNode(2, new TreeNode(4, null, null), new TreeNode(5, null, null)), new TreeNode(3, null, null));
console.log(maxDepth(treeNode));