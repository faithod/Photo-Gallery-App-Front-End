import { useState, useEffect } from "react";
import { IGallery } from "../interfaces/IGallery";
import { IUser } from "../interfaces/IUser";
import fetchPhotos from "../utils/fetchPhotos";
import MasonryImageList from "./MasonryImageList";
import Search from "./Search";

export default function PhotoGallery(props: {
  user: IUser | undefined;
}): JSX.Element {
  const [search, setSearch] = useState("");
  const [gallery, setGallery] = useState<IGallery[]>([]);

  useEffect(() => fetchPhotos(setGallery, search), [search]);

  const filterGallery = (photos: IGallery[], search: string) => {
    const output = [];
    for (const element of gallery) {
      if (element.alt.toLowerCase().includes(search.toLowerCase())) {
        output.push(element);
      }
    }
    return output;
  };
  const filteredGallery = filterGallery(gallery, search);
  return (
    <>
      <Search setSearch={setSearch} search={search} />
      <br />
      <MasonryImageList user={props.user} gallery={filteredGallery} />
    </>
  );
}
