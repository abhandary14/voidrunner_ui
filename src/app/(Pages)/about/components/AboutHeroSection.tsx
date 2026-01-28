"use client";

// components/AboutHeroSection.tsx
import { motion } from "framer-motion";
import React from "react";
import { FiGlobe, FiTarget, FiCpu } from "react-icons/fi";

const AboutHeroSection = () => {
  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <div className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-background">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">

        {/* Left Holographic Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="md:col-start-1 md:row-start-1 flex justify-center md:justify-start"
        >
          <div className="p-[1px] bg-gradient-to-br from-primary to-secondary clip-path-octagon w-64 h-64 glow-container">
            <div className="w-full h-full bg-card clip-path-octagon flex flex-col items-center justify-center p-6 text-center border border-white/10 group">
              <FiGlobe className="w-16 h-16 text-primary mb-4 animate-pulse" />
              <h3 className="text-secondary font-mono text-sm uppercase tracking-widest mb-1">Origin Point</h3>
              <p className="text-foreground font-bold text-xl uppercase">Terra Prime</p>
              <p className="text-muted-foreground text-xs mt-2 font-mono">Est. 2049</p>
            </div>
          </div>
        </motion.div>

        {/* Center Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="flex flex-col items-center justify-center md:col-start-2 md:row-start-2 text-center"
        >
          <h1 className="text-4xl md:text-6xl text-foreground font-bold leading-tight uppercase tracking-wide">
            Mission{" "}
            <span className="inline-block border border-primary bg-primary/10 text-primary ml-2 px-3 py-1 clip-path-slant">
              Briefing
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">
            Founded in the aftermath of the Great Expansion, <span className="text-primary font-bold">VoidRunner</span> began with a single warp-capable hauler. Today, we are the neural network of the solar system, bridging the void between worlds.
          </p>
          <div className="mt-8 flex gap-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">400+</span>
              <span className="text-xs text-primary font-mono uppercase tracking-widest">Fleets</span>
            </div>
            <div className="w-[1px] h-10 bg-white/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-white">12M</span>
              <span className="text-xs text-primary font-mono uppercase tracking-widest">Parsecs</span>
            </div>
          </div>
        </motion.div>

        {/* Right Holographic Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          className="md:col-start-3 md:row-start-3 flex justify-center md:justify-end"
        >
          <div className="p-[1px] bg-gradient-to-tl from-primary to-secondary clip-path-octagon w-64 h-64 glow-container">
            <div className="w-full h-full bg-card clip-path-octagon flex flex-col items-center justify-center p-6 text-center border border-white/10 group">
              <FiTarget className="w-16 h-16 text-secondary mb-4" />
              <h3 className="text-primary font-mono text-sm uppercase tracking-widest mb-1">Current Range</h3>
              <p className="text-foreground font-bold text-xl uppercase">Outer Rim</p>
              <p className="text-muted-foreground text-xs mt-2 font-mono">Sector 7</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
