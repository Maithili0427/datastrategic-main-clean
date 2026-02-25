import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        
        {/* Animated Orbs */}
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-cyan/10 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--cyan) / 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--cyan) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10 pt-32 pb-20 px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                Next-Gen Social Intelligence Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary-foreground leading-[1.1] mb-6"
            >
              Transform Data Into <span className="gradient-text-light">Strategic</span> Intelligence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Harness the power of AI-driven analytics and social intelligence 
              to unlock insights that drive growth, innovation, and competitive advantage.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/contact"
                className="btn-accent group inline-flex items-center justify-center gap-2 text-base font-semibold"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => setShowVideo(true)}
                className="btn-outline group inline-flex items-center justify-center gap-2 text-base"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 pt-8 border-t border-primary-foreground/10"
            >
              <p className="text-sm text-primary-foreground/50 mb-4">
                Trusted by leading enterprises worldwide
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60">
                {["Fortune", "Tech Inc", "Global Corp", "Innovate"].map((company) => (
                  <span
                    key={company}
                    className="text-primary-foreground/70 font-display font-semibold text-lg"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full flex justify-center lg:justify-end"
          >
            {/* Only show floating elements on md+ screens */}
            <div className="relative w-full max-w-md lg:max-w-full">
              {/* Main Dashboard Card */}
              <div className="glass-card-dark rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-transparent" />

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Data Points", value: "2.4M" },
                    { label: "Insights", value: "12.8K" },
                    { label: "Accuracy", value: "99.7%" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="bg-primary-foreground/5 rounded-xl p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-cyan font-display">
                        {stat.value}
                      </div>
                      <div className="text-xs text-primary-foreground/60 mt-1">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="bg-primary-foreground/5 rounded-xl p-6 h-40 sm:h-48 flex items-end gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                      className="flex-1 bg-gradient-to-t from-cyan to-cyan/50 rounded-t-sm"
                    />
                  ))}
                </div>
              </div>

              {/* Floating Elements (hidden on mobile) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="hidden md:flex absolute -top-8 -right-8 glass-card-dark rounded-2xl p-4 border border-cyan/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan to-cyan-glow flex items-center justify-center">
                    <span className="text-lg">🚀</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary-foreground">AI Ready</div>
                    <div className="text-xs text-cyan">Powered by ML</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="hidden md:flex absolute -bottom-6 -left-6 glass-card-dark rounded-2xl p-4 border border-cyan/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan/20 to-transparent flex items-center justify-center text-2xl">
                    📊
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan font-display">+247%</div>
                    <div className="text-xs text-primary-foreground/60">Growth Rate</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-cyan" />
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>
            <iframe
              className="w-full h-[250px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-xl"
              src="https://www.youtube.com/embed/5MgBikgcWnY"
              title="Demo Video"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;