import React, { useEffect, useState } from 'react'
import "./ForgetPassword.css"
import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../Actions/User';
import { useAlert } from 'react-alert';

function ForgetPassword() {

const dispatch=useDispatch();
const alert=useAlert();
const {error, loading, message} = useSelector((state) => state.like);

const[email,setemail]=useState("");
const submitHandler=(e)=>{
  e.preventDefault();
  dispatch(forgotPassword(email));
}
useEffect(() => {
  if (error) {
    alert.error(error);
    dispatch({ type: "clearErrors" });
  }
 
  if (message) {
    alert.success(message);
    dispatch({ type: "clearMessage" });
  }
});

  return (
    <div className="forgetPassword">
    <form className="forgetPasswordForm" onSubmit={submitHandler} >
    <Typography variant="h3" style={{padding:"2vmax"}}>Socila App</Typography>
      <input className='forgetPasswordInputs' type="email"    id="email" placeholder="Email" value={email} required onChange={(e)=>{
         setemail(e.target.value);
      }}   />

     

      <Button disabled={loading} type="submit">Send Token</Button>
      
    

    </form>
  </div>
  )
}

export default ForgetPassword