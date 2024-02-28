// https://leetcode.com/problems/merge-two-sorted-lists/description/

// Ý tưởng:
// Duyệt hết list1 và list2, push vào list kết quả

/*
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}*/

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // Ý tưởng:
    // Bắt đầu từ 1 node không tồn tại (vì nếu chọn node ngay từ đầu thì cần so sánh l1 và l2 để chọn node ban đầu)
    let tempNode = new ListNode(0, null);
    let currentNode = tempNode;
    
    while (l1 && l2) {
        if(l1.val < l2.val) {
            currentNode.next = l1;
            l1 = l1.next;
        } else {
            currentNode.next = l2;
            l2 = l2.next;
        }
        currentNode = currentNode.next;
    }
    
    // Node cuối chọn l1 hoặc l2 (nếu vẫn còn node chưa null)
    currentNode.next = l1 || l2;

    // Node bắt đầu chính là node tiếp theo của node không tồn tại đã khai báo
    return tempNode.next;
};

