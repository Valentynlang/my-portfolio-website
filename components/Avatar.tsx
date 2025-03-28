import React from 'react';
import { CommonProps } from '../types';

interface AvatarProps extends CommonProps {
  // Add specific props here
}

const Avatar: React.FC<AvatarProps> = ({ children, className }) => {
  return <div>Avatar</div>;
};

export default Avatar;
