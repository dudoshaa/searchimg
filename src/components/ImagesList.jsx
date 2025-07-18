import React from "react";

function ImagesList({ image }) {
  console.log(image);
  return (
    <li>
      <div className="regular relative">
        <img className="photo rounded-2xl " src={image.urls.regular} alt="" />
        <div className="absolute bottom-3 left-2 flex items-center gap-1">
          <img
            className="rounded-4xl "
            src={image.user.profile_image.small}
            alt=""
          />
          <div className="">
              <p className="line-clamp-1">@{image.user.username}</p>
              <span className="opacity-50 line-clamp-1">{image.user.location}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ImagesList;
