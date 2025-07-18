import axios from "axios";
import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";
import ImagesList from "./components/ImagesList";
import { CiSearch } from "react-icons/ci";
import toast from "react-hot-toast";

const ACCESS_KEY = "g1uO7UuO227IEgJ7iC8jYR4y4mblsIMbj68u-neXs-8";

function App() {
  const [searchParams, setSearchParams] = useState();
  const [url, setUrl] = useState("");
  const [images, setImages] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchParams || searchParams.trim() === "") {
      toast.error("Oops! Looks like you forgot to type something❓");
      return;
    }
    setUrl(
      `https://api.unsplash.com/search/photos?query=${searchParams}&per_page=30&client_id=
` + ACCESS_KEY
    );
  };

  useEffect(() => {
    if (searchParams) {
      axios(url)
        .then((data) => setImages(data.data))
        .catch((err) => console.log(err));
    }
  }, [url]);

  return (
    <div>
      <form className="align-elements " onSubmit={handleSubmit} action="">
        <div className="wrapper">
          <input
            className=" rounded-[20px] py-2 px-4  w-full text-black flex-grow outline-none bg-gray-200 mb-6 pl-8"
            placeholder="Search photos "
            type="search"
            onChange={(e) => setSearchParams(e.target.value)}
          />
          <CiSearch className="icon" />
        </div>
      </form>
      {!searchParams && (
        <section className="align-elements">
          <div className="no-product">empty</div>
        </section>
      )}
      {searchParams && (
        <ul className="align-elements grid grid-cols-4 gap-2 ">
          {images &&
            images.results.map((image, index) => {
              const animationClass =
                index % 2 === 0 ? "animate-left" : "animate-right";
              return (
                <div key={image.id} className={animationClass}>
                  <ImagesList image={image} />
                </div>
              );
            })}
        </ul>
      )}
    </div>
  );
}

export default App;
