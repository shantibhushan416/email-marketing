import { Box } from "@mui/material";
import "./App.css";
import Header from "./component/header/Header";
import Home from "./component/home/Home";


function App() {
  return (
    <div className="App">
      <Header />
      <Box style={{marginTop: 200}}>
        <Home/>
      </Box>
    </div>
  );
}

export default App;
