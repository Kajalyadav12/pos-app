import { Grid } from "@mui/material";
import Home from "./Home";
import About from "./About";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <Link to="/">Home</Link>&nbsp;&nbsp;
                  <Link to="/About"> About</Link>
                </Toolbar>
              </AppBar>
            </Box>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
      
    </>
  );
}
export default App;
