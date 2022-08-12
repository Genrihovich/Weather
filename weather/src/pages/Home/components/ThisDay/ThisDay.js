import React from 'react';
import s from './ThisDay.module.scss';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';


function ThisDay(props) {
    //  const myWetherData = myWeather
    // console.log('ThisDay', props);
    // console.log('ooo', props.data.name);
    // console.log('temp', Math.round(props.data.main.temp));
    const date = new Date()
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const dateTime = hour + ':' + minutes + ':' + seconds
    // console.log(dateTime);
    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__temp}>{Math.round(props.data.main.temp)}°</div>
                    <div className={s.this__day_name}>Сьогодні</div>
                </div>
                <GlobalSvgSelector id="sun" />
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>Час: <span>{dateTime}</span></div>
                <div className={s.this__city}>Місто: <span>{props.city}</span></div>
            </div>
        </div>
    )
}
export default ThisDay;