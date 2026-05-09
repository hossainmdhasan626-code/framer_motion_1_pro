import { motion } from "motion/react";
import Card from "./Card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce App",
      tech: "React · Next.js · Tailwind",
      color: "#2e2e6a",
    },
    {
      id: 2,
      title: "Dashboard UI",
      tech: "Tailwind · Chart.js · React",
      color: "#062c21",
    },
    {
      id: 3,
      title: "Design System",
      tech: "Storybook · Framer Motion",
      color: "#3d2000",
    },
    {
      id: 4,
      title: "Discover Bangladesh",
      tech: "React · Framer Motion · Tailwind",
      color: "#1a2e1a",
    },
    {
      id: 5,
      title: "Social Media Platform",
      tech: "Next.js · Firebase · Framer Motion",
      color: "#4a148c",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      tech: "React · Redux · Tailwind",
      color: "#1b2631",
    },
    {
      id: 7,
      title: "Weather App",
      tech: "React · OpenWeather API",
      color: "#154360",
    },
    {
      id: 8,
      title: "Portfolio Website",
      tech: "React · Framer Motion · Vite",
      color: "#1b4f72",
    },
    {
      id: 9,
      title: "Recipe Finder",
      tech: "React · Axios · CSS Modules",
      color: "#641e16",
    },
    {
      id: 10,
      title: "Task Management Tool",
      tech: "Next.js · Framer Motion · PostgreSQL",
      color: "#145a32",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="p-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="text-white mb-5"
      >
        PROJECTS — SCROLL করলে REVEAL হবে
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {projects.map((items) => (
          <div key={items?.id}>
            <Card
              bg_color={items?.color}
              title={items?.title}
              sub_title={items?.tech}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
