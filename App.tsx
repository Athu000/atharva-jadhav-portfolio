import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Starfield from './components/Starfield';
import Hero from './pages/Hero';
import About from './pages/About';
import Education from './pages/Education';
import Achievements from './pages/Achievements';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/education" element={<PageWrapper><Education /></PageWrapper>} />
        <Route path="/achievements" element={<PageWrapper><Achievements /></PageWrapper>} />
        <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans selection:bg-neon-blue selection:text-black">
        <Starfield />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
