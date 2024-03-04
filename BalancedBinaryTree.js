// https://leetcode.com/problems/balanced-binary-tree/

// Ý tưởng:
// Cây nhị phân cân bằng chiều cao là cây nhị phân trong đó độ sâu của hai cây con của mỗi nút không bao giờ khác nhau nhiều hơn một.
// --> Sử dụng đệ quy chia đôi cây

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var getHeight = function(node){
    if (!node)
        return 0;
    if (!node.left && !node.right)
        return 1;

    return Math.max(getHeight(node.left)+1, getHeight(node.right)+1);
}

/**
 * @param {TreeNode} node
 * @return {boolean}
 */

var isBalancedResult = true;
var recursive = function(node){
    if (!node || (!node.left && !node.right))
        return;

    let leftHeight = getHeight(node.left);
    let rightHeight = getHeight(node.right);

    if (Math.abs(leftHeight - rightHeight) > 1){
        isBalancedResult = false;
    }

    recursive(node.left);
    recursive(node.right);
}


var isBalanced = function(root) {
    if (!root) return true;
    if (!root.left && !root.right) return true;
    isBalancedResult = true;

    recursive(root);
    
    return isBalancedResult;
};


node = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null)));
node = new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4, null, null), null)), 
                    new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4, null, null)))
                    );
//node = new TreeNode(2, new TreeNode(1, null, null), new TreeNode(2, null, null));
//node = new TreeNode(1, new TreeNode(2, null, null), null);

//console.log(isBalanced(node));