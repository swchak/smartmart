'use client'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#0d47a1',
        },
        secondary: {
            main: '#bf360c',
        },
    },
});

export default function CustomThemeProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return (<ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>);
}