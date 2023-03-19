import FullPageLoader from '@/components/global/FullPageLoader';
import '@/styles/globals.css';
import '@/styles/tailwind-global.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);
    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
      setLoading(false);
    };
  });

  return (
    <Fragment>
      <Head>
        <title>맹꽁맹꽁 채팅방~</title>
      </Head>
      {loading ? <FullPageLoader /> : <Component {...pageProps} />}
    </Fragment>
  );
};

export default App;
