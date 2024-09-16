import React from 'react'
import {  Box,TextField,Button,styled } from '@mui/material';


 

const Login = () => {

const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
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
