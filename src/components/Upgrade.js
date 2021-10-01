import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const Upgrade = () => {
    const buttons = [
        <Button key="one">
        <h1>5GB Storage</h1>
        <p>$5/month</p>
        </Button>,
        <Button key="two">
        <h1>10GB Storage</h1>  
        <p>$10/month</p>
        </Button>,
        <Button key="three">
        <h1>15GB Storage</h1>  
        <p>$15/month</p>
        </Button>,
      ];

    return (
        <div  className="center">
        <Box sx={{ display: 'flex','& > *': { m: 1,},}}>
            <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="text">
            {buttons}
            </ButtonGroup>
        </Box> 
        </div>
     );
}
 
export default Upgrade;