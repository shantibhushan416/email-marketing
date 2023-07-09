import { Box,Button,styled} from "@mui/material";

import LoginDialog from "../login/LoginDialog";
import SignUpDialog from "../login/SignupDialog";

import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";



const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
`;
    
const LoginButton = styled(Button)`
    color: #ffffff;
    background: black;
    text-transform: none;
    padding: 5px 10x;
    border-radius: 2px;
    box-shadow: none;
    font-size: 16px  
`;

const CustomButtons = () =>{

    const isLoggedIn = !!localStorage.getItem("accessToken");
    const navigate = useNavigate()


    const [open, setOpen] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleSignOpen  = () => {
        setOpenSignUp(true)
    }
    const handleClear = () => {
        localStorage.clear("accessToken")
        window.location.reload(true);
        navigate("/");      
    }
    return(
        <Wrapper>
           { !isLoggedIn ? 
            (
            <>
                <Link to="signup">
                    <LoginButton variant="contained"onClick={handleSignOpen}>SignUp</LoginButton>
                </Link>
                <Link to="login">
                    <LoginButton variant="contained" onClick={handleOpen}>Login</LoginButton>
                </Link>
            </>
            )
            :
             <LoginButton variant="contained" onClick={()=> handleClear()}>Logout</LoginButton>
            }
            <LoginDialog open={open} setOpen={setOpen}/>
            <SignUpDialog open={openSignUp} setOpenSignUp={setOpenSignUp}/>
        </Wrapper>    
    )
}

export default CustomButtons