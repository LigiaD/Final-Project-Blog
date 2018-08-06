import React, { Component } from 'react';




class TabNavContent1 extends Component {
    render() {
        return (

            <div className="content">
                <div className="content__videos">
                    <iframe 
                        src="https://www.youtube.com/embed/vscoMXrUPlU?rel=0"
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <iframe 
                        src="https://www.youtube.com/embed/JBccaPlNleg?rel=0"
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <iframe 
                        src="https://www.youtube.com/embed/gPa2Rqb8mzo?rel=0"
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    <iframe 
                        src="https://www.youtube.com/embed/Z9svINZiBdU?rel=0"
                        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>

        );

    }




}

export default TabNavContent1;