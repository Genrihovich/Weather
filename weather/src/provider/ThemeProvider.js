import { useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { changeSCCRootVariables } from "../model/ChangeSCCRootVariables";


export const ThemeProvider = ({ children, ...props }) => {
    const [theme, setTheme] = useState('light');

    function changeTheme(theme) {
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
