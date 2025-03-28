import React from 'react';
import { CommonProps } from '../types';

interface CirclesProps extends CommonProps {
  // Add specific props here
}


const Circles: React.FC<CirclesProps> = ({ children, className }) => {
  return <div>Circles</div>;

};



export default Circles;