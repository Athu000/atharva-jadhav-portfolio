import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, GraduationCap, Award, Cpu, FolderGit2, Mail } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Hero', path: '/', icon: Home },
  { label: 'About', path: '/about', icon: User },
  { label: 'Education', path: '/education', icon: GraduationCap },
  { label: 'Awards', path: '/achievements', icon: Award },
  { label: 'Skills', path: '/skills', icon: Cpu },
  { label: 'Projects', path: '/projects', icon: FolderGit2 },
  { label: 'Contact', path: '/contact', icon: Mail },
];

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-4xl bg-black/60 backdrop-blur-xl border border-neon-blue/30 rounded-full px-4 py-3 shadow-[0_0_20px_rgba(0,243,255,0.2)]">
      <ul className="flex justify-between items-center overflow-x-auto no-scrollbar md:overflow-visible">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path} className="mx-1 md:mx-2">
              <Link
                to={item.path}
                className={`flex flex-col items-center justify-center p-2 rounded-full transition-all duration-300 group ${
                  isActive
                    ? 'text-neon-blue scale-110 bg-white/10 shadow-[0_0_10px_rgba(0,243,255,0.4)]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <item.icon size={20} className={`mb-1 ${isActive ? 'animate-pulse' : ''}`} />
                <span className="text-[10px] uppercase font-space tracking-wider hidden md:block">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
