import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt 
    className="w-full sm:w-[250px]"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full rounded-2xl p-[1px] shadow-lg bg-gradient-to-r from-green-400 via-pink-500 to-purple-500"
    >
      <div className="bg-gray-900 rounded-2xl py-5 px-8 min-h-[280px] flex flex-col items-center justify-evenly">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-xl font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Aperçu.</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 text-secondary text-base max-w-3xl leading-relaxed text-center"
        >
          Je suis un développeur logiciel expérimenté avec une expertise en 
          JavaScript, et une expertise dans des frameworks tels que React, Node.js. 
          J'apprends vite et collabore étroitement avec mes clients pour
          créer des solutions efficaces, évolutives et conviviales qui répondent à
          des problèmes concrets. Travaillons ensemble pour donner vie à vos idées !
        </motion.p>
      </div>
<br />
      <div className="mt-12 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
