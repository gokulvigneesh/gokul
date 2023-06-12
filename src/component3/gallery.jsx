import React, { useState } from 'react';
import './gallery.css'
function ImageGallery() {
  const slides = [
    { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_AQTToHRluATXcHTMfcYeZiQCMYp7N3JNEO58wlF&s', alt: 'The Batman' },
    { imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6YjLa1PEivj0U19mQBtnbeEG_LVb7nwxmA&usqp=CAU', alt: 'Th Ironman' },
    { imageSrc: 'https://c4.wallpaperflare.com/wallpaper/918/894/330/captain-america-captain-america-civil-war-iron-man-wallpaper-preview.jpg', alt: 'Captain VS Ironman' },
    { imageSrc: 'https://c4.wallpaperflare.com/wallpaper/997/794/382/miles-morales-spiderman-miles-morales-spider-man-peter-parker-spider-gwen-hd-wallpaper-preview.jpg', alt: 'Spiderman' },
  
  ];

  const [slideIndex, setSlideIndex] = useState(0);

  function plusSlides(n) {
    setSlideIndex(prevIndex => prevIndex + n);
  }

  function currentSlide(n) {
    setSlideIndex(n - 1);
  }

  return (
    <div>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides ${index === slideIndex ? 'active' : ''}`}
        >
          <div className="numbertext">{index + 1} / {slides.length}</div>
          <img src={slide.imageSrc} style={{ width: '100%' }} alt={slide.alt} />
        </div>
      ))}

      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}> &#10095;</a>

      <div className="caption-container">
        <p id="caption">{slides[slideIndex].alt}</p>
      </div>

      <div className="row">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`column ${index === slideIndex ? 'active' : ''}`}
          >
            <img
              className="demo cursor"
              src={slide.imageSrc.replace('_wide', '')}
              style={{ width: '100%' }}
              onClick={() => currentSlide(index + 1)}
              alt={slide.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
