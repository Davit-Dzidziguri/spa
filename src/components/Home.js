import React from 'react';
import './styles/Home.css'; 

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Our Website</h1>
        <p>Explore our services and offerings.</p>
      </div>
      <div className="content-section">
        <h2>What We Offer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et quam efficitur, vel egestas nisi tempus.</p>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
