import { useState } from "react"
import { ThemeContext, ThemeEnum } from "../context/ThemeContext"
import { changeSCCRootVariables } from "../model/ChangeSCCRootVariables";
import { storage } from "../model/Storage";
import dataCity from '../json/city.list.json'


export const ThemeProvider = ({ children, ...props }) => {
    const API = '466f882400f84b4daf3e1f2217c670e1';
    const data = dataCity.filter(elem => elem.name === 'Kyiv')
    const dataId = data.map(el => { return JSON.parse(el.id) })[0];

    //  console.log(dataId);
    //Khmelnytskyi Kyiv Medzhybizh
    //https://api.openweathermap.org/data/2.5/weather?id=2172797&appid={API key}





    const [theme, setTheme] = useState(
        storage.getItem('theme') || ThemeEnum.LIGHT
    );

    changeSCCRootVariables(theme);

    function changeTheme(theme) {
        storage.setItem('theme', theme);
        console.log('changeTheme - ' + theme);
        setTheme(theme);
        changeSCCRootVariables(theme);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeTheme,
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>)
}
