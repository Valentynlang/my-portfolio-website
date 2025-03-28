import React from 'react';
import { CommonProps } from '../types';

interface TransitionProps extends CommonProps {
  // Add specific props here
}


const Transition: React.FC<TransitionProps> = ({ children, className }) => {
  return (
    <>
      <div>Transition</div>
    </>
  );

};



export default Transition;