import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Home, ShoppingBag, ShoppingCart, User, ArrowUp } from "lucide-react";

export default function FloatingToolbar() {
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const navItems = [
    { label: "خانه", icon: Home, path: "/" },
    { label: "فروشگاه", icon: ShoppingBag, path: "/shop" },
    { label: "سبد خرید", icon: ShoppingCart, path: "/cart" },
    { label: "پروفایل", icon: User, path: "/profile" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="relative p-2 rounded-[2.5rem] flex flex-col gap-2 shadow-2xl border border-white/10 overflow-hidden group/toolbar reveal-effect"
        style={{
          background: "rgba(10, 10, 10, 0.3)",
          backdropFilter: "blur(20px) saturate(200%)",
          WebkitBackdropFilter: "blur(20px) saturate(200%)",
        }}
      >
        {/* Reveal Effect Glow (Enhanced) */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover/toolbar:opacity-100 transition-opacity duration-500 z-0"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.12), transparent 50%)`,
          }}
        />

        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-3xl flex items-center justify-center transition-all group reveal-effect tactile-button"
            >
              {/* Hover Background (Simple) */}
              <div className="absolute inset-0 rounded-[1.25rem] sm:rounded-[1.5rem] bg-white/0 group-hover:bg-white/5 transition-colors duration-200 z-0" />

              {/* Active Background Indicator (Smooth Switch) */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="toolbar-active-bg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    className="absolute inset-0 rounded-[1.25rem] sm:rounded-[1.5rem] bg-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.5)] z-10"
                  />
                )}
              </AnimatePresence>

              <div className="relative z-20">
                <item.icon 
                  size={22} 
                  className={`transition-all duration-300 ${
                    isActive ? "text-white scale-110" : "text-zinc-400 group-hover:text-white"
                  }`}
                  strokeWidth={isActive ? 2.5 : 2} 
                />
              </div>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 hidden md:block z-30">
                <div className="glass px-4 py-2 rounded-2xl border border-white/10 shadow-xl">
                  <span className="text-xs font-black text-white whitespace-nowrap tracking-wide">
                    {item.label}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
        
        <div className="h-px bg-white/10 mx-3 my-1 relative z-10" />
        
        <button
          onClick={scrollToTop}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-3xl flex items-center justify-center text-zinc-500 hover:text-white transition-all group overflow-hidden reveal-effect tactile-button"
        >
          <div className="relative z-10">
            <ArrowUp size={22} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
          
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 z-0" />

          <div className="absolute right-full mr-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 hidden md:block z-30">
            <div className="glass px-4 py-2 rounded-2xl border border-white/10 shadow-xl">
              <span className="text-xs font-black text-white whitespace-nowrap tracking-wide">
                برو به بالا
              </span>
            </div>
          </div>
        </button>
      </motion.div>
    </div>
  );
}
