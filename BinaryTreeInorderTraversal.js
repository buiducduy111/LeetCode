
// https://leetcode.com/problems/binary-tree-inorder-traversal/description/
// 
// Đề bài khó hiểu !!
// Cách vận hành: 
// Sẽ liệt kê ưu tiên từ cuối cùng bên trái lên

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let nums = [];

    var recursive = function(node){
        if (node === undefined || node === null)
            return;

        recursive(node.left);
        nums.push(node.val);
        recursive(node.right);
    }

    recursive(root);
    return nums;
};