import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { sendCampaignEmail } from '../service/campaign';
import { Box, InputBase, Typography, TextField, Button, styled } from '@mui/material';
import { Close, DeleteOutline } from '@mui/icons-material';


const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fc",
  borderRadius: 5,
  '& > p': {
    fontSize: 14,
    fontWeight: 500
  }
})

const RecipientsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  '& > div': {
    fontSize: 14,
    borderBottom: "1px solid #f5f5f5",
    marginTop: 10
  }

})

const Footer = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  align-items: center;
`;

const SendButton = styled(Button)`
  background: #0B57D0;
  color: #fff;
  font-weight: 500;
  text-transform: none;
  border-radius: 18px;
  width: 100px;
`


const initialValuesEmail = {
  type:"EMAIL",
  subject: "",
  message: ""
}

const modules = {
  toolbar:[
    [{header: [1,2,3,4,5,6,false]}],
    [{font: []}],
    [{size: []}],
    ["bold", "italic","underline","strike","blockquote"],
    [
      {list:"ordered"},
      {list: "bullet"},
      {indent:"-1"},
      {indent:"+1"}
    ],
    ["link","image","video"]
  ]
}
export default function CreateCampaigns() {

  const [emailData, setEmailData] = useState("");
  const [value, setValue] = useState('');

  const handleChange = ({ target: {value } }) => {
    setEmailData(value)
    console.log(emailData)
  }

  const sendEmail = async () => {
    const data = {
      type: "EMAIL",
      subject:emailData,
      message:value
    }
    console.log(data)
    const response = await sendCampaignEmail(data)
    console.log(response)
  }

 


  return (
    <Box style={{ display: "flex", height: "100vh", width: "100%", alignItems: "center", justifyContent: "center" }}>
      <Box style={{ display: "flex", flexDirection: "column", width: "80%", height: " 70%", border: "1px solid black", marginTop: 77, borderRadius: 5 }}>
        <Header >
        <InputBase placeholder='Subject'  onChange={handleChange} />
          
        </Header>
        <ReactQuill theme="snow" value={value}  onChange={setValue} modules={modules}/>
        <Footer style={{marginTop:290}}>
          <SendButton onClick={sendEmail}>Send</SendButton>
          <DeleteOutline />
        </Footer>
      </Box>

    </Box>
  )
}

