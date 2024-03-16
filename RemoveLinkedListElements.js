// https://leetcode.com/problems/remove-linked-list-elements/description/


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    // Vì sẽ có trường hợp ngay từ head đã ăn đòn nên làm 1 cái head mới là null, thụt về 1
    let treeHead = new ListNode(0, null);
    let tree = treeHead;
    let node = head;

    while (node){
        if (node.val !== val){
            tree.next = node;
            tree = tree.next;  
        } else {
            // Xử lý trường hợp node cuối cùng của tree có next node đúng bằng val
            tree.next = null;
        }

        node = node.next;
    }

    return treeHead.next;
};

// [1,2,6,3,4,5,6]
let head = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null)))))));
let newNode = removeElements(head, 6);