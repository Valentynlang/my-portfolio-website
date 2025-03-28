import React from 'react';
import { CommonProps } from '../types';
import { Sora } from 'next/font/google';
import Nav from './Nav';
import Header from './Header';
import TopLeftImg from './TopLeftImg';

const sora = Sora({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-sora',
});

interface LayoutProps extends CommonProps {
  
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;