import React from "react";
import CreateArea from "./CreateArea";
import NotesList from "./NotesList";
import useFetch from "./useFetch";
import { collection, getDocs } from "firebase/firestore";
import db from "../server";


const NoteDisplay = () => {
   console.log(db)
   const { data: notes } = useFetch('http://localhost:8000/notes')
    return ( 
        <div>
        <CreateArea />
       {notes && <NotesList notes={notes}/>}
        </div>
        
     );
}
 
export default NoteDisplay;