import React from "react";
import { Link } from "react-router-dom";
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useTheme } from "./ThemeContext";
import { v4 as uuidv4 } from "uuid";

const NotesList = ({ notes }) => {
    const uuid = uuidv4();
    const darkTheme = useTheme()
    const themeStyles= {
            color: darkTheme ? '#333' : '#f5ba13',
        }
    return (
        <div>
        {notes.map((eachNote) => {
            return <div className="note" key={uuid}>
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