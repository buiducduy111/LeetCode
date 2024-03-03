// https://leetcode.com/problems/valid-parentheses/description/

// Bài toán này được xét vào Easy, nhưng đối với mình nó khó vl, và nhiều người khác cũng vậy

// Ý tưởng:
// Lặp từng kí tự, nếu gặp kí tự mở thì push 1 kí tự đóng
// Ngược lại nếu gặp kí tự đóng thì pop ra, nếu giá trị pop ra khác giá trị hiện tại thì là không hợp lệ
// Thỏa mãn khi quá trình này mảng trở về rỗng

// Eg: {[]()}
// Push: }]
// Pop : ] == ] -> đúng, arr còn lại }
// Push: )      -> arr : })
// Pop : ) == ) -> đúng , arr: }
// Pop : }  --> arr rỗng

var isValid = function(s) {
    let arrCharaters = []

    if(s.length <= 1) {
        return false
    } else {
        for(let char = 0; char < s.length; char++){
            if(s[char] == '{') {
                arrCharaters.push('}')
            } else if (s[char] == '[') {
                arrCharaters.push(']')
            } else if (s[char] == '(') {
                arrCharaters.push(')')
            } else if (arrCharaters.pop() !== s[char]) {
                return false
            }
        }
            return !arrCharaters.length
    }
};