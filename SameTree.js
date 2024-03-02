// https://leetcode.com/problems/same-tree/description/

// Ý tưởng:
// Duyệt cây sang dạng mảng, so sánh 2 mảng

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
        if (node === undefined || node === null) {
            nums.push(null);
            return;
        }

        recursive(node.left);
        recursive(node.right);
        nums.push(node.val);
    }

    recursive(root);
    return nums;
};

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    var nums1 = inorderTraversal(p);
    var nums2 = inorderTraversal(q);

    if (nums1.length != nums2.length)
        return false;

    let result = true;
    for (let i = 0; i < nums1.length; i++){
        if (nums1[i] != nums2[i]){
            result = false;
            break;
        }
    }

    return result;
};

p = new TreeNode(1, new TreeNode(1, null, null), null);
console.log(inorderTraversal(p));

q = new TreeNode(1, null, new TreeNode(1, null, null));
console.log(inorderTraversal(q));