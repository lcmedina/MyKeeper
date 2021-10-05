import { useParams, useHistory } from "react-router";
import useFetch from "./useFetch"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useTheme } from "./ThemeContext";


const ExpandNote = () => {
    const {id} = useParams();
    const history = useHistory();
    const { data: note } = useFetch('https://react-my-keeper.herokuapp.com/notes/' + id);
    const darkTheme = useTheme()

    const handleDelete = () => {
        fetch('https://react-my-keeper.herokuapp.com/notes/' + note.id, {
            method: 'DELETE'
        }).then(()=>{
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