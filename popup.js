document.addEventListener('DOMContentLoaded', onStart, false);

var notes = new Array();

function onStart() {
    if (localStorage.getItem('notesArray') != 'null') {
        notes = localStorage.getItem('notesArray');
    }
    var saveButton = document.getElementById('saveButton');
    saveButton.addEventListener('click', saveNote, false);
    var seeAllButton = document.getElementById('seeAllButton');
    seeAllButton.addEventListener('click', openNotesPage, false);
}

function saveNote() {
    var input = document.getElementById('noteField').value;
    notes.push(input);
    localStorage.setItem('notesArray', notes);
    //printAbove(input, 'listEnd');
}

function openNotesPage() {
    window.open('notes.html', '_self', false);
    window.onLoad = function() {
        var backButton = document.getElementById('backButton');
        backButton.addEventListener('click', homePage, false);
    }
    notes = localStorage.getItem('notesArray');
    for (var i = 0; i < notes.length; i++) {
        printAbove(notes[i], 'listEnd');
    }
}

function homePage() {
    printAbove('run', 'listEnd');
    window.open('popup.html', '_self', false);
}

function printAbove(text, element) {
    const d = document.createElement('div');
    textNode = document.createTextNode(text);
    d.appendChild(textNode);
    const beforeElement = document.getElementById(element);
    document.body.insertBefore(d, beforeElement);
}