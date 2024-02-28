// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const romanAlphabet = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // Chạy từ đầu tới cuối chuỗi
    // Nếu chữ cái sau có giá trị lớn hơn chữ cái trước thì thực hiện phép trừ (Eg: IV = 4)

    let result = 0;
    let i = 0;
    
    while (i < s.length){
        let val = romanAlphabet[s[i]];
        let nextVal = 0;
        if (i < s.length - 1)
            nextVal = romanAlphabet[s[i+1]];

        if (nextVal > val){
            val = nextVal - val;
            i++;
        }
        result += val;
        i++;
    }

    return result;
};

const result = romanToInt('MCMXCIV');
console.log(result);