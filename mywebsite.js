/*var divs= document.getElementsByTagName("div");
function highlight(){
  classList.add("mouseOver")
}*/
// script.js
const divs = document.querySelectorAll('.highlightable');

divs.forEach(div => {
    div.addEventListener('mouseenter', () => {
        div.classList.add('highlighted');
    });

    div.addEventListener('mouseleave', () => {
        div.classList.remove('highlighted');
    });
});
