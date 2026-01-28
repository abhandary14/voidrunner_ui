import Link from "next/link";
import { FiBox } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 text-foreground relative z-10 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8">
        <div>
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-1 border border-primary/50 group-hover:border-primary transition-colors duration-300 clip-path-octagon">
              <FiBox className="h-6 w-6 text-primary" />
            </div>
            <span className="text-2xl font-bold tracking-[0.2em] uppercase text-foreground group-hover:text-primary transition-colors duration-300">
              VoidRunner
            </span>
          </Link>
          <p className="mt-6 text-muted-foreground text-sm leading-relaxed font-light">
            Orbital Docking Bay 7
            <br />
            Sector 4, Mars Colony
          </p>
          <div className="flex mt-6 space-x-4">
            <Link href="https://www.linkedin.com/in/abhandary14" target="_blank" className="p-2 border border-white/10 hover:border-primary/50 bg-white/5 hover:bg-primary/10 transition-all duration-300 clip-path-octagon">
              <FaLinkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://github.com/abhandary14" target="_blank" className="p-2 border border-white/10 hover:border-primary/50 bg-white/5 hover:bg-primary/10 transition-all duration-300 clip-path-octagon">
              <FaGithub className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <h5 className="font-bold uppercase tracking-widest text-xs text-primary mb-6">Mission Profiles</h5>
          <Link href="/" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            Colony Admins
          </Link>
          <Link href="/" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            Orbital Hubs
          </Link>
          <Link href="/" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            Fleets
          </Link>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold uppercase tracking-widest text-xs text-primary mb-6">Protocols</h5>
          <Link href="/" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            Central Command
          </Link>
          <Link href="/" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            Credit Sync
          </Link>
          <Link href="/" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            Launch Control
          </Link>
          <Link href="/" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            Direct Comms
          </Link>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold uppercase tracking-widest text-xs text-primary mb-6">Resources</h5>
          <Link href="/doctors" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            About
          </Link>
          <Link href="/optical-labs" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            Blog
          </Link>
          <Link href="/enterprise" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            Integrations
          </Link>
          <Link href="/enterprise" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            Careers
          </Link>
          <Link href="/enterprise" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            Video Walkthroughs
          </Link>
          <Link href="/enterprise" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            Contact
          </Link>
        </div>
        <div className="space-y-6">
          <h5 className="font-bold uppercase tracking-widest text-xs text-primary mb-6">Legal</h5>
          <Link href="/doctors" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            Terms of Use
          </Link>
          <Link href="/optical-labs" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            Privacy Policy
          </Link>
          <Link href="/enterprise" className="block text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm">
            Cookie Policy
          </Link>
        </div>
      </div>
      <div className="border-t border-white/5 bg-black/20 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground/50 text-xs uppercase tracking-widest">
            Copyright © 2049 VoidRunner Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
