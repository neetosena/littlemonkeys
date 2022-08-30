import React, { useState } from "react";
import { gallery } from "../data/Utils";

import { IoIosClose } from "react-icons/io";

const GalleryComp = () => {
  const [photos, setPhotos] = useState(gallery);
  const [tempImage, setTempImage] = useState("");
  const [model, setModel] = useState(false);

  const getImage = (image) => {
    setTempImage(image);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImage} alt="gallery" />
        <IoIosClose
          className="gallery-close-icon"
          onClick={() => setModel(false)}
        />
      </div>
      <div className="galleryComp-container">
        {photos.map((item, index) => {
          const { id, image } = item;

          return (
            <div
              key={id}
              className="gallery-item"
              onClick={() => getImage(image)}
            >
              <img src={image} alt={index} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GalleryComp;
