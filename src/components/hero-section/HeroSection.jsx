import { motion } from "motion/react";

const HeroSection = () => {
  // Hero section buttons
  const buttons = [
    {
      id: 0,
      label: "View Worl",
    },
    {
      id: 1,
      label: "Contact Me",
    },
  ];

  //   Variant for Hero section
  const heroSectionVariant = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={heroSectionVariant}
      initial="hidden"
      animate="visible"
      className="w-full h-full flex flex-col items-center justify-center gap-10"
    >
      {/* Name */}
      <motion.div
        variants={heroSectionVariant}
        className="text-[32px] font-bold text-center"
      >
        Frontend Developer <br />& Animator
      </motion.div>

      {/* Subtitle */}
      <motion.div
        variants={heroSectionVariant}
        className="text-[22px] font-medium"
      >
        React · Framer Motion · UI/UX
      </motion.div>

      {/* Buttons */}
      <motion.div variants={heroSectionVariant} className="flex gap-5">
        {buttons?.map((items) => {
          return (
            <motion.button
              whileHover={{ scale: 1.05, opacity: 0.7 }}
              whileTap={{ scale: 0.97 }}
              key={items?.id}
              className="border-2 p-3 rounded-2xl font-semibold"
            >
              {items?.label}
            </motion.button>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
