if (window.location.pathname == '/popup.html') {
    document.addEventListener('DOMContentLoaded', onStart, false);
}
else if (window.location.pathname == '/notes.html') {
    document.addEventListener('DOMContentLoaded', initNotesPage, false);
}

var notes = ['filler'];


function onStart() {
    if (localStorage.getItem('notesArray') !== null) {
        notes = JSON.parse(localStorage.getItem('notesArray'));
    }
    var saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', saveNote, false);
    var seeAllButton = document.getElementById('seeAllButton');
    seeAllButton.addEventListener('click', openNotesPage, false);
}

function saveNote() {
    var input = document.getElementById('noteField').value;
    if (notes[0] == 'filler') {
        notes.pop();
    }
    if (!notes.includes(input)) {
        notes.push(input);
    }
    localStorage.setItem('notesArray', JSON.stringify(notes));
    //printAbove(input, 'listEnd');
}

function openNotesPage() {
    window.open('notes.html', '_self', false);
}

function initNotesPage() {
    var clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', clearNotes, false);
    if  (localStorage.getItem('notesArray') !== null) {
        notes = JSON.parse(localStorage.getItem('notesArray'));
        for (var i = 0; i < notes.length; i++) {
            printList(notes[i]);
        }
    }
}

function clearNotes() {
    notes = [];
    localStorage.clear();
    location.reload();
}

function printAbove(text, element) {
    const d = document.createElement('div');
    textNode = document.createTextNode(text);
    d.appendChild(textNode);
    const beforeElement = document.getElementById(element);
    document.body.insertBefore(d, beforeElement);
}

function printList(text) {
    const notes = document.getElementById('notes');
    const listElement = document.createElement('li');
    textNode = document.createTextNode(text);
    listElement.textContent = text;
    notes.appendChild(listElement);
}