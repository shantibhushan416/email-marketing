import {useState} from "react";

import styled from "@emotion/styled";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import { CheckBox } from "@mui/icons-material";


const Compnent = styled(Box)`
    height: 80vh;
    width: 80vh; 
`;

const Wrapper = styled(Box)`
    display: flex;
    height: 75%;
    margin-top: 30px;
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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const LoginDialog = ({open, setOpen}) => {


    const [account, toggleAccount] = useState(accountInitialValues.login)

    const handleClose = () => {
        setOpen(false)
        toggleAccount(accountInitialValues.login)
    }

    const signupAccount = () => {
        toggleAccount(accountInitialValues.signup)
    }
    
    return(
        <Dialog open={open} onClose={handleClose} >
            <Compnent>
            { account.view === "login" ?
                <Wrapper>
                <Typography variant="h4" style={{fontWeight:"bold"}}>Login</Typography>
                    <TextField variant="standard" label="Enter Username"/>
                    <TextField variant="standard" label="Enter Username"/>
                    <Box style={{display:"flex", flexDirection: "row" }}>                    <CheckBox {...label} style={{marginRight: "7px"}}/>
                        <Text>Keep me logged In</Text>
                    </Box>
                    <LoginButton>Login</LoginButton>
                    <Typography style={{textAlign: "center"}}>Or</Typography>
                    <RequestOTPButton>Forget Password?</RequestOTPButton>
                    <CreateAccount onClick={signupAccount}>New To MailChimp? create an account</CreateAccount>
                </Wrapper>
                :
                <Wrapper>
                   <Typography variant="h4" style={{fontWeight:"bold"}}>SignUp</Typography>
                    <TextField variant="outlined"  label="First Name"/>
                    <TextField variant="outlined" label="LastName"/>
                    <TextField variant="outlined" label="Business name"/>
                    <TextField variant="outlined" label="Phone number"/>
                    <LoginButton style={{marginTop: "50px"}}>
                        SignUp
                    </LoginButton>
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