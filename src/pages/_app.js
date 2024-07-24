import Head from 'next/head'
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Head>
          <meta name="viewport" content="viewport-fit=cover" />
          <title>Portfolio Website</title>
        </Head>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
