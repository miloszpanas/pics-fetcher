import "./ImageList.css"
import React from "react";
import SingleImage from "./SingleImage";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <SingleImage key={image.id} image={image}/>
  });

  return <div className="image-list">{images}</div>
};

export default ImageList;