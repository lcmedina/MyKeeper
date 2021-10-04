import React from "react";
import { Link } from "react-router-dom";
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme, useThemeUpdate } from "./ThemeContext";


const Header = () => {
   const darkTheme = useTheme()
   const toggleTheme = useThemeUpdate()
   const themeStyles= {
       backgroundColor: darkTheme ? '#333' : '#f5ba13',
       }
    const buttons = [
        <Button key="one" style={{border: "none"}}><Link to="/donate" className="text-link">Donate</Link></Button>,
        <Button key="three" onClick={toggleTheme} style={{color: "white", border: "none"}}>{darkTheme ? <Brightness7Icon/> : <Brightness4Icon/>}</Button>,
      ];

    return (
        <> 
            <header style={themeStyles}>
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