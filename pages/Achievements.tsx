import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, CheckCircle, Cloud, Network, Brain, Zap, Image, Sparkles, 
  Code, Cpu, Terminal, Coffee, Layout, Database, Bot, Trophy 
} from 'lucide-react';
import { Achievement } from '../types';

const certificates: Achievement[] = [
  // Google Cloud Badges
  { id: 1, title: "Vertex AI Studio", issuer: "Google Cloud", icon: "cloud" },
  { id: 2, title: "Encoder-Decoder Architecture", issuer: "Google Cloud", icon: "network" },
  { id: 3, title: "Transformers & BERT Model", issuer: "Google Cloud", icon: "brain" },
  { id: 4, title: "Attention Mechanism", issuer: "Google Cloud", icon: "zap" },
  { id: 5, title: "Create Image Captioning Models", issuer: "Google Cloud", icon: "image" },
  { id: 6, title: "Intro to Image Generation", issuer: "Google Cloud", icon: "sparkles" },
  
  // Scaler
  { 
    id: 7, 
    title: "Python Excellence", 
    issuer: "Scaler", 
    details: "Certificate of Excellence (121 videos • 16 modules • 10 challenges)",
    icon: "code" 
  },
  
  // Simplilearn
  { 
    id: 8, 
    title: "Intro to Generative AI Studio", 
    issuer: "Simplilearn", 
    details: "Certificate Code: 8705312",
    icon: "cpu" 
  },
  
  // DISHA Computer Institute
  { id: 9, title: "C Programming", issuer: "DISHA Computer Institute", icon: "terminal" },
  { id: 10, title: "C++ Programming", issuer: "DISHA Computer Institute", icon: "terminal" },
  { id: 11, title: "Core Java", issuer: "DISHA Computer Institute", icon: "coffee" },
  { id: 12, title: "Advanced Java", issuer: "DISHA Computer Institute", icon: "coffee" },
  
  // Infeanet
  { id: 13, title: "HTML • CSS • Bootstrap", issuer: "Infeanet Training", icon: "layout" },
  { id: 14, title: "Internship Completion", issuer: "Infeanet Training", details: "JavaScript/PHP/SQL", icon: "database" },
  { id: 15, title: "AI/ML Workshop Completion", issuer: "Infeanet AI/ML", icon: "bot" },
  { id: 16, title: "Best Chatbot Award", issuer: "Infeanet AI/ML", icon: "trophy" },
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'cloud': return <Cloud size={24} />;
    case 'network': return <Network size={24} />;
    case 'brain': return <Brain size={24} />;
    case 'zap': return <Zap size={24} />;
    case 'image': return <Image size={24} />;
    case 'sparkles': return <Sparkles size={24} />;
    case 'code': return <Code size={24} />;
    case 'cpu': return <Cpu size={24} />;
    case 'terminal': return <Terminal size={24} />;
    case 'coffee': return <Coffee size={24} />;
    case 'layout': return <Layout size={24} />;
    case 'database': return <Database size={24} />;
    case 'bot': return <Bot size={24} />;
    case 'trophy': return <Trophy size={24} />;
    default: return <Award size={24} />;
  }
};

const Achievements: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block p-4 rounded-full bg-neon-blue/10 mb-4 border border-neon-blue/30 shadow-[0_0_20px_rgba(0,243,255,0.3)]"
          >
            <Award size={40} className="text-neon-blue" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            Awards & <span className="text-neon-blue">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-space">
            Validating expertise in AI, Cloud, and Software Development through recognized industry achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredId(cert.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 group cursor-pointer overflow-hidden z-10"
            >
              {/* Glowing Background Highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-neon-blue/50 rounded-2xl transition-colors duration-300 shadow-[0_0_0_1px_rgba(0,243,255,0.1)]"></div>
              
              {/* Content */}
              <div className="relative z-20 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl border border-white/10 bg-white/5 transition-colors duration-300 ${hoveredId === cert.id ? 'text-neon-blue border-neon-blue/50 bg-neon-blue/10 shadow-[0_0_15px_rgba(0,243,255,0.3)]' : 'text-gray-400'}`}>
                    {getIcon(cert.icon)}
                  </div>
                  {cert.icon === 'trophy' ? (
                     <div className="flex items-center gap-1 bg-yellow-500/10 border border-yellow-500/30 px-2 py-1 rounded text-[10px] text-yellow-500 font-bold uppercase tracking-wider">
                        Winner <Sparkles size={10} />
                     </div>
                  ) : (
                    <CheckCircle className="text-green-500/50 group-hover:text-neon-blue transition-colors duration-300" size={18} />
                  )}
                </div>

                <h3 className="text-lg font-bold font-space text-white mb-2 group-hover:text-neon-blue transition-colors duration-300 leading-tight">
                  {cert.title}
                </h3>
                
                <div className="mt-auto">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-mono mb-1">
                    Issued By
                  </p>
                  <p className="text-sm text-gray-300 font-medium">
                    {cert.issuer}
                  </p>
                  {cert.details && (
                    <p className="text-xs text-neon-purple mt-2 pt-2 border-t border-white/10 font-mono">
                      {cert.details}
                    </p>
                  )}
                </div>
              </div>

              {/* Robotic Scanning Effect */}
              <AnimatePresence>
                {hoveredId === cert.id && (
                  <>
                    <motion.div
                      initial={{ top: '-10%', opacity: 0 }}
                      animate={{ top: '110%', opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                      className="absolute left-0 right-0 h-1 bg-neon-blue/50 shadow-[0_0_10px_#00f3ff] blur-[2px] z-10"
                    />
                    
                    {/* Corner Brackets */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-neon-blue rounded-tl-md"></motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-neon-blue rounded-tr-md"></motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-neon-blue rounded-bl-md"></motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-neon-blue rounded-br-md"></motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
