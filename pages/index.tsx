import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import ParticlesContainer from '@/components/ParticlesContainer';
import ProjectsBtn from '@/components/ProjectsBtn';
import Avatar from '@/components/Avatar';

const Home: NextPage = () => {
  return (
  <div className='bg-primary/60 h-full'>
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto xl:ml-44'>
        <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='h1'>
          Transforming ideas <br /> Into <span className='text-accent'>Digital-world</span>
        </motion.h1>
        <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
          I specialize in creating modern web applications using advanced technologies. I turn complex ideas into elegant digital solutions by combining creative design and high quality development.
        </motion.p>
        <div className='flex justify-center xl:hidden relative '>
          <ProjectsBtn />
        </div>
        <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex '>
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    <div className='w-full h-full absolute right-0 bottom-0'>
      <ParticlesContainer />
    </div>

      <div className='md:w-[65%] opacity-50 -right-6 bottom-0 xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 bg-gradient-to-t from-transparent via-primary/30 to-transparent'></div>

      <motion.div variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' transition={{ duration: 0.8, ease: 'easeInOut' }} className='w-full h-full max-w-[700px] max-h-[641px] absolute -bottom-32 lg:bottom-10 lg:right-[2%] '>
        <Avatar />
      </motion.div>

  </div>
  )
};

export default Home;
