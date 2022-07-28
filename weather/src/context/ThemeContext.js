import { createContext } from "react";

// export enum Themep {
//     LIGHT = 'light',
//     DARK = 'dark',
// }



export const ThemeContext = createContext({
    theme: '',
    changeTheme: () => { },
})