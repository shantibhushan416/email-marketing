import {useState} from "react";

import { LoginSocialGoogle } from "reactjs-social-login";
import { authenticateSignup,authenticateLogIn } from "../../service/Api";

import { Box, Button, Dialog, TextField, Typography,Checkbox,styled } from "@mui/material";
import {Google}from '@mui/icons-material';
import { GoogleLoginButton } from "react-social-login-buttons";



const Compnent = styled(Box)`
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

const CreateAccount = styled(Typography)`
    font-size: 14px;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
`;

const accountInitialValues = {
    login: {
        view: "login",
    },

    signup: {
        view: "signup",
    }
} 

const signUpInitialValues = {
    name: '',
    email: '',
    password: '',
    role: "",
    mobile: ""
}

const loginIntialValues={
    uname:"",
    password:""
}


const LoginDialog = ({open, setOpen}) => {


    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signUp, setSignUp] = useState(signUpInitialValues);
    const [login, setLogin] = useState(loginIntialValues);

    const handleClose = () => {
        setOpen(false)
        toggleAccount(accountInitialValues.login)
    }

    const signupAccount = () => {
        toggleAccount(accountInitialValues.signup)
    }

    const handleChange = (e) => {
        setSignUp({...signUp,[e.target.name]: e.target.value})
        console.log(signUp)
    }

    const signUpUser = async ()  => {
    let response =  await authenticateSignup(signUp);
       if(!response) return;
       handleClose();  
    }

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
        console.log(login)
     }

    const loginUser = async () => {
        let response =  await authenticateLogIn(login);
        console.log(response)
        if(response.status === 200){
            handleClose();
        }
       
     }
    
    
    return(
        <Dialog open={open} onClose={handleClose} >
            <Compnent>
            { account.view === "login" ?
                <Wrapper>
                <Typography variant="h4" style={{fontWeight:"bold"}}>Login</Typography>
                    <TextField variant="standard" label="Enter Email" name="uname" onChange={(e) => onValueChange(e)}/>
                    <TextField variant="standard" label="Enter Password" name="password" onChange={(e) => onValueChange(e)}/>
                    <Box style={{display:"flex"}}>                   
                        <Checkbox style={{marginLeft: 0}}/>
                        <Text>Keep me logged In</Text>
                    </Box>
                    <LoginButton variant="contained" onClick={() => loginUser()}>Login</LoginButton>
                    <RequestOTPButton>Forget Password?</RequestOTPButton>
                    <CreateAccount onClick={signupAccount}>New To MailChimp? create an account</CreateAccount>
                </Wrapper>
                :
                <Wrapper>
                   <Typography variant="h4" style={{fontWeight:"bold"}} >SignUp</Typography>
                    <TextField variant="outlined"  label="First Name" name="name" onChange={(e) => handleChange(e)} />
                    <TextField variant="outlined" label="Email" name="email" onChange={(e) => handleChange(e)} />
                    <TextField variant="outlined" label="password" name="password" onChange={(e) => handleChange(e)} />
                    <TextField variant="outlined" label="Role" name="role" onChange={(e) => handleChange(e)} />
                    <TextField variant="outlined" label="Phone number" name="mobile" onChange={(e) => handleChange(e)} />
                    
                    <LoginButton onClick={() => signUpUser()} variant="contained" style={{marginTop: "50px"}}>
                        SignUp
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
            }
            </Compnent>
        </Dialog>
    )
}

export default LoginDialog