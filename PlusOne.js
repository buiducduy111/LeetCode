// https://leetcode.com/problems/plus-one/submissions/1189718489/
// Bài này có cách giải nhanh hơn, nhưng ở đây mình không chỉ viết PlusOne mà Plus số nào cũng được

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let nums = [];

    // [9] ==> [1, 0]
    // [1, 9, 9] ==> [2, 0, 0]
    // [1, 8, 9] ==> [1, 9, 0]
    // [1, 2, 3] ==> [1, 2, 4]
    let index = digits.length - 1;
    let soNho = 1; // Nhớ khi cộng qua 10
    
    while (index >= 0) {
        let currentNum = digits[index] + soNho;
        if (currentNum >= 10)
        {
            soNho = 1;
            currentNum = 0;
        } 
        else
            soNho = 0;
        
        nums.splice(0, 0, currentNum);
        index--;
    }

    // Nếu duyệt hết vẫn còn số nhớ thì thêm số nhớ vào đầu
    if (soNho > 0)
        nums.splice(0, 0, soNho);

    return nums;
};


a = [9]
console.log(plusOne(a));