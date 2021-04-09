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