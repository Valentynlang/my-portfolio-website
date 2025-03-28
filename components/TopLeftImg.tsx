import React from 'react';
import Image from 'next/image';
import { CommonProps } from '../types';

interface TopLeftImgProps extends CommonProps {
  // Add specific props here
}

const TopLeftImg: React.FC<TopLeftImgProps> = ({ children }) => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
      <Image src="/top-left-img.png" width={400} height={400} alt="decorative image" />
    </div>
  );
};

export default TopLeftImg; 