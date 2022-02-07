import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import { IFavourites } from "../interfaces/IFavourites";
import { IGallery } from "../interfaces/IGallery";
import { IUser } from "../interfaces/IUser";
import { baseUrl } from "../utils/baseUrl";
import fetchData from "../utils/fetchData";

export default function DeleteButton(props: {
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | undefined;
  image: IGallery | IFavourites;
  setFavourites: React.Dispatch<
    React.SetStateAction<IFavourites[] | undefined>
  >;
}): JSX.Element {
  const handleDeletePhoto = () => {
    if (props.user && props.image) {
      console.log(props.user.id, props.image.photo_id);
      axios
        .delete(
          baseUrl + `/favourites/${props.user.id}/${props.image.photo_id}`
        )
        .then(() => {
          fetchData(`/favourites/${props.user?.id}`, props.setFavourites);
        });
    }
  };

  return (
    <Tooltip title="Delete from Favourites">
      {/* adding sx to add a custom style (to change the icon colour & the colour of the icon when you hover) */}
      <IconButton
        className="btn"
        aria-label="delete"
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
        onClick={handleDeletePhoto}
      >
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}
