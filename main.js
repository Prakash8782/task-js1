var a = document.querySelectorAll(".btn");
var b = document.querySelectorAll(".up");
var c = document.querySelectorAll(".qty");
function calculate() {
    var x=(this.parentNode.previousElementSibling.previousElementSibling.innerText);
    var y=parseInt(this.parentNode.previousElementSibling.firstChild.value);
    var z=x*y;
    this.parentNode.nextElementSibling.innerText=z;
}
function addEvent(a) {
    a.addEventListener("click", calculate);
}
a.forEach(addEvent);