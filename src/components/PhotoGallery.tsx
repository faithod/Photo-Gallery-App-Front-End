import { useState, useEffect } from "react";
import MasonryImageList from "./MasonryImageList";
import Search from "./Search";
import { IGallery } from "../interfaces/IGallery";
import { PhotoGalleryProps } from "../interfaces/PhotoGalleryProps";
import fetchPhotos from "../utils/fetchPhotos";
import { filterGallery } from "../utils/filterGallery";

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
