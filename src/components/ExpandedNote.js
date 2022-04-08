import { useParams, useHistory } from "react-router";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useTheme } from "./ThemeContext";
import { onValue, ref, remove } from "firebase/database";
import db from "../server"
import { useEffect, useState } from "react";


const ExpandNote = () => {
    const [note, setNote] = useState()
    const {id} = useParams();
    const history = useHistory();
    const darkTheme = useTheme()
    const noteRef = ref(db, 'notes/' + id)

    useEffect(() => {
        onValue(noteRef, (snapshot) => {
            setNote(snapshot.val())
        })
    }, [noteRef])

    const handleDelete = () => {
        remove(ref(db, 'notes/' + id))
        .then(()=>{
            history.push("/")
        })
    }

    return ( 
        <div>
            {note && (
                <div className="indv-note">
                <h1 style={{color: darkTheme ? '#f5ba13' : '#333', fontFamily: "McLaren"}}>{note.title}</h1>
                <p>{note.content}</p>
                <button onClick={handleDelete} className="delete"><DeleteOutlineIcon fontSize="large"/><h5 style={{color: '#C6262A'}}>Delete This Note</h5></button>
                </div>
            )}
        </div>
     );
}
 
export default ExpandNote;
