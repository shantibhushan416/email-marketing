import {useEffect, useState} from "react";

import { useNavigate } from "react-router-dom";

import {  signin } from "../../service/auth";


import { Box, Button, Dialog, TextField, Typography,Checkbox,styled } from "@mui/material";




const Component = styled(Box)`
    height: 90vh;
    width: 80vh; 
`;

const Wrapper = styled(Box)`
    display: flex;
    height: 80%;
    flex-direction: column;
    justify-content: center;
    padding: 25px 150px;
    flex: 1;
    & > div,& > button,& > p {
        margin-top: 20px
    }
`;

const LoginButton =styled(Button)`
    text-transform: none;
    background: #007c89;
    color: #ffffff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTPButton =styled(Button)`
    text-transform: none;
    background: #ffffff;
    color: blue;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20% )
`;

const Text = styled(Typography)`
    font-size: 1rem;
    font-weight: 500;
    color: #241c15;
    margin-top: 8px;
    `;



const loginInitialValues={
    uname:"",
    password:""
}


const LoginDialog = ({open, setOpen}) => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState(loginInitialValues);

    useEffect(() => {
        const isLogedIn = localStorage.getItem("accessToken")
        if(!isLogedIn){
            navigate('/')
        }
    },[])

    const handleClose = () => {
        setOpen(false);
        navigate("/");
    }

   

    const onValueChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
        console.log(credentials)
     }

    const loginUser = async () => {
        let response =  await signin(credentials);
        handleClose();
        // console.log(response)
        // if(response.status === 200){
        //     handleClose();
        //     setLocalStorageData(response.data.accessToken);
        //     navigate("/")
        // }
       
     }
    
    
    return(
        <>
            <Dialog open={open} onClose={handleClose} >
                <Component>
               
                    <Wrapper>
                        <Typography variant="h4" style={{fontWeight:"bold"}}>LogIn</Typography>
                        <TextField variant="standard" label="Enter Email" name="uname" onChange={(e) => onValueChange(e)}/>
                        <TextField variant="standard" label="Enter Password" name="password" onChange={(e) => onValueChange(e)}/>
                        <Box style={{display:"flex"}}>                   
                            <Checkbox style={{marginLeft: 0}}/>
                            <Text>Keep me logged In</Text>
                        </Box>
                        <LoginButton variant="contained" onClick={loginUser}>LogIn</LoginButton>
                        <RequestOTPButton>Forget Password?</RequestOTPButton>
                        
                    </Wrapper>
                    
                
                </Component>
            </Dialog>
        </>
    )
}

export default LoginDialog