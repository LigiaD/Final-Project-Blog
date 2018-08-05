import React, { Component } from 'react';

import NavBar from '../components/nav-bar';
import HomeContent from './home-content';

class Home extends Component {
  render() {
    return (
      
      <div className="home">
      <div className="home__title">Turcoaz Luna's blog</div>

        <NavBar />
          <HomeContent />
        </div>

        );
       
      }
       
    }
    
export default Home;