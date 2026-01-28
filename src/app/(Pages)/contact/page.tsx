"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiMessageCircle, FiPhone, FiUser } from "react-icons/fi";
import ReCAPTCHA from "react-google-recaptcha";

const ContactSection = () => {
  function onChange(value: any) {
    console.log("Captcha value:", value);
  }

  const sikeKey: string = process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_KEY || "";

  return (
    <>
      <div className="relative min-h-screen bg-background text-foreground mx-auto px-4 md:px-16 py-20 lg:px-32 overflow-hidden flex flex-col items-center justify-center md:flex-row gap-12">
        {/* Background glow effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />
        </div>

        <div className="flex-1 w-full md:w-1/2 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono uppercase tracking-tight">
            Contact
            <span className="inline-block bg-accent/10 border border-accent text-accent ml-4 px-4 py-1 clip-path-slant text-3xl md:text-5xl align-middle">
              US
            </span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            At SpecCheck, we&apos;re always eager to provide guidance, answer
            any questions, or offer insights related to our platform! Please
            don&apos;t hesitate to reach out.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mb-10" />

          <div className="space-y-8">
            <div>
              <h1 className="font-bold text-xl mb-2 text-primary uppercase tracking-widest text-sm">Headquarters</h1>
              <div className="text-foreground/80 font-mono">
                <p>2261 Market Street, #5183</p>
                <p>San Francisco, CA 94114</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full md:w-1/2 z-10">
          <div className="w-full bg-card/30 backdrop-blur-sm border border-white/10 p-8 shadow-2xl relative">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary" />
            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary" />

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="group relative">
                <div className="flex items-center border-b border-white/20 px-0 py-3 focus-within:border-primary transition-colors">
                  <FiUser className="text-muted-foreground mr-3 group-focus-within:text-primary transition-colors" size={20} />
                  <input
                    type="text"
                    placeholder="FULL NAME"
                    required
                    className="flex-1 bg-transparent text-foreground placeholder-muted-foreground/50 focus:outline-none font-mono text-sm"
                  />
                </div>
              </div>

              <div className="group relative">
                <div className="flex items-center border-b border-white/20 px-0 py-3 focus-within:border-primary transition-colors">
                  <FiMail className="text-muted-foreground mr-3 group-focus-within:text-primary transition-colors" size={20} />
                  <input
                    type="email"
                    placeholder="WORK EMAIL"
                    required
                    className="flex-1 bg-transparent text-foreground placeholder-muted-foreground/50 focus:outline-none font-mono text-sm"
                  />
                </div>
              </div>

              <div className="group relative">
                <div className="flex items-center border-b border-white/20 px-0 py-3 focus-within:border-primary transition-colors">
                  <FiPhone className="text-muted-foreground mr-3 group-focus-within:text-primary transition-colors" size={20} />
                  <input
                    type="text"
                    placeholder="PHONE NUMBER"
                    required
                    className="flex-1 bg-transparent text-foreground placeholder-muted-foreground/50 focus:outline-none font-mono text-sm"
                  />
                </div>
              </div>

              <div className="group relative">
                <div className="flex items-start border-b border-white/20 px-0 py-3 focus-within:border-primary transition-colors">
                  <FiMessageCircle className="text-muted-foreground mt-1 mr-3 group-focus-within:text-primary transition-colors" size={20} />
                  <textarea
                    placeholder="MESSAGE"
                    required
                    className="flex-1 bg-transparent text-foreground placeholder-muted-foreground/50 focus:outline-none font-mono text-sm resize-none"
                    rows={4}
                  />
                </div>
              </div>

              <div className="py-2">
                <ReCAPTCHA sitekey={sikeKey} onChange={onChange} theme="dark" />
              </div>

              <div className="text-[10px] text-muted-foreground my-2 font-mono">
                By clicking "Submit Now", you agree to our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </div>

              <button
                type="submit"
                className="w-full bg-primary/90 hover:bg-primary text-white font-bold tracking-widest uppercase py-4 clip-path-slant transition-all hover:translate-x-1 hover:-translate-y-1 shadow-lg hover:shadow-primary/50"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
