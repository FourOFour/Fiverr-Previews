let topElement = document.getElementById('top');
let timeOutes = {};

function toggleDark(e) {
    if (e)
        e.preventDefault();
    topElement.classList.toggle('dark');
}

function toggleElement(id) {
    let element = document.getElementById(id)
    element.classList.toggle('sm:hidden');
    
    clearTimeout(timeOutes[id]);
    
    timeOutes[id] = setTimeout(function() {
        element.classList.add('sm:hidden');
    }, 2500);
}

function timeoutMouseLeave(e) {
    let element = e.target;
    let id = element.id;

    timeOutes[id] = setTimeout(function() {
        element.classList.add('sm:hidden');
    }, 2500);
}

function timeoutMouseEnter(e) {
    let element = e.target;
    let id = element.id;

    clearTimeout(timeOutes[id]);
}