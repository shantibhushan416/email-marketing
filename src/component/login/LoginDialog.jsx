import {useState} from "react";

import { authenticateSignup,authenticateLogIn } from "../../service/Api";

import { Box, Button, Dialog, TextField, Typography,Checkbox,styled } from "@mui/material";
import {Google}from '@mui/icons-material';



const Compnent = styled(Box)`
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
    text-align: center;
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
    firstName: '',
    lastName: '',
    password: '',
    businessName: "",
    phone: ""
}

const loginIntialValues={
    userName:"",
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

    const signUpUser = async () => {
        let response = await authenticateSignup(signUp);
        if(!response) return;
        handleClose();
    }

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value})
     }

    const loginUser = async () => {
        let response =  await authenticateLogIn(login);
        if(response.status === 200){
            handleClose();
        }
        else{
            setError(true)
        }
        
        
     }
    
    
    return(
        <Dialog open={open} onClose={handleClose} >
            <Compnent>
            { account.view === "login" ?
                <Wrapper>
                <Typography variant="h4" style={{fontWeight:"bold"}}>Login</Typography>
                    <TextField variant="standard" label="Enter Username" name="firstName" onChange={(e) => onValueChange(e)}/>
                    <TextField variant="standard" label="Enter Password" name="firstName" onChange={(e) => onValueChange(e)}/>
                    <Box style={{display:"flex", flexDirection: "row" ,marginLeft: "0" }}>                   
                        <Checkbox />
                        <Text>Keep me logged In</Text>
                    </Box>
                    <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                    <LoginButton style={{marginTop: "20px"}}>
                        <Google/> Signup with Google
                    </LoginButton>
                    <Typography style={{textAlign: "center"}}>Or</Typography>
                    <RequestOTPButton>Forget Password?</RequestOTPButton>
                    <CreateAccount onClick={signupAccount}>New To MailChimp? create an account</CreateAccount>
                </Wrapper>
                :
                <Wrapper>
                   <Typography variant="h4" style={{fontWeight:"bold"}} onClick={() => signUpUser()}>SignUp</Typography>
                    <TextField variant="outlined"  label="First Name" name="firstName" onChange={(e) => handleChange(e)} />
                    <TextField variant="outlined" label="LastName" name="lastName" onChange={(e) => handleChange(e)} />
                    <TextField variant="outlined" label="password" name="password" onChange={(e) => handleChange(e)} />
                    <TextField variant="outlined" label="Business name" name="businessName" onChange={(e) => handleChange(e)} />
                    <TextField variant="outlined" label="Phone number" name="phone" onChange={(e) => handleChange(e)} />
                    
                    <LoginButton style={{marginTop: "50px"}}>
                        SignUp
                    </LoginButton>
                    
                    
                </Wrapper>
            }
            </Compnent>
        </Dialog>
    )
}

export default LoginDialog