import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
   setNotes(prevNotes => {
     return prevNotes.filter((noteItem, index) => {
       return index !== id;
     })
   })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((eachNote, index) => {
        return <Note
        key={index} //swap out for uuid
        id={index}
        title={eachNote.title}
        content={eachNote.content}
        onDelete={deleteNote}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
