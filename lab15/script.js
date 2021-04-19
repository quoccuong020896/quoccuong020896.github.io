let date = new Date().toTimeString();
let time = date.slice(0, 8);

let div = document.body.firstElementChild.nextElementSibling;
setInterval(function () {
    let date = new Date().toTimeString();
    let time = date.slice(0, 8);
    div.textContent = time;
}, 1000);
let childs = document.body.children;

childs = Array.from(childs);

childs.forEach(el => {
    if (el.tagName == "H1") {
        el.textContent = "Thời gian"
    }
});


let tbody = document.getElementById("tbody");
let trs = Array.from(tbody.rows);

trs.forEach(function (tr) {
    let tds = Array.from(tr.cells);
    tds.forEach(function (td) {
        if (tr.rowIndex == td.cellIndex) {
            td.style.backgroundColor = "red";
        }
    })
});

document.querySelector("tr:last-child td:first-child").style.backgroundColor = "yellow";

let demo = document.querySelector("#demo");
demo.innerHTML += "<p> paragraph</p>";