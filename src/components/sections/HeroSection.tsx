import { motion } from "framer-motion";
import { Button } from "../ui/enhanced-button";
import Hero3DScene from "../Hero3D";
import { ArrowDown, Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <Hero3DScene />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/50 to-background/90 z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, staggerChildren: 0.3, delayChildren: 0.2 }}
        className="relative z-20 text-center px-4 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-gradient-primary text-background rounded-full text-sm font-medium mb-4">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-gradient-primary">Hi, I'm</span>
          <br />
          <span className="text-gradient-secondary">Alex Developer</span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          A passionate full-stack developer creating amazing digital experiences 
          with modern technologies and creative solutions.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button variant="hero" size="xl" className="group">
            <Mail className="mr-2 w-5 h-5 group-hover:animate-bounce" />
            Hire Me Now
          </Button>
          
          <Button variant="neon-outline" size="xl" className="group">
            <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-6"
        >
          {["GitHub", "LinkedIn", "Twitter", "YouTube"].map((social) => (
            <motion.a
              key={social}
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300"
            >
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-background font-bold text-sm">
                {social[0]}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ArrowDown className="w-6 h-6 text-neon-cyan" />
      </motion.div>
    </section>
  );
};

export default HeroSection;