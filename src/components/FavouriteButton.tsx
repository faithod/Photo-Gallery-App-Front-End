import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function FavouriteButton(props: {
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  const handleAddToFavourites = () => {
    console.log("ayy");
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
