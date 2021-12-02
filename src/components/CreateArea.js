import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { useTheme } from "./ThemeContext";
import { ref, set, push, child, update } from "firebase/database";
import db from "../server";

const CreateArea = () => {
  const [isExpanded, setExpanded] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("")

  const darkTheme = useTheme()
  const themeStyles= {
            backgroundColor: darkTheme ? '#333' : '#f5ba13',
        }

  const submitNote = (e) => {
     const note = { title, content };
    e.preventDefault();

    const notesRef = ref(db, 'notes');
    const newNoteRef = push(notesRef);
    set(newNoteRef, {
      title,
      content,
      id: newNoteRef.key
    })

    // fetch('https://keeper-ac59e-default-rtdb.firebaseio.com/notes', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(note)
    // }).then(()=>{
    //   window.location.reload()
    // })

  };

  const expand = (e) => {
    setExpanded(true)
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />}
        <textarea
          name="content"
          value={content}
          onClick={expand}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}><Fab onClick={submitNote} style={themeStyles}><AddCircleOutlineIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;