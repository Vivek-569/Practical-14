var number = document.getElementById("num");
var btn_minus = document.getElementById("btn-minus");
var btn_plus = document.getElementById("btn-plus");

count = 0;
if (count == 0) {
    btn_minus.disabled = true;
}

function minus() {
    if (count > 0) {
        number.innerHTML = --count;
    }
    if (count > 0) {
        btn_minus.disabled = false;
    } else {
        btn_minus.disabled = true;
    }
}

function plus() {
    number.innerHTML = ++count;
    if (count > 0) {
        btn_minus.disabled = false;
    } else {
        btn_minus.disabled = true;
    }
}