import { useState } from 'react'
import { useEffect } from 'react';
import Note from './Note'

function App(props) {

  const [notes, setNota] = useState(props.notes);
  const [newNote, setNewNote] = useState("Nueva nota")
  
  const addNota = (e) =>{
    e.preventDefault()
    const noteAdd = {
      id: notes.length + 1,
      content: newNote,
    }

    setNota(notes.concat(noteAdd));
    setNewNote('');
  }

  const handleValue = (e) =>{
    setNewNote(e.target.value)
  }
 
 return(
  <>
  <div className='contenedor'>
    <h1>Notes<span>.</span></h1>
    <ul>
      {
        notes.map(note => 
          <Note key={note.id} note={note} />
        )
      }
    </ul>
    <form onSubmit={addNota}>
      <input value={newNote} onChange={handleValue} type='text' id='note' />
      <button type='submit'>Guardar</button>
    </form>
  </div>
  </>
 )
}

export default App
