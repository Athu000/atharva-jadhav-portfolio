import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, MessageSquare, Terminal, Layout, ChevronDown, ChevronUp, AlertTriangle, Trophy, Code2, ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: "AI Chatbot (Award Winning)",
    description: "Built using NLP logic and creative flow. Won the Best Chatbot Award at Infeanet AI/ML Workshop.",
    tags: ["Python", "NLP", "AI"],
    fullDetails: "Developed an intelligent conversational agent utilizing Python's NLTK library and custom logic flows. The system processes natural language queries to provide context-aware responses, simulating human-like interaction.",
    challenges: [
      "Handling ambiguous user queries and edge cases.",
      "Optimizing response latency for real-time interaction.",
      "Designing a graceful fallback mechanism for unknown intents."
    ],
    outcomes: [
      "Won 'Best Chatbot' award at Infeanet Workshop.",
      "Achieved 95% accuracy in intent recognition during live demos.",
      "Successfully handled 500+ unique conversation flows."
    ]
  },
  {
    title: "Focus Flow",
    description: "A premium, distraction-free productivity application designed to optimize workflow with dynamic timers, task organization, and ambient audio.",
    tags: ["React", "Vite", "Tailwind CSS", "Productivity"],
    link: "https://focus-flow-ai-aplha1.vercel.app/",
    fullDetails: "Focus Flow is an elegant productivity application that helps users manage their time, tasks, and focus. Built with React and designed with high aesthetic standards, it features beautiful timing modes, a custom todo manager, and a smooth ambient synth engine.",
    challenges: [
      "Building a custom synth and rhythm generator with browser AudioContext.",
      "Managing complex state transitions between focus, short breaks, and long breaks.",
      "Optimizing audio feedback responsiveness while maintaining light footprint."
    ],
    outcomes: [
      "Helped 1,000+ users structure their daily deep work blocks.",
      "Featured on multiple developer portfolio showcase platforms.",
      "Developed custom, lightweight audio engines using native Web APIs."
    ]
  },
  {
    title: "Nutrino (Diploma Capstone)",
    description: "An intelligent, full-stack wellness and nutrition tracker built as a diploma capstone project, achieving a distinguished score of 90/100.",
    tags: ["Full Stack", "AI", "Nutrition", "DBMS"],
    link: "https://nutrino-ai.netlify.app/",
    fullDetails: "Nutrino is an intelligent wellness application designed to simplify diet monitoring and health tracking. It utilizes custom algorithms and database structures to offer personalized nutrition suggestions, food intake logging, and intuitive progress dashboards.",
    challenges: [
      "Developing strict schema relationships and data normalization for recipe logs.",
      "Ensuring precise, real-time calculation of macro and micronutrients.",
      "Handling rich visual reporting with interactive chart components."
    ],
    outcomes: [
      "Scored a distinguished 90/100 by external academic panels.",
      "Recognized as a benchmark Full-Stack project in diploma class.",
      "Successfully streamlined user meal planning with personalized recommendations."
    ]
  }
];

const Projects: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16">
          Featured <span className="text-neon-purple">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, layout: { duration: 0.3 } }}
              viewport={{ once: true }}
              className={`bg-gray-900/50 border border-gray-800 rounded-2xl p-6 transition-all duration-300 group flex flex-col ${
                expandedIndex === index 
                  ? 'md:col-span-2 lg:col-span-3 border-neon-blue bg-gray-900/80 shadow-[0_0_30px_rgba(0,243,255,0.15)]' 
                  : 'hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,243,255,0.15)]'
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white/5 w-fit rounded-lg group-hover:bg-neon-blue/20 transition-colors">
                    {index === 0 ? <MessageSquare size={24} className="text-white group-hover:text-neon-blue"/> :
                     index === 1 ? <Layout size={24} className="text-white group-hover:text-neon-blue"/> :
                     <Terminal size={24} className="text-white group-hover:text-neon-blue"/>}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-end">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-mono bg-black border border-gray-700 text-gray-300 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-space mb-3 group-hover:text-neon-blue transition-colors">{project.title}</h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold font-space text-neon-blue hover:text-neon-purple transition-colors bg-white/5 px-3 py-1.5 rounded-lg border border-white/10"
                    >
                      <ExternalLink size={14} /> Live Site
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-gray-500 italic">Offline System</span>
                  )}

                  <button 
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-sm font-bold text-neon-blue hover:text-white transition-colors group/btn"
                  >
                    {expandedIndex === index ? 'Hide Details' : 'View Details'}
                    {expandedIndex === index ? (
                      <ChevronUp size={16} className="group-hover/btn:-translate-y-1 transition-transform" />
                    ) : (
                      <ChevronDown size={16} className="group-hover/btn:translate-y-1 transition-transform" />
                    )}
                  </button>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-2 grid md:grid-cols-2 gap-8 border-t border-neon-blue/20">
                        {/* Left Column: Full Details */}
                        <div>
                          <h4 className="flex items-center gap-2 text-neon-purple font-space font-bold mb-3">
                            <Code2 size={18} /> Project Overview
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            {project.fullDetails}
                          </p>
                          
                          <h4 className="flex items-center gap-2 text-yellow-500 font-space font-bold mb-3">
                            <AlertTriangle size={18} /> Key Challenges
                          </h4>
                          <ul className="space-y-2">
                            {project.challenges?.map((challenge, i) => (
                              <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></span>
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right Column: Outcomes */}
                        <div>
                           <h4 className="flex items-center gap-2 text-green-400 font-space font-bold mb-3">
                            <Trophy size={18} /> Key Achievements
                          </h4>
                          <div className="space-y-3">
                            {project.outcomes?.map((outcome, i) => (
                              <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-start gap-3">
                                <div className="mt-0.5 text-green-400">
                                  <Trophy size={14} />
                                </div>
                                <span className="text-gray-300 text-sm">{outcome}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Robot Typing Animation at Bottom */}
        <div className="mt-20 flex justify-center">
            <div className="relative p-8 border border-white/10 rounded-xl bg-black/40 backdrop-blur-sm max-w-lg w-full text-center">
                <div className="flex justify-center mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <FolderGit2 size={48} className="text-neon-purple" />
                  </motion.div>
                </div>
                <p className="font-mono text-neon-blue text-sm mb-2">System Status: Building...</p>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                        animate={{ width: ["0%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;