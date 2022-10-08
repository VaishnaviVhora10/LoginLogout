import React from 'react';
import { Box, TextField, Typography, Button, Grid, Input } from '@mui/material';
import {useState, useEffect} from 'react';
import axios from "axios";

function CreatePost() {

    const [about, setAbout] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubTitle] = useState("");
    const [img, setImg] = useState("");
    const [post, setPost] = useState([]);
    const [getToken, setGetToken] = useState('');

    useEffect(() => {
    console.log("local token ",localStorage.getItem('token'));
    setGetToken(localStorage.getItem('token'));
    console.log('getting token', getToken);
    })

    function handleCreatePost(){

        const formData = new FormData();
        
        formData.append("title",title);
        formData.append("subtitle",subtitle);
        formData.append("about",about);
        formData.append("files",img,img.name);

        setPost([...post, about, title, subtitle, img ]);
        console.log(post);
        
   try {
    axios.post(
      'https://empappregular.herokuapp.com/createPost',
        formData,
      {
        headers : {
            token: getToken,     
        }
      }
    ).then((response) => {
      console.log(response.data);
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
    <Grid container maxWidth="sm" bgcolor="skyblue" sx={{height:500, margin: "auto", pt:5, pl:18}} >
      <Grid item xs={8} >
      <Box >
      <Typography sx={{pt:3, pb:1, fontFamily:'Raleway', fontWeight:"fontWeightBold", fontSize:30}}>Create Your Post</Typography>
        </Box>
        <TextField sx={{pb:2, width: '35ch'}}
            label="Enter About"
            type="text"
            variant="standard"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></TextField>
          <TextField sx={{pb:2, width: '35ch'}}
            label="Enter Your Title"
            type="text"
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></TextField>
           <TextField sx={{pb:2, width: '35ch'}}
            label="Enter Your SubTitle"
            type="text"
            variant="standard"
            value={subtitle}
            onChange={(e) => setSubTitle(e.target.value)}
          ></TextField>
          <Box> 
          <Input placeholder='Add Image' type='file' onChange={(e)=>{setImg(e.target.files[0])}}></Input>

          </Box>
          <Button sx={{mt:5, width: '35ch', height:'5ch'}} 
        variant="contained"
        onClick={handleCreatePost}>Create Post</Button>
        </Grid>
        </Grid>
  )
}

export default CreatePost;