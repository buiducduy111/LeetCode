/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;

    for (let i = 0; i < nums.length; i++){
        nums[k] = nums[i];

        // Từ sau i, tìm số có giá trị bằng nums[i], nếu bằng thì bỏ qua (tăng i)
        for (let j = i+1; j < nums.length; j++){
            if (nums[i] == nums[j]){
                i++;
            }
        }

        k++;
    }

    return k;
};


nums = [0,0,1,1,1,2,2,3,3,4];

console.log(removeDuplicates(nums));
console.log(nums);

