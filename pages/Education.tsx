import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { EducationItem } from '../types';

const educationData: EducationItem[] = [
  {
    institution: "Trinity Academy of Engineering, Pune",
    degree: "B.Tech IT (Pursuing)",
    year: "Current - SE IT Student",
    details: "Building advanced foundations in Cloud Computing and AI architectures.",
    score: "Sem 1 - 9.5"
  },
  {
    institution: "AISSMS Polytechnic (MSBTE)",
    degree: "Diploma in Information Technology",
    year: "2025",
    details: "First Class Distinction. Capstone Project scored 90/100.",
    score: "76%"
  },
  {
    institution: "S.M. Choksey Jr. College",
    degree: "HSC - Science",
    year: "2023",
    details: "Focus on Mathematics and Physics.",
    score: "66.33%"
  },
  {
    institution: "Dr. G.G. Shah High School",
    degree: "SSC",
    year: "2021",
    details: "Completed secondary education with distinction.",
    score: "76%"
  }
];

const Education: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6 flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
      >
        Academic <span className="text-neon-blue">Timeline</span>
      </motion.h2>

      <div className="max-w-4xl w-full relative">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-transparent transform -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-12">
          {educationData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Content Card */}
              <div className="flex-1 w-full">
                <div className="bg-black/60 border border-white/10 p-6 rounded-xl relative group hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl"></div>
                  
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-space text-white group-hover:text-neon-blue transition-colors">{item.degree}</h3>
                    <span className="text-neon-purple font-mono text-sm bg-neon-purple/10 px-2 py-1 rounded border border-neon-purple/30">{item.score}</span>
                  </div>
                  
                  <h4 className="text-gray-300 flex items-center gap-2 mb-3">
                    <GraduationCap size={16} /> {item.institution}
                  </h4>
                  
                  <p className="text-gray-400 text-sm mb-3 flex items-center gap-2">
                    <Calendar size={14} /> {item.year}
                  </p>
                  
                  <p className="text-gray-500 text-sm border-t border-white/5 pt-3 mt-3">
                    {item.details}
                  </p>
                </div>
              </div>

              {/* Center Node */}
              <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 bg-black border-2 border-neon-blue rounded-full shadow-[0_0_15px_rgba(0,243,255,0.5)]">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Hologram Decoration */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="fixed top-1/2 right-10 -z-10 opacity-20 hidden lg:block"
      >
        <BookOpen size={300} className="text-neon-blue" />
      </motion.div>
    </div>
  );
};

export default Education;
