import React from 'react';
import Image from 'next/image';


const TopLeftImg: React.FC = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge  opacity-50 ">
      <Image src="/top-left-img.webp" width={350} height={300} alt="decorative image" />
    </div>
  );
};

export default TopLeftImg; 