
import { Box,Button,styled} from "@mui/material";

import LoginDialog from "../login/LoginDialog";
import { useState } from "react";

import { Link } from "react-router-dom";

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & >  button {
        margin-right: 10px;
        font-size: 16px  
    }
`;
    
const LoginButton = styled(Button)`
    color: black;
    background: #fff;
    text-transform: none;
    padding: 5px 10x;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 400;
    height: 32px
`;

const CustomButtons = () =>{

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true)
    }



    return(
        <Wrapper>
            <LoginButton variant="contained" onClick={handleOpen}>Login</LoginButton>
            <Link to="/create">
            <LoginButton variant="contained">SignUp</LoginButton>
            </Link>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>    
    )
}

export default CustomButtons