import { useState, useEffect } from "react";
import axios from "axios";

export default function PhotoGallery(): JSX.Element {
  const [gallery, setGallery] = useState<IGallery[]>([]);

  function simplifyingFetchedData(data: any) {
    const simplerGalleryData = [];
    for (const element of data) {
      simplerGalleryData.push({
        id: element.id,
        alt: element.alt_description ? element.alt_description : "", //in the fetched data, sometimes the value is null
        description: element.description ? element.description : "", //in the fetched data, sometimes the value is null
        url: element.urls.full,
      });
    }
    return simplerGalleryData;
  }
  useEffect(() => {
    const apiAccessKey = process.env.REACT_APP_API_ACCESS_KEY;
    const baseURL = `https://api.unsplash.com/collections/9378914/photos?per_page=1000&client_id=${apiAccessKey}`;
    axios.get(baseURL).then((res) => {
      console.log(res.data);
      const simplerData = simplifyingFetchedData(res.data);
      setGallery(simplerData);
      console.log(simplerData);
    });
  }, []);

  console.log(gallery);
  return (
    <>
      {gallery
        .map((el: IGallery) => (
          <img key={el.id} alt={el.alt} src={el.url} width={600}></img>
        ))
        .slice(-10)}
    </>
  );
}

interface IGallery {
  id: number;
  alt: string;
  url: string;
}
