// https://leetcode.com/problems/isomorphic-strings/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length)
        return false;

    let newS = '';
    let table1 = new Map();
    let table2 = new Map(); // Để test chiều ngược lại. EG: 'badc', 'baba'

    for (let i = 0; i < s.length; i++){
        if (table1.has(s[i])){
            newS += table1.get(s[i]);
        }
        else {
            newS += t[i];
            table1.set(s[i], t[i]);

            if (table2.has(t[i]))
                return false;
            else
                table2.set(t[i], s[i]);
        }
    }

    return newS === t;
};


isIsomorphic('badc', 'baba');