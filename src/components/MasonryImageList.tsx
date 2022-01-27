import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { IFavourites } from "../interfaces/IFavourites";
import { IGallery } from "../interfaces/IGallery";

export default function MasonryImageList(props: {
  gallery: IGallery[] | IFavourites[] | undefined;
}) {
  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={8}>
        {props.gallery
          ? props.gallery.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  src={`${item.url}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.alt}
                  loading="lazy"
                />
              </ImageListItem>
            ))
          : ""}
      </ImageList>
    </Box>
  );
}
