import { useState } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const ThemeProvider = ({ children, ...props }) => {
    const [theme, setTheme] = useState('light');
    function changeTheme(theme) {
        setTheme()
    }

    return <ThemeContext.Provider value={
        theme,
       
    }>{children}</ThemeContext.Provider>
}