
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useTheme } from "./ThemeContext";
import db from "../server"
import { ref, onValue } from "firebase/database";

let allNotes = []

const NotesList = ({ notes }) => {
    const darkTheme = useTheme()
    const themeStyles= {
            color: darkTheme ? '#333' : '#f5ba13',
        }

    const noteRef = ref(db, '/notes');
    // useEffect(() => {
    //         onValue(noteRef, (snapshot) => {
    //             snapshot.forEach((note) => {
    //                 allNotes.push(note.val())
    //             });
    //         }) 
    //         console.log(allNotes)
    // }, [noteRef])
    
    return (
        
        <div>
        {/* {
            onValue(noteRef, (snapshot) => {
            let allNotes = []
            snapshot.forEach((note) => {
                return <div className="note" key={note.val().id}>
                <h1 style={{color: darkTheme ? '#f5ba13' : '#333'}}>{note.val().title}</h1>
                <div><p>{note.val().content}</p></div>
                <button style={themeStyles}><PriorityHighOutlinedIcon/></button>
                <Link to={`notes/${note.val().id}`}><button style={themeStyles}><MoreHorizOutlinedIcon/></button></Link>
            </div>
            });
        })
        } */}
        {notes.map((eachNote) => {
            return <div className="note" key={eachNote.id}>
                <h1 style={{color: darkTheme ? '#f5ba13' : '#333'}}>{eachNote.title}</h1>
                <div><p>{eachNote.content}</p></div>
                <button style={themeStyles}><PriorityHighOutlinedIcon/></button>
                <Link to={`notes/${eachNote.id}`}><button style={themeStyles}><MoreHorizOutlinedIcon/></button></Link>
            </div>
        })}
        </div>
    );
  }
   
  export default NotesList;