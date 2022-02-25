import { useState } from "react";
import IUserGallery from "../interfaces/IUserGallery";
import MyFavourites from "./MyFavourites";
import MyGallery from "./MyGallery";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { ProfileProps } from "../interfaces/ProfileProps";

export default function Profile(props: ProfileProps): JSX.Element {
  const [userGallery, setUserGallery] = useState<IUserGallery>();
  const [isMyGalleryClicked, setIsMyGalleryClicked] = useState<boolean>(false);

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleTabClick = (bool: boolean) => {
    setIsMyGalleryClicked(bool);
    setUserGallery(undefined);
  };

  console.log(isMyGalleryClicked);
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where each tab needs to be selected manually"
        >
          <Tab onClick={() => handleTabClick(false)} label="My Favourites" />
          <Tab onClick={() => handleTabClick(true)} label="My Gallery" />
        </Tabs>
      </Box>

      {!isMyGalleryClicked ? (
        <MyFavourites
          favourites={props.favourites}
          setFavourites={props.setFavourites}
          user={props.user}
        />
      ) : (
        <>
          <MyGallery userGallery={userGallery} user={props.user} />
          <br />
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </>
      )}
    </>
  );
}
