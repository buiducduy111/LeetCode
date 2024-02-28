// https://leetcode.com/problems/palindrome-number/description/

// Cách giải quyết:
//      Bằng cách tính toán, tính ra đảo ngược của số này và so sánh
//
// Vấn đề:
//      Cứ nghĩ làm bằng phương pháp tính toán số nguyên sẽ nhanh hơn
//      Nhưng thực chất đưa về dạng string rồi so sánh đầu cuối còn nhanh hơn nhiều
//
//      -> Lần sau sẽ suy nghĩ đơn giản và dùng lib nhiều hơn miễn sao có kết quả

var getY = function(x){
    let result = 0;
    let t = x;
    let soDu = 0;

    // Eg: 456

    while (t > 0){
        soDu = t % 10;
        t = Math.floor(t / 10);
        
        // soDu: 6,5,4
        // result = 0+6 = 6
        // result = 6*10+5 = 65
        // result = 65*10+4 = 654

        result = result*10 + soDu;
        console.log(t + " -> "+soDu);
    }

    return result;
}

var isPalindrome = function(x) {
    if (x < 0)
        return false;

    if (x == 0)
        return true;

    let y = getY(x);
    return x == y;
};

const result = getY(1001);
console.log(result);