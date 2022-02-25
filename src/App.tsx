import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/routes/Home";
import UsersProfile from "./components/routes/UsersProfile";
import CssBaseline from "@mui/material/CssBaseline"; //might remove later
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { IUser } from "./interfaces/IUser";
import fetchData from "./utils/fetchData";
import "./styles.css";
import { IFavourites } from "./interfaces/IFavourites";

function App(): JSX.Element {
  const [allUsers, setAllUsers] = useState<IUser[]>();
  const [user, setUser] = useState<IUser>();
  const [favourites, setFavourites] = useState<IFavourites[]>();

  useEffect(() => {
    fetchData("/users", setAllUsers);
    if (user) {
      fetchData(`/favourites/${user.id}`, setFavourites);
    }
  }, [setFavourites, user]);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ textAlign: "center", mt: "3rem" }}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  allUsers={allUsers}
                  user={user}
                  setUser={setUser}
                  favourites={favourites}
                  setFavourites={setFavourites}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <UsersProfile
                  allUsers={allUsers}
                  user={user}
                  setUser={setUser}
                  favourites={favourites}
                  setFavourites={setFavourites}
                />
              }
            />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
