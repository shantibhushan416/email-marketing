import {useState} from 'react';
import {List,ListItemButton,ListItemText,ListItemIcon,Collapse, Button,Divider, Grid,Box,styled} from '@mui/material';
import {Inbox,Drafts,ExpandLess,ExpandMore,StarBorder} from '@mui/icons-material';


const LoginButton = styled(Button)`
    text-transform: none;
    border: 1px solid  #007c89;
    padding: 0px 60px;
    color: # #007c89;
    height: 48px;
    border-radius: 2px;
`;

export default function CreateCampaigns() {

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
    <Divider/>
    <Grid container style={{height: "100vh",marginTop: 100}}>
        <Grid item lg={2} style={{borderRight: '1px solid rgba(0, 0, 0, 0.12)',paddingTop: 20}}>
          <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <LoginButton style={{borderRadius: 50, fontSize: "600",marginBottom: 15}} >
              Create
            </LoginButton>
          }
        >
          <ListItemButton onClick={handleOpenCreate}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Campaign" />
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
            <ListItemText primary="Inbox" />
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
        <Grid item xs={8}>
          <Box>
            hello
          </Box>
        </Grid>
    </Grid>
    <Divider/>
    </>
  );
}