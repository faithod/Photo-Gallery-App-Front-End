import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { IFavourites } from "../interfaces/IFavourites";
import { IGallery } from "../interfaces/IGallery";
import { useState } from "react";
import FavouriteButton from "./FavouriteButton";
import { IUser } from "../interfaces/IUser";
import { useLocation } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import { isFavouriteButtonShown } from "../utils/isFavouriteButtonShown";
import { isDeleteButtonShown } from "../utils/isDeleteButtonShown";

export default function MasonryImageList(props: {
  gallery: IGallery[] | IFavourites[] | undefined;
  user: IUser | undefined;
  setFavourites?: React.Dispatch<
    React.SetStateAction<IFavourites[] | undefined>
  >;
}): JSX.Element {
  //using onMouseEnter&onMouseLeave to only show the favourites button when the user is hovering over the image
  const [isHovering, setIsHovering] = useState(false);

  const location = useLocation();

  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={8}>
        {props.gallery
          ? props.gallery.map((item) => (
              <div className="img-container" key={item.id}>
                <ImageListItem>
                  <img
                    src={`${item.url}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.alt}
                    loading="lazy"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  />
                  {/*conditionally rendering favourites button based on hover & location */}
                  {isFavouriteButtonShown(isHovering, location, props.user) && (
                    <FavouriteButton
                      user={props.user}
                      image={item}
                      setIsHovering={setIsHovering}
                    />
                  )}
                  {/*conditionally rendering delete button based on hover & location */}
                  {isDeleteButtonShown(isHovering, location) && (
                    <DeleteButton
                      user={props.user}
                      image={item}
                      setIsHovering={setIsHovering}
                      setFavourites={props.setFavourites}
                    />
                  )}
                </ImageListItem>
              </div>
            ))
          : ""}
      </ImageList>
    </Box>
  );
}
