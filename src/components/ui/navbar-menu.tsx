"use client";
import React from "react";
import { motion } from "motion/react";
import { ChevronDown, Calendar, Users, MapPin, Heart, Phone, User } from "lucide-react";

const transition = {
  type: "spring" as const,
  mass: 0.4,
  damping: 20,
  stiffness: 300,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const menuItemTransition = {
  type: "spring" as const,
  mass: 0.3,
  damping: 25,
  stiffness: 400,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  icon,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="cursor-pointer group relative overflow-hidden rounded-full px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-all duration-300"
      >
        <div className="flex items-center space-x-2 relative z-10">
          {icon && (
            <motion.div
              animate={{ rotate: active === item ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-white/80 group-hover:text-red-400"
            >
              {icon}
            </motion.div>
          )}
          <motion.span
            className="font-medium text-white/90 group-hover:text-white text-sm tracking-wide"
            transition={{ duration: 0.3 }}
          >
            {item}
          </motion.span>
          {children && (
            <motion.div
              animate={{ rotate: active === item ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-white/60 group-hover:text-red-400"
            >
              <ChevronDown size={14} />
            </motion.div>
          )}
        </div>
        
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-red-600/10 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
      
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1rem)] left-1/2 transform -translate-x-1/2 pt-2 z-50">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={menuItemTransition}
                layoutId="active"
                className="bg-black/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-red-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(239,68,68,0.2)] relative"
              >
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 animate-pulse" />
                
                <motion.div layout className="w-max h-full p-6 relative z-10">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] flex justify-center items-center space-x-2 px-6 py-3"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10 animate-pulse" />
      
      {/* Glass reflection effect */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="relative z-10 flex items-center space-x-2">
        {children}
      </div>
    </motion.nav>
  );
};

export const MenuSection = ({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2 pb-2 border-b border-white/10">
        {icon && <div className="text-red-400">{icon}</div>}
        <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
          {title}
        </h3>
      </div>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
};

export const ServiceItem = ({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) => {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="group flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all duration-300"
    >
      <div className="text-red-400 group-hover:text-red-300 mt-0.5">
        {icon}
      </div>
      <div>
        <h4 className="text-white font-medium text-sm group-hover:text-red-100 transition-colors">
          {title}
        </h4>
        <p className="text-white/60 text-xs leading-relaxed group-hover:text-white/80 transition-colors">
          {description}
        </p>
      </div>
    </motion.a>
  );
};

export const HoveredLink = ({ 
  children, 
  href, 
  icon,
  ...rest 
}: {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="group flex items-center space-x-2 text-white/80 hover:text-red-400 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/5"
      {...rest}
    >
      {icon && (
        <div className="text-white/60 group-hover:text-red-400 transition-colors">
          {icon}
        </div>
      )}
      <span className="text-sm font-medium">{children}</span>
    </motion.a>
  );
};

export const QuickAction = ({
  title,
  href,
  icon,
  variant = "default"
}: {
  title: string;
  href: string;
  icon: React.ReactNode;
  variant?: "default" | "primary";
}) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`group flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
        variant === "primary"
          ? "bg-red-600 hover:bg-red-500 text-white shadow-[0_4px_20px_rgba(239,68,68,0.4)]"
          : "bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border border-white/20 hover:border-white/40"
      }`}
    >
      <div className={`transition-colors ${variant === "primary" ? "text-white" : "text-white/70 group-hover:text-white"}`}>
        {icon}
      </div>
      <span>{title}</span>
    </motion.a>
  );
};