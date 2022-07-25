import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';


const ThisDayInfo = () => {
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

    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {items.map((item) => {
                    return <ThisDayItem key={item.icon_id} items={item} />
                })}
            </div>

            <img className={s.cloud__img} src={cloud} alt="хмарка" />
        </div>
    );
};

export default ThisDayInfo;