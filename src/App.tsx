import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/routes/Home";
import UsersProfile from "./components/routes/UsersProfile";
import CssBaseline from "@mui/material/CssBaseline"; //might remove later

function App(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UsersProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
