function getComments() {
    return document.getElementById('slider').getElementsByClassName('comment');
}

function getDots() {
    return document.getElementById('slider').getElementsByClassName('dot');

}

var dots = getDots();
var comments = getComments();

for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", changeComments);

}

function changeComments(event) {
    const children = Array.prototype.slice.call(dots);
    for (var i = 0; i < dots.length; i++) {
        comments[i].classList.remove('visible');
        comments[i].classList.add('hidden');
        dots[i].classList.remove('selected');
        dots[i].classList.add('hidden');
    }
    const index = children.indexOf(event.target);
    event.target.classList.add('selected');
    comments[index].classList.add('visible');
}