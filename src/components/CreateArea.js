import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  const submitNote = (e) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    e.preventDefault();
  };

  const expand = (e) => {
    setExpanded(true)
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />}
        <textarea
          name="content"
          value={note.content}
          onClick={expand}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}><Fab onClick={submitNote}><AddCircleOutlineIcon/></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;