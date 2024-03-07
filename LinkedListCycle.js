// https://leetcode.com/problems/linked-list-cycle/description/


function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
* @param {ListNode} head
* @return {boolean}
*/
var hasCycle = function (head) {
    let result = false;

    let currentNode = head;
    let nodes = [];

    while (currentNode){
        nodes.push(currentNode);

        if (nodes.includes(currentNode.next))
            return true;

        currentNode = currentNode.next;
    }

    return result;
};