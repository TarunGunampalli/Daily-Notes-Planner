document.addEventListener('DOMContentLoaded', initNotesPage, false);

/*
var notes = ['filler', 'hi1', 'hi2', 'hi3'];

function onStart() {
    if (localStorage.getItem('notesArray') !== null) {
        notes = JSON.parse(localStorage.getItem('notesArray'));
    }
    var saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', saveNote, false);
    var seeAllButton = document.getElementById('seeAllButton');
    seeAllButton.addEventListener('click', openNotesPage, false);
}
*/

function initNotesPage() {
    var clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', clearNotes, false);
    printList();
}

function clearNotes() {
    notes = [];
    localStorage.clear();
    location.reload();
}

function printList() {
    if  (localStorage.getItem('notesArray') !== null) {
        notes = JSON.parse(localStorage.getItem('notesArray'));
        printAbove(typeof notes, 'listEnd');
        for (var i = 0; i < notes.length; i++) {
            if (notes[i] != '') {
                const notes = document.getElementById('notes');
                const listElement = document.createElement('li');
                listElement.textContent = notes[i];
                notes.appendChild(listElement);
                printAbove(notes[i], 'listEnd');
            }
        }
    }
}

function printAbove(text, element) {
    const d = document.createElement('div');
    textNode = document.createTextNode(text);
    d.appendChild(textNode);
    const beforeElement = document.getElementById(element);
    document.body.insertBefore(d, beforeElement);
}