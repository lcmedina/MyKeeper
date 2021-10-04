import React from "react";
import TextField from '@mui/material/TextField';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import InputAdornment from '@mui/material/InputAdornment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useTheme } from "./ThemeContext";


function Donate() {
    const darkTheme = useTheme()
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
            <div className="donation">
            <h1 style={{paddingBottom: '25px', fontFamily: "McLaren", color: darkTheme ? '#f5ba13' : '#333'}}>Love our Site?</h1>
            <h3 style={{paddingBottom: '25px'}}>Please consider making a donation so that we can continue providing our service to you!</h3>
            <TextField 
            type="number" 
            id="amount" 
            variant="filled"
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <MonetizationOnIcon/>
                </InputAdornment>
                )
            }}
            style={{paddingBottom: '25px'}}
            />
            <PayPalButtons
            style={{ color: "blue", shape: "pill", label: "pay", height: 40 }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: document.getElementById('amount').value,
                            },
                        },
                    ],
                });
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                    alert("Thanks for donating " + details.payer.name.given_name + "!")
                })
            }}
        />
        </div>
    </PayPalScriptProvider>
  );
}

export default Donate;