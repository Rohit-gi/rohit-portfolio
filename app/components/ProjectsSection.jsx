"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Global Cryosphere Watch Redesign",
    description: "Revamped Global Cryosphere Watch web application utilizing HTML, CSS, JavaScript, PHP and WordPress. Developed custom plugins, 5+ tables with advanced multiple filters and implementing download functionality for snow trackers.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rohit-gi/public",
    previewUrl: "https://globalcryospherewatch.org/",
  },
  {
    id: 2,
    title: "Admin Dashboard Panel",
    description: "Developed a dynamic admin panel dashboard using React.js, Recharts for dynamic area chart visualization, and ContextAPI for state management. Implemented React Router for navigation, pagination, and data organization in the admin panel.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Rohit-gi/AdminPanel",
    previewUrl: "https://react-admin-chart.netlify.app/",
  },
  {
    id: 3,
    title: "ZARA Redesign Project",
    description: "Redesigned the ZARA website for LIS-646 course to enhance user shopping experience using plugins like Elementor and WooCommerce, improving responsiveness with HTML, CSS, and WordPress.",
    image: "/images/projects/3.jpeg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://drive.google.com/file/d/1-A-n2RpKmcWzwhiAJ7y8cFcM_2z8g8eF/view",
  },
  {
    id: 4,
    title: "Badger Chat",
    description: "Developed a cross-platform chat application using React.js for web and ReactNative for mobile, with real-time messaging capabilities with CRUD features including message management and navigation.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Rohit-gi/badgerchat-web",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Survey Builder Tool",
    description: "Built a React survey builder tool with JSON integration utilizing React 18, Bootstrap, React Hook Form, and react-dnd for drag-and-drop features. Implemented custom components and multi-column rows.",
    image: "/images/projects/5.gif",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Lead Generation Website",
    description: "Led the development of lead generation website for a education consulting business with HTML, CSS, JavaScript and AJAX for efficient data handling and user engagement.",
    image: "/images/projects/6.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;