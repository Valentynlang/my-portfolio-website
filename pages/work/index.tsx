import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Bulb from "@/components/Bulb";
import WorkSlider from "@/components/WorkSlider";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center ">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex flex-col  xl:w-[30vw] lg:text-left mb-4 xl:mb-0">
            <motion.h2 className="h2 xl:mt-12"
              initial='hidden'
              animate='show'
              exit='hidden'
              variants={fadeIn('up', 0.2)}
            >
              My Work<span className="text-accent">.</span>
            </motion.h2>
            <motion.p className="max-w-[400px] leading-normal"
              initial='hidden'
              animate='show'
              exit='hidden'
              variants={fadeIn('up', 0.4)}
            >
              I specialize in creating modern web applications using advanced technologies. I turn complex ideas into elegant digital solutions by combining creative design and high quality development.
            </motion.p>
          </div>
          <motion.div className="w-full xl:max-w-[65%]"
            initial='hidden'
            animate='show'
            exit='hidden'
            variants={fadeIn('up', 0.6)}
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>)
};

export default Work;
