import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import Card from '../ui/Card';

const Experience = () => {
  const keyProjects = [
    {
      title: "HR Management System",
      description: "Built scalable HR management interfaces for employee data, leave tracking, and payroll processing. Designed reusable components and streamlined workflows, reducing manual HR tasks by 30%."
    },
    {
      title: "School Management System",
      description: "Developed comprehensive dashboards for student enrollment, attendance, and academic tracking. Enhanced data accuracy and simplified operations for administrators, teachers, and students."
    },
    {
      title: "Tutor Finding Application",
      description: "Engineered a platform for matching students with tutors, featuring advanced search, real-time booking, and profile management. Improved engagement through intuitive, mobile-first design."
    },
    {
      title: "E-commerce Application",
      description: "Created a modern e-commerce platform with product listings, shopping cart, and secure checkout. Collaborated with backend teams for real-time inventory and order management, ensuring a smooth shopping experience."
    }
  ];

  const responsibilities = [
    "Developed and maintained responsive, web-first UI components for enterprise applications using React and Tailwind CSS, ensuring optimal performance and accessibility across devices.",
    "Integrated frontend interfaces with backend REST APIs, enabling seamless data flow and robust application functionality.",
    "Collaborated in Agile sprints, contributing to planning, code reviews, and iterative feature releases.",
    "Optimized UI performance, reducing load times and improving user engagement through best practices in frontend development.",
    "Ensured cross-browser compatibility and mobile responsiveness, enhancing user satisfaction and retention."
  ];

  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Professional Experience
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Frontend Developer Intern</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg font-semibold">RFCHH Software Pvt Ltd</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Aug 2024 – Present</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Key Responsibilities:</h4>
            <ul className="space-y-3">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Key Projects:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {keyProjects.map((project, index) => (
                <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h5 className="font-semibold text-blue-600 mb-2">{project.title}</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default Experience;