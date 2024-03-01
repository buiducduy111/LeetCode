https://leetcode.com/problems/remove-duplicates-from-sorted-list/

// Ý tưởng:
// While cho tới hết List, nếu next có val bằng val hiện tại thì xóa, gán next bằng next tiếp theo

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let currentNode = head;
    while (currentNode) {
        // Nếu next node có giá trị bằng giá trị hiện tại thì xóa
        // Bằng cách gán next node của current sang next node của next
        let nextNode = currentNode.next;
        if (!nextNode)
            break;

        if (nextNode.val == currentNode.val) {
            currentNode.next = nextNode.next;
        }
        else
            currentNode = currentNode.next; // Xét vị trí tiếp
    }

    return head;
};

// head = new ListNode(1, new ListNode(1, new ListNode(2, undefined)));
head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, undefined)))));
deleteDuplicates(head);

// Print head
while (head){
    console.log(head.val);
    head = head.next;
}
