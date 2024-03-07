// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    while (nums.length > 0){
        let currentNum = nums.splice(0, 1)[0];

        if (!nums.includes(currentNum))
            return currentNum;
        else {
            let elIndex = nums.indexOf(currentNum);
            nums.splice(elIndex, 1);
        }
    }

    return -1;
};

console.log(singleNumber([2,2,1]))