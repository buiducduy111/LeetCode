// https://leetcode.com/problems/excel-sheet-column-number/description/

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    // ZY = 26*26+25
    // AB = 26*1+2
    // AAA = 26^2*1+26^1*1+1
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++){
        let a = columnTitle[i].charCodeAt(0)-64;
        let b = columnTitle.length - i;

        result += Math.pow(26, b-1) * a;
    }

    return result;
};

console.log(titleToNumber('AAA'));