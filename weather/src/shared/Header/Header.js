import React from 'react';
import s from './Header.module.scss';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';
import Select from 'react-select';
import { useTheme } from '../../hooks/useTheme';
import { ThemeEnum } from '../../context/ThemeContext';

const Header = () => {
    const theme = useTheme();

    const options = [
        { value: 'city-1', label: 'Київ' },
        { value: 'city-2', label: 'Хмельницький' },
        { value: 'city-3', label: 'Меджибож' }
    ];

    //   const [theme, setTheme] = useState('light');

    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: theme.theme === ThemeEnum.DARK ? '#4f4f4f' : 'rgba(71,147,255,0.2)',
            //будет название темы
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles) => ({
            ...styles,
            color: theme.theme === ThemeEnum.DARK ? '#fff' : '#000',
        }),
    }

    function changeTheme() {
        //   setTheme(theme === 'light' ? 'dark' : 'light');
        theme.changeTheme(theme.theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT);
    }

    const handleChange = (selectedOption) => {
        console.log("handleChange", selectedOption);
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id="header-logo" /></div>
                <div className={s.title}>React Weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id="change-theme" />
                </div>
                <Select
                    defaultValue={options[0]}
                    styles={colourStyles}
                    options={options}
                    onChange={handleChange}
                />
            </div>
        </header>
    )
}

export default Header;