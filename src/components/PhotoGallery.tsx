import { useState, useEffect } from "react";
import { IGallery } from "../interfaces/IGallery";
import fetchPhotos from "../utils/fetchPhotos";
import MasonryImageList from "./MasonryImageList";
import Search from "./Search";

export default function PhotoGallery(): JSX.Element {
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

      {/* <p>
        {filteredGallery.map((el: IGallery) => (
          <img key={el.id} alt={el.alt} src={el.url} width={600}></img>
        ))}
      </p> */}
      <MasonryImageList gallery={filteredGallery} />
    </>
  );
}
