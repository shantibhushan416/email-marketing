import { useState} from "react";

import { useNavigate } from "react-router-dom";

import {  signup } from "../../service/auth";

import { Box, Button, Dialog, TextField, Typography,styled } from "@mui/material";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";


const Component = styled(Box)`
    height: 90vh;
    width: 80vh; 
`;


const Wrapper = styled(Box)`
    display: flex;
    height: 80%;
    flex-direction: column;
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


const signUpInitialValues = {
    name: '',
    email: '',
    password: '',
    role: "",
    mobile: ""
}

const SignUpDialog = ({open,setOpenSignUp}) => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState(signUpInitialValues);


    const handleClose = () => {
        setOpenSignUp(false)
        navigate("/");
    }

    const handleChange = (e) => {
        setCredentials({...credentials,[e.target.name]: e.target.value})
        console.log(credentials)
    }

    const signUpUser = async ()  => {
    let response =  await signup(credentials);
       if(!response) return;
       handleClose();  
    }


    return(

        <Dialog open={open} onClose={handleClose} >
            <Component>
                <Wrapper>
                    <Typography variant="h4" style={{fontWeight:"bold"}} >SignUp</Typography>
                    <TextField variant="outlined"  label="First Name" name="name" onChange={(e) => handleChange(e)} />
                    <TextField variant="outlined" label="Email" name="email" onChange={(e) => handleChange(e)} />
                    <TextField variant="outlined" label="password" name="password" onChange={(e) => handleChange(e)} />
                    <TextField variant="outlined" label="Role" name="role" onChange={(e) => handleChange(e)} />
                    <TextField variant="outlined" label="Phone number" name="mobile" onChange={(e) => handleChange(e)} />
                    
                    <LoginButton onClick={() => signUpUser()} variant="contained" style={{marginTop: "50px"}}>
                        Signup
                    </LoginButton>
                    
                    <LoginSocialGoogle
                        client_id={"492285431100-gcgl80jf5ota62cfp6i40508tme11502.apps.googleusercontent.com"}
                        scope="openid profile email"
                        discoveryDocs="claims_supported"
                        access_type="offline"
                        onResolve={({ provider, data }) => {
                            console.log(provider, data);
                        }}
                        onReject={(err) => {
                            console.log(err);
                        }}
                    >
                        <GoogleLoginButton/>
                    </LoginSocialGoogle>               
                </Wrapper>
            </Component>
            
        </Dialog>
    )
}

export default SignUpDialog