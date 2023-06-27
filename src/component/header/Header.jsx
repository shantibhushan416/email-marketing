import { AppBar, Box, Toolbar,Typography,styled } from "@mui/material"

import CustomButtons from "./CustomButtons";
import Search from "./Search";

const StyledHeader = styled(AppBar)` 
    background: black;
    box-shadow: none;
    
`;
const Component = styled(Box)`
    display: flex;
    margin-left: 3%; 
    line-height : 0;
    cursor: pointer; 
`;

const NavList = styled(Typography)`
    margin-right: 40px`;

const CustomButtonsWrapper = styled(Box)`
    margin-left:  100px; 
`;

 const Header = () => {
    return(
        <StyledHeader>       
            <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
                <Component>
                    <NavList>About Us</NavList>
                    <NavList>Pricing</NavList>
                    <NavList>Request demo</NavList>
                </Component>
                <Search/>
                <CustomButtonsWrapper>
                    <CustomButtons/>
                </CustomButtonsWrapper>            
            </Toolbar>
        </StyledHeader>
    )
 }

 export default Header