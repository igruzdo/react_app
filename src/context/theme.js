import { createTheme } from '@mui/material/styles';
import { createContext } from 'react';
import { orange } from '@mui/material/colors';

export const themes = {
    orange: createTheme({
        palette: {
            primary: {
            main: orange[500],
            },
        },
    }),

    white: createTheme({
        palette: {
            primary: {
            main: "#FFF",
            },
        },
    })
}

export const ThemeContext = createContext(themes.orange)
