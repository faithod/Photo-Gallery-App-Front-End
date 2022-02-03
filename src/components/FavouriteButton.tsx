import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import { IFavourites } from "../interfaces/IFavourites";
import { IGallery } from "../interfaces/IGallery";
import { IUser } from "../interfaces/IUser";
import { baseUrl } from "../utils/baseUrl";

export default function FavouriteButton(props: {
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | undefined;
  image: IGallery | IFavourites;
}): JSX.Element {
  const handleAddToFavourites = () => {
    console.log(props.image.id);
    if (props.user) {
      axios.post(baseUrl + `/favourites/${props.user.id}`, {
        photo_id: props.image.id,
        alt: props.image.alt,
        url: props.image.url,
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
