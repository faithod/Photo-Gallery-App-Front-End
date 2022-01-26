import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/routes/Home";
import UsersProfile from "./components/routes/UsersProfile";

function App(): JSX.Element {
  return (
    <>
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
