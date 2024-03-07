// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// Đưa về bài toán tìm cặp số mà phép trừ lớn nhất
// Đầu tiên: sử dụng 2 vòng lặp lồng nhau là khá dễ, nhưng dính case mảng dài leet code báo Time Limit nên phải tìm hướng khác

// Đọc lại: thì thấy mình đã hiểu sai đề
// MaxProfit sẽ đưa về bài toán tìm số nhỏ nhất & số lớn nhất (kể từ số nhỏ nhất) để có kết quả trừ tốt nhất (mua đáy, bán đỉnh)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let total = 0;
    for ( let i = 1; i < prices.length; i++) {
       if (prices[i] < prices[i - 1]) {
           if (prices[i] < min){
                console.log(`update min: ${min} > ${prices[i]}`);
                min = prices[i];
           }
       } else {
           if (total < prices[i] - min) {
                console.log(`update total: ${total} > ${prices[i]-min}`);
                total = prices[i] - min;
           }
       }
    }
    return total;
};

prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));