
import { Box,Button,styled} from "@mui/material";

import LoginDialog from "../login/LoginDialog";
import { useState } from "react";

import { Link } from "react-router-dom";

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
`;
    
const LoginButton = styled(Button)`
    color: #fe902d;
    background: black;
    text-transform: none;
    padding: 5px 10x;
    border-radius: 2px;
    box-shadow: none;
    font-size: 16px  
`;

const CustomButtons = () =>{

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }

    return(
        <Wrapper>
            <LoginButton variant="contained" onClick={handleOpen}>Login</LoginButton>
            <Link to="/campaigns">
            <LoginButton variant="contained">SignUp</LoginButton>
            </Link>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>    
    )
}

export default CustomButtons