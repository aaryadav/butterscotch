import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { createTheme } from '../stitches.config';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/feather.png" />
          <style id="stitches" dangerouslySetInnerHTML={{ __html: createTheme() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}