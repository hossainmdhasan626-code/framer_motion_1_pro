import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const Card = ({ bg_color, title, sub_title, id }) => {
  const [show, setShow] = useState(false);
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
    <div>
      {/* Main cart */}
      <motion.div
        onClick={() => setShow(true)}
        layoutId={`${id}`}
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

      {/* Modal Cart */}
      <AnimatePresence>
        {show && (
          <motion.div
            key="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShow(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              layoutId={`${id}`}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1a1a1a] w-full max-w-2xl rounded-3xl border border-gray-800 overflow-hidden relative"
            >
              <div
                style={{ backgroundColor: `${bg_color}` }}
                className="w-full h-64 flex items-center justify-center text-6xl"
              >
                🚀
              </div>
              <div className="p-8">
                <h3 className="font-bold text-3xl text-white">{title}</h3>
                <p className="text-gray-400 mt-4">বিস্তারিত এখানে...</p>
                <button
                  onClick={() => setShow(false)}
                  className="mt-6 bg-white text-black px-4 py-2 rounded-lg"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;
