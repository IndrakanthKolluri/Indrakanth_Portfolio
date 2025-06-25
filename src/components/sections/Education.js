import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import Card from '../ui/Card';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Osmania University",
      location: "Hyderabad, Telangana",
      duration: "Dec 2021 – Nov 2023",
      score: "Percentage: 70%"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Masterji Degree and PG College",
      location: "Warangal, Telangana",
      duration: "Jun 2018 – May 2021",
      score: "Percentage: 70%"
    },
    {
      degree: "Intermediate (Science Stream)",
      institution: "Jawahar Navodaya Vidyalaya",
      location: "Warangal, Telangana",
      duration: "Jun 2016 – Apr 2018",
      score: "Percentage: 72%"
    },
    {
      degree: "SSC",
      institution: "Jawahar Navodaya Vidyalaya",
      location: "Warangal, Telangana",
      duration: "Jun 2015 – Apr 2016",
      score: "CGPA: 8.4"
    }
  ];

  return (
    <SectionWrapper id="education" className="bg-gray-100 dark:bg-gray-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Education
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {education.map((edu, index) => (
          <Card key={index}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {edu.degree}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{edu.institution}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>{edu.score}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;