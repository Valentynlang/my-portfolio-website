import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Socials from './Socials';

const Header: React.FC = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-44 xl:h-[90px]">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-2 py-8'>
        <Link href='/'>
          <Image src='/logo.svg' alt='logo' width={290} height={40} />
        </Link>
        <Socials />
      </div>
    </div>
  </header>;
};

export default Header;