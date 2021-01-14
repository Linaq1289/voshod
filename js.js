var delta = 0;

function rotateBy10Deg(ele) {
    ele.style.webkitTransform = "rotate(" + delta + "deg)";
    delta += 60;
}