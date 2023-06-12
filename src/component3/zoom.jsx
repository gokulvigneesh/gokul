import React, { useState } from "react";
import "./styles.css"; 

const ImageZoom = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className={`image-container ${isZoomed ? "zoomed" : ""}`}>
      <img
        src="https://e0.pxfuel.com/wallpapers/409/983/desktop-wallpaper-pics-batman-logo-dark-knight-batman-logo-symbol-for-your-mobile-tablet-explore-dark-knight-logo-the-dark-knight-dark-knight.jpg"
        alt="Image"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default ImageZoom;
