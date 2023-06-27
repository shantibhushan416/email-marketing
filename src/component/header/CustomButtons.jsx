import styled from "@emotion/styled";
import { Box,Button} from "@mui/material";


const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & >  button {
        margin-right: 40px;
        font-size: 16px  
    }
`;
    
const LoginButton = styled(Button)`
    color: black;
    background: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px
`;

const CustomButtons = () =>{
    return(
        <Wrapper>
            <LoginButton variant="contained">Login</LoginButton>
            <LoginButton variant="contained">SignUp</LoginButton>
        </Wrapper>    
    )
}

export default CustomButtons