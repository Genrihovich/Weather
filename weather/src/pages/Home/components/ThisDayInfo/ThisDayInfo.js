import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';


function ThisDayInfo(props) {
    console.log('ThisDayInfo', props);
    const items = [{
        icon_id: 'temp',
        name: 'Температура',
        value: '20 ° - відчувається як 17 °',
    }, {
        icon_id: 'pressure',
        name: 'Тиск',
        value: '765 мм ртутного стовпа – нормальне',
    }, {
        icon_id: 'precipitation',
        name: 'Опади',
        value: 'Без опадів',
    }, {
        icon_id: 'wind',
        name: 'Вітер',
        value: '3 м/с південно-західний - легкий вітер',
    },];
    // let eee = items[0].value;
    items[0].value = Math.round(props.data.main.temp) + '° - відчувається як ' + Math.round(props.data.main.feels_like) + '°'
    items[1].value = Math.round(props.data.main.pressure * 0.75006156) + ' мм ртутного стовпа'
    items[2].value = props.data.weather[0].description
    items[3].value = props.data.wind.speed + ' м/c'

    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {items.map((item) => {
                    return <ThisDayItem key={item.icon_id} items={item} />
                })}
            </div>

            <img className="cloud__img" src={cloud} alt="хмарка" />
        </div>
    );
};

export default ThisDayInfo;