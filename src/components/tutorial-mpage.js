import React, { Component } from "react";

import TabNav from './tabnav';
import TabNavContent1 from "./tab-nav-comp1";
import TabNavContent2 from "./tab-nav-comp2";
import TabNavContent3 from "./tab-nav-comp3";

class TutorialMainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    title: 'Make Up',
                    active: true,
                    component: <TabNavContent1 />
                },
                {
                    title: 'Clothing Styles',
                    active: false,
                    component: <TabNavContent2 />
                },
                {
                    title: 'Hair Styles',
                    active: false,
                    component: <TabNavContent3 />
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

export default TutorialMainPage;