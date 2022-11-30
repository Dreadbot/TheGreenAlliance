import type { AppProps } from 'next/app';
import { NavigationConstant } from '../components/NavigationBar';
import { MDXProvider } from '@mdx-js/react';
import '../styles/globals.scss';
import Layout from '../components/Layout';

const components = {
  h1: (props: any) => <p {...props}/>,
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <MDXProvider components={{h1: (props: any) => <p {...props}/>}}/>
      <Component {...pageProps}/>
    </Layout>
  );
}

export default MyApp