import React from 'react';
import { CommonProps } from '../types';

interface CardRightProps extends CommonProps {
  // Add specific props here
}

const CardRight: React.FC<CardRightProps> = ({ children, className }) => {
  return <div>Card Right</div>;
};

export default CardRight;