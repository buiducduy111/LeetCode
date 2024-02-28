// https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++){
        // Nếu gặp giá trị bằng với val
        // Đổi chỗ với giá trị cuối cùng khác val
        if (nums[i] == val){
            k++;

            for (let j = nums.length-1; j > i; j--){
                if (nums[j] != val){
                    let temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    k--;            // Nếu đổi được vị trí trong vòng for sẽ bị tính thêm lần, vì vậy cần trừ đi 1
                    break;
                }
            }
        }
    }

    return nums.length-k;
};


nums = [0,1,2,2,3,0,4,2];
val = 2;

const k = removeElement(nums, val);
console.log(k);
console.log(nums);

