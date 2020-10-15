import './style.css';
import './timer.js';

let cli = document.getElementById("open-modal");
cli.onclick = function () {
    document.getElementById('modal').style.display = "flex";
};
let close = document.getElementById("close-modal");
close.onclick = function () {
    document.getElementById('modal').style.display = "none";
};

let radio = document.querySelector('.radio-label-wrapper');
radio.onclick = function(){
   let a = document.querySelector('input[name="radioname"]:checked').value;
   let span = document.getElementById("result");
    span.innerText = a;
};

let topup = document.getElementById("topup");
topup.onclick = function () {
    let a = document.querySelector('input[name="radioname"]:checked').value;
    let paymentSelect = document.getElementById("payment-select");
    let b = paymentSelect.options[paymentSelect.selectedIndex].value;
    alert(b + "\nПолучить " + a);
};