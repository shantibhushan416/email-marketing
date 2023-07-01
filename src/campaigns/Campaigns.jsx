import {useState} from 'react';
import {List,ListItemButton,ListItemText,ListItemIcon,Collapse, Button,Divider, Grid,Box,styled} from '@mui/material';
import {Inbox,Drafts,ExpandLess,ExpandMore,StarBorder,Edit} from '@mui/icons-material';
import { Link } from 'react-router-dom';


const LoginButton = styled(Button)`
    text-transform: none;
    border: 1px solid  #007c89;
    padding: 0px 60px;
    color: # #007c89;
    height: 48px;
    border-radius: 2px;
`;

export default function Campaigns() {

  const [openCampaign, setOpenCampaign] = useState(false);
  const [openInbox, setOpenInbox] = useState(false);
  


  const handleOpenCreate = () => {
    setOpenCampaign(!openCampaign);
  };

  const handleOpenInbox = () => {
    setOpenInbox(!openInbox);
  };

  return (
    <>
    <Grid container style={{height: "91vh",marginTop: 64}}>
        <Grid item lg={3} md={4} sm={5} xs={4} style={{borderRight: '1px solid rgba(0, 0, 0, 0.12)',paddingTop: 20}}>
          <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <Link to='createcampaigns'>
            <LoginButton style={{borderRadius: 50, fontSize: "600",marginBottom: 15}} >
              <Edit/>Create
            </LoginButton>
            </Link>
          }
        >
          <ListItemButton onClick={handleOpenCreate}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
            {openCampaign ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openCampaign} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleOpenInbox}>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Set champaign" />
            {openInbox ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openInbox} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4}}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleOpenInbox}>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Campaign report" />
            {openInbox ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openInbox} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4}}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleOpenInbox}>
            <ListItemIcon>
              <Drafts />
            </ListItemIcon>
            <ListItemText primary="Set the SMTP details" />
            {openInbox ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openInbox} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4}}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
          </List>
        </Grid>
        <Grid item  lg={9} md={8} sm={7} xs={8}>
          <Box>
            <Box>
            hello
            </Box>
            <Box>
            </Box>
          </Box>           
        </Grid>
    </Grid>
  
    </>
  );
}