import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import HeaderComponent from '../src/components/HeaderComponent';
import FooterComponent from '../src/components/FooterComponent';
import NProgress from 'nprogress'
import Router from 'next/router'
Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Amarnath TSR | Web and mobile application developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
              {/* Import CSS for nprogress */}
              <link rel="stylesheet" type="text/css" href="/assets/css/nprogress.css" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <HeaderComponent/>
        <CssBaseline />
        <Component {...pageProps} />
      <FooterComponent/>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
