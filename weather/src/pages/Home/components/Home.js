//Збирають всі компоненти для Home
import React from 'react';
import s from './Home.module.scss';
import ThisDay from './ThisDay/ThisDay';
import ThisDayInfo from './ThisDayInfo/ThisDayInfo';

export const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay />
                <ThisDayInfo />
            </div>
        </div>
    )
}
