// https://leetcode.com/problems/happy-number/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let num = n;

    while (true){
        let total = 0;
        let spliter = num.toString().split('');

        for (let i = 0; i < spliter.length; i++){
            total += Math.pow(parseInt(spliter[i]), 2);
        }
        
        if (total < 10)
            return total === 1 | total === 7;

        num = total;
    }

    return false;
};

console.log(isHappy(2));