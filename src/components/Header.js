import React from "react";
import { Link } from "react-router-dom";
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useTheme, useThemeUpdate } from "./ThemeContext";


const Header = () => {
   const darkTheme = useTheme()
   const toggleTheme = useThemeUpdate()
   const themeStyles= {
       backgroundColor: darkTheme ? '#333' : '#CCC',
       color: darkTheme ? '#CCC' : '#333'
       }
    const buttons = [
        <Button key="one"><Link to="/donate" className="text-link">Donate</Link></Button>,
        <Button key="two"><Link to="/contact" className="text-link">Contact</Link></Button>,
        <Button key="three" onClick={toggleTheme} style={{color: "white"}}>Theme</Button>,
      ];

    return (
        <> 
            <header>
                <div className="navbar" style={themeStyles}>
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