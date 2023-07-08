import React, { useState } from 'react';

import { sendCampaignEmail } from '../service/campaign';
import { Box, InputBase, Typography, TextField, Button, styled } from '@mui/material';
import { Close, DeleteOutline } from '@mui/icons-material';


const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fc",
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
export default function CreateCampaigns() {

  const [emailData, setEmailData] = useState(initialValuesEmail)

  const handleChange = ({ target: { name, value } }) => {
    setEmailData({ ...emailData, [name]: value })
  }

  const sendEmail = async () => {
    const response = await sendCampaignEmail(emailData)
    console.log(response)
  }


  return (
    <Box style={{ display: "flex", height: "100vh", width: "100%", alignItems: "center", justifyContent: "center" }}>
      <Box style={{ display: "flex", flexDirection: "column", width: "80%", height: " 70%", border: "1px solid black", marginTop: 77 }}>
        <Header>
          <Typography>New Message</Typography>
          <Close fontSize='small' />
        </Header>
        <RecipientsWrapper>
          
          <InputBase placeholder='subject' name="subject" onChange={handleChange} />
        </RecipientsWrapper>
        <TextField
          multiline
          rows={14}
          sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
          placeholder='message' name="message" onChange={handleChange}
        />
        <Footer>
          <SendButton onClick={sendEmail}>Send</SendButton>
          <DeleteOutline />
        </Footer>
      </Box>

    </Box>
  )
}

