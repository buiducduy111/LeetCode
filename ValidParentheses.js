// https://leetcode.com/problems/valid-parentheses/description/

// Ý tưởng:
// 1 - Tổng độ dài phải là 1 số chẵn
// 2 - Các cặp 2 chữ 1 phải cùng loại (), [], {}, định danh cặp số là 1 số âm, 1 số dương, khi cộng lại bằng 0 là được đỡ phải so sánh từng ký tự

const aphabet = {
    '(': -1,
    ')': 1,
    '[': -2,
    ']': 2,
    '{': -3,
    '}': 3
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 != 0)
        return false;

    for (let i = 0; i < s.length; i++){
        
    }
    
    return true;
};


console.log(isValid('{[]}'));