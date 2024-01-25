import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Banner.css';

function Banner() {
  const [featuredMedia, setFeaturedMedia] = useState(null);

  useEffect(() => {
    const apiKey = '53b6e41bedbdd3a8503858f9f9d92e3f';
    const baseUrl = 'https://api.themoviedb.org/3';
    const endpoints = {
      trending: '/trending/all/week',
      discover: '/discover/movie',
    };

    const language = 'pt-BR'; 

    const randomEndpoint = Math.random() < 0.5 ? endpoints.trending : endpoints.discover;

    axios.get(`${baseUrl}${randomEndpoint}?api_key=${apiKey}&language=${language}`)
      .then(response => {
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        const randomMedia = response.data.results[randomIndex];
        setFeaturedMedia(randomMedia);
      })
      .catch(error => console.error('Erro ao obter dados da API:', error));
  }, []);

  return (
    <section className="banner">
      {featuredMedia && (
        <div className="banner-content">
          <img
            src={`https://image.tmdb.org/t/p/original${featuredMedia.backdrop_path}`}
            alt={featuredMedia.title || featuredMedia.name}
            className="banner-image"
          />
          <div className="banner-details">
            <h1>{featuredMedia.title || featuredMedia.name}</h1>
            <p>{featuredMedia.overview}</p>
            {featuredMedia.media_type === 'movie' && featuredMedia.runtime && (
              <p>Duração: {featuredMedia.runtime} minutos</p>
            )}
            {featuredMedia.media_type === 'tv' && featuredMedia.number_of_episodes && (
              <p>Número de episódios: {featuredMedia.number_of_episodes}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Banner;
