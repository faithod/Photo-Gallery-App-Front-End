import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton, Tooltip } from "@mui/material";
import axios from "axios";
import { FavouriteButtonProps } from "../interfaces/FavouriteButtonProps";
import { baseUrl } from "../utils/baseUrl";
import fetchData from "../utils/fetchData";

export default function FavouriteButton(
  props: FavouriteButtonProps
): JSX.Element {
  const handleAddToFavourites = () => {
    if (props.user) {
      axios
        .post(baseUrl + `/favourites/${props.user.id}`, {
          photo_id: props.image.id,
          alt: props.image.alt,
          url: props.image.url,
        })
        .then(() => {
          fetchData("/favourites", props.setFavourites);
        });
    }
  };

  return (
    <Tooltip title="Add to Favourites">
      {/* adding sx to add a custom style (to change the icon colour & the colour of the icon when you hover) */}
      <IconButton
        className="btn"
        aria-label="favourite"
        size="small"
        color="default"
        sx={[
          {
            "&:hover": {
              color: "red",
              backgroundColor: "white",
            },
          },
          { color: "white" },
        ]}
        /*everytime the mouse entered the button, the onMouseLeave 
        in <img/> would be triggered, causing the button to disappear, 
        & so I added onMouseEnter&onMouseLeave here also. */
        onMouseEnter={() => props.setIsHovering(true)}
        onMouseLeave={() => props.setIsHovering(false)}
        onClick={handleAddToFavourites}
      >
        <FavoriteIcon />
      </IconButton>
    </Tooltip>
  );
}
