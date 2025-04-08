import React from 'react';
import { Sora } from 'next/font/google';
import Nav from './Nav';
import Header from './Header';
import TopLeftImg from './TopLeftImg';
import Head from 'next/head';

const sora = Sora({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <Head>
        <title>Portfolio - Creative Developer</title>
        <meta name="description" content="Professional portfolio showcasing creative development work and services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="developer, portfolio, creative, web development, services" />
        <meta property="og:title" content="Portfolio - Creative Developer" />
        <meta property="og:description" content="Professional portfolio showcasing creative development work" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;

