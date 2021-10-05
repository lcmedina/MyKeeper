import React from "react";
import CreateArea from "./CreateArea";
import NotesList from "./NotesList";
import useFetch from "./useFetch";

const NoteDisplay = () => {

  const { data: notes } = useFetch('http://localhost:8000/notes')
    return ( 
        <div>
        <CreateArea />
       {notes && <NotesList notes={notes}/>}
        </div>
        
     );
}
 
export default NoteDisplay;