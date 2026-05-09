import { motion } from "motion/react";

const Header = () => {
  // Navigations items
  const navItems = [
    {
      id: 1,
      label: "Work",
    },
    {
      id: 2,
      label: "About",
    },
    {
      id: 3,
      label: "Contact",
    },
  ];

  // Motion variant for Header
  const navVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Motion variant for Logo
  const logoVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-full flex justify-between items-center px-5 pt-5"
    >
      {/* Logo */}
      <motion.div
        variants={logoVariants}
        className="font-bold text-xl cursor-pointer"
      >
        Arif.dev
      </motion.div>
      {/* Navigation items */}
      <div className="flex gap-3">
        {navItems.map((item) => (
          <motion.div
            key={item.id}
            variants={navVariants} // ৩. গুরুত্বপূর্ণ: প্রতিটি আইটেমে ভ্যারিয়েন্ট দিতে হবে
          >
            {item.label}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Header;
