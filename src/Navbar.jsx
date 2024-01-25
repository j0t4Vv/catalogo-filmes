import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
                
        <div className='nav-titles'>
          <img className='logo-netflix' src="src\assets\img\netflix-svgrepo-com.svg" alt="logo" />
          <h4>Home</h4>
          <h4>Movies</h4>
          <h4>Series</h4>
        </div>
        
        <div className='nav-list'>
          <img className='home' src="src\assets\img\home-svgrepo-com.svg" alt="Home" />
          <img className='search' src="src\assets\img\search.svg" alt="Search" />
          <img src="src\assets\img\Netflix-avatar.png" alt="Avatar" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
