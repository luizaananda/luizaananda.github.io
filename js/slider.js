var slideInterval = 5000;

function getComments() {
    return document.getElementById('slider').getElementsByClassName('comment');
}

function moveForward() {
    var pointer = 0;
    var comments = getComments();
    for (var i = 0; i < comments.length; i++) {
        if (comments[i].classList.contains('visible')) {
            comments[i].classList.remove('visible');
            comments[i].classList.add('hidden');
            pointer = i;
        }
    }
    if (++pointer == comments.length) {
        pointer = 0;
    }
    comments[pointer].classList.add('visible');
    setTimeout(moveForward, slideInterval);
}

function startPlayback() {
    setTimeout(moveForward, slideInterval);
}


startPlayback();