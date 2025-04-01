import React from 'react';
import Header from './Header';
import Nav from './Nav';
import TopLeftImg from './TopLeftImg';
import { Poppins } from 'next/font/google';
import Head from 'next/head';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${poppins.variable} font-poppins relative`}>
      <Head>
        <title>Portfolio - Creative Developer</title>
        <meta name="description" content="Professional portfolio showcasing creative development work" />
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