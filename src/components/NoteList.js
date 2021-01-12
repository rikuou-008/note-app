import React, {useState} from 'react';
import NoteForm from "./NoteForm/NoteForm";
import Note from "./Note";


const NoteList = () => {
  const [notes, setNotes] = useState([]);

  const addNote = note => {
    if (!note.text || /^\s*$/.test(note.text)) {
        return;
    }
    const newNotes = [note, ...notes];

    setNotes(newNotes)
    console.log(...notes);
};

  const updateNote = (noteId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
    }

     setNotes(prev => prev.map(item => (item.id === noteId ? newValue : item)));
};

   const removeNote = id => {

    const removedArr = [...notes].filter(note => note.id !== id);
    setNotes(removedArr);
};

  const completeNote = id => {
    let updatedNotes = notes.map(note => {
        if (note.id === id) {
        note.isComplete = !note.isComplete
        }
        return note
    })
    setNotes(updatedNotes);
  };

return (
    <div>
           <h1>Whats the Plan for Today?</h1>
           <NoteForm onSubmit={addNote} />
           <Note
            notes={notes}
            completeNote={completeNote}
            removeNote={removeNote}
            updateNote={updateNote}
           />
    </div>
    )
}

export default NoteList;
