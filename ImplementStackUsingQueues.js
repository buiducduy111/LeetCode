// https://leetcode.com/problems/implement-stack-using-queues/description/


var MyStack = function() {
    this.data = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.data.splice(0, 0, x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if (this.data.length === 0) return null;
    let top = this.data[0];
    this.data.splice(0, 1);
    console.log(this.data);
    return top;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    if (this.data.length === 0) return null;
    return this.data[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.data.length === 0;
};


let arr = [1];
arr.splice(0, 1);
console.log(arr);
