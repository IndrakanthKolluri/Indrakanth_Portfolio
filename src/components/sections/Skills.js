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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <Card key={category} className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">
              {category}
            </h3>
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;