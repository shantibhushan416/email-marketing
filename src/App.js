
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import CreateCampaigns from "./campaigns/CreateCampaigns";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <Box>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateCampaigns/>}/>    
            </Routes>
          </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;