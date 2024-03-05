// https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0)
        return [1];
    if (rowIndex === 1)
        return [1,1];

    let triNums = [[1], [1,1]];
    let totalCol = 2;
    while (true){
        totalCol++;

        // Thêm 2 số 1 vào đầu và cuối
        let preNums = triNums[triNums.length-1];
        let rowNums = [1];
        for (let j = 1; j < totalCol-1; j++){
            // j = 1 --> 0+1
            // j = 2 --> 1+2
            rowNums.push(preNums[j-1]+preNums[j]);
        }

        rowNums.push(1);

        if (totalCol === rowIndex+1)
            return rowNums;

        triNums.push(rowNums);
    }
};

console.log(getRow(3));