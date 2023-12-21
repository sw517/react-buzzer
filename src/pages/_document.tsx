import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'

export default function Document() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker
          .register('/sw.js')
          .then((res) => console.log('service worker registered'))
          .catch((err) => console.log('service worker not registered\n', err))
      })
    }
  }, [])

  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <meta name="apple-mobile-web-app-status-bar" content="#2d3035" />
        <meta name="theme-color" content="#2d3035" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
