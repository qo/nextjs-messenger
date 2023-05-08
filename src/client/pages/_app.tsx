import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function App({ Component, pageProps }: AppProps) {
    const theme = createTheme({
        palette: {
            mode: "dark"
        },
    });
    return <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
}
