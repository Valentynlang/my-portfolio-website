import React from 'react';
import Image from 'next/image';
const Circles: React.FC = () => {
  return <div className="opacity-80 w-[200px] xl:w-[300px] absolute -right-16 -bottom-20 mix-blend-color-dodge animate-pulse duration-300 z-10 ">
    <Image src="/circles.webp" alt="circles" width={260} height={200} className="w-full h-full" />
  </div>;

};



export default Circles;