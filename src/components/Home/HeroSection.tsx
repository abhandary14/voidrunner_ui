"use client";

// components/HeroSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";

const HeroSection = () => {
  const rotateVariants = {
    animate: {
      rotateZ: [0, 10, -10, 0],
      transition: { repeat: Infinity, duration: 5, ease: "linear" },
    },
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-16 lg:px-40 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-[60px] font-bold text-foreground mb-4 leading-tight md:leading-snug uppercase tracking-wide"
          >
            <span className="inline-block border border-primary bg-primary/10 text-primary px-3 py-1 mb-2 text-2xl md:text-4xl clip-path-octagon">
              Reliable Transport
            </span>
            <br />
            For The Solar System
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg md:text-xl max-w-3xl text-muted-foreground font-light mb-8"
          >
            Revolutionizing the way Colony Administrators, Orbital Waystations, and
            Deep Space Miners supply the frontier.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-4"
          >
            <a
              href="#learnmore"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-background bg-primary uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 clip-path-slant"
            >
              <div className="mr-3 p-1 bg-background/20 rounded-sm">
                <FiFileText className="text-white h-5 w-5" />
              </div>
              <span>View Manifest</span>
              <div className="absolute inset-0 border border-white/20 pointer-events-none mix-blend-overlay"></div>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-12 w-full flex flex-row justify-center items-center text-sm md:text-base text-muted-foreground"
          >
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-2 hover:text-white transition-colors"
              href="#"
            >
              <span className="uppercase tracking-widest text-xs">Backed By</span>
              <Image
                src="/Images/Ycombinator.png"
                width={20}
                height={20}
                alt="Y Combinator"
                className="mx-1 opacity-80"
              />
              <span className="font-bold text-foreground">Combinator</span>
              <BsArrowRight className="ml-1" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
