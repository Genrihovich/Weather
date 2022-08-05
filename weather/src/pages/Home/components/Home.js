//Збирають всі компоненти для Home
import React from 'react';
import Days from './Days/Days';
import s from './Home.module.scss';
import ThisDay from './ThisDay/ThisDay';
import ThisDayInfo from './ThisDayInfo/ThisDayInfo';
import dataCity from '../../../json/city.list.json';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: [],
        };
    }

    componentDidMount = () => {
        const API = '38e134b77ff9328d7215f89c76afee34';
        const datas = dataCity.filter(elem => elem.name === 'Kyiv')
        const dataId = datas.map(el => { return JSON.parse(el.id) })[0];
        const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?id=${dataId}&lang=uk&units=metric&appid=${API}`;
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                this.setState({ weatherData: dailyData })

                console.log(dailyData);
                console.log(this.state.weatherData);

            })
            .catch({
                // catch any errors
            })
    }

    render() {

        return (
            <div className={s.home}>
                <div className={s.wrapper}>
                    <ThisDay />
                    <ThisDayInfo />
                </div>
                <Days />
            </div>
        )
    }




}
