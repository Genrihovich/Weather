import { createContext } from "react";

export const ThemeEnum = {
    LIGHT: 'light',
    DARK: 'dark',
}



export const ThemeContext = createContext({
    theme: ThemeEnum.LIGHT,
    changeTheme: () => { },
})