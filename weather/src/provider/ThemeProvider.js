import { useState } from "react"
import { ThemeContext, ThemeEnum } from "../context/ThemeContext"
import { changeSCCRootVariables } from "../model/ChangeSCCRootVariables";
import { storage } from "../model/Storage";



export const ThemeProvider = ({ children, ...props }) => {

    const [theme, setTheme] = useState(
        storage.getItem('theme') || ThemeEnum.LIGHT
    );

    changeSCCRootVariables(theme);

    function changeTheme(theme) {
        storage.setItem('theme', theme);
        // console.log('changeTheme - ' + theme);
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
