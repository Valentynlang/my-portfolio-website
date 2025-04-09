import React from 'react';
import Image from 'next/image';

const Bulb: React.FC = () => {
  return <div className='opacity-80 absolute -left-36 -bottom-28 rotate-12 mix-blend-color-dodge animate-pulse duration-300 z-10 w-[200px] xl:w-[300px] '>
    <Image src={'/bulb.png'} alt='bulb' width={260} height={200} className='w-full h-full'/>
  </div>;

};



export default Bulb;