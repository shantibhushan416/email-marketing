import { useEffect } from "react";
import { AppBar, Box, Toolbar,Typography,styled } from "@mui/material"

import { Link, useNavigate } from "react-router-dom";

import CustomButtons from "./CustomButtons";
import { getLocalStorageData } from "../../utility/Utility";




const StyledHeader = styled(AppBar)` 
    background: black;
    box-shadow: none;
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
    color: #ffffff;
    text-transform: none;
    font-size: 16px;  
  
`;



 const Header = () => {

    const navigate = useNavigate();

    // const isLogedIn = !!getLocalStorageData();
    
    // useEffect(() => {
    //     if(!isLogedIn){
    //         navigate("/")
    //     }
    // })
    return(
        <>
            <StyledHeader>       
                <Toolbar style={{ justifyContent: "space-between"}}>
                    <Component>
                        <Link to="/campaigns" style={{textDecoration:"none"}}>
                            <NavList>About Us</NavList>
                        </Link>
                        <NavList>Pricing</NavList>
                        <NavList>Request demo</NavList>
                    </Component>
                    {/* <Search/> */}
                    <Box>
                        <CustomButtons/>
                    </Box>            
               </Toolbar>
            </StyledHeader>
        </>
        
        
    )
 }

 export default Header