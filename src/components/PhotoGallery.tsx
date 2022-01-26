import { useState, useEffect } from "react";
import { IGallery } from "../interfaces/IGallery";
import fetchPhotos from "../utils/fetchPhotos";

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
  console.log(gallery);
  return (
    <>
      <input onChange={(e) => setSearch(e.target.value)} value={search}></input>
      <br />

      <p>
        {filteredGallery.map((el: IGallery) => (
          <img key={el.id} alt={el.alt} src={el.url} width={600}></img>
        ))}
      </p>
    </>
  );
}
