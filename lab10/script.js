/*function chanLe(x) {
    let chan = x % 2 == 0;
    return chan;
}
console.log(chanLe(5));*/

/*let a = Number(prompt("nhap so a"));
let b = Number(prompt("nhap so b"));

a > b && console.log(a + " a lon hon");
a < b && console.log(b + " b lon hon");*/

/*let str = prompt("nhap thay ba");

str === "ba" && alert(str + " thay ba");
str !== "ba" && alert(str + " thay ba ko ");*/

// Viết chương trình nhập vào một số a, kiểm tra số đó là chẵn hay lẻ và in kết quả

/*
let a = Number(prompt("nhap so a"));
if (a % 2 == 0) {
    alert("chan")
} else {
    alert("le")
}
*/

// Viết chương trình nhập vào 2 số a, b, kiểm tra và in ra số lớn hơn
/*
let a = Number(prompt("nhap so a"));
let b = Number(prompt("nhap so b"));
if (a > b) {
  alert("a lon hon");
} else {
  alert(" b lon hon");
}*/
// Viết chương trình nhập vào một tháng trong năm, in ra mùa tương ứng

/*
let a = Number(prompt("nhap thang"));
if (a === 1) {
  alert("mua xuan");
} else if (a === 2) {
  alert("mua xuan");
} else if (a === 3) {
  alert("mua xuan");
} else if (a === 4) {
  alert("mua he");
} else if (a === 5) {
  alert("mua he");
} else if (a === 6) {
  alert("mua he");
} else if (a === 7) {
  alert("mua thu");
} else if (a === 8) {
  alert("mua thu");
} else if (a === 9) {
  alert("mua thu");
} else if (a === 10) {
  alert("mua dong");
} else if (a === 11) {
  alert("mua dong");
} else if (a === 12) {
  alert("mua dong");
} else {
    alert("nhap sai roi");
};
*/
// Viết chương trình nhập một số a, kiểm tra và in ra số đó có chia hết cho cả 5 và 11 hay không
/*
let a = Number(prompt("nhap so"));
if (a % 5 == 0 && a % 11 == 0) {
  alert("số " + a + " có chia hết cho cả 5 và 11");
} else {
  alert("số " + a + " không chia hết cho cả 5 và 11");
};
*/

// bai tap

//Viết chương trình nhập vào 2 số a, b là tham số của phương trình bậc nhất ax + b = 0, 
//tính và in ra nghiệm của phương trình đó
/*
let a = Number(prompt("nhap so a"));
let b = Number(prompt("nhap so b"));
a == 0 && b == 0 && console.log("phương trình có vô số nghiệm.")

a == 0 && b != 0 && console.log("phương trình vô nghiệm.")
let x = -b / a;
a != 0 && console.log("phương trình có nghiệm duy nhất " + x);
*/
// 5.Viết chương trình nhập 3 số a, b, c. Sử dụng toán tử logic kiểm tra và in ra số lớn nhất


/*
let a = Number(prompt("nhap so a"));
let b = Number(prompt("nhap so b"));
let c = Number(prompt("nhap so c"));

let max = a;
b >= max && (max = b);
c >= max && (max = c);
console.log(max + " la so lon nhat")
*/

// 6.Viết chương trình nhập 3 số a, b, c bất kỳ. Kiểm tra 3 số đó có tạo thành tam giác hợp lệ hay
// không và in ra kết quả, sử dụng toán tử logic
/*
let a = Number(prompt("nhap so a"));
let b = Number(prompt("nhap so b"));
let c = Number(prompt("nhap so c"));

a < b && a < c && b <= c && console.log("3 số đó có tạo thành tam giác hợp lệ");
a < b || a < c || b <= c || console.log("3 số đó không tạo thành tam giác hợp lệ");
*/

// Làm lại Exercise của if else sử dụng toán tử ?
// Viết chương trình nhập vào một số a, kiểm tra số đó là chẵn hay lẻ và in kết quả
/*
let a = Number(prompt("nhập vào so a"));

a % 2 == 0
  ? console.log(a + " là số chẵn ")
  : console.log(a + " là số lẻ ");
*/

//Viết chương trình nhập vào 2 số a, b, kiểm tra và in ra số lớn hơn
/*
let a = Number(prompt("nhập vào so a"));
let b = Number(prompt("nhập vào so b"));

a > b
  ? console.log("a lon hon")
  : console.log("b lon hon");

*/

//Viết chương trình nhập vào một tháng trong năm, in ra mùa tương ứng
/*
let m = Number(prompt("nhập vào tháng trong năm"));

0 < m && m < 4
  ? console.log("tháng " + m + " là mùa xuân ")
  : 3 < m && m < 7
  ? console.log("tháng " + m + " là mùa hè ")
  : 6 < m && m < 10
  ? console.log("tháng " + m + " là mùa thu ")
  : 9 < m && m < 13
  ? console.log("tháng " + m + " là mùa đông ")
  : console.log(" bạn nhập tháng sai ");

*/

// Viết chương trình nhập một số a, kiểm tra và in ra số đó có chia hết cho cả 5 và 11 hay
// không
/*
let a = Number(prompt("nhập một số a"));

a % 5 == 0 && a % 11 == 0
  ? console.log("số " + a + " có chia hết cho 5 và 11 ")
  : console.log("số " + a + " không chia hết cho 5 và 11 ");

*/
//Viết chương trình nhập vào 2 số a, b là tham số của phương trình bậc nhất ax + b = 0, 
//tính và in ra nghiệm của phương trình đó
/*
let a = Number(prompt("nhap so a"));
let b = Number(prompt("nhap so b"));
let x = -b / a;
a == 0 && b == 0
  ? console.log("phương trình có vô số nghiệm.")
  : a == 0 && b != 0
    ? console.log("phương trình vô nghiệm.")
    : a != 0
      ? console.log("phương trình có nghiệm duy nhất " + x)
      : console.log("");

*/
