import React from 'react';
import Link from 'next/link';
import { 
  RiInstagramLine, 
  RiFacebookLine, 
  RiLinkedinLine, 
  RiGithubLine 
} from 'react-icons/ri';

const socialLinks = [
  { id: 'linkedin', icon: RiLinkedinLine, url: 'https://www.linkedin.com/in/z-dons-v-v/', label: 'LinkedIn' },
  { id: 'instagram', icon: RiInstagramLine, url: 'https://www.instagram.com/equivalent_n/', label: 'Instagram' },
  { id: 'facebook', icon: RiFacebookLine, url: 'https://www.facebook.com/profile.php?id=100092224983539', label: 'Facebook' },
  { id: 'github', icon: RiGithubLine, url: 'https://github.com/Valentynlang', label: 'GitHub' },
];

const Socials: React.FC = () => {
  return (
    <nav className='flex items-center gap-x-5 text-lg'>
      {socialLinks.map(({ id, icon: Icon, url, label }) => (
        <Link 
          key={id}
          href={url} 
          aria-label={label}
          target="_blank" 
          rel="noopener noreferrer"
          className='hover:text-accent transition-all duration-300'
        >
          <Icon />
        </Link>
      ))}
    </nav>
  );
};

export default Socials;