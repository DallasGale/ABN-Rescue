/* eslint-disable react/react-in-jsx-scope */
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage(Index => props => sheet.collectStyles(<Index {...props} />))

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script
            async
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.iagDataLayer = window.iagDataLayer || [];
            window.load = window.load || {};
            window.load.config = window.load.config || {};
            window.load.config.dataLayerName = "iagDataLayer";
            window.load.config.brand = "cgu";
            window.load.config.appname = "abn-rescue";
          `}}
          />
          <script async src="https://tags.iag.com.au/prod/load/load.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
