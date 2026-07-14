import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';
import { Cpu, Globe, Database, Cloud, Terminal } from 'lucide-react';

const skills: Skill[] = [
  { name: "Python", level: 80, category: "Language" },
  { name: "Java / Adv Java", level: 75, category: "Language" },
  { name: "C / C++", level: 75, category: "Language" },
  { name: "Google Cloud / Vertex AI", level: 75, category: "Cloud" },
  { name: "Transformers / BERT", level: 70, category: "AI/ML" },
  { name: "HTML / CSS / Bootstrap", level: 90, category: "Web" },
  { name: "SQL / PHP", level: 75, category: "Web" },
];

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6 flex flex-col items-center">
       <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12">
        <span className="text-neon-blue">Technical</span> Arsenal
      </h2>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12">
        
        {/* Left: Skills Progress Bars */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="relative">
              <div className="flex justify-between mb-2">
                <span className="font-space font-bold text-white flex items-center gap-2">
                  {skill.category === 'Language' && <Terminal size={14} className="text-yellow-500"/>}
                  {skill.category === 'Cloud' && <Cloud size={14} className="text-blue-500"/>}
                  {skill.category === 'AI/ML' && <Cpu size={14} className="text-purple-500"/>}
                  {skill.category === 'Web' && <Globe size={14} className="text-cyan-500"/>}
                  {skill.name}
                </span>
                <span className="text-gray-400 font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`h-full rounded-full ${
                    skill.category === 'AI/ML' ? 'bg-neon-purple shadow-[0_0_10px_#bc13fe]' :
                    skill.category === 'Cloud' ? 'bg-blue-500 shadow-[0_0_10px_#3b82f6]' :
                    'bg-neon-blue shadow-[0_0_10px_#00f3ff]'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right: Circuit Board Visual Animation */}
        <div className="relative min-h-[250px] md:min-h-[400px] bg-black/40 rounded-2xl border border-neon-blue/20 overflow-hidden flex items-center justify-center">
            {/* Animated Nodes */}
            <div className="absolute inset-0">
               {[...Array(5)].map((_, i) => (
                 <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-neon-blue rounded-full shadow-[0_0_10px_#00f3ff]"
                    initial={{ x: Math.random() * 300, y: Math.random() * 300, opacity: 0 }}
                    animate={{ 
                      x: [Math.random() * 300, Math.random() * 300], 
                      y: [Math.random() * 300, Math.random() * 300],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                 />
               ))}
               
               {/* Connecting Lines (Simulated Circuit) */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                 <path d="M50 50 H 200 V 150 H 350" stroke="#00f3ff" strokeWidth="2" fill="none" />
                 <path d="M100 300 H 250 V 200 H 150" stroke="#bc13fe" strokeWidth="2" fill="none" />
                 <rect x="190" y="140" width="20" height="20" stroke="white" fill="none" />
               </svg>
            </div>

            <div className="z-10 text-center p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl">
               <Database size={48} className="mx-auto text-neon-purple mb-4 animate-pulse" />
               <h3 className="text-xl font-bold font-space">Core Competencies</h3>
               <p className="text-gray-400 text-sm mt-2">Integrating logic, data, and design.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
