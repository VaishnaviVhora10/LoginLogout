import React from 'react';
import { Box, TextField, Typography, Button, Grid } from '@mui/material';
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import GetPost from './GetPost';

function Login() {

    const [emp_id, setEmp_id] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);
    const [gettoken, setGettoken] = useState();
    const navigate = useNavigate();

    function handleClick(){
      setData([...data, emp_id, password ]);
    
   try {
    axios.post(
      'https://empappregular.herokuapp.com/login',
      {
        emp_id: emp_id, 
       password: password
      }
    ).then((response) => {
      const token = response?.data?.token;
      localStorage.setItem("token",token);
      console.log(response.status);
      if(response.status === 400){
        alert("Please Enter Correct LoginId PassWord")
        navigate('/Login');
      }else if(response.status === 200){
        alert("Login Sucessfully");
        navigate('/GetPost');
      }
      
  
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
     <div>
       
         <Grid
           container
           maxWidth="sm"
           bgcolor="skyblue"
           sx={{ height: 500, margin: "auto", pt: 5, pl: 18 }}
         >
           <Grid item xs={8}>
             <Box>
               <Typography
                 sx={{
                   pt: 3,
                   pb: 1,
                   fontFamily: "Raleway",
                   fontWeight: "fontWeightBold",
                   fontSize: 30,
                 }}
               >
                 LogIn
               </Typography>
             </Box>
             <TextField
               sx={{ pb: 2, width: "35ch" }}
               label="Enter Your Email"
               type="number"
               variant="standard"
               value={emp_id}
               onChange={(e) => setEmp_id(e.target.value)}
             ></TextField>
             <TextField
               sx={{ pb: 2, width: "35ch" }}
               label="Enter Your Password"
               type="password"
               variant="standard"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
             ></TextField>
             Don't have an account? <Link to="/"> SignUp</Link>
             
               <Button
                 sx={{ mt: 5, width: "35ch", height: "5ch" }}
                 variant="contained"
                 onClick={handleClick}
               >
                 LogIn
               </Button>
             
           </Grid>
         </Grid>
     </div>
   );
  }


export default Login;