import { useParams, useHistory } from "react-router";
import useFetch from "./useFetch"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const ExpandNote = () => {
    const {id} = useParams();
    const history = useHistory();
    const { data: note } = useFetch('http://localhost:8000/notes/' + id);

    const handleDelete = () => {
        fetch('http://localhost:8000/notes/' + note.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push("/")
        })
    }

    return ( 
        <div>
            {note && (
                <div className="indv-note">
                <h1>{note.title}</h1>
                <p>{note.content}</p>
                <button onClick={handleDelete}><DeleteOutlineIcon/></button>
                </div>
            )}
        </div>
     );
}
 
export default ExpandNote;