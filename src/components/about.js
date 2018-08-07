import React, { Component } from 'react';

import NavBar from './nav-bar';
import Footer from '../components/footer';
import AboutMainPage from './about-mpage';

class About extends Component {
  render() {
    return (

      <div>
        <div className="home__title">Turcoaz Luna's blog</div>
        <div className="home__logo">
          <img src="../photos/logo.png"></img>
        </div>
        <NavBar />
        <AboutMainPage />
        <Footer />

      </div>

    );

  }

}

export default About;