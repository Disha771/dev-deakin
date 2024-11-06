import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = ({ isAuthenticated, onSignOut }) => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header>
        <h1>Dev@Deakin</h1>
        <input type="text" placeholder="Search" className="search-bar" width={100}/>
        <div className="button-container">
          <button className="post-button" onClick={() => navigate('/post')}>Post</button>
          {isAuthenticated ? (
            <button className="sign-out-button" onClick={onSignOut}>Sign Out</button>
          ) : (
            <button className="login-button" onClick={() => navigate('/login')}>Login</button>
          )}
        </div>
      </header>

      
      <main className="content">
        <section className="welcome-section">
          <h2>Welcome to Dev@Deakin</h2>
          <p>
            Explore the most recent debates, express your opinions, and make connections with Deakin University's like-minded community. It's good to see you here
          </p>
        </section>
      </main>
    </div>
      
  );
};

export default Home;