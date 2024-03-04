// https://leetcode.com/problems/pascals-triangle/description/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let totalCol = 1;
    let result = [[1]];

    for (let i = 1; i < numRows; i++){
        totalCol++;

        // Thêm 2 số 1 vào đầu và cuối
        let preNums = result[result.length-1];
        let rowNums = [1];
        for (let j = 1; j < totalCol-1; j++){
            // j = 1 --> 0+1
            // j = 2 --> 1+2
            rowNums.push(preNums[j-1]+preNums[j]);
        }

        rowNums.push(1);
        result.push(rowNums);
    }

    return result;
};

console.log(generate(5));