import React from 'react';
import SectionWrapper from '../common/SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-gray-100 dark:bg-gray-800">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Profile Summary
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
            Results-driven Frontend Developer with a postgraduate degree in Computer Applications and hands-on experience in building scalable, web-first responsive applications using React and Tailwind CSS. Skilled in collaborating within Agile teams, integrating APIs, and optimizing UI performance for seamless, cross-device user experiences. Dedicated to delivering impactful business solutions and committed to continuous learning in a dynamic tech environment.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;