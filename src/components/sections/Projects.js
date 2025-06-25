import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import Card from '../ui/Card';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      technologies: "React, Tailwind CSS",
      github: "https://github.com/IndrakanthKolluri/Indrakanth_Portfolio",
      description: "Designed and developed a personal portfolio website to showcase projects, skills, and experience. Implemented a responsive, web-first design for optimal viewing across devices. Integrated contact forms and project galleries to enhance user engagement."
    },
    {
      title: "Task Tracker Application",
      technologies: "React, Tailwind CSS",
      github: "https://github.com/IndrakanthKolluri/Task_Manager",
      description: "Built a task tracker app allowing users to add, edit, and delete tasks. Implemented features such as task completion toggles and filtering. Focused on intuitive UI/UX and responsive design for both desktop and mobile users."
    }
  ];

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Personal Projects
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="h-full">
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {project.technologies}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;