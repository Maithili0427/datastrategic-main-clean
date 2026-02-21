import { useState } from "react";
import { motion } from "framer-motion";

const processData = [
  {
    title: "Project Analysis",
    image: "/project.avif",
    description:
      "Project analysis involves carefully examining the project to understand its objectives and feasibility.",
    points: [
      "Understanding business goals",
      "Requirement gathering",
      "Time & cost estimation",
      "Risk identification",
      "Resource planning",
    ],
  },
  {
    title: "Strategy & Planning",
    image: "/planning.jpg",
    description:
      "We create a clear roadmap and execution strategy for successful development.",
    points: [
      "Project roadmap creation",
      "Technology selection",
      "Task breakdown planning",
      "Timeline scheduling",
      "Team coordination",
    ],
  },
  {
    title: "UX/UI Designing",
    image: "/ui.avif",
    description:
      "We design intuitive and visually engaging user experiences.",
    points: [
      "User research & wireframing",
      "Modern UI design",
      "Responsive layouts",
      "Prototype creation",
      "User experience testing",
    ],
  },
  {
    title: "App Development",
    image: "/devloper.jpg",
    description:
      "We build high-performance applications using modern tools.",
    points: [
      "Clean & scalable coding",
      "Frontend & backend integration",
      "Performance optimization",
      "Security implementation",
      "Feature development",
    ],
  },
  {
    title: "App Testing & Launch",
    image: "/app testing.webp",
    description:
      "We ensure quality and smooth product launch.",
    points: [
      "Manual & automated testing",
      "Bug fixing & validation",
      "Performance testing",
      "Final deployment",
      "Market launch support",
    ],
  },
  {
    title: "Support & Maintenance",
    image: "/support.jpg",
    description:
      "We provide ongoing updates and maintenance.",
    points: [
      "Regular updates",
      "Performance monitoring",
      "Security patches",
      "Technical support",
      "System improvements",
    ],
  },
];

const ProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gradient-to-br from-primary via-primary to-navy-light text-white py-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 h-full flex flex-col bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl"
        >
          <img
            src={processData[activeIndex].image}
            alt=""
            className="w-full h-[320px] lg:h-[420px] object-cover rounded-xl mb-6"
          />

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                {processData[activeIndex].title}
              </h3>

              <p className="text-white/80 leading-relaxed mb-5">
                {processData[activeIndex].description}
              </p>

              {/* BULLET POINTS WITH ANIMATION */}
              <ul className="space-y-2">
                {processData[activeIndex].points.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-2 text-white/90"
                  >
                    🗸 <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* RIGHT TABS */}
        <div className="space-y-4">
          {processData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-full p-6 rounded-xl text-left transition-all duration-300
                ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-cyan to-primary"
                    : "bg-white/10 hover:bg-white/20"
                }`}
            >
              <span className="text-sm text-white">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h4 className="text-lg font-semibold mt-1">
                {item.title}
              </h4>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
