// https://leetcode.com/problems/merge-sorted-array/

// Ý tưởng: 
// Vì insert mảng 2 vào mảng 1 nên ta duyệt từng phần tử của mảng 2, xem có thể nhét vào đâu trong mảng 1
// dùng slice để insert

// Nếu dùng lib thì chỉ cần cộng 2 chuỗi vào rồi gọi sort!

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Xóa mảng nums1 sao cho bằng m phần tử
    nums1.length = m;
    let num1Index = 0;

    // Duyệt mảng nums2, tìm vị trí để insert vào nums1
    for (let i = 0; i < n; i++){
        let insertNum = nums2[i];

        // Tìm vị trí ở mảng 1 để insert
        let insertIndex = -1;
        for (let j = 0; j < nums1.length; j++){
            if (nums1[j] > insertNum){
                break;
            } else {
                insertIndex = j;
            }
        }

        // Nếu insertIndex tìm ra ở cuối chuỗi thì thay vì dùng slice, ta dùng push
        console.log('insert index = '+ insertIndex);

        if (insertIndex < nums1.length - 1)
            nums1.splice(insertIndex+1, 0, insertNum);
        else
            nums1.push(insertNum);

        console.log(nums1);
    }
};

nums1 = [1,2,3,0,0,0]
nums2 = [2,5,6]
m = 3
n = 3

// nums1 = [1,0]
// nums2 = [2]
// m = 1
// n = 1

// nums1 = [1,0]
// nums2 = [2]
// m = 1
// n = 1

// nums1 = [4,5,6,0,0,0]
// nums2 = [1,2,3]
// m = 3
// n = 3

merge(nums1, m, nums2, n);
console.log(nums1);