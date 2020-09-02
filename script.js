document.addEventListener('DOMContentLoaded', onStart, false);

var notes = ['filler'];

'use strict';

const e = React.createElement;

class saveButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        

        return e(
        'button',
        { onClick: saveNote() },
        'Save'
        );
    }
}

const domContainer = document.querySelector('#saveButton');
ReactDOM.render(e(saveButton), domContainer);

//popup page functions
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
    //printList();
}

function openNotesPage() {
    window.open('notes.html', '_self', false);
}

function printAbove(text, element) {
    const d = document.createElement('div');
    textNode = document.createTextNode(text);
    d.appendChild(textNode);
    const beforeElement = document.getElementById(element);
    document.body.insertBefore(d, beforeElement);
}

function printList() {
    if  (localStorage.getItem('notesArray') !== null) {
        notes = JSON.parse(localStorage.getItem('notesArray'));
        printAbove(typeof notes, 'listEnd');
        for (var i = 0; i < notes.length; i++) {
            printAbove(notes[i], 'listEnd');
        }
    }
}