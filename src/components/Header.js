import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import { Button } from "@mui/material";


const Header = () => {
    const handleClick = (e) => {
        console.log('clicked')
    }

    return (
        <> 
            <header>
                <div className="navbar">
                <Link to="/"><h1><NoteAltOutlinedIcon/>MyKeeper</h1></Link>
                <div className="links">
                <Link to="/upgrade">Upgrade Your Storage</Link>
                <Link to="/contact">Contact Admin</Link>
                <Button variant="outlined" onClick={handleClick}>Theme</Button>
                </div>
                </div>
            </header>
        </>
     );
}
 
export default Header;