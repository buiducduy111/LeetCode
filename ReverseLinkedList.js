// https://leetcode.com/problems/reverse-linked-list/description/


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let node = head;
    if(!node) return node;

    let nextNode = node.next;
    let prev = null;

    while (node) {
        nextNode = node.next;
        node.next = prev;
        prev = node;
        node = nextNode;
    }
    return prev
};