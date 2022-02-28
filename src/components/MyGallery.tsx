import { MyGalleryProps } from "../interfaces/MyGalleryProps";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";

const Input = styled("input")({
  display: "none",
});

export default function MyGallery(props: MyGalleryProps): JSX.Element {
  return (
    <>
      {!props.user ? (
        "please log in to view"
      ) : (
        <>
          <br />
          <label htmlFor="upload-photo-contained-button">
            <Input
              accept="image/*"
              id="upload-photo-contained-button"
              type="file"
            />
            <Fab color="primary" aria-label="add" component="span">
              <AddIcon />
            </Fab>
          </label>
        </>
      )}{" "}
      {/*change this to conditionally render the gallery or 'upload an image now!' or sutten */}
    </>
  );
}
