import React, { Component } from 'react';




class TabNavContent3 extends Component {
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
                        src="https://www.youtube.com/embed/CR4pXwu8xho?rel=0"
                        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe><br></br>
                    <iframe 
                        src="https://www.youtube.com/embed/IIB9Q8MRAKg?rel=0"
                        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                  <div className="content__videos__2nd_line"> <iframe 
                        src="https://www.youtube.com/embed/3lqUKq24ax8?rel=0"
                        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    <iframe 
                        src="https://www.youtube.com/embed/zugLQF3uLmk?rel=0"
                        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div></div>
            </div>

        );

    }




}

export default TabNavContent3;