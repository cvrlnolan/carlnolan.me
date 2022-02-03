import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
            rel="stylesheet"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://carlnolan-me.vercel.app/" />
          <meta name="twitter:title" content="Carl Nolan" />
          <meta
            name="twitter:description"
            content="Carl Nolan's personal website & portfolio."
          />
          <meta
            name="twitter:image"
            content="https://carlnolan-me.vercel.app/icon-192x192.png"
          />
          <meta name="twitter:creator" content="@realcarlnolan" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Carl Nolan" />
          <meta
            property="og:description"
            content="Carl Nolan's personal website & portfolio."
          />
          <meta property="og:site_name" content="Carl Nolan" />
          <meta property="og:url" content="https://carlnolan-me.vercel.app/" />
          <meta
            property="og:image"
            content="https://carlnolan-me.vercel.app/apple-touch-icon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
