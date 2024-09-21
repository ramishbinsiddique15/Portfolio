import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import down from "../assets/down.svg";
import { toast } from "react-hot-toast"; // Import toast


const ServiceCard = ({ index, title, icon }) => {

  
  return <Tilt className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right","spring",0.5 * index, 0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      options={{max:45,scale:1,speed:450}}
      >
        <img src={icon} alt="icon" className="w-16 h-16 object-contain"/>
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>;
};

const About = () => {
  const handleDownload = () => {
    // Create a Blob from the resume file URL
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
    toast.success("Resume downloaded successfully!");
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a MERN stack developer specializing in creating dynamic web
        applications using React, Next.js, Node.js, MongoDB, and Tailwind CSS.
        With a passion for crafting intuitive user interfaces and robust
        back-end systems, I deliver high-quality solutions that enhance user
        experience and drive engagement. Explore my portfolio to see how I blend
        creativity with technical expertise to bring innovative ideas to life.
      </motion.p>

      <div className="mt-20 flex justify-center flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-3">
        
      <button className="bg-tertiary mt-2 cursor-pointer z-50 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl flex items-center gap-1" onClick={handleDownload}>
        <img src={down} alt="" />
        Resume
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
