/*let sum = (a, b, ...agrs) => {
    let total = a + b;
    for (i = 0; i < agrs.length; i++){
        total += agrs[i];
    };
    return total;
};
console.log(sum(1, 2, 3, 4));

*/
/*
let students = [
{
name: "Tú Anh",
age: 21,
},
{
name: "Chị Hạnh",
age: 30,
},
{
name: "Quang",
age: 24,
},
{
name: "Cường",
age: 25,
},
{
name: "Hoàng",
age: 29,
},
{
name: "Ngọc",
age: 27,
},
{
name: "Huy",
age: 19,
},
];

// Viết hàm sử dụng cú pháp arrow function, destructuring assignment
// sắp xếp danh sách học viên theo tuổi
students.sort((a, b) => a.age - b.age);
console.log(students);

let newarr = students.filter((i) => i.age >= 25);

console.log(newarr);

newarr.sort((a, b) => b.age - a.age);
console.log(newarr);
let sumAge = students.reduce((sum, { age }) => (sum += age), 0);
console.log(sumAge);
*/
let students = [
  {
    name: "Tú Anh",
    age: 21,
    email: "tuanh@techmaster.vn",
  },
  {
    name: "Chị Hạnh",
    age: 30,
    email: "hanh@techmaster.vn",
  },
  {
    name: "Quang",
    age: 24,
    email: "quang@techmaster.vn",
  },
  {
    name: "Cường",
    age: 25,
    email: "cuong@techmaster.vn",
  },
  {
    name: "Hoàng",
    age: 29,
    email: "hoang@techmaster.vn",
  },
  {
    name: "Ngọc",
    age: 27,
    email: "ngoc@techmaster.vn",
  },
  {
    name: "Huy",
    age: 19,
    email: "huy@techmaster.vn",
  },
];