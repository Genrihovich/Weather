import React from 'react';
import s from './Days.module.scss';
import { Card } from './Card';
import { Tabs } from './Tabs';


const Days = () => {
    const days = [
        {
            day: 'Сьогодні',
            day_info: '28 серп',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Хмарно',
        },
        {
            day: 'Завтра',
            day_info: '29 серп',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'невеликий дощ та сонце',
        },
        {
            day: 'Ср',
            day_info: '30 серп',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'невеликий дощ',
        },
        {
            day: 'Чт',
            day_info: '28 серп',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Хмарно',
        },
        {
            day: 'Пт',
            day_info: '28 серп',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Хмарно',
        },
        {
            day: 'Сб',
            day_info: '28 серп',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Хмарно',
        },
        {
            day: 'Нд',
            day_info: '28 серп',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
    ];
    return (
        <>
            <Tabs />
            <div className={s.days}>
                {days.map((itemDay) => (
                    <Card cardDay={itemDay} key={itemDay.day} />
                ))}
            </div>
        </>
    )
}

export default Days;