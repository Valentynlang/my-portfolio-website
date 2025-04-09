import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { BsArrowRight } from 'react-icons/bs';



const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.webp',
          link: 'https://www.thebrentfordproject.com/',
        },
        {
          title: 'title',
          path: '/thumb2.webp',
          link: 'https://www.yourcodesoul.com/',
        },
        {
          title: 'title',
          path: '/thumb1.webp',
          link: 'https://www.thebrentfordproject.com/',
        },
        {
          title: 'title',
          path: '/thumb2.webp',
          link: 'https://www.yourcodesoul.com/',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb2.webp',
          link: 'https://www.yourcodesoul.com/',
        },
        {
          title: 'title',
          path: '/thumb1.webp',
          link: 'https://www.thebrentfordproject.com/',
        },
        {
          title: 'title',
          path: '/thumb2.webp',
          link: 'https://www.yourcodesoul.com/',
        },
        {
          title: 'title',
          path: '/thumb1.webp',
          link: 'https://www.thebrentfordproject.com/',
        },
      ],
    },
  ],
};

const WorkSlider: React.FC = () => {
  return <Swiper 
  spaceBetween={10}
  pagination={{
    clickable: true,
    dynamicBullets: true,
  }}
  modules={[Pagination]}
  className='h-[280px] sm:h-[480px]'
>
  {workSlides.slides.map((slide, index) => {
    return (
      <SwiperSlide key={index}>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
          {slide.images.map((image, index) => {
            return (
              <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' >
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
