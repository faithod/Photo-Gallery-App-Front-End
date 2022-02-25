import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/routes/Home";
import UsersProfile from "./components/routes/UsersProfile";
import { Container, CssBaseline } from "@mui/material"; //might remove cssbaseline later
import { useEffect, useState } from "react";
import { IUser } from "./interfaces/IUser";
import { IFavourites } from "./interfaces/IFavourites";
import fetchData from "./utils/fetchData";
import "./styles.css";

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
