
import { Box, Typography,styled } from "@mui/material";


const Wrapper = styled(Box) `
  margin: 250px 350px 0 350px;
  text-align: center;

`;

const Banner  = styled(Typography)`
    font-weight: 600;
`;

const Heading = () => {
    return(
        <Wrapper >
            <Banner variant="h3">Turns Email into Revenue</Banner>
            <Typography variant="h5" style={{textAlign: "center!important"}} >Win new cutomers with #1 emial marketing and automations brand* that recommends ways to get more opens, ckicks and sales</Typography>
        </Wrapper>
    )
}

export default Heading