import React, { Component } from 'react';




class TabNavContent1 extends Component {
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
                    <div className="content__videos__1st_line">
                    <iframe 
                        src="https://www.youtube.com/embed/vscoMXrUPlU?rel=0"
                        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe><br></br>
                    <iframe 
                        src="https://www.youtube.com/embed/JBccaPlNleg?rel=0"
                        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                  </div>
                  <div className="content__videos__2nd_line">
                  <iframe src="https://www.youtube.com/embed/gPa2Rqb8mzo?rel=0"
                        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <iframe 
                        src="https://www.youtube.com/embed/Z9svINZiBdU?rel=0"
                        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div></div>
            </div>

        );

    }




}

export default TabNavContent1;