import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Code, Cpu, Download, ArrowRight, Github, Linkedin, User, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import Globe from '../components/Globe';

const Hero: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    // Check if there is a default profile.jpg, profile.png, or fallback to profile.svg in the public folder
    const img = new Image();
    img.onload = () => setProfileImage('/profile.jpg');
    img.onerror = () => {
      const imgPng = new Image();
      imgPng.onload = () => setProfileImage('/profile.png');
      imgPng.onerror = () => {
        setProfileImage('/profile.svg');
      };
      imgPng.src = '/profile.png';
    };
    img.src = '/profile.jpg';
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-10 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 via-black to-black -z-10"></div>
      
      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left z-20 pointer-events-none" // pointer-events-none to let clicks pass through empty spaces if needed, but buttons need pointer-events-auto
        >
          <div className="pointer-events-auto">
            <div className="inline-block px-3 py-1 mb-4 border border-neon-blue/50 rounded-full bg-neon-blue/10 backdrop-blur-md">
              <span className="text-neon-blue font-space text-sm tracking-widest">FUTURE READY ENGINEER</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-montserrat font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-neon-blue to-neon-purple">
              Atharva Mahendra Jadhav
            </h1>
            
            <h2 className="text-xl md:text-2xl font-space text-gray-300 mb-6 flex items-center gap-2">
              <Cpu className="text-neon-purple" /> AI & Cloud Engineering Aspirant
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg font-sans">
              A forward-thinking IT undergraduate passionate about building intelligent systems, leveraging AI/ML, Cloud (GCP), and Full-Stack development. Combining strong academic foundation with hands-on projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="./Atharva_Jadhav_Resume.PDF" 
                download="Atharva_Jadhav_Resume.PDF"
                className="px-6 py-3 bg-neon-blue/10 border border-neon-blue text-neon-blue font-bold rounded-lg hover:bg-neon-blue hover:text-black transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(0,243,255,0.3)] pointer-events-auto cursor-pointer"
              >
                <Download size={18} /> Download Resume
              </a>
              <Link to="/contact" className="px-6 py-3 bg-neon-purple/10 border border-neon-purple text-neon-purple font-bold rounded-lg hover:bg-neon-purple hover:text-white transition-all duration-300 flex items-center gap-2 pointer-events-auto cursor-pointer">
                Contact Me <ArrowRight size={18} />
              </Link>
            </div>

            {/* Badges */}
            <div className="mt-12 flex flex-wrap items-center gap-4 md:gap-6">
              {[
                { icon: Cloud, label: "Google Cloud", color: "hover:text-neon-blue" },
                { icon: Code, label: "Python", color: "hover:text-yellow-400" },
                { icon: Brain, label: "AI / ML", color: "hover:text-neon-purple" },
                { icon: Github, label: "GitHub", color: "hover:text-white" },
                { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-500" },
              ].map((badge, index) => (
                <div key={index} className="relative group">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }} 
                    className={`text-gray-400 ${badge.color} transition-colors pointer-events-auto cursor-pointer`}
                  >
                    <badge.icon size={28} className="md:w-8 md:h-8" />
                  </motion.div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                    <div className="bg-black/80 backdrop-blur-md border border-white/10 text-white text-xs font-space py-1.5 px-3 rounded-lg shadow-[0_0_15px_rgba(0,243,255,0.2)] whitespace-nowrap flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse"></span>
                      {badge.label}
                    </div>
                    {/* Arrow */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-2 h-2 bg-black/80 border-r border-b border-white/10 rotate-45"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Visual Content - Floating Card + Globe */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center h-[360px] sm:h-[450px] md:h-[500px] w-full"
        >
          {/* Interactive Globe in Background of Right Column */}
          <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
             <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] opacity-60">
                <Globe />
             </div>
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="z-10 relative pointer-events-none" // Make card pass through events so globe can be spun around it if clicked near
          >
             {/* Main Portrait Card */}
             <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-80 md:h-96 bg-black/40 backdrop-blur-sm border border-neon-blue/30 rounded-3xl flex flex-col items-center justify-center p-2 shadow-[0_0_30px_rgba(0,243,255,0.15)] relative overflow-hidden group pointer-events-auto">
                
                {/* Image Container / Placeholder */}
                <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-neon-blue/50 transition-colors duration-500">
                    
                    {/* Placeholder Background Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/10 via-transparent to-transparent opacity-50"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

                    {profileImage ? (
                      <div className="absolute inset-0 w-full h-full">
                        <img 
                          src={profileImage} 
                          alt="Atharva Mahendra Jadhav" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        {/* Scanline sweep layer to preserve sci-fi aesthetic */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                      </div>
                    ) : (
                      /* Neon Glowing Profile Icon */
                      <div className="relative z-10 flex flex-col items-center justify-center">
                          <div className="w-32 h-32 rounded-full border-2 border-neon-blue bg-black/50 backdrop-blur-sm flex items-center justify-center shadow-[0_0_20px_rgba(0,243,255,0.4),inset_0_0_10px_rgba(0,243,255,0.2)] relative">
                              <User size={64} className="text-neon-blue drop-shadow-[0_0_5px_rgba(0,243,255,0.8)]" />
                              
                              {/* Inner Ring */}
                              <motion.div 
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                  className="absolute inset-0 rounded-full border border-neon-blue/30 border-t-transparent border-l-transparent"
                              />

                              {/* Outer Ring */}
                              <motion.div 
                                  animate={{ rotate: -360 }}
                                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                  className="absolute -inset-2 rounded-full border border-neon-purple/30 border-b-transparent border-r-transparent"
                              />
                              
                              {/* Orbiting Dot */}
                              <motion.div 
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                  className="absolute inset-0 rounded-full"
                              >
                                  <div className="w-2 h-2 bg-neon-purple rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2 shadow-[0_0_5px_#bc13fe]"></div>
                              </motion.div>
                          </div>
                          
                          <div className="mt-4 flex flex-col items-center gap-1">
                               <div className="h-1 w-16 bg-neon-blue/30 rounded-full overflow-hidden">
                                  <motion.div 
                                    animate={{ x: [-20, 20] }}
                                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                                    className="h-full w-8 bg-neon-blue"
                                  />
                               </div>
                               <span className="text-[10px] font-space text-neon-blue/70 tracking-widest uppercase">Initializing Identity</span>
                          </div>
                      </div>
                    )}

                    {/* Vertical Scanning Line */}
                    <motion.div
                        animate={{ top: ['-10%', '110%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="absolute left-0 w-full h-1 bg-neon-blue/30 shadow-[0_0_10px_#00f3ff] blur-[1px] z-20 pointer-events-none"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10"></div>
                </div>

                {/* System Status Label */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-max z-20">
                    <div className="flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md border border-neon-blue/50 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_#22c55e]"></div>
                        <span className="text-[10px] font-mono text-neon-blue tracking-wider">SYSTEM: ONLINE</span>
                    </div>
                </div>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
