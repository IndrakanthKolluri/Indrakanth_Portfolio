import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import SectionWrapper from '../common/SectionWrapper';
import TypingAnimation from '../common/TypingAnimation';

const Home = () => {
  const titles = ['Frontend Developer', 'React Developer', 'Web Developer'];

  return (
    <SectionWrapper id="home" className="pt-24 md:pt-18 min-h-screen flex items-center">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Indrakanth Kolluri
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 h-8">
            <span className="text-gray-600 dark:text-gray-300">I'm a </span>
            <span className="text-blue-600 font-semibold">
              <TypingAnimation texts={titles} />
            </span>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>Hyderabad, Telangana, India</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <Mail className="h-5 w-5 text-blue-600" />
              <a href="mailto:kolluriindrakanth@gmail.com" className="hover:text-blue-600 transition-colors">
                kolluriindrakanth@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <a href="tel:+917993594234" className="hover:text-blue-600 transition-colors">
                +91 7993594234
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="https://www.linkedin.com/in/indrakanth-kolluri-a35a4925a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/IndrakanthKolluri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            {/* <a
              href="https://indrakanth-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
            >
              <ExternalLink className="h-6 w-6" />
            </a> */}
          </div>
        </div>
        
        <div className="mt-10 lg:mt-0 flex justify-center">
          <div className="relative">
            <div className="w-96 h-96 flex items-center justify-center">
              <img
                src="/profilepic.png"
                alt="Profile"
                className="w-96 h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Home;