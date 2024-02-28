// https://leetcode.com/problems/longest-common-prefix

// Phương án nhanh nhất (của người khác)
// Đặt prefix là toàn bộ chuỗi 1
// Nếu các chuỗi khác indexOf là -1 thì giảm prefix đi 1 chữ ở cuối
// Lặp lại tới khi thỏa mã

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 1)
        return strs[0];

    let result = '';
    let currentPrefx = '';

    for (let i = 0; i < strs[0].length; i++) {
        // f  l  o  w  e r
        currentPrefx = currentPrefx + strs[0][i];
        // console.log(currentPrefx);

        let prefixOK = true;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j].indexOf(currentPrefx) != 0)
                prefixOK = false;
        }

        if (prefixOK) {
            result = currentPrefx;
        }
    }

    return result;
};

const strs = ["reflower","flow","flight"]
console.log(longestCommonPrefix(strs));