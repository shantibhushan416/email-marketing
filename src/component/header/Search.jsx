import styled from "@emotion/styled";
import { Box, InputBase } from "@mui/material";
import MicIcon from '@mui/icons-material/Mic';


const SearchContainer = styled(Box)`
background: white;
border-radius: 2px;
margin-left: 10px;
width: 38%;
background-color: #fff;
display: flex;

`;

const InputContainer = styled(InputBase)`
    width: 100%;
    padding-left: 20px;
    border-radius: 2px;
    width: 100%;

`;

const SearchIconWrapper = styled(Box)`
    margin-left: auto;
    padding: 5px;
    display: flex;
    color: blue;
    
`;


const Search = () => {
    return(
        <SearchContainer>
            <InputContainer placeholder="Search Email"/>
            <SearchIconWrapper>
                <MicIcon style={{color:"#fe902d"}}/>
            </SearchIconWrapper>
        </SearchContainer>
    )
}


export default Search