import { useState } from "react";
import { IFavourites } from "../interfaces/IFavourites";
import { IUserGallery } from "../interfaces/IUserGallery";
import MyFavourites from "./MyFavourites";
import MyGallery from "./MyGallery";

export default function Profile(): JSX.Element {
  const [favourites, setFavourites] = useState<IFavourites[]>();
  const [userGallery, setUserGallery] = useState<IUserGallery>();

  return (
    <>
      <MyFavourites favourites={favourites} setFavourites={setFavourites} />
      <MyGallery userGallery={userGallery} />
    </>
  );
}
