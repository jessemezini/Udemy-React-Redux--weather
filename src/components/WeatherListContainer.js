import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from './Chart';
import GoogleMap from './GoogleMap';

class WeatherListContainer extends Component {

  constructor(props) {
    super(props);

    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temperature = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td className="gmap">
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temperature} color="orange" units="K" width={180} height={120} />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" width={180} height={120} />
        </td>
        <td>
          <Chart data={humidities} color="blue" units="%" width={180} height={120} />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) { // const weather = state.weather
  return { weather };
}

export default connect(mapStateToProps)(WeatherListContainer);
