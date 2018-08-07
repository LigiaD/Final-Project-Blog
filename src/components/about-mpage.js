import React, { Component } from "react";

import TabNav from './tabnav';
import StoryContent from "./story-content";
import Gallery from "./gallery";


class AboutMainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    title: 'My Story',
                    active: true,
                    component: <StoryContent />
                },
                {
                    title: 'Photo Gallery',
                    active: false,
                    component: <Gallery />
                },
               
            ]
        }
    }

    handleTabChange = (title) => {
        
        const tabs = this.state.tabs;

         tabs.map(tab => {
            if(tab.title == title) {
                tab.active = true
            } else {
                tab.active = false
            }
        })

         this.setState({ tabs });
    }

  render() {
    return <TabNav handleClick={(title) => this.handleTabChange(title)} tabs={this.state.tabs}/>
  }

}

export default AboutMainPage;