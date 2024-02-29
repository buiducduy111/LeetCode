// https://leetcode.com/problems/add-binary/description/
// Ý tưởng: đầu tiên định convert sang number để cộng, tuy nhiên gặp phải case number to quá không parse được theo thư viện

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    // Thêm các số không vào đầu a hoặc b sao cho độ dài chuỗi a và b bằng nhau cho dễ xử lý
    let numA = a;
    let numB = b;

    if (a.length > b.length)
        numB = numB.padStart(a.length, '0');
    else
        numA = numA.padStart(b.length, '0');

    // Tiến hành phép cộng
    let result = '';
    let soNho = 0; // Số nhớ

    console.log(numA);
    console.log(numB);

    for (let i = numA.length - 1; i >= 0; i--) {
        
        let currentNum = parseInt(numA[i]) + parseInt(numB[i]) + soNho;
        if (currentNum >= 2) {
            soNho = 1;
            currentNum -= 2; // khi cộng số nhớ có thể currentNum = 3, lúc này trừ 2 sẽ còn 1 và nhớ 1
        }
        else {
            soNho = 0;
        }

        result = currentNum + result;
    }

    if (soNho > 0)
        result = soNho + result;

    return result;
};


// Search ở chatgpt
var addBinaryUserLib = function(a, b) {
    let s1 = BigInt('0b' + a);
    let s2 = BigInt('0b' + b);
    return (s1+s2).toString(2)
};

console.log(addBinary("1111", "1111"));
//console.log(addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));
