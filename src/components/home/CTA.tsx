import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react"; // quote icon

const feedbacks = [
  {
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    message: "IC SocialPulse completely transformed how we handle data!",
    img: "/Alice Johnson.jpg",
  },
  {
    name: "Michael Smith",
    role: "Founder, DataLabs",
    message: "Amazing insights and super easy to use. Highly recommend!",
    img: "/michael.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Marketing Head, BrandX",
    message: "Our team productivity skyrocketed after using their solution.",
    img: "/sohia.jpg",
  },
  {
    name: "David Kim",
    role: "CTO, TechSolutions",
    message: "Data analytics never felt this easy and fun!",
    img: "/david.jpg",
  },
  {
    name: "Emma Brown",
    role: "Project Manager, InnovateX",
    message: "Our decision-making process improved drastically.",
    img: "/emma.png",
  },
  {
    name: "John Lee",
    role: "Lead Developer, DevWorks",
    message: "IC SocialPulse is a game changer for our team!",
    img: "/john.jpg",
  },
];

const FeedbackCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % feedbacks.length);
    }, 4000); // 4 seconds per feedback
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-background">
      <div className="container-custom">
        <motion.div
          className="relative rounded-3xl bg-gradient-to-br from-primary via-primary to-navy-light overflow-hidden px-8 py-16 md:px-16 md:py-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-12">
            What Our Clients Say
          </h2>

          <div className="relative w-full max-w-3xl h-72 mx-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-6"
                initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, y: -50, scale: 0.8, rotateX: -10 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {/* Circle Image */}
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={feedbacks[current].img}
                    alt={feedbacks[current].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Feedback Message with Quote */}
                <div className="flex items-center justify-center text-white/90 mb-2">
                  <Quote className="w-6 h-6 mr-2 text-cyan-400" />
                  <p className="text-lg md:text-xl">{feedbacks[current].message}</p>
                </div>

                {/* Name & Role */}
                <h4 className="text-white font-semibold">{feedbacks[current].name}</h4>
                <span className="text-white/70 text-sm">{feedbacks[current].role}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackCarousel;
