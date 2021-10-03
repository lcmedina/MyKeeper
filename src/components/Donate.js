import React, { useState } from "react";
import ReactDOM from "react-dom"
import TextField from '@mui/material/TextField';
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useHistory, Redirect } from 'react-router-dom'


function Donate() {
    const history = useHistory();
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
    <TextField type="number" id="amount"></TextField>
   <PayPalButtons
       style={{ layout: "horizontal" }}
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