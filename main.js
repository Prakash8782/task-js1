var a = document.querySelectorAll(".btns");
function calculate() {
    var up = parseInt(this.parentNode.previousElementSiblings.firstchild.value);
    var qty = parseInt(this.parentNode.previousElementSiblings.previousElementSiblings.firstchild.value);
    var prc = up * qty;
    console.log(z);
    this.parentNode.previousElementSiblings.firstchild.innerText = prc;

}
function addEvent(a) {
    a.addEventListener("click", calculate);
}
a.forEach(addEvent);