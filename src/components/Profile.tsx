import { useState } from "react";
import { IFavourites } from "../interfaces/IFavourites";
import { IUserGallery } from "../interfaces/IUserGallery";
import MyFavourites from "./MyFavourites";
import MyGallery from "./MyGallery";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { IUser } from "../interfaces/IUser";

export default function Profile(props: {
  allUsers: IUser[] | undefined;
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}): JSX.Element {
  const [favourites, setFavourites] = useState<IFavourites[]>();
  const [userGallery, setUserGallery] = useState<IUserGallery>();
  const [isMyGalleryClicked, setIsMyGalleryClicked] = useState<boolean>(false);

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleTabClick = (bool: boolean) => {
    setIsMyGalleryClicked(bool);
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
          favourites={favourites}
          setFavourites={setFavourites}
          user={props.user}
        />
      ) : (
        <MyGallery userGallery={userGallery} user={props.user} />
      )}
    </>
  );
}
