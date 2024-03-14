import React from 'react';
import PropTypes from 'prop-types';

const GalleryItem = ({ videoSrc, imgSrc, title, description, price, buttons }) => {
  return (
    <li className="gallery-item">
      {videoSrc && <Video src={videoSrc} />}
      {imgSrc && <img src={imgSrc} alt={title} />}
      <div className="page-info">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {price && <h2>{price}</h2>}
      </div>
      <div className="page-footer">
        <div className="buttons">
          {buttons.map((buttonText, index) => (
            <button key={index}>{buttonText}</button>
          ))}
        </div>
      </div>
    </li>
  );
};

GalleryItem.propTypes = {
  videoSrc: PropTypes.string,
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string,
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default GalleryItem;