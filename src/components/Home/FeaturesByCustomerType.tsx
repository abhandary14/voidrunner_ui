"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

import { tabs } from "@/constants";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FiUsers, FiDisc, FiNavigation } from "react-icons/fi";
import CustomCard from "./CustomCard";

const FeaturesByCustomerType = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="container mx-auto px-4 md:px-16 py-20 lg:px-32 overflow-hidden bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Ensures animation runs once when component comes into view
      variants={containerVariants}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h1
          variants={childVariants}
          className="text-4xl md:text-[60px] font-bold text-foreground mb-4 leading-tight md:leading-snug tracking-wide uppercase"
        >
          <span className="inline-block border border-secondary bg-secondary/10 text-secondary ml-2 px-3 py-1 clip-path-slant">
            Features
          </span>
          By Mission Profile
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={childVariants}
        >
          <CustomCard
            title="Colony Admins"
            description="VoidRunner's command deck allows administrators to seamlessly submit cargo requistions, track inbound supply drops, and authorize credit transfers. All on our secure quantum network."
            Icon={FiUsers}
            linkUrl="/"
          />
          <CustomCard
            title="Orbital Hubs"
            description="Easily receive accurate freight manifests, process inter-colony payments, optimize docking bay productivity, and reduce your life-support overhead. Join our growing network of hubs."
            Icon={FiDisc}
            linkUrl="/"
          />
          <CustomCard
            title="Fleets"
            description="Interested in a custom hyperdrive solution, payment relays, or deep space integration? Let VoidRunner's team of propulsion experts and AI engineers design a custom solution."
            Icon={FiNavigation}
            linkUrl="/"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturesByCustomerType;
