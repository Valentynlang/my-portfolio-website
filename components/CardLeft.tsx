import React from 'react';
import { CommonProps } from '../types';

interface CardLeftProps extends CommonProps {
  // Add specific props here
}

const CardLeft: React.FC<CardLeftProps> = ({ children, className }) => {
  return <div>Card Left</div>;
};

export default CardLeft;