import React, { useState } from 'react';
import {
  RxArrowTopRight,
  RxCross1,
} from "react-icons/rx";
import { 
  FaFigma, 
  FaReact, 
  FaServer, 
  FaCode,
  FaTools,
  FaRocket
} from "react-icons/fa";
import { Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { motion, AnimatePresence } from 'framer-motion';


const serviceData = [
  {
    icon: <FaFigma />,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive interfaces that users love.',
    details: 'I specialize in crafting user-centered design solutions that combine aesthetics with functionality. My design process includes user research, wireframing, prototyping, and iterative testing to ensure the final product meets both business goals and user needs. I create responsive designs that work seamlessly across all devices and screen sizes.'
  },
  {
    icon: <FaReact />,
    title: 'Frontend Development',
    description: 'Building responsive, high-performance user interfaces.',
    details: 'I develop frontend applications using the latest technologies including React, Next.js, TypeScript and modern CSS frameworks. My focus is on creating fast-loading, accessible, and responsive interfaces. I implement state management solutions, optimize application performance, and ensure cross-browser compatibility.'
  },
  {
    icon: <FaServer />,
    title: 'Backend Development',
    description: 'Creating robust server-side solutions and APIs.',
    details: 'I build scalable backend systems using Node.js, Express, MongoDB, PostgreSQL and other modern technologies. My backend solutions include secure authentication systems, RESTful and GraphQL APIs, database design and optimization, and server-side logic. I implement best practices for security, performance, and maintainability.'
  },
  {
    icon: <FaCode />,
    title: 'Full-Stack Applications',
    description: 'End-to-end development of complete web applications.',
    details: 'I offer comprehensive full-stack development services, handling everything from database design to frontend implementation. My full-stack solutions integrate frontend and backend seamlessly, providing a cohesive user experience. I can build complete applications from scratch or expand existing systems with new features and capabilities.'
  },
  {
    icon: <FaTools />,
    title: 'Maintenance & Support',
    description: 'Ongoing support, bug fixes, and feature enhancements.',
    details: 'I provide ongoing maintenance and support services to keep your web applications running smoothly. Services include troubleshooting and bug fixes, performance optimization, security updates, feature enhancements, and technical support. I can take over existing projects, provide code reviews, and implement improvements to legacy systems.'
  },
  {
    icon: <FaRocket />,
    title: 'Performance Optimization',
    description: 'Improving the speed, efficiency and usability of web applications.',
    details: 'I specialize in optimizing web applications for maximum performance. My optimization services include code refactoring, reducing load times, optimizing database queries, implementing caching strategies, optimizing assets (images, scripts, styles), and enhancing overall application responsiveness. I use modern tools and techniques to measure and improve performance metrics.'
  },
];

const ServiceSlider: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedService(index);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <Swiper 
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination]}
        className='h-[280px] sm:h-[380px]'
      >
        {serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div 
                className='bg-[rgba(65,65,65,0.15)] h-max md:min-h-[90%] rounded-lg px-6 py-8 flex flex-col justify-between group cursor-pointer hover:bg-[rgba(89,209,250,0.15)] transition-all duration-300'
                onClick={() => openModal(index)}
              >
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                <div className='mb-2'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <div className='max-w-[350px] leading-normal'><p>{item.description}</p></div>
                </div>
                <div className='text-3xl self-end mt-auto'>
                  <RxArrowTopRight className='group-hover:text-accent group-hover:rotate-45 transition-all duration-300' />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <AnimatePresence>
        {selectedService !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1F1F2F] p-6 rounded-lg max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                onClick={closeModal}
              >
                <RxCross1 className="text-2xl" />
              </button>
              
              <div className="flex items-center mb-4">
                <div className="text-4xl text-accent mr-4">
                  {serviceData[selectedService].icon}
                </div>
                <h3 className="text-2xl font-semibold">
                  {serviceData[selectedService].title}
                </h3>
              </div>
              
              <p className="text-white/80 mb-4">
                {serviceData[selectedService].description}
              </p>
              
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-lg font-medium mb-2">Service Details:</h4>
                <p className="text-white/60">
                  {serviceData[selectedService].details}
                </p>
              </div>
              
              <button 
                className="mt-6 bg-accent hover:bg-accent/80 text-white py-2 px-4 rounded w-full transition-colors"
                onClick={closeModal}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServiceSlider;
