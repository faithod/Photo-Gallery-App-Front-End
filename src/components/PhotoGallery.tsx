import { useState, useEffect } from "react";
import { IGallery } from "../interfaces/IGallery";
import fetchPhotos from "../utils/fetchPhotos";
import MasonryImageList from "./MasonryImageList";
import Search from "./Search";
import { filterGallery } from "../utils/filterGallery";
import { PhotoGalleryProps } from "../interfaces/PhotoGalleryProps";

export default function PhotoGallery(props: PhotoGalleryProps): JSX.Element {
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
