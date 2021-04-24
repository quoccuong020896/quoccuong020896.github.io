// Cho mảng các object chứa các thông tin về học viên
let students = [{
        name: "Bùi Thanh Hà",
        age: 35,
        gender: "M",
    },
    {
        name: "Nguyễn Trường Giang",
        age: 27,
        gender: "M",
    },
    {
        name: "Phạm Minh Tuấn",
        age: 26,
        gender: "M",
    },
    {
        name: "Cung Bùi Tuấn Anh",
        age: 28,
        gender: "M",
    },
    {
        name: "Trịnh Bá Hưng",
        age: 27,
        gender: "M",
    },
    {
        name: "Đỗ Phương Thảo",
        age: 22,
        gender: "F",
    },
    {
        name: "Đặng Vũ Lam Mai",
        age: 22,
        gender: "F",
    },
    {
        name: "Đỗ Thanh Lam",
        age: 24,
        gender: "F",
    },
    {
        name: "Nguyễn Phương Hà",
        age: 25,
        gender: "F",
    },
    {
        name: "Nguyễn Đỗ Tuệ Minh",
        age: 19,
        gender: "F",
    },
    {
        name: "Nguyễn Đỗ Anh Minh",
        age: 18,
        gender: "M",
    },
];

/**
 * Viết CT JavaScript tạo bảng danh sách học viên
 * Tạo các thành phần HTML sử dụng: document.createDocument()
 * Thêm bảng vào div#app
 */
let tableLength = students.length;

let table = document.createElement("table");
table.setAttribute("id", "table");
document.getElementById("app").appendChild(table);

let tableTrH = document.createElement("tr");
tableTrH.setAttribute("id", "trhid");
tableTrH.setAttribute("class", "trhcl");
document.getElementById("table").appendChild(tableTrH);

for (let i in students[0]) {
    let th = document.createElement("th");
    let thText = document.createTextNode(i);
    th.appendChild(thText);
    document.getElementById("trhid").appendChild(th);
}

for (let i = 1; i <= tableLength; i++) {
    let tr = document.createElement("tr");
    tr.setAttribute("id", "trid" + i);
    tr.setAttribute("class", "trcl");
    document.getElementById("table").appendChild(tr);
    for (let x in students[i]) {
        let td = document.createElement("td");
        let tdtext = document.createTextNode(students[i][x]);
        td.appendChild(tdtext);
        document.getElementById("trid" + i).appendChild(td);
    }
}
/**
 * Thêm event cho các hàng, highlight hàng khi di chuột qua
 * Sử dụng event: mouseover, mouseout, mousein, ...
 */

for (let i = 0; i <= tableLength; i++) {

    let hover = document.getElementById("trid" + i);
    hover.onmouseover = function() {
        mouseOver();
    };
    hover.onmouseout = function() {
        mouseOut();
    };

    function mouseOver() {
        this.classList.add("red");
    }

    function mouseOut() {
        this.classList.remove("red");
    }
}

/**
 * Thêm event click cho cột tuổi (thẻ <th>), sắp xếp bảng theo độ tuổi
 * Có thay đổi thứ tự (click 1 lần sx tăng dần, click 2 lần giảm, 
 * và icon hiển thị trạng thái tăng/giảm)
 */

/**
 * Thêm form, ô input và nút tìm kiếm
 * Cho phép nhập tên học viên, tìm kiếm và highlight học viên có tên trùng khớp (sử dụng thẻ <mark>)
 */

/**
 * Thêm form, các ô input tên, tuổi, giới tính, và nút thêm
 * Cho phép nhập thông tin học viên, tạo mới phần tử và thêm vào bảng
 */