import React from "react";
import PropTypes from "prop-types";

import "./MovieCard.css";

const MovieCard = ({ name, image, onClick }) => (
  <div className="MovieCard card" onClick={onClick}>
    <img src={image} alt={name} />
    <label>{name}</label>
  </div>
);

MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string
};

MovieCard.defaultProps = {
  image: `${process.env.PUBLIC_URL}/defautImage.jpg`
}

export default MovieCard;
