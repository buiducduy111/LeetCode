/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let output = 0;
    let maxLen = 0;

    while (nums.length > 0){
        let currentNum = nums[0];
        let same = 1;
        let len = nums.length;
        nums.splice(0, 1);

        // Xóa các item giống nhau
        for (let i = len-1; i >= 0; i--){
            if (nums[i] === currentNum){
                nums.splice(i, 1);
                same++;
                len--;
            }
        }

        if (same > maxLen){
            maxLen = same;
            output = currentNum;
        }
    }

    return output;
};

console.log(majorityElement([2,2,1,1,1,2,2]));