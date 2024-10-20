import { arrowIcon } from "../assets/icons";
import { heroResponsive } from "../assets/illustrations";
import { motion } from "framer-motion";

const Hero = ({ scrollToProduct }) => {
  return (
    <section
      id="Hero"
      className="pt-9 pb-28 lg:pb-[380px] 2xl:pb-60 bg-singleWavePattern bg-[length:900px_50px]"
    >
      <div className="flex text-center justify-center mx-auto 2xl:mx-60 2xl:justify-between 2xl:text-start">
        <div className="max-w-[380px]">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 2 }}
            className="mobileTextL1AllCaps24 text-neutral600 mb-2 2xl:desktopL1AllCaps"
          >
            Explore the
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 3 }}
            className="mobileTitleL1Default text-neutral900 2xl:desktopTitleL1Default"
          >
            <span className="gradientText">Tech</span>
            Zone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 3 }}
            className="mt-6 mx-6 lg:mx-10 2xl:mx-0 text-neutral600 mobileTextL1Default 2xl:desktopL1Default 2xl:w-[523px]">
            Here you'll be able to redeem all of your hard-earned Aeropoints and
            exchange them for cool tech.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 3 }}
            onClick={scrollToProduct}
            className="mt-10 brandDefault rounded-3xl py-5 w-full flex justify-center mx-auto max-w-[318px] 2xl:mx-0"
          >
            <p className="mobileTextL1Default uppercase text-neutral0 mr-1">
              View all products
            </p>
            <img src={arrowIcon} alt="arrow down" />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 3 }}
          className="hidden sectionBg h-[600px] w-[722px] rounded-[10%] 2xl:block"
        >
          <img
            src={heroResponsive}
            alt="person with vr headset"
            width={580}
            className="hidden max-w-[897px] -mt-[120px] lg:-mt-[320px] 2xl:flex 2xl:-mt-[200px] 2xl:w-[820px] 2xl:h-[800px] 2xl:-ml-[40px]"
        />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
