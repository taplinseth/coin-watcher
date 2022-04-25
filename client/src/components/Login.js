import React, { useState } from 'react';
import Axios from 'axios';
import { Button, Dialog, DialogContent } from '@material-ui/core';

const Login = (props) => {
  const {setUsername, updateStatus, setUserID} = props
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')

  const handleToggle = () => {
    setOpen(!open);
  };

  const login = (e) => {
    e.preventDefault();
    Axios.post('https://gleaming-modem-343016.uc.r.appspot.com/users', {
      email: email,
      password: pass
    }).then((res) => {

      if(res.data.message){
        setError(res.data.message)
      } else {
        updateStatus(true)
        setUsername(res.data[0].name)
        setUserID(res.data[0].id)
        handleToggle()
        console.log("success", res.data[0].id)
      }
    })
  }



  return (
    <div>
      <button color="primary" onClick={handleToggle}>
        Login
      </button>
      <Dialog onClose={handleToggle} className="dialog" open={open}>
          <h1 className='header'>LOGIN</h1> 
        <DialogContent dividers>
        <form className='form'
          style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
          <p style={{color: "red"}}>{error}</p>
          <label>Email</label>
          <input 
              id="email" 
              placeholder={email}
              onChange={(e) => {setEmail(e.target.value)}} 
              required />
          <label>Password</label>
          <input 
              id="passowrd" 
              type="password"
              onChange={(e) => {setPass(e.target.value)}} 
              required />
          <br />
          <Button onClick={login} type="submit">Login</Button>
      </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Login