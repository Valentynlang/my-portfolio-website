import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { useState, ReactNode, useEffect } from "react";
import {
  FaFigma,
  FaVuejs,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNuxtdotjs,
  SiVite,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiNextdotjs,
  SiAdobephotoshop,
  SiAdobeaftereffects,
} from "react-icons/si";
import CountUp from "react-countup";

// Define types for our data structure
type SkillItem = {
  title: string;
  icons: ReactNode[];
};

type ExperienceItem = {
  title: string;
  stage: string;
};

type InfoItem = SkillItem | ExperienceItem;

type AboutDataItem = {
  title: string;
  info: InfoItem[];
};

const aboutData: AboutDataItem[] = [
  {
    title: "Skills",
    info: [
      {
        title: "Frontend",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <SiTypescript key="ts" />,
          <FaReact key="react" />,
          <FaVuejs key="vue" />,
          <SiNextdotjs key="next" />,
          <SiNuxtdotjs key="nuxt" />,
          <SiVite key="vite" />,
        ]
      },
      {
        title: "Backend",
        icons: [
          <FaNodeJs key="node" />,
          <SiExpress key="express" />,
          <SiNestjs key="nest" />,
          <SiPostgresql key="postgres" />,
          <SiMongodb key="mongo" />,
          <SiPrisma key="prisma" />,
          <FaDocker key="docker" />
        ]
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobephotoshop key="photoshop" />,
          <SiAdobeaftereffects key="aftereffects" />
        ]
      }
    ],
  },
  {
    title: "Experience",
    info: [
      {
        title: "Fullstack - Freelance",
        stage: "July 2021 – Present"
      },
      {
        title: "Middle Fullstack - Azul  Agency",
        stage: "April 2024 – November 2024"
      },
      {
        title: "Middle Frontend - Capgemini",
        stage: "February 2023 – August 2023"
      },
      {
        title: "Junior Frontend - The Mom Project",
        stage: "April 2022 – October 2022"
      }
    ],
  },
  {
    title: "Credentials",
    info: [
      {
        title: "Bachelor's degree in Computer Engineering (KNUTD)",
        stage: "2015 - 2019"
      }
    ]
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.classList.add('about-page');
    
    return () => {
      document.body.classList.remove('about-page');
    };
  }, []);

  const hasIcons = (item: InfoItem): item is SkillItem => 
    'icons' in item;
  
  const hasStage = (item: InfoItem): item is ExperienceItem => 
    'stage' in item;

  return (
    <div className="min-h-screen xl:py-32  py-24 mt-2 msx-w-[90%] text-center xl:text-left bg-primary/30">
      <Circles />
      <motion.div 
        variants={fadeIn('right', 0.2)} 
        initial="hidden" 
        animate="show" 
        exit="hidden" 
        className="hidden xl:flex absolute -bottom-20 -left-[32%] max-h-[90%] max-w-[60%]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto flex flex-col xl:flex-row gap-x-6 xl:mt-14 xl:ml-44">
        <div className="flex flex-1 flex-col justify-center">
        <h2 className="h2">Crafting <span className="text-accent">web solutions</span> that drive results.</h2>
        <p className=" mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">For over three years, I've been dedicated to building scalable, high-performance web solutions across diverse industries.
        </p>
        
        <div>
          <div className="flex items-center flex-1 xl:gap-x-4">
            <div className="relative flex-1 after:w-[1px] agter:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 " >
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={4} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] ">Year of experience</div> 
            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] ">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 my-2">
            {aboutData.map((item, itemIndex) => (
              <div 
                key={itemIndex} 
                className={`cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0 ${
                  itemIndex === index ? 'text-accent after:w-full after:bg-[#007FFF] after:transition-all after:duration-300' : ''
                }`} 
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-y-2 xl:gap-y-4  xl:py-6 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div 
                key={itemIndex} 
                className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-white/80"
              >
                <div>{item.title}</div>
                <div className="hidden md:flex">-</div>
                {hasStage(item) && (
                  <>
                    <div>{item.stage}</div>
                  </>
                )}
                {hasIcons(item) && (
                  <div className="flex gap-x-4">
                    {item.icons.map((icon, iconIndex) => (
                      <div key={iconIndex} className="text-2xl text-white">
                        {icon}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
