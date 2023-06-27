import styled from "@emotion/styled";
import { Box, InputBase, TextField } from "@mui/material";
import MicIcon from '@mui/icons-material/Mic';


const SearchContainer = styled(Box)`
    background: #fff;
    width: 20%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex

`;

const InputContainer = styled(InputBase)`
    padding-left: 20px;
    width: 100%;

`;

const SearchIconWrapper = styled(Box)`
    color: black;
    padding: 5px;
    display: flex;
`;


const Search = () => {
    return(
        <SearchContainer>
            <InputContainer placeholder="Search Email"/>
            <SearchIconWrapper>
                <MicIcon/>
            </SearchIconWrapper>
        </SearchContainer>
    )
}


export default Search