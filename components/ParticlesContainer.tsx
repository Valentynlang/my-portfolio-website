import React from 'react';
import { CommonProps } from '../types';

interface ParticlesContainerProps extends CommonProps {
  // Add specific props here
}

const ParticlesContainer: React.FC<ParticlesContainerProps> = ({ children, className }) => {
  return <div>Particles Container</div>;
};

export default ParticlesContainer; 