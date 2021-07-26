import { useState } from 'react'
import { NotificationsProvider } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';
import { ThemeProvider } from 'next-themes'

import ColorSchemeContext from 'lib/ColorSchemeContext';

import 'styles/index.css'
import "@fontsource/inter/300.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/800.css"

export default function MyApp({ Component, pageProps }) {

    const [colorScheme, setColorScheme] = useState('light');

    return (
        <ColorSchemeContext.Provider value={{ colorScheme, onChange: setColorScheme }}>
            <MantineProvider theme={{ colorScheme }}>
                <NotificationsProvider>
                    <ThemeProvider attribute="class">
                        <Component {...pageProps} />
                    </ThemeProvider>
                </NotificationsProvider>
            </MantineProvider>
        </ColorSchemeContext.Provider>
    )
}
