// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 */
var getRawString = function(s){
    let tmp = s.toLowerCase();
    
    // Chỉ giữ lại chữ và số
    let result = '';
    for (let i = 0; i < tmp.length; i++){
        let charNum = tmp[i].charCodeAt(0);

        // 0->9, a->z 
        if ((charNum >= 48 && charNum <= 57) || (charNum >= 97 && charNum <= 122)){
            result += tmp[i];
        }
    }

    return result;
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let rawStr = getRawString(s);
    if (rawStr.length == 0)
        return true;

    let reverseStr = '';
    for (let i = rawStr.length-1; i >= 0; i--)
        reverseStr += rawStr[i];

    return rawStr === reverseStr;
};