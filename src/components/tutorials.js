import React, { Component } from 'react';

import NavBar from '../components/nav-bar';

import TutorialMainPage from './tutorial-mpage';
import Footer from './footer';


class Tutorials extends Component {
  render() {
    return (
      
      <div>
      <div className="home__title">Turcoaz Luna's blog</div>
      <div className="home__logo">
          <img src="../photos/logo.png"></img>
      </div>
      <NavBar />
      <TutorialMainPage />
      <Footer />
      </div>

        );
       
      }
     



    }
    
export default Tutorials;