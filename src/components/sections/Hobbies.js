import React from 'react';
import { Book, Palette } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import Card from '../ui/Card';

const Hobbies = () => {
  const hobbies = [
    {
      title: "Reading Novels",
      icon: Book,
      description: "I enjoy exploring different genres and stories, which helps me stay creative and learn new perspectives."
    },
    {
      title: "Photoshop Designing",
      icon: Palette,
      description: "Creating digital art and designs allows me to express creativity and enhance my visual design skills."
    }
  ];

  return (
    <SectionWrapper id="hobbies">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Hobbies & Interests
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {hobbies.map((hobby, index) => {
          const IconComponent = hobby.icon;
          return (
            <Card key={index} className="text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{hobby.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{hobby.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Hobbies;