/*
let myPhone = {
    name: "iphone 6",
    price: "1 milion",
    brand: "Apple",
    since: 2015,
    start: function () {
        console.log("startUp");
    }
};
myPhone.price = "100000$";
console.log(myPhone.price);
myPhone.start();//goi ham
myPhone["start"]();// goi ham
myPhone["size"] = "6 inch";// them thuoc tinh
delete myPhone["since"];
console.log(myPhone);
*/
/*
let salaries = {};

function input(obj) {
    for (; ;){
        let name = prompt("ten nhan vien");
        let salary = prompt("luong cua " + name);
        if (name == null || salary == null || name == "" || salary == "") {
            break;
        } else {
            obj[name] = Number(salary);
        }
    }
};
input(salaries);

*/
let salaries = {
  anna: 1000,
  john: 1200,
  phoebe: 2000,
  brian: 1500,
  diana: 1100,
};
/*
function edit(obj) {
    for (;;) {
      let name = prompt("ten nhan vien");
      let salary = prompt("luong cua " + name);
      if (name == null || salary == null || name == "" || salary == "") {
        break;
      } else if (name in obj) {
        obj[name] = Number(salary);
      }
    }
}
edit(salaries);
*/
/*
function total(obj) {
    let sum = 0;
    for (let k in obj) {
        sum += obj[k];
    }
    return sum;
};
console.log(total(salaries));
*/
/*
function minMax(obj) {
    let min = Infinity;
    let max = 0;
    let maxName;
    let minName;
    let object = {};
    for (let k in obj) {
        if (obj[k] > max) {
            max = obj[k];
            maxName = k;
        }
        if (obj[k] < min) {
            min = obj[k];
            minName = k;
        }
    }
    object[maxName] = max;
    object[minName] = min;
    return object;
}
console.log(minMax(salaries));
*/
function avg(obj) {
    let sum = 0;
    let avg = 0;
    let count = 0;
    for (let k in obj) {
        count++;
        sum += obj[k];
    }
    return avg = sum / count;
};
console.log(avg(salaries));
/*
1. Viết hàm remove(obj, key), hàm nhận vào tham số thứ nhất là một object và tham số thứ 2 là một chuỗi,
    trả về một object MỚI không chứa key tương ứng với tham số thứ 2.

VD:
let demo = {a: 1, b: 2}
remove(demo, 'b') -> {a: 1}
*/


/*
2. Viết hàm isEqual(obj1, obj2) thực hiện so sánh giá trị của 2 object.
VD:
let a = {x: 1, y: 2}
let b = {x: 1, y: 2}
isEqual(a, b) -> true
*/
/*
function isEqual(obj1, obj2) {
    for (let k in obj1) {
        if (!(k in obj2) || obj1[k] != obj2[k]) {
            return false;
        }
    }
    for (let k in obj2) {
      if (!(k in obj1) || obj1[k] != obj2[k]) {
        return false;
      }
    }
    return true;
}
console.log(isEqual());
*/
/*
3. Viết hàm intersection(obj1, obj2) nhận vào tham số là 2 object, trả về một object mới chứa
thuộc tính chung giữa 2 obj

VD:
let a = {x: 1, y: 2}
let b = {x: 1, z: 2}
intersection(a, b) -> {x: 1}
*/
/*
function intersection(obj1, obj2) {
    let objReturn = {};
    for (let k in obj1) {
        if (k in obj2 && obj1[k] == obj2[k]) {
            objReturn[k] = obj1[k];
        }
    }
    return objReturn;
}
console.log(intersection(a, b));
*/