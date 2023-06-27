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
    margin-right: 4



const Header = () => {    return(            <Search/>