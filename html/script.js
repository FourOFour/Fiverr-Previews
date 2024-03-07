let BASE_URL = import.meta.env.BASE_URL;
let topElement = document.getElementById('top');
let timeOutes = {};
let storage = window.localStorage;
let isDark;

function updatedAndSaveDark(isDark) {
    if (storage) {
        storage.setItem('dark', isDark)
    }
}

function readDark() {
    if (storage) {
        isDark = storage.getItem('dark') !== 'false';

        if (isDark) {
            topElement.classList.add('dark');
        }
    }
}

function toggleDark(e) {
    if (e) {
        e.preventDefault();
    }

    topElement.classList.toggle('dark');
    isDark = !isDark;
    updatedAndSaveDark(isDark);
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

function dataStateCheckToggle(e, button, span) {
    let element = e.target;
    let btn = document.getElementById(button);
    let check = document.getElementById(span);

    if (e.target.checked) {
        btn.setAttribute('aria-checked', 'checked')
        btn.setAttribute('data-state', 'checked')
        check.setAttribute('data-state', 'checked')
    } else {
        btn.setAttribute('aria-checked', 'unchecked')
        btn.setAttribute('data-state', 'unchecked')
        check.setAttribute('data-state', 'unchecked')
    }

}

function dataStateBtnClick(e, id) {
    let element = e.target;
    let input = document.getElementById(id);
    input.click();
}

window.toggleDark = toggleDark;
window.toggleElement = toggleElement;
window.timeoutMouseLeave = timeoutMouseLeave;
window.timeoutMouseEnter = timeoutMouseEnter;
window.dataStateCheckToggle = dataStateCheckToggle;
window.dataStateBtnClick = dataStateBtnClick;

document.addEventListener('DOMContentLoaded', function() {
    readDark();
});