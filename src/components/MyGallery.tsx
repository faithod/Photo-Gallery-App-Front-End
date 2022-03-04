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
  const [selectedFile, setSelectedFile] = useState<undefined | File>();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);

      //The FormData interface provides a way to easily construct
      //a set of key/value pairs representing form fields and their values

      //creating an object of formData
      const formData = new FormData();

      //update formData
      if (selectedFile) {
        formData.append("file", selectedFile);
      }

      axios.post("api/uploadfile", { user_id: props.user?.id, ...formData });

      console.log(formData);

      // { selectedFile: File; }

      // console.log(JSON.stringify(e.target.files));
      // const files = Array.from(e.target.files);
      // console.log(JSON.stringify(files));
      // const url = URL.createObjectURL(e.target.files[0]);
      // console.log(url);

      // const formData = new FormData(); // Currently empty
      // formData.append("username", "Chris");
      // console.log(formData);

      // files.forEach((file) => {
      //   formData.append("image", file);
      // });
      // console.log(formData);
    }
  };
  //how to access selected file(s) on a change event
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
              onChange={(e) => handleInputChange(e)}
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
