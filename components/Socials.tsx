import React from 'react';
import { CommonProps } from '../types';

interface SocialsProps extends CommonProps {
  // Add specific props here
}


const Socials: React.FC<SocialsProps> = ({ children, className }) => {
  return <div>Socials</div>;

};



export default Socials;