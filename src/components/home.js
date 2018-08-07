import React, { Component } from 'react';

import NavBar from '../components/nav-bar';
import HomeContent from './home-content';
import Footer from './footer';

class Home extends Component {
  render() {
    return (
      
      <div className="home">
      <div className="home__title">Turcoaz Luna's blog</div>
      <div className="home__logo">
          <img src="../photos/logo.png"></img>
      </div>

        <NavBar />
        <HomeContent />
        <Footer />
        </div>

        );
       
      }
       
    }
    
export default Home;