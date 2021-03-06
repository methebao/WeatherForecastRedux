import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
class WeatherList extends Component {
    renderWeather(cityData) {
        console.log(cityData);
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        return(
            <tr key={name}>
                <td>{name}</td>
                <td> <Chart data={temps} color="orange" units="K" /> </td>
                <td> <Chart data={pressure} color="green" units="hPA" /> </td>
                <td> <Chart data={humidity} color="gray" units="%" /> </td>
                   
         
            </tr>
        );
    }
    render() {
        return (
            <table className=" table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K) </th>
                        <th>Pressure (hPA) </th>
                        <th>Humidity (%) </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map((cityData) => this.renderWeather(cityData))}
                </tbody>
            </table>
        )
    }
}
function mapStateToProps({ weather }) {
    return { weather };
}
export default connect(mapStateToProps)(WeatherList);