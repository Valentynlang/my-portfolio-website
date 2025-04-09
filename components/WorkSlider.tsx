import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { BsArrowRight } from 'react-icons/bs';
import { useRouter } from 'next/router';

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
  const swiperRef = useRef<SwiperType | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = () => {
      if (sliderContainerRef.current) {
        sliderContainerRef.current.style.visibility = 'hidden';
        sliderContainerRef.current.style.opacity = '0';
      }
      
      if (swiperRef.current) {
        setTimeout(() => {
          if (swiperRef.current) {
            swiperRef.current.destroy(true, true);
            swiperRef.current = null;
          }
        }, 100);
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);
    
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null;
      }
    };
  }, [router]);
  
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .swiper-slider-container {
        transition: opacity 0.2s ease;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div ref={sliderContainerRef} className="relative w-full swiper-slider-container">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="h-[280px] sm:h-[480px] w-full"
      >
        {projectGroups.map((group, groupIndex) => (
          <SwiperSlide key={groupIndex}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {group.map((project, projectIndex) => (
                <div 
                  key={`${groupIndex}-${projectIndex}`}
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                >
                  <div className="relative flex items-center justify-center overflow-hidden group">
                    <Image 
                      src={project.path} 
                      alt={project.title} 
                      width={500} 
                      height={300}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#25A1F3] to-[#4BE0FF] opacity-0 group-hover:opacity-80 transition-all duration-700">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute inset-0 w-full h-full z-10"
                        aria-label={`Visit ${project.title} project`}
                      />
                    </div>
                    
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-500 z-20 text-white pointer-events-none">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2rem]">
                        <div className="delay-100">LIVE</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
