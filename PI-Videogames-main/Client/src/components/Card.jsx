import React from 'react';

const Card = ({ name, description, platforms, image, releaseDate, rating }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <p className="card__description">{description}</p>
        <p className="card__platforms">{platforms}</p>
        <p className="card__release-date">{releaseDate}</p>
        <p className="card__rating">{rating}</p>
      </div>
    </div>
  );
};

export default Card;