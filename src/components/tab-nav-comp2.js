import React, { Component } from 'react';




class TabNavContent2 extends Component {
    render() {
        return (

            <div className="content">
                 <div className="content__border1"></div>
                <div className="content__border2"></div>
                <div className="content__border3"></div>
                <div className="content__border4"></div>
                <div className="content__border5"></div>
                <div className="content__border6"></div>
                <div className="content__border7"></div>
                <div className="content__border8"></div>
                <div className="content__videos">
                    <iframe 
                        src="https://www.youtube.com/embed/b4VhecYJaU8?rel=0"
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <iframe 
                        src="https://www.youtube.com/embed/lFrnEkPyFKo?rel=0"
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <iframe 
                        src="https://www.youtube.com/embed/LdE3Gn8oJcU?rel=0"
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <iframe 
                        src="https://www.youtube.com/embed/iCkr2aTiKB0?rel=0"
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>

        );

    }




}

export default TabNavContent2;