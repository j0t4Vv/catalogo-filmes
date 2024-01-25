import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Banner from './Banner';
import FeaturedMedia from './FeaturedMedia';
import './App.css';

function App() {
  const [featuredMedia, setFeaturedMedia] = useState([]);

  useEffect(() => {
    const apiKey = '53b6e41bedbdd3a8503858f9f9d92e3f';
    const language = 'pt-BR';

    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=${language}`)
      .then(response => {
        setFeaturedMedia(response.data.results);
      })
      .catch(error => console.error('Erro ao obter dados da API:', error));
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <div className="content">
          <Banner />
          <FeaturedMedia media={featuredMedia} />
        </div>
      </div>
    </div>
  );
}

export default App;
