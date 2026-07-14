import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Rabbit } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6 flex items-center justify-center">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(188,19,254,0.1)]">
          
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-4xl font-montserrat font-bold mb-2 text-white">Let's <span className="text-neon-blue">Connect</span></h2>
            <p className="text-gray-400 mb-8">Ready to collaborate on AI & Cloud projects.</p>

            <div className="space-y-6">
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-neon-blue/10 rounded-full text-neon-blue">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Location</p>
                  <p className="font-medium">Pune, Maharashtra</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-neon-purple/10 rounded-full text-neon-purple">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Email</p>
                  <p className="font-medium">atharvajadhav0001@gmail.com</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-white/10 rounded-full text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Phone</p>
                  <p className="font-medium">+91 8080041110</p>
                </div>
              </motion.div>

               <motion.a 
                 href="https://www.linkedin.com/in/atharva-jadhav-254606312" 
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ x: 10 }} 
                 className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors"
               >
                <div className="p-3 bg-blue-500/10 rounded-full text-blue-500">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">LinkedIn</p>
                  <p className="font-medium">atharva-jadhav-254606312</p>
                </div>
              </motion.a>
            </div>

            {/* Cute Bunny Animation */}
            <div className="mt-12 flex items-center gap-4">
               <motion.div
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                 className="text-pink-400"
               >
                 <Rabbit size={40} />
               </motion.div>
               <span className="text-xs text-gray-500 font-mono">Waiting for your message...</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">NAME</label>
                <input type="text" className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all" />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">EMAIL</label>
                <input type="email" className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all" />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">MESSAGE</label>
                <textarea rows={4} className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-neon-blue focus:outline-none focus:ring-1 focus:ring-neon-blue transition-all"></textarea>
              </div>
              <button type="button" className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-black font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
