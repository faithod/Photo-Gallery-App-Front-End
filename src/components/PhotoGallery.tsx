import { useState, useEffect } from "react";
import { IFavourites } from "../interfaces/IFavourites";
import { IGallery } from "../interfaces/IGallery";
import { IUser } from "../interfaces/IUser";
import fetchPhotos from "../utils/fetchPhotos";
import MasonryImageList from "./MasonryImageList";
import Search from "./Search";
import { filterGallery } from "../utils/filterGallery";

export default function PhotoGallery(props: {
  user: IUser | undefined;
  favourites: IFavourites[] | undefined;
  setFavourites: React.Dispatch<
    React.SetStateAction<IFavourites[] | undefined>
  >;
}): JSX.Element {
  const [search, setSearch] = useState("");
  const [gallery, setGallery] = useState<IGallery[]>([]);

  useEffect(() => fetchPhotos(setGallery, search), [search]);

  const filteredGallery = filterGallery(
    props.user,
    gallery,
    search,
    props.favourites
  );
  return (
    <>
      <Search setSearch={setSearch} search={search} />
      <br />
      <MasonryImageList
        user={props.user}
        gallery={filteredGallery}
        setFavourites={props.setFavourites}
      />
    </>
  );
}
