import { AppBar, Box, Toolbar,Typography,styled } from "@mui/material"

import CustomButtons from "./CustomButtons";
import Search from "./Search";

const StyledHeader = styled(AppBar)` 
    background: white;
    border-bottom: 1px solid;
`;
const Component = styled(Box)`
    display: flex;
    margin-left: 3%; 
    line-height : 0;
    cursor: pointer; 
`;

const NavList = styled(Typography)`
    margin-right: 40px;
    color: black;
    font-weight: 400
`;



 const Header = () => {
    return(
        <>
            <StyledHeader>       
                <Toolbar style={{ justifyContent: "space-between"}}>
                    <Component>
                        <NavList>About Us</NavList>
                        <NavList>Pricing</NavList>
                        <NavList>Request demo</NavList>
                    </Component>
                    <Search/>
                    <Box>
                        <CustomButtons/>
                    </Box>            
               </Toolbar>
            </StyledHeader>
        </>
        
        
    )
 }

 export default Header