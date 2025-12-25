import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="bg-black-200 p-10 rounded-3xl w-full hover:scale-[1.02] transition-transform duration-300"
  >
    {/* Quote Icon with Gradient */}
    <div className="flex items-center justify-between mb-4">
      <p className="text-white font-black text-5xl leading-none">"</p>
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-20" />
    </div>

    {/* Testimonial Text */}
    <p className="text-white tracking-wider text-lg leading-relaxed min-h-[120px]">
      {testimonial}
    </p>

    {/* Divider */}
    <div className="w-full h-[1px] bg-white/10 my-6" />

    {/* Author Info */}
    <div className="flex items-center gap-4">
      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-14 h-14 rounded-full object-cover border-2 border-white/20 shadow-lg"
      />
      
      <div className="flex-1">
        <p className="text-white font-semibold text-base">
          {name}
        </p>
        <p className="text-secondary text-sm">
          {designation}
        </p>
        <p className="text-secondary/70 text-xs">
          {company}
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      {/* Header Section */}
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] flex items-center`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      {/* Cards Grid - Responsive */}
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default SectionWrapper(Feedbacks, "");
