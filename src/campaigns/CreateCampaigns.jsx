import React from 'react';

import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css';

import { Box, InputBase } from '@mui/material';



export default  function CreateCampaigns() {

  const { quill, quillRef } = useQuill();

  console.log(quill);   
  console.log(quillRef);


	
  return(
    <Box style={{display: "flex",height: "100vh",alignItems: "center",  justifyContent: "center"}}>
      <div style={{ width: "70%", height: 413,position:"relative" }}>
        <div ref={quillRef}/>
      </div>
    </Box>
  )
}

