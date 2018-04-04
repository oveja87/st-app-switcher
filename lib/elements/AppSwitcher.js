import React, { Component } from 'react';
import ListElement from './ListElement';

class AppSwitcher extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appList: props.app_list
    };
  }

  render() {
    var appList = Array.from( this.state.appList ).map(
      (text) => <ListElement>{ text }</ListElement>
    );

    return  <ul>{ appList }</ul>
  }

}

export default AppSwitcher;
