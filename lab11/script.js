//1. Viết chương trình tính tổng từ 0 -> 100 và in ra kết quả
/*
let sum = 0;
for (let i = 0; i < 101; i++){
    sum += i;
}
console.log(sum);
*/
//2. Viết chương trình tính tổng tất cả số lẻ trong khoảng 0 -> 100 và in ra kết quả
/*
let sum = 0;
for (let i = 0; i < 101; i = i + 2) {
    sum += i;
}
console.log(sum);
*/
//3. Viết chương trình tính tổng tất cả các số lẻ chia hết cho 3 trong khoảng 0 -> 100 và in ra 
//kết quả
/*
let sum = 0;
for (let i = 0; i <= 100; i = i + 2) {
    if (i % 3 == 0) {
        sum += i;
    }
};
console.log(sum);
*/
//4. Viết chương trình tính tổng tất cả các số chia hết cho cả 3, 5 và 7 trong khoảng 0 -> 100 và 
//in ra kết quả
//5. Viết chương trình tính tổng bình phương của tất cả các số chia hết cho 3 hoặc 5 hoặc 7 trong 
//khoảng 0 -> 100 và in ra kết quả
//6. Viết chương trình in bảng cửu chương từ 1 -> 10

/*
let sln;
let snn;
for (let i = 0; true; i++) {
    let promt = prompt("nhập vào số")
    if (promt == null || promt === "") {
        break;
    }
    promt = Number(promt)
    if 
};
*/

//3. Viết hàm isPrime(n) nhận vào 1 số, kiểm tra và in ra số đó có phải số nguyên tố hay không
/*
function isPrime(n) {
    if (n < 2) {
        console.log("n khong phai so nguyen to")
    } else {
        for (let i = 2; )
    }
}
*/



// HOMEWORK


// 1. VCT tính và in bảng cửu chương, sử dụng vòng lặp for lồng nhau
/*
let a;
let b;
for(let i = 1; i <=10; i++){
    for (let j = 1; j <= 10; j++){
        a = i;
        b = j;
    console.log(a + " x " + b + " = " + (i * j));
}
};
*/

//2. VCT in ra nếu số chia hết cho 3 thì in Fizz, chia hết cho 5 thì in Buzz, chia hết cho cả 3 và 5
// thì in FizzBuzz, không chia hết cho cả 3 và 5 thì in BizzFuzz, trong khoảng 0 -> 50
/*
for(let i = 0; i <= 50; i++){
    if (i % 3 == 0) {
      console.log("Fizz " + i);
    } else if (i % 5 == 0) {
      console.log("Buzz " + i);
    } else if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz " + i);
    } else {
      console.log("BizzFuzz " + i);
    };
};
*/

//3. VCT tính và in ra tổng bội chung của 3 và 5 trong khoảng 0 -> 100
/*
let a = 3;
let b = 5;
let max = 0;
for (let i = 0; i <= 100; i++) {
    if (i % a == 0 && i % b == 0) {
        max += i;
    } else { };
}
console.log(max);
*/

//4. VCT nhập vào một số n, kiểm tra số đó có phải số nguyên tố hay không và in ra kết quả
/*
let n = Number(prompt("nhập vào 1 số n"));
if (n <= 1) {
    console.log("n không phải số nguyên tố");
} else if (n == 2) {
    console.log("n là số nguyên tố");
} else {
    let snt = true;
    for (i = 2; i < n; i++){
        if (n % i == 0) {
            snt = false;
            break;
        }
    }
    if (snt == false) {
        console.log("n la ko so nguyen to");
    } else {
        console.log("n la so nguyen to");
    }
};
*/


//5. VCT nhập vào 2 số a, b kiểm tra và in ra các số nguyên tố trong khoảng a -> b
/*
let a = Number(prompt("nhập vào a số n"));
let b = Number(prompt("nhập vào b số n"));


for (let i = a; i <= b; i++){
    let snt;
    for (let j = 2; j < i; j++) {
          if (i % j == 0) {
              snt = false;
              break;
          } else {
              snt = true;
             };
    }
    if (snt == true) {
        console.log(i);
    }
};
*/


//6. VCT in ra bảng cửu chương ngược (từ 10 -> 1)
/*
let a;
let b;
for (let i = 10; i >= 1; i--){
    for (let j = 10; j >= 1; j--){
        a = i;
        b = j;
        console.log(a + " x " + b + " = " + (i * j));
    }
};
*/

//1. VCT in ra chữ số đầu và cuối của một số. VD 12345 -> 15
/*
    let a = prompt("Nhap 1 so: ");
    let demSo = 10;
    let soCuoi = a % 10;
    let soDau;
    let count;
    for (let i = 0; true; i++) {
       count = a % demSo;
       soDau = (a - count) / demSo;
       demSo = demSo * 10;
       if (demSo > a) {
       break;
       }
       }
    console.log("so cuoi la : " + soCuoi);
    console.log("so dau la : " + soDau);
*/
//2. VCT kiểm tra và in ra một số có phải số Palindrome hay không
//3. VCT kiểm tra và in ra một số có phải số Armstrong hay không
//4. VCT tính và in ra giai thừa Factorial của một số
//5. VCT kiểm tra và in ra một số có phải số Perfect hay không
//6. VCT kiểm tra và in ra một số có phải số Strong hay không