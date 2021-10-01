import React, {useState} from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

const NoteDisplay = () => {
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
            <CreateArea onAdd={addNote}/>
       {notes.map((eachNote, index) => {
        return <Note
        key={index} //swap out for uuid
        id={index}
        title={eachNote.title}
        content={eachNote.content}
        onDelete={deleteNote}
        />
      })}
        </div>
        
     );
}
 
export default NoteDisplay;