import React from "react";
import { Link } from "react-router-dom";
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const Header = () => {
    const handleClick = (e) => {
        console.log('clicked')
    }
    const buttons = [
        <Button key="one"><Link to="/upgrade" className="text-link">Upgrade</Link></Button>,
        <Button key="two"><Link to="/contact" className="text-link">Contact</Link></Button>,
        <Button key="three" onClick={handleClick} style={{color: "white"}}>Theme</Button>,
      ];

    return (
        <> 
            <header>
                <div className="navbar">
                <Link to="/" className="text-link"><h1><NoteAltOutlinedIcon/> MyKeeper</h1></Link>
                <div className="links">
                <ButtonGroup size="large" aria-label="large button group">
                {buttons}
                </ButtonGroup>
                </div>
                </div>
            </header>
        </>
     );
}
 
export default Header;