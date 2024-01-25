import React from 'react';
import './FeaturedMedia.css';

function FeaturedMedia({ media }) {
  return (
    <section className="destaques">
      <h2>Destaques</h2>
      <div className='card-container'>
        {media.map(item => (
          <div key={item.id} className='card'>

            {item.poster_path && item.backdrop_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt={item.title || item.name}
                className="card-image"
              />
            )}
            <div className='card-details'>
              <h3>{item.title || item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedMedia;