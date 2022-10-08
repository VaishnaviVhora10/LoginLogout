import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {List, ListItem, Button} from "@mui/material";
import {Link } from "react-router-dom";
 
function GetPost() {
    const [data, setData] = useState([]);

    function handleSignOut(){
      alert("You are signed out");
      localStorage.removeItem("token");
      // console.log(localStorage.removeItem("token"))
    }
   
    const locdata = localStorage.getItem("token") 
    console.log(locdata)

    useEffect(()=>{
     axios.get(`https://empappregular.herokuapp.com/getAllPosts?${locdata}`).
     then((response)=>{setData(response.data)})
    },[])
    console.log(data);
      
    var new_data = Object. values(data);

    return (
    <div>
      <Link to = '/CreatePost'>
       <Button sx={{mt:5, width: '35ch', height:'5ch'}} 
        variant="contained">Create Post</Button>
       </Link>
       <Link to = '/Login'>
       <Button sx={{mt:5, width: '35ch', height:'5ch'}} 
        variant="contained" onClick={handleSignOut}>Sign Out</Button>
       </Link>
       
       
        {new_data?.map((post)=>{
          return(
         <> 
         <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
         <ListItem alignItems="flex-start">
          {post._id}
         </ListItem>
         <ListItem alignItems="flex-start">
          {post.title}
         </ListItem>
         <ListItem alignItems="flex-start">
          {post.subtitle}
         </ListItem>
         </List>
         </>  
          )
            })}

    </div>
  )
}

export default GetPost;