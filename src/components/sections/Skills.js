import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import Card from '../ui/Card';
import { SKILLS } from '../../utils/constants';

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="bg-gray-100 dark:bg-gray-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Technical Skills
        </h2>
      </div>

      <div className="flex flex-col gap-10 w-full px-4">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category} className="w-full">
            <h3 className="text-xl font-semibold mb-2 pb-1 border-b border-gray-300 dark:border-gray-600
              bg-gradient-to-r from-blue-600 via-purple-500 to-orange-400 bg-clip-text text-transparent dark:from-purple-300 dark:via-pink-300 dark:to-orange-200">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2 justify-start">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;