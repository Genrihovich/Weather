import React from 'react';
import s from './Header.module.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select';

const Header = () => {

    const options = [
        { value: 'city-1', label: 'Київ' },
        { value: 'city-2', label: 'Хмельницький' },
        { value: 'city-3', label: 'Меджибож' }
    ];
    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: 'rgba(71,147,255,0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        })
    }

    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id="header-logo" /></div>
                <div className={s.title}>React Weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}><GlobalSvgSelector id="change_theme" /></div>
                <Select
                    defaultValue={options[0]}
                    styles={colourStyles}
                    options={options}
                />
            </div>
        </div>
    )
}

export default Header;