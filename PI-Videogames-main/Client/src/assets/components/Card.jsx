import React from 'react';

const Card = ({ image, description, name, rating, platform, releaseDate }) => {
  const stars = '⭐️'.repeat(rating);

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Rating: {stars}</p>
      <button className="favorite-button">❤️</button>
      <p>Platform: {platform}</p>
      <p>Release Date: {releaseDate}</p>
    </div>
  );
};

export default Card;
