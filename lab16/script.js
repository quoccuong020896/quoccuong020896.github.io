/*
let p = document.getElementById("p");

console.log(p.dataset.type);

let img = document.createElement("img");

img.src =
    "https://lh3.googleusercontent.com/proxy/PZmekEzZ1GMw4mSXdnVGxUMjcH97Il0KUpYFbY9y02UFh82RojfrF1OPFwuYR3nsVpi2_Wuw14xJmoXmWq8jV0icNRtw9-8hZkitR0p17Suf_Y9aPxZfNkGV6dA0ddnk8dUMhw";
  
let div = document.createElement("div");
div.classList.add("container");
div.textContent = "Container";

document.body.insertAdjacentText("afterbegin", "nfiwbfbwkofv");
*/

let form = document.forms.converter;
let from = form.elements.from;
let to = form.elements.to;
let temp = form.elements.temp;
let btn = form.elements.btnConvert;
let kq = form.elements.kq;
function toCelcius(from, value) {
    if (from == "dok") {
        return value - 273.15;
    } else if (from == "dof") {
        return (value - 32) / 1.8;
    } else {
        return value;
    }
};

function celciusTo(from, value) {
    if (from == "dok") {
        return value + 273.15;
    } else if (from == "dof") {
        return value * 1.8 + 32;
    } else {
        return value;
    }
}

function convert() {
    let c = toCelcius(from.value, Number(temp.value));
    kq.value = celciusTo(to.value, c);
};
function ahaha() {
     console.log("ahaha function")
};
btn.addEventListener("click", convert);
btn.addEventListener("click", ahaha);



