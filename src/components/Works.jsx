import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, designs } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-full sm:w-[300px] md:w-[360px] lg:w-[400px]"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 400,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-xl sm:text-2xl">{name}</h3>
          <p className="mt-2 text-secondary text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-sm ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const renderProjectSection = (title, data) => (
    <>
      <motion.div variants={textVariant()} className="mt-12">
        <h2 className={`${styles.sectionHeadText} text-center`}>{title}</h2>
      </motion.div>

      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-6 text-secondary text-base max-w-3xl leading-relaxed text-center"
        >
          Following projects showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to
          code repositories and live demos. It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-7">
        {data.map((item, index) => (
          <ProjectCard key={`${title}-${index}`} index={index} {...item} />
        ))}
      </div>
    </>
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Dev Projects.</h2>
      </motion.div>

      {renderProjectSection("Development Projects", projects)}
      {renderProjectSection("Design Projects", designs)}
    </>
  );
};

export default SectionWrapper(Works, "");
