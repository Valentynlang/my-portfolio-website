import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { BsArrowRight } from 'react-icons/bs';

interface Project {
  title: string;
  path: string;
  link: string;
}

const allProjects: Project[] = [
  {
    title: 'Brentford Project',
    path: '/thumb1.webp',
    link: 'https://www.thebrentfordproject.com/',
  },
  {
    title: 'yourcodesoul',
    path: '/thumb2.webp',
    link: 'https://www.yourcodesoul.com/',
  },
  {
    title: 'Alison',
    path: '/thumb3.webp',
    link: 'https://alison.com/',
  },
  {
    title: 'Leboncoin',
    path: '/thumb4.webp',
    link: 'https://www.leboncoin.fr/',
  },
  {
    title: 'Fixly',
    path: '/thumb5.webp',
    link: 'https://fixly.pl/',
  },
  {
    title: 'Doktor',
    path: '/thumb6.webp',
    link: 'https://doktor.se/',
  },
  {
    title: 'GLS Group',
    path: '/thumb7.webp',
    link: 'https://gls-group.eu/',
  },
  {
    title: 'Lieferando',
    path: '/thumb8.webp',
    link: 'https://www.lieferando.de/en',
  },
];

const groupProjects = (projects: Project[], groupSize: number = 4): Project[][] => {
  const groups: Project[][] = [];
  for (let i = 0; i < projects.length; i += groupSize) {
    groups.push(projects.slice(i, i + groupSize));
  }
  return groups;
};

const WorkSlider: React.FC = () => {
  const projectGroups = groupProjects(allProjects);
  
  return <Swiper 
  spaceBetween={10}
  pagination={{
    clickable: true,
    dynamicBullets: true,
  }}
  modules={[Pagination]}
  className='h-[280px] sm:h-[480px]'
>
  {projectGroups.map((group, groupIndex) => {
    return (
      <SwiperSlide key={groupIndex}>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
          {group.map((image, imageIndex) => {
            return (
              <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={`${groupIndex}-${imageIndex}`}>
                <div className='relative flex items-center justify-center overflow-hidden group'>
                  <Image src={image.path} alt={image.title} width={500} height={300} />
                  
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#25A1F3] to-[#4BE0FF] opacity-0 group-hover:opacity-80 transition-all duration-700'>
                    <a 
                      href={image.link} 
                      target='_blank' 
                      rel='noopener noreferrer'
                      className='absolute inset-0 w-full h-full z-10'
                      aria-label={`Visit ${image.title} project`}
                    />
                  </div>
                  
                  <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-500 z-20 text-white pointer-events-none'>
                    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2rem]'>
                      <div className='delay-100'>LIVE</div>
                      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight/></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SwiperSlide>
    );
  })}
</Swiper>;
};

export default WorkSlider;
