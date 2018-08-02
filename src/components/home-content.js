import React, { Component } from 'react';


import Time from '../components/time';


class HomeContent extends Component {
    render() {
        return (
            <div className="home-content">
                <div className="home-content__time">
                    <Time date={new Date()}/>
                </div>
                    
                    <div className="home-content__img"><p>img</p></div>
                        <div className="home-content__text">
                            <p>Title and content</p>
                            <div className="home-content__title">
                            </div>
                            <div className="home-content__content">
                            </div>
                        </div>
                        <div className="home-content__btn">
                         <a href="#"><p> Read more </p></a>
                        </div>
                
                </div>

            

        );

    }

}

export default HomeContent;