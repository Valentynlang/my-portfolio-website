import React from 'react';
import { CommonProps } from '../types';

interface HeaderProps extends CommonProps {
  // Add specific props here
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">Header</header>;
};

export default Header;