import Document, { Html, Head, NextScript, Main } from 'next/document';
// not always needed but, allows to customize the html and head tags
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
