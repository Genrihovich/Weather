import React from 'react'
import s from './ThisDayInfo.module.scss';
import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSvgSelector';

export const ThisDayItem = ({ items }) => {
    const { icon_id, name, value } = items
    return (

        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSelector id={icon_id} />
            </div>
            <div className={s.indicator__name}>{name}</div>
            <div className={s.indicator__value}>{value}</div>
        </div>
    )
}
