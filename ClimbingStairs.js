// https://leetcode.com/problems/climbing-stairs/

// Ý tưởng: 
// 3 = 1+1+1=2+1
// 4 = 1+1+1+1 = 2+1+1 = 1+2+1 = 1+1+2 = 2+2
// 5 = 1+1+1+1+1 = 2+1+1+1 (4 cách đảo) = 2+2+1 (3 cách đảo)

// Đầu tiên, kết quả luôn là 1 mảng n số 1
// Lần lượt tăng từng phần tử lên 2, đồng thời giảm length đi 1 (vì tăng sẽ chiếm 1 số 1 ở cuối)
// Bài toán được đảm bảo khi tổng này đúng = n
// Trong trường hợp thoả mãn, lấy số cách đảo các giá trị trong mảng cộng vào làm số cách đi

/**
 * @param {Array} nums
 * @param {number} len
 * @return {number}
 */

var resultListText = [];

var lietKeHoanVi = function(nums, len, result, k){
    for (let i = 0; i < len; i++){

    }
}

var soCachDao = function (nums, len) {
    resultListText = [];

     // Liệt kê toàn bộ hoán vị, resultListText được lọc trùng để có kế quả cuối

    return resultListText.length;
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let totalWays = 1; // Luôn có 1 cách là toàn số 1

    // Khởi tạo 1 mảng toàn số 1
    let nums = [];
    for (let i = 0; i < n; i++)
        nums.push(1);

    let soPhanTuConLai = nums.length;

    // Lần lượt tăng các số lên 2 bắt đầu từ k
    for (let i = 0; i < nums.length; i++) {
        nums[i] = 2;

        // Mỗi lần tăng lên 1 số 2, thì trừ độ dài đi 1
        let total = 0;
        soPhanTuConLai--;

        for (let j = 0; j < soPhanTuConLai; j++) {
            total += nums[j];
        }

        if (total == n) {
            totalWays += soCachDao(nums, soPhanTuConLai);
        }
    }


    return totalWays;
};

soCachDao([2, 2, 1, 1], 4);
//console.log(climbStairs(6));