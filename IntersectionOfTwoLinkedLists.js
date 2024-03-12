// https://leetcode.com/problems/intersection-of-two-linked-lists/description/

function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let nodeA = headA;
    let nodeB = headB;

    if (nodeA == nodeB)
        return nodeA;

    while (true){
        while (true){
            if (nodeA == nodeB)
                return nodeA;

            if (!nodeB.next) break;
            nodeB = nodeB.next;
        }
        nodeB = headB;

        if (!nodeA.next) break;
        nodeA = nodeA.next;
    }

    return null;
};