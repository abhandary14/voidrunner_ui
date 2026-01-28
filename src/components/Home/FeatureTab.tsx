import { FeatureTabProps } from "@/types";
import Link from "next/link";
import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FiChevronRight, FiCpu, FiLock } from "react-icons/fi";

const FeatureTab: React.FC<FeatureTabProps> = ({
  title,
  description1,
  description2,
  header1,
  header2,
  imageUrl,
  linkUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-x-10 my-8">
      <div className="w-full md:w-[42%] p-2 md:p-6 text-left">
        <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-[-1] text-foreground uppercase tracking-wide">
          {title}
        </h3>
        <div className="mt-10">
          {/* Section 1 */}
          <div className="flex flex-row items-center justify-start mb-2">
            <div className="mr-4 p-1 bg-primary/10 border border-primary/50 text-primary clip-path-octagon">
              <FiChevronRight size={20} />
            </div>
            <h3 className="text-2xl font-semibold text-primary">{header1}</h3>
          </div>
          <p className="text-md leading-relaxed mb-6 text-muted-foreground">{description1}</p>

          <hr className="my-6 border-white/10" />

          {/* Section 2 */}
          <div className="flex flex-row items-center justify-start mb-2">
            <div className="mr-4 p-1 bg-secondary/10 border border-secondary/50 text-secondary clip-path-octagon">
              <FiChevronRight size={20} />
            </div>
            <h3 className="text-2xl font-semibold text-secondary">{header2}</h3>
          </div>
          <p className="text-md leading-relaxed mb-6 text-muted-foreground">{description2}</p>
        </div>

        <Link
          href={linkUrl}
          className="group flex items-center mt-6 text-primary hover:text-white transition-colors uppercase tracking-widest font-bold text-sm"
        >
          <span className="mr-2">
            Access Terminal
          </span>
          <BsArrowRightCircleFill
            className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300"
            size={20}
          />
        </Link>
      </div>

      {/* Holographic Card */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <div className="w-full max-w-md bg-card border border-primary/30 p-8 backdrop-blur-md relative overflow-hidden clip-path-octagon">
          {/* Glow effect */}
          <div className="absolute top-0 right-0 p-20 bg-primary/20 blur-[100px] pointer-events-none"></div>

          <div className="flex justify-between items-center mb-6 border-b border-primary/20 pb-4 relative z-10">
            <span className="text-primary font-mono text-xs uppercase tracking-widest animate-pulse">
              Sys.Status: Online
            </span>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-primary"></div>
              <div className="w-2 h-2 bg-primary/20"></div>
              <div className="w-2 h-2 bg-primary/20"></div>
            </div>
          </div>

          <div className="space-y-6 relative z-10">
            <div className="bg-background/50 border border-primary/20 p-6 flex flex-col items-center justify-center text-center h-40 clip-path-octagon">
              <span className="text-muted-foreground text-xs font-mono mb-2 uppercase">
                Active Protocol
              </span>
              <h4 className="text-xl font-bold text-foreground max-w-[200px] leading-tight uppercase tracking-wide">
                {title}
              </h4>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-muted-foreground text-xs font-mono">
                <span className="flex items-center gap-2"><FiCpu /> Data Integrity</span>
                <span className="text-primary">99.99%</span>
              </div>
              <div className="w-full bg-background/50 h-1">
                <div className="bg-primary h-1 w-[99%]"></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-muted-foreground text-xs font-mono">
                <span className="flex items-center gap-2"><FiLock /> Encryption</span>
                <span className="text-secondary">Quantum-256</span>
              </div>
              <div className="w-full bg-background/50 h-1">
                <div className="bg-secondary h-1 w-[100%]"></div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-primary/20 text-center flex justify-between items-end relative z-10">
            <div className="text-left">
              <p className="text-muted-foreground/50 text-[10px] font-mono uppercase">Reference ID</p>
              <p className="text-foreground text-xs font-mono">VR-2049-X</p>
            </div>
            <p className="text-primary text-[10px] font-mono opacity-50 uppercase tracking-widest border border-primary/50 px-1">Authorized Only</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureTab;
