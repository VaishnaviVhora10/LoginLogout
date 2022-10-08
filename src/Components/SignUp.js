import React from "react";
import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import Saly from '../Images/Saly.png';
import { useState } from "react";
import {Link} from 'react-router-dom';
import axios from "axios";

function SignUp() {
  const [emp_id, setEmp_id] = useState("");                   // state for required fields
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  function handleClick() {
   setData([...data, emp_id, name, lastname, email, password]);       // set the data in "data state"

   try {
    axios.post(
      'https://empappregular.herokuapp.com/signUp',                 // 
      {
        emp_id: emp_id, 
        name: name, 
        password: password
      }
    ).then((response) => {
      console.log(response.data.token);
    }).catch((error) => {
      console.log('internal error');
      console.log('your erro',error);
    })
   }
   catch(error) {
    console.log("this is catch ")
    console.log(error);
   }
  }

  return (
    <Grid container maxWidth="lg" >
      <Grid item xs={6} display= "block">
        <Grid item xs={8} >
          <Box >
          <Typography sx={{pt:3, pb:1, fontFamily:'Raleway', fontWeight:"fontWeightBold", fontSize:30}}>SignUp</Typography>
          <Typography sx={{pt:3, pb:7, fontFamily:'Raleway'}}>Please Enter Your Information To Sign Up</Typography>
          </Box>
          <TextField sx={{pb:2, width: '35ch'}} 
            label="Enter Your Employee Id"
            type="number"
            variant="standard"
            value={emp_id}
            onChange={(e) => setEmp_id(e.target.value)}
          ></TextField>
          <TextField sx={{pb:2, width: '35ch'}} 
            label="Enter Your Name"
            type="text"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <TextField sx={{pb:2, width: '35ch'}}
            label="Enter Your Last Name"
            type="text"
            variant="standard"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          ></TextField>
          <TextField sx={{pb:2, width: '35ch'}}
            label="Enter Your Email"
            type="email"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField sx={{pb:2, width: '35ch'}}
            label="Enter Your Password"
            type="password"
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </Grid>
       <Typography sx={{marginRight:'215px'}}>
       Already have an account
       </Typography>
       
       <Link to="/Login"><Typography sx={{marginRight:'215px'}}>Login</Typography></Link>
       <Button sx={{mt:5, width: '35ch', height:'5ch', marginRight:'215px'}} 
        variant="contained"
        onClick={handleClick}>SignUp</Button> 
      </Grid>
      <Grid item xs={6} sx={{ bgcolor: "#0000FF" }}>
        <Box sx={{ height: "100vh" }}>
        <img sx={{pt:1}} src={Saly}></img>
        <Typography sx={{pt:3, pb:1, fontFamily:'Raleway', fontWeight:"fontWeightBold", fontSize:30, justifyContent:"start"}}>Sign Up</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignUp;
