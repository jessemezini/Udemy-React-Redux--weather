import React, { Component } from 'react';

import SearchBarContainer from './SearchBarContainer';
import WeatherListContainer from './WeatherListContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBarContainer />
        <WeatherListContainer />
      </div>
    );
  }
}
