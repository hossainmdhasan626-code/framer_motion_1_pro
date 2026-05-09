import { motion } from "motion/react";

const Card = ({ bg_color, title, sub_title }) => {
  // Card variant for motion
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }}
      className="bg-[#1a1a1a] p-5 rounded-2xl border border-gray-800 cursor-pointer"
    >
      {/* Card img section */}
      <div
        style={{ backgroundColor: `${bg_color}` }}
        className="w-full h-32 rounded-xl mb-4 flex items-center justify-center text-3xl"
      >
        {/* Card img */}
        🚀
      </div>
      <h3 className="font-bold text-xl text-white">{title}</h3>
      <p className="text-gray-400">{sub_title}</p>
    </motion.div>
  );
};

export default Card;
