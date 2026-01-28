import React from "react";
import { FiGlobe, FiServer, FiShield, FiAnchor, FiCpu } from "react-icons/fi";

const TrustedBy = () => {
  const partners = [
    { Icon: FiGlobe, name: "Terra United" },
    { Icon: FiServer, name: "Lunar Systems" },
    { Icon: FiShield, name: "Asteroid Guard" },
    { Icon: FiAnchor, name: "Orbital Anchors" },
    { Icon: FiCpu, name: "Mars Tech" },
  ];

  return (

    <div className="py-20 bg-background border-y border-white/5 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <h2 className="text-2xl font-bold mb-10 text-center uppercase tracking-[0.2em] text-muted-foreground">
          Trusted By The Alliance
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-4 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center group cursor-pointer transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors duration-300 mb-3 border border-white/10 group-hover:border-primary/50">
                <partner.Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <span className="text-xs font-bold text-muted-foreground/60 font-mono uppercase tracking-widest group-hover:text-foreground transition-colors duration-300">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );


};

export default TrustedBy;
