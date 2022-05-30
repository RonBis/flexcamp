import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <meta name="application-name" content="Flexcamp" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Flexcamp" />
        <meta name="description" content="Flexcamp blog site by FlexLUSI" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#111827" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Flecamp" />
        <meta
          property="og:description"
          content="Flexcamp blog site by FlexLUSI"
        />
        <meta property="og:site_name" content="flexcamp" />
        <meta property="og:url" content="https://flexcamp.vercel.app" />
        <meta
          property="og:image"
          content="https://flexcamp.vercel.app/img/logo-text-png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/icons/android/android-launchericon-48-48.png"
        />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="128x128"
          href="/icons/ios/128.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/icons/ios/192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="256x256"
          href="/icons/ios/256.png"
        />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
