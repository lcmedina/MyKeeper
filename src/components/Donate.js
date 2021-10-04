import React, { useState } from "react";
import ReactDOM from "react-dom"
import TextField from '@mui/material/TextField';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useHistory, Redirect } from 'react-router-dom'
import InputAdornment from '@mui/material/InputAdornment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


function Donate() {
    const history = useHistory();
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
            <div className="donation">
            <h1 style={{paddingBottom: '25px'}}>Love our Site?</h1>
            <h3 style={{paddingBottom: '25px'}}>Please consider making a donation so that we can continue providing out service to you!</h3>
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
            />
            </div>
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
    </PayPalScriptProvider>
  );
}

export default Donate;