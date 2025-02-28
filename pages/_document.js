/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Document, { Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import { ServerStyleSheet } from 'styled-components';
import flush from 'styled-jsx/server';


export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet ();
    const sheets = new ServerStyleSheets ();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage ({
        enhanceApp: App => props => sheet.collectStyles (
          sheets.collect (<App {...props} />),
        ),
      });

      const initialProps = await Document.getInitialProps (ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheets.getStyleElement ()}
            {sheet.getStyleElement ()}
            {flush () || null}
          </>
        ),
      };
    } finally {
      sheet.seal ();
    }
  }

  render () {
    return (
      <html lang="en">
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}