import React from "react";
import { Link } from "react-router-dom";
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const NotesList = ({ notes }) => {
    
   
    
    return (
        <div>
        {notes.map((eachNote) => {
            return <div className="note" key={eachNote.id}>
                <h1>{eachNote.title}</h1>
                <p>{eachNote.content}</p>
                <button><PriorityHighOutlinedIcon/></button>
                <Link to={`notes/${eachNote.id}`}><button><MoreHorizOutlinedIcon/></button></Link>
            </div>
        })}
        </div>
    );
  }
   
  export default NotesList;