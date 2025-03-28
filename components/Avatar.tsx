import React from 'react';
import { CommonProps } from '../types';
import Image from 'next/image';

interface AvatarProps extends CommonProps {
  // Add specific props here
}

const Avatar: React.FC<AvatarProps> = ({ children }) => {
  return (
    <div className='hidden xl:flex xl:max-w-none '>
      <Image src='/avatar.png' alt='avatar' width={737} height={678} className='translate-z-0 w-full h-full ' />
    </div>
  );
};

export default Avatar;
