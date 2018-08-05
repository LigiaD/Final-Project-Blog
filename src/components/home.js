import React, { Component } from 'react';

import NavBar from '../components/nav-bar';
import HomeContent from './home-content';

class Home extends Component {
  render() {
    return (
      
      <div className="home">
      
        <NavBar />
        <img className="home__img" src='../photos/wallpaper.png'></img>
        <div className="home__title">Turcoaz Luna's blog</div>
        <div className="home__quote">
          <div className="home__quote__title">
            <p>The qoute of the day:</p>
          </div>
          <div className="home__quote__content">
            <p>"Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur." </p>
          </div>
        </div>
          <HomeContent />
        </div>

        );
       
      }
       
    }
    
export default Home;