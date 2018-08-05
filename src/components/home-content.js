import React, { Component } from 'react';


import Time from '../components/time';


class HomeContent extends Component {
    render() {
        return (
            <div className="home-content">
                
                <div className="home-content__time">
                    <Time date={new Date()}/>
                </div>
                    
                    <div className="home-content__img">
                    <img src='../photos/image.jpg'></img>
                    </div>
                        <div className="home-content__text">
                            
                            <div className="home-content__text__title">
                             <p>Title</p>
                            </div>
                            <div className="home-content__text__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                 nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="home-content__btn">
                         <a href="/newpost"><p> Read more </p></a>
                        </div>
                 <h3 id="upper-text">Recent Posts</h3>
                </div>

            

        );

    }

}

export default HomeContent;