import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple"
        >
          About The Developer
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-8">
             <motion.div 
               initial={{ x: -50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-[0_0_15px_rgba(0,243,255,0.1)]"
             >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-neon-blue/20 rounded-full text-neon-blue">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-space font-bold">Introduction</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Atharva Jadhav is an IT undergraduate currently pursuing B.Tech in Information Technology (FY) at 
                  <span className="text-neon-blue"> Trinity Academy of Engineering, Pune</span>. 
                  He holds a strong technical foundation built through a Diploma in IT (First Class Distinction, 75.47%), 
                  followed by certifications in AI, Python, Cloud, and Web Development.
                </p>
             </motion.div>

             <motion.div 
               initial={{ x: -50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-[0_0_15px_rgba(188,19,254,0.1)]"
             >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-neon-purple/20 rounded-full text-neon-purple">
                    <Target size={24} />
                  </div>
                  <h3 className="text-2xl font-space font-bold">Mission Statement</h3>
                </div>
                <p className="text-gray-300 leading-relaxed italic border-l-4 border-neon-purple pl-4">
                  "To become an AI & Cloud Engineer, mastering Google Cloud, TensorFlow, PyTorch, and building real-world ML solutions that drive innovation."
                </p>
             </motion.div>
          </div>

          {/* Robot Animation Visual */}
          <div className="flex flex-col items-center justify-center h-full relative">
             <motion.div 
               animate={{ 
                 y: [0, -15, 0],
                 rotate: [0, 2, -2, 0]
               }}
               transition={{ duration: 6, repeat: Infinity }}
               className="relative"
             >
                {/* Robot Illustration Construction (using CSS/Icons) */}
                <div className="w-64 h-64 relative">
                   <div className="absolute inset-0 bg-neon-blue/20 rounded-full blur-3xl animate-pulse"></div>
                   <Bot size={200} className="text-white drop-shadow-[0_0_15px_rgba(0,243,255,0.8)] relative z-10" />
                   
                   {/* Scanning Effect */}
                   <motion.div 
                     animate={{ top: ['0%', '100%', '0%'] }}
                     transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                     className="absolute left-0 w-full h-1 bg-neon-purple/80 shadow-[0_0_10px_#bc13fe] z-20"
                   />
                </div>
             </motion.div>
             
             <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-sm">
                <div className="bg-black/40 p-4 rounded-lg border border-neon-blue/30 text-center">
                   <h4 className="text-2xl font-bold text-neon-blue">10+</h4>
                   <p className="text-xs text-gray-400 uppercase tracking-widest">Projects</p>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-neon-purple/30 text-center">
                   <h4 className="text-2xl font-bold text-neon-purple">5+</h4>
                   <p className="text-xs text-gray-400 uppercase tracking-widest">Certifications</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
