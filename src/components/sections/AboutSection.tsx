import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-neon-cyan text-sm font-semibold tracking-widest uppercase">
                About Me
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                <span className="text-gradient-primary">Crafting Digital</span>
                <br />
                <span className="text-foreground">Experiences</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a passionate full-stack developer with over 5 years of experience 
              in creating cutting-edge web applications. My expertise spans across 
              modern JavaScript frameworks, cloud technologies, and creative design.
            </motion.p>

            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I specialize in React, Node.js, and modern web technologies, always 
              staying at the forefront of innovation. Whether it's building scalable 
              applications or crafting beautiful user interfaces, I bring ideas to life 
              with clean, efficient code.
            </motion.p>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {[
                "JavaScript/TypeScript",
                "React & Next.js",
                "Node.js & Express",
                "Three.js & WebGL",
                "Cloud Computing",
                "UI/UX Design",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-dark border border-neon-blue/20 rounded-lg text-sm font-medium text-neon-blue hover:glow-blue transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-dark rounded-2xl border border-neon-blue/20 overflow-hidden">
              {/* Animated code preview */}
              <div className="absolute inset-4 font-mono text-sm">
                <div className="text-neon-cyan mb-2">// About Alex Developer</div>
                <div className="text-muted-foreground mb-1">
                  <span className="text-neon-purple">const</span>{" "}
                  <span className="text-neon-cyan">developer</span> = {"{"}
                </div>
                <div className="ml-4 text-muted-foreground">
                  name: <span className="text-neon-green">'Alex Developer'</span>,
                </div>
                <div className="ml-4 text-muted-foreground">
                  role: <span className="text-neon-green">'Full Stack Developer'</span>,
                </div>
                <div className="ml-4 text-muted-foreground">
                  experience: <span className="text-neon-pink">5</span>,
                </div>
                <div className="ml-4 text-muted-foreground">
                  passion: <span className="text-neon-green">'Creating Amazing UX'</span>,
                </div>
                <div className="ml-4 text-muted-foreground">
                  skills: [
                </div>
                <div className="ml-8 text-neon-green">
                  'React', 'Three.js', 'Node.js'
                </div>
                <div className="ml-4 text-muted-foreground">]</div>
                <div className="text-muted-foreground">{"}"}</div>
              </div>
              
              {/* Animated glow effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;