import React, { Component } from 'react';
import ListElement from './ListElement';

class Switcher extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appList: props.app_list
    };
  }

  render() {
    var appList = Array.from( this.state.appList ).map(
      (app) => {
        var link = `https://app.carnivalmobile.com/#/apps/${app.id}`;
        return <ListElement><a href={link}>{ app.name }</a></ListElement>
      }
    );

    return  <ul>{ appList }</ul>
  }

}

export default Switcher;
