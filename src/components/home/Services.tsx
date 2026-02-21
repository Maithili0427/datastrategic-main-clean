import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Radio, Cpu, Code, Smartphone, LineChart, Megaphone } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const services = [
  { icon: Radio, title: "Social Media Intelligence", description: "Monitor and analyze social conversations across all major platforms to understand sentiment, trends, and audience behavior.", color: "from-cyan to-blue-500" },
  { icon: Cpu, title: "AI & Automation", description: "Deploy intelligent automation solutions that streamline operations and enhance decision-making with predictive analytics.", color: "from-purple-500 to-pink-500" },
  { icon: Code, title: "Software Development", description: "Custom enterprise software solutions built with cutting-edge technologies to meet your unique business requirements.", color: "from-orange-500 to-red-500" },
  { icon: Smartphone, title: "Web & Mobile Apps", description: "Beautiful, performant applications for web and mobile that deliver exceptional user experiences across all devices.", color: "from-green-500 to-emerald-500" },
  { icon: LineChart, title: "Data Analytics & Insights", description: "Transform raw data into actionable intelligence with our advanced analytics platform and visualization tools.", color: "from-indigo-500 to-purple-500" },
  { icon: Megaphone, title: "Digital Marketing Strategy", description: "Boost your online presence with data-driven digital marketing strategies including SEO, social media campaigns, and performance marketing.", color: "from-teal-500 to-cyan-500" },
];

const floatAnimation = {
  y: ["0px", "-10px", "0px", "10px", "0px"], // vertical float
  x: ["0px", "5px", "0px", "-5px", "0px"],  // slight horizontal sway
};

const Services = () => {
  return (
    <section className="section-padding bg-muted/50 relative overflow-hidden">
      <div className="container-custom relative">
        <SectionHeading
          badge="Our Services"
          title="Comprehensive Digital Solutions"
          description="From strategy to execution, we provide end-to-end services that drive digital transformation and business growth."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`group ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, ...floatAnimation }}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.3 }, // stagger fade-in
                y: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 5,
                  ease: "easeInOut",
                  delay: index * 0.5, // stagger float start
                },
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 4,
                  ease: "easeInOut",
                  delay: index * 0.5, // stagger sway start
                },
              }}
            >
              <Link to="/services">
                <div className="relative bg-card rounded-2xl p-8 h-full overflow-hidden transition-all duration-500 hover:shadow-card-hover border border-border hover:border-cyan/30">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold font-display text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:text-cyan transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            Explore All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
