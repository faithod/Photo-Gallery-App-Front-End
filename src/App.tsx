import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/routes/Home";
import UsersProfile from "./components/routes/UsersProfile";
import CssBaseline from "@mui/material/CssBaseline"; //might remove later
import { Container } from "@mui/material";
// import { textAlign } from "@mui/system"; //come back to YT video

function App(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ textAlign: "center", mt: "3rem" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<UsersProfile />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
