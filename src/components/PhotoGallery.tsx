import { useState, useEffect } from "react";
import { IFavourites } from "../interfaces/IFavourites";
import { IGallery } from "../interfaces/IGallery";
import { IUser } from "../interfaces/IUser";
import fetchPhotos from "../utils/fetchPhotos";
import MasonryImageList from "./MasonryImageList";
import Search from "./Search";

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

  console.log(props.favourites);
  const filterGallery = (
    photos: IGallery[],
    search: string,
    favourites: IFavourites[] | undefined
  ): IGallery[] => {
    const output = [];

    function isInFavourites(
      photo: IGallery,
      favourites: IFavourites[] | undefined
    ) {
      // console.log(photo);
      // console.log(favourites);
      if (favourites) {
        for (const favourite of favourites) {
          if (favourite.photo_id === photo.id) {
            return true;
          }
        }
      }
      return false;
    }

    for (const photo of photos) {
      //if search term is incuded in the alt text of image
      if (photo.alt.toLowerCase().includes(search.toLowerCase())) {
        if (props.user) {
          //if image is not in users 'favourites' list
          // console.log(isInFavourites(photo, favourites));
          if (!isInFavourites(photo, favourites)) {
            output.push(photo);
          }
        } else {
          output.push(photo);
        }
      }
    }
    return output;
  };
  const filteredGallery = filterGallery(gallery, search, props.favourites);
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
