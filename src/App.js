
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Campaigns from "./campaigns/Campaigns";
import CreateCampaigns from "./campaigns/CreateCampaigns";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import "./App.css";
import { Widgets } from "@mui/icons-material";


function App() {
  return (
    <div className="App" style={{background: "#fe902d", height: "100vh" ,width:"100%"}}>
      <BrowserRouter>
          <Header />
          <Box >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/campaigns" element={<Campaigns/>}/> 
              <Route path="/campaigns/createcampaigns" element={<CreateCampaigns/>}/>    
            </Routes>
          </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;