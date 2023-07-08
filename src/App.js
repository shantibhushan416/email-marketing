import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Campaigns from "./campaigns/Campaigns";
import CreateCampaigns from "./campaigns/CreateCampaigns";
import LoginDialog from "./component/login/LoginDialog";
import SignUpDialog from "./component/login/SignupDialog";

import { Box } from "@mui/material";
import "./App.css";



function App() {
  return (
    <div className="App" style={{background: "rgb(205, 209, 228)", height: "100vh",width:"100%"}}>
      <BrowserRouter>
          <Header />
          <Box >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/campaigns" element={<Campaigns/>}/> 
              <Route path="/campaigns/createcampaigns" element={<CreateCampaigns/>}/>
              <Route path = "/login" element={<LoginDialog/>}/>
              <Route path = "/signup" element={<SignUpDialog/>}/>
            </Routes>
          </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;