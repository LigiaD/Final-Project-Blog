import React, { Component } from 'react';

import NavBar from '../components/nav-bar';
import Footer from './footer';


class NewPost extends Component {

  render() {
    return (
      <div>
        <div className="home__title">Turcoaz Luna's blog</div>
        <NavBar />
        
        <div className="new-post">
          <div className="new-post__text">
            <div className="new-post__text__title"><p>Some Title</p></div>
            <div className="new-post__text__border"></div>
            <div className="new-post__text__content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet velit interdum,
                 venenatis neque a, mattis elit. Sed vitae pellentesque massa. Integer quis posuere arcu.
                 Aenean dignissim, turpis vel lacinia auctor, purus erat dapibus mi, eu gravida leo neque
                 vel velit. Sed quam diam, vulputate id auctor eu, aliquet ut augue. Sed ex nibh, fringilla
                  sit amet massa quis, commodo facilisis enim. Ut at accumsan dui. Fusce sed ornare elit, eget
                    vulputate lorem. Donec eget mauris vel ligula aliquet dictum vitae et tortor.</p>

              <div className="new-post__text__img">
                <img id="img1" src="../photos/article1.jpg"></img>
              </div>

              <p>In varius odio ac ante ultricies placerat sit amet eget est. Nulla et viverra quam. Etiam sollicitudin justo
              sed rutrum malesuada. Quisque laoreet est vitae mauris elementum, tempor maximus velit pharetra. Suspendisse
              potenti. In vulputate augue nec massa faucibus malesuada. Ut congue dapibus lobortis. Integer sit amet dictum
                    massa. Donec interdum molestie vestibulum.</p>

              <p>Vivamus felis eros, imperdiet at dolor id, aliquet finibus lectus. Praesent tellus urna, fringilla at eros eget,
              accumsan blandit metus. Suspendisse vestibulum lectus eros, et commodo urna sollicitudin nec. Donec ornare ullamcorper
               sem, ac dapibus massa rutrum et. Praesent in euismod nunc. Curabitur nec finibus erat. Quisque euismod gravida
                    consectetur. Curabitur finibus cursus augue id blandit.</p>
              <div className="new-post__text__img">
                <img src="../photos/img2.jpg"></img>
              </div>

              <p>Etiam id leo efficitur arcu tristique commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Suspendisse tincidunt, purus vitae eleifend elementum, enim velit fermentum mi, quis interdum odio erat et
              nibh. Nulla sit amet pharetra orci. Donec non faucibus eros. Sed sit amet tincidunt orci, non laoreet risus.
                    Vestibulum aliquet finibus tempus. Integer facilisis laoreet sem et congue.</p>


            </div>
          </div>

        </div>
      <div className="new-post__sidebar">
        <div className="new-post__other">
          <div className="new-post__other__img" >
            <img src="../photos/article2.jpg"></img>
          </div>
          <div className="new-post__other__text">
            <div className="new-post__other__text__title"><p>Some title</p></div>
            <div className="new-post__other__text__content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.</p>
            </div>
            <div className="new-post__other__text__btn">
              <a href="#"> Read more</a>
            </div>
          </div>

         </div>

          <div className="new-post__other">
          <div className="new-post__other__img" >
            <img src="../photos/article3.jpg"></img>
          </div>
          <div className="new-post__other__text">
            <div className="new-post__other__text__title"><p>Some title</p></div>
            <div className="new-post__other__text__content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.</p>
            </div>
            <div className="new-post__other__text__btn">
              <a href="#"> Read more</a>
            </div>
          </div>

         </div>

          <div className="new-post__other">
          <div className="new-post__other__img" >
            <img src="../photos/article5.jpg"></img>
          </div>
          <div className="new-post__other__text">
            <div className="new-post__other__text__title"><p>Some title</p></div>
            <div className="new-post__other__text__content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.</p>
            </div>
            <div className="new-post__other__text__btn">
              <a href="#"> Read more</a>
            </div>
          </div>

         </div>
      </div>

      <Footer />
      </div >
   
    );

  }
}



export default NewPost;