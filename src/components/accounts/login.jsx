import React from 'react'
import {  Box,TextField,Button,styled } from '@mui/material';


 

const Login = () => {


  return (
  <Box>
  <img src={imageURL} alt="" />
  <TextField id="standard-basic" label="Standard" variant="standard" />
  <TextField id="standard-basic" label="Standard" variant="standard" />
  <Button variant="contained">Login</Button>
  <Button>Create An Account</Button>
  </Box>
  )
}
export default Login;
