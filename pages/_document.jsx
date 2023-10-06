import { Html, Head, Main, NextScript } from "next/document";
// import Index from './index'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Age Caculator</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,700&display=swap"
        />
      </Head>
      <body>
        {/* <Index/> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
