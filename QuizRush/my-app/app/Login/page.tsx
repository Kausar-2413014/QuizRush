'use client';

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { 
  Mail, Lock, BookOpen, Calculator, Atom, Ruler, Globe, Microscope, 
  GraduationCap, Compass, Lightbulb, FlaskConical, Sparkles, Trophy, 
  Target, Rocket, Brain, Pencil, Puzzle, Star, Zap, Bookmark, Award, 
  CircleHelp, Sigma, Flame, Palette, Binary
} from 'lucide-react';

export default function LoginPage(): React.JSX.Element {
  const [identifier, setIdentifier] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Logging in with:', { identifier, password });
  };

  const handleIdentifierChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setIdentifier(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0b1026] flex items-center justify-center p-4 overflow-hidden select-none">
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(8deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(12px) rotate(-8deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-16px) scale(1.15); }
        }
        .animate-float-1 { animation: float-slow 4s ease-in-out infinite; }
        .animate-float-2 { animation: float-reverse 5.5s ease-in-out infinite; }
        .animate-float-3 { animation: float-slow 6.5s ease-in-out 1s infinite; }
        .animate-float-4 { animation: float-fast 3.8s ease-in-out 0.5s infinite; }
        .animate-spin-slow { animation: spin 18s linear infinite; }
      `}</style>

      {/* BACKGROUND DEKORASI */}
      <div className="absolute inset-0 pointer-events-none opacity-45 text-cyan-300/70">
        <div className="absolute top-6 left-8 animate-float-1"><Globe className="w-6 h-6" /></div>
        <div className="absolute top-20 left-1/4 animate-float-3"><Sparkles className="w-5 h-5 text-yellow-300" /></div>
        <div className="absolute top-32 left-10 animate-float-2"><Calculator className="w-7 h-7" /></div>
        <div className="absolute top-1/4 left-6 animate-float-4"><Puzzle className="w-6 h-6 text-purple-300" /></div>
        <div className="absolute top-16 left-1/3 animate-float-1"><Sigma className="w-5 h-5 text-cyan-200" /></div>
        <div className="absolute top-8 right-12 animate-float-2"><Rocket className="w-7 h-7 text-red-400" /></div>
        <div className="absolute top-20 right-1/4 animate-float-1"><GraduationCap className="w-8 h-8" /></div>
        <div className="absolute top-36 right-16 animate-float-3"><Pencil className="w-6 h-6 -rotate-45" /></div>
        <div className="absolute top-1/4 right-8 animate-float-4"><Star className="w-5 h-5 text-yellow-300 fill-yellow-300/40" /></div>
        <div className="absolute top-14 right-1/3 animate-float-2"><Binary className="w-6 h-6 text-emerald-300" /></div>
        <div className="absolute top-1/2 left-6 -translate-y-1/2 animate-float-2"><BookOpen className="w-7 h-7" /></div>
        <div className="absolute top-1/2 left-1/5 animate-float-1"><Compass className="w-6 h-6" /></div>
        <div className="absolute top-1/3 left-12 animate-float-3"><Palette className="w-6 h-6 text-pink-300" /></div>
        <div className="absolute top-1/2 right-6 -translate-y-1/2 animate-float-3"><FlaskConical className="w-7 h-7 text-emerald-400" /></div>
        <div className="absolute top-1/2 right-1/5 animate-float-4"><Brain className="w-7 h-7 text-pink-400" /></div>
        <div className="absolute top-1/3 right-10 animate-float-2"><Flame className="w-6 h-6 text-orange-400" /></div>
        <div className="absolute bottom-1/3 left-12 animate-float-3"><CircleHelp className="w-6 h-6" /></div>
        <div className="absolute bottom-24 left-6 animate-spin-slow"><Atom className="w-9 h-9 text-blue-400" /></div>
        <div className="absolute bottom-12 left-1/4 animate-float-1"><Microscope className="w-7 h-7" /></div>
        <div className="absolute bottom-6 left-10 animate-float-2"><Bookmark className="w-5 h-5" /></div>
        <div className="absolute bottom-1/4 left-1/3 animate-float-4"><Target className="w-6 h-6" /></div>
        <div className="absolute bottom-1/3 right-14 animate-float-1"><Trophy className="w-7 h-7 text-yellow-300" /></div>
        <div className="absolute bottom-24 right-6 animate-float-3"><Ruler className="w-7 h-7 -rotate-45" /></div>
        <div className="absolute bottom-14 right-1/4 animate-float-2"><Lightbulb className="w-7 h-7 text-yellow-200" /></div>
        <div className="absolute bottom-6 right-10 animate-float-4"><Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" /></div>
        <div className="absolute bottom-1/4 right-1/3 animate-float-1"><Award className="w-6 h-6" /></div>
        <div className="absolute top-10 left-1/2 -translate-x-1/2 animate-float-2"><Star className="w-4 h-4 text-cyan-200" /></div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float-3"><Sparkles className="w-5 h-5 text-cyan-200" /></div>
      </div>

      {/* KOTAK UTAMA LOGIN */}
      <div className="relative w-full max-w-sm bg-white rounded-3xl px-8 pt-20 pb-10 shadow-[0_0_35px_rgba(0,195,255,0.9),0_0_15px_rgba(0,140,255,0.7)] border-2 border-cyan-400 z-10">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <div className="relative w-36 h-36 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]">
            <img 
              src="/quiz-rush-logo.svg" 
              alt="Quiz Rush Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="text-center mb-6 mt-2">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Welcome Back,</h2>
          <p className="text-xs text-gray-500 font-medium mt-1">Log in now to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative flex items-center">
            <Mail className="absolute left-4 w-5 h-5 text-white/90 z-10 pointer-events-none" />
            <input
              type="text"
              value={identifier}
              onChange={handleIdentifierChange}
              placeholder="Email Address / Username"
              required
              className="w-full pl-12 pr-4 py-3.5 bg-[#3b73c4] text-white placeholder-blue-100/70 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-300 shadow-inner transition-all"
            />
          </div>

          <div className="relative flex items-center">
            <Lock className="absolute left-4 w-5 h-5 text-white/90 z-10 pointer-events-none" />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
              className="w-full pl-12 pr-4 py-3.5 bg-[#3b73c4] text-white placeholder-blue-100/70 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-300 shadow-inner transition-all"
            />
          </div>

          <div className="flex justify-end pt-0.5">
            <a href="#forgot-password" className="text-xs font-semibold text-gray-600 hover:text-blue-600 transition-colors">
              Forget password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#0084ff] hover:bg-[#0073e6] active:scale-[0.98] text-white font-bold rounded-xl shadow-md transition-all duration-200 mt-2 text-sm"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6 text-xs text-gray-600 font-medium">
          Don’t have an account?{' '}
          <a href="#signup" className="font-bold text-gray-900 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}