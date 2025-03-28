import React from 'react';
import { CommonProps } from '../types';

interface BulbProps extends CommonProps {
  // Add specific props here
}

const Bulb: React.FC<BulbProps> = ({ children, className }) => {
  return <div>Bulb</div>;

};



export default Bulb;