//Збирають всі компоненти для Home
import React from 'react';
import Days from './Days/Days';
import s from './Home.module.scss';
import ThisDay from './ThisDay/ThisDay';
import ThisDayInfo from './ThisDayInfo/ThisDayInfo';
import { storage } from '../../../model/Storage';
//import dataCity from '../../../json/city.list.json';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: storage.getItem('weatherData') || [],
            geoData: [],
        };
        this.fetchData = this.fetchData.bind(this);
        this.fetchWeathers = this.fetchWeathers.bind(this);
    }

    fetchData(city) {
        const API = '38e134b77ff9328d7215f89c76afee34';
        const geoCodURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API}`;

        fetch(geoCodURL)
            .then(res => res.json())
            .then(data => {
                // console.log(data[0]['local_names'].uk);             
                this.setState({ geoData: data[0] }, () => {
                    this.fetchWeathers(this.state.geoData.lat, this.state.geoData.lon);
                })
            })
    }

    fetchWeathers(lat, lon) {
        const API = '38e134b77ff9328d7215f89c76afee34';

        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=uk&units=metric&appid=${API}`;
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                this.setState({ weatherData: data }, () => {
                    // console.log(this.state.weatherData)
                    storage.setItem('weatherData', this.state.weatherData);

                });
            })
    }

    componentDidUpdate(prevProps) {
        // Типове використання (не забудьте порівняти пропси):
        if (this.props.city !== prevProps.city) {
            this.fetchData(this.props.city);
        }
    }

    render() {
        // console.log('temperat', Math.round(currWeather.main.temp),);

        return (
            <div className={s.home}>
                <div className={s.wrapper}>
                    <ThisDay city={this.props.city} data={this.state.weatherData} />
                    <ThisDayInfo data={this.state.weatherData} />
                </div>
                <Days />
            </div>
        )
    }




}
