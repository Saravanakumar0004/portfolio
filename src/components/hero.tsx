import { motion } from "framer-motion";

import { styles } from "../styles";
import { cn } from "../utils/lib";
import { Profile } from "../assets"; // Import your profile image

// Hero
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-10 z-10",
        )}
      >
        {/* Left Section - Text Content */}
        <div className="flex flex-row items-start gap-5">
          {/* Title */}
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          {/* About Me */}
          <div className="relative z-20">
            <h1 className={cn(styles.heroHeadText, "text-white")}>
              Hi, I'm <span className="text-[#915eff]">Saravanakumar</span>
            </h1>
            <p className={cn(styles.heroSubText, "mt-2 text-white-100")}>
              I develop visuals, user <br className="sm:block hidden" />
              interfaces and web applications
            </p>
            
            {/* Profile Image - Below text on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] mt-8 lg:hidden"
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#915eff] to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse" />
              
              {/* Profile image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#915eff] shadow-2xl shadow-purple-500/50">
                <img
                  src={Profile}
                  alt="Saravanakumar - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative ring animation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-[#915eff]/30 rounded-full"
                style={{ transform: "scale(1.1)" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Right Section - Profile Image (Desktop only) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block relative w-[350px] h-[350px] flex-shrink-0"
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#915eff] to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse" />
          
          {/* Profile image container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#915eff] shadow-2xl shadow-purple-500/50">
            <img
              src={Profile}
              alt="Saravanakumar - Full Stack Developer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative ring animation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-[#915eff]/30 rounded-full"
            style={{ transform: "scale(1.1)" }}
          />
        </motion.div>
      </div>

      {/* Scroll to about section */}
      <div className="absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};