import React, { useState } from 'react';
import Axios from 'axios';
import { Dialog, DialogContent } from '@material-ui/core';

const NewUser = () => {
  const [open, setOpen] = useState(false);
  const [firstNameReg, setFirstNameReg] = useState('')
  const [lastNameReg, setLastNameReg] = useState('')
  const [emailReg, setEmailReg] = useState('')
  const [passReg, setPassReg] = useState('')
  
  const handleToggle = () => {
    setOpen(!open);
  };

  const register = (e) => {
    e.preventDefault();
    console.log(firstNameReg, lastNameReg, emailReg, passReg)
    Axios.post('https://gleaming-modem-343016.uc.r.appspot.com/users', {
      firstName: firstNameReg,
      lastName: lastNameReg,
      email: emailReg,
      password: passReg
    }).then((res) => {
      handleToggle()
      console.log(res)
    })
  }


  return (
    <div>
      <button id='user-button' color="primary" onClick={handleToggle}>
        Create Account
      </button>
      <Dialog onClose={handleToggle} className="dialog" open={open}>
          <h1 className='header'>Create Account</h1> 
        <DialogContent dividers>
        <form className='form'
          style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
          <label>First Name</label>
          <input 
              id="first_name" 
              onChange={(e) => {setFirstNameReg(e.target.value)}} 
              required />
          <label>Last Name</label>
          <input 
              id="last_name" 
              onChange={(e) => {setLastNameReg(e.target.value)}} 
              required />
          <label>Email</label>
          <input 
              id="email" 
              onChange={(e) => {setEmailReg(e.target.value)}} 
              required />
          <label>Password</label>
          <input 
              id="passowrd" 
              type="password"
              onChange={(e) => {setPassReg(e.target.value)}} 
              required />
          <br />
          <button type="submit" onClick={register}>Submit</button>
      </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default NewUser