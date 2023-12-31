import type { AppProps } from 'next/app'
import Navbar from '@/ui/navbar'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useMemo } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '@/styles/globals.css'

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
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
