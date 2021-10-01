import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";


const Contact = () => {
    return ( 
        <div className="center" id="contactForm">
            <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Name" variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Email" variant="outlined" /><br/>
            <TextField
            id="outlined-textarea"
            label="Message"
            multiline/><br/>
            <Button variant="outlined">Submit</Button>
            </Box>
            <span>Thank you for your message! We will be in contact shortly!</span>
        </div>
     );
}
 
export default Contact;