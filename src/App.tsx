/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { SLIDES } from './Slides.tsx';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = SLIDES.length;

  const SLIDE_TAGS = [
    "LabGPT // THE OS FOR SCIENCE",
    "The Gap",
    "The Pipeline",
    "The Convergence",
    "THE OS",
    "Future Infrastructure",
    "Strategic Entry",
    "Market Expansion",
    "Differentiation",
    "Winning Theory",
    "Monetization",
    "The Team",
    "Precision Roadmap",
    "Stage Financing"
  ];

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent space from scrolling if needed
      if (e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="relative h-screen w-screen bg-bg overflow-hidden text-ink font-sans">
      {/* Main Slide Area */}
      <div className="relative z-10 h-full w-full slide-transition-container">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.25, 1, 0.5, 1] // Custom quint ease for smoother slide
            }}
            className="absolute inset-0"
          >
            {SLIDES[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Side Navigation buttons */}
      <button 
        onClick={prevSlide}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-[60] p-6 text-white/5 hover:text-brand transition-all cursor-pointer pointer-events-auto group bg-black/5 backdrop-blur-[2px] rounded-r-2xl border border-white/5 ${currentSlide === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
      </button>
      <button 
        onClick={nextSlide}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-[60] p-6 text-white/5 hover:text-brand transition-all cursor-pointer pointer-events-auto group bg-black/5 backdrop-blur-[2px] rounded-l-2xl border border-white/5 ${currentSlide === totalSlides - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[60] flex gap-3 pointer-events-auto">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-brand scale-125 shadow-[0_0_12px_rgba(232,76,30,0.6)]' : 'bg-white/10 hover:bg-white/30'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Branding Header */}
      <header className="absolute top-0 left-0 right-0 z-50 p-[48px_64px] flex justify-between items-start pointer-events-none">
        <div className="flex flex-col pointer-events-auto">
          <div className="text-[18px] font-black tracking-[4px] uppercase font-display mb-1 text-white">LabGPT</div>
          <div className="h-[2px] w-24 bg-brand mb-2" />
          <AnimatePresence mode="wait">
            {SLIDE_TAGS[currentSlide] && (
              <motion.div
                key={SLIDE_TAGS[currentSlide]}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_10px_#E84C1E] shrink-0" />
                <div className="text-[10px] font-black text-brand uppercase tracking-[4px]">
                  {SLIDE_TAGS[currentSlide]}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-6 pointer-events-auto">
          <button 
            onClick={toggleFullscreen}
            className="p-1 text-white/20 hover:text-brand transition-colors group relative"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Navigation & Controls Overlay */}
      <footer className="absolute bottom-0 left-0 right-0 z-50 p-[32px_64px] flex justify-between items-center pointer-events-none">
        <div className="flex items-center pointer-events-auto group cursor-pointer" onClick={() => nextSlide()}>
          <div className="text-[32px] font-black leading-none uppercase tracking-tighter">
            {String(currentSlide + 1).padStart(2, '0')}
            <span className="text-[14px] text-white/20 ml-2 font-bold tracking-widest">/ {String(totalSlides).padStart(2, '0')}</span>
          </div>
        </div>

        <div className="flex flex-col items-end pointer-events-auto">
          <div className="text-[10px] font-black uppercase tracking-[2px] mb-1">LABGPT INC.</div>
          <div className="text-[9px] uppercase tracking-[2px] text-white/20">founders@labgpt.com</div>
        </div>
      </footer>
    </div>
  );
}
