import React from 'react';
import { CommonProps } from '../types';

interface HeaderProps extends CommonProps {
  // Add specific props here
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <header className="">Header</header>;
};

export default Header;