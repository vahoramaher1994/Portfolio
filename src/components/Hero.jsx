import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-bg text-text-primary px-5 sm:px-6 md:px-8 overflow-hidden">

      {/* ✨ Glow background */}
      <div
  className="absolute
    w-[320px] h-[320px]
    sm:w-[420px] sm:h-[420px]
    md:w-[500px] md:h-[500px]
    lg:w-[600px] lg:h-[600px]
    bg-mauve-400/70
    blur-[40px]
    rounded-full
    top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
  "
/>
      <div className="relative z-10 w-full max-w-[900px] text-center">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[44px] sm:text-[56px] md:text-[68px] lg:text-[80px] font-light tracking-tight leading-none"
        >
          Maher Vahora
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-5 md:mt-6 text-text-secondary text-[16px] sm:text-[18px] md:text-[20px] font-light"
        >
          Software Engineer building scalable, high-performance systems.
        </motion.p>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-4 text-text-muted text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-[600px] mx-auto"
        >
          Focused on backend architecture, performance optimization, and
          crafting refined digital experiences with Java, Spring Boot, and React.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3 }}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a href="#projects" className="px-6 py-3 rounded-full border border-soft text-text-primary hover:bg-surface-1 transition duration-300">
            View Projects
          </a>

          <a href="#contact" className="px-6 py-3 rounded-full border border-soft text-text-primary hover:bg-surface-1 transition duration-300">
            Contact Me
          </a>
        </motion.div>

      </div>
    </div>
  )
}