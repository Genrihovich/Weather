import React from 'react';
import s from './Popup.module.scss';
import { ThisDayItem } from '../../../pages/Home/components/ThisDayInfo/ThisDayItem';
import { GlobalSvgSelector } from '../../../assets/icons/global/GlobalSvgSelector';


export const Popup = () => {
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
        <>
            <div className={s.blur}></div>
            <div className={s.popup}>
                <dir className={s.day}>
                    <dir className={s.day__temp}>20°</dir>
                    <dir className={s.day__name}>Вівторок</dir>
                    <div className={s.img}>
                        <GlobalSvgSelector id="sun" />
                    </div>
                    <div className={s.day__time}>Час: <span>23:54</span></div>
                    <div className={s.day__city}>Місто: <span>Київ</span></div>

                </dir>
                <div className={s.this__day_info_items}>
                    {items.map((item) => {
                        return <ThisDayItem key={item.icon_id} items={item} />
                    })}
                </div>
                <div className={s.close}>
                    <GlobalSvgSelector id="close" />
                </div>
            </div>
        </>
    );
}
