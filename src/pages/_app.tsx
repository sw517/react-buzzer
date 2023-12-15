import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useMemo } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
