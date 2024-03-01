/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let spliter = s.trim().split(' ');
    console.log(spliter);
    return spliter[spliter.length-1].length;
};

lengthOfLastWord('   fly me   to   the moon  ');