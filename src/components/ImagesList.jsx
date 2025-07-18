import React from "react";

function ImagesList({image}) {
  return (
    <li >
      <img
        className="photo rounded-2xl"
        src={image.urls.regular}
        alt=""
      />
    </li>
  );
}

export default ImagesList;
