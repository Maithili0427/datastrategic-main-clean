import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { 
  Radio, Cpu, Code, Smartphone, LineChart, Cloud, 
  Database, Lock, Workflow, Bot, Globe, Headphones,
  ArrowRight, CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Radio,
    title: "Social Media Intelligence",
    description: "Transform social conversations into strategic insights with our advanced monitoring and analytics platform.",
    features: [
      "Real-time sentiment analysis",
      "Competitor benchmarking",
      "Influencer identification",
      "Crisis detection & alerts",
      "Trend forecasting",
      "Audience segmentation",
    ],
    color: "from-cyan to-blue-500",
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Deploy cutting-edge AI solutions that automate processes and unlock predictive capabilities.",
    features: [
      "Custom ML model development",
      "Natural language processing",
      "Predictive analytics",
      "Computer vision solutions",
      "Recommendation engines",
      "Automated decision systems",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Build scalable, enterprise-grade software solutions tailored to your unique business needs.",
    features: [
      "Enterprise applications",
      "API development & integration",
      "Microservices architecture",
      "Cloud-native solutions",
      "Legacy modernization",
      "DevOps & CI/CD",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Applications",
    description: "Create stunning, performant applications that deliver exceptional user experiences.",
    features: [
      "Progressive web apps",
      "Native iOS & Android",
      "Cross-platform development",
      "UI/UX design",
      "Performance optimization",
      "App store deployment",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: LineChart,
    title: "Data Analytics & Visualization",
    description: "Turn raw data into actionable intelligence with powerful analytics and visualization tools.",
    features: [
      "Business intelligence",
      "Custom dashboards",
      "Data warehousing",
      "ETL pipelines",
      "Real-time reporting",
      "KPI tracking",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "Modernize your infrastructure with secure, scalable, and cost-effective cloud solutions.",
    features: [
      "Cloud migration",
      "Multi-cloud strategy",
      "Serverless architecture",
      "Container orchestration",
      "Infrastructure as code",
      "Cost optimization",
    ],
    color: "from-sky-500 to-cyan",
  },
];

const additionalServices = [
  { icon: Database, title: "Data Engineering", description: "Build robust data pipelines and infrastructure" },
  { icon: Lock, title: "Cybersecurity", description: "Protect your digital assets with enterprise security" },
  { icon: Workflow, title: "Process Automation", description: "Streamline operations with intelligent automation" },
  { icon: Bot, title: "Conversational AI", description: "Deploy intelligent chatbots and virtual assistants" },
  { icon: Globe, title: "Digital Strategy", description: "Transform your business with digital innovation" },
  { icon: Headphones, title: "24/7 Support", description: "Round-the-clock technical support and maintenance" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section with Video */}
      <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center justify-center">
  {/* Video Background */}
  <video
    className="absolute inset-0 w-full h-full object-cover z-0"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/ok.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/80 z-10" />

  {/* Text content centered */}
  <div className="relative z-20 text-center flex flex-col items-center justify-center px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl"
    >
      <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium mb-6">
        Our Services
      </span>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight drop-shadow-xl">
        Comprehensive <span className="gradient-text-light">Digital Solutions</span>
      </h1>

      <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md">
        From strategy to execution, we deliver end-to-end services that 
        drive innovation and accelerate your digital transformation journey.
      </p>
    </motion.div>
  </div>
</section>

      {/* Main Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-foreground"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl blur-2xl opacity-20`}
                    />
                    <div className="relative glass-card rounded-3xl p-8 md:p-12">
                      {/* Service Visualization */}
                      <div className="aspect-square flex items-center justify-center">
                        <div className="relative w-full h-full max-w-xs mx-auto">
                          {/* Central Icon */}
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <div className="w-full h-full rounded-full border-2 border-dashed border-cyan/20" />
                          </motion.div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}
                            >
                              <service.icon className="w-12 h-12 text-white" />
                            </div>
                          </div>
                          {/* Orbiting Elements */}
                          {[0, 1, 2, 3].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 10 + i * 5,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="absolute inset-0"
                              style={{ transform: `rotate(${i * 90}deg)` }}
                            >
                              <div
                                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br ${service.color} opacity-60`}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <SectionHeading
            badge="More Solutions"
            title="Additional Services"
            description="Explore our extended range of specialized services designed to meet your specific needs."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-6 h-full border border-border hover:border-cyan/30 transition-all duration-500 hover:shadow-card-hover flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <SectionHeading
            badge="Our Process"
            title="How We Work"
            description="A proven methodology that delivers results consistently and efficiently."
            light
          />

          <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your needs and define clear objectives" },
              { step: "02", title: "Strategy", description: "We design a comprehensive solution roadmap" },
              { step: "03", title: "Execution", description: "We build and iterate with agile methodology" },
              { step: "04", title: "Delivery", description: "We deploy, support, and continuously improve" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                  <div className="glass-card-dark rounded-2xl p-6 text-center h-full border-2 border-white">
                  <div className="text-4xl font-bold font-display text-white mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold font-display text-primary-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm">
                    {item.description}
                  </p>
                </div>

                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-5 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-cyan/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {[
        {
          country: "USA",
          address: "2710 Pace West Dr, Tucson AZ 85730",
          img: "/images/usa.png",
        },
        {
          country: "AUSTRALIA",
          address: "21 Benalia Cres Marayong 2148",
          img: "/images/Australia.png",
        },
        {
          country: "UK",
          address: "18 Tuesday Market Place, King's Lynn, Norfolk",
          img: "/images/UK.png",
        },
        {
          country: "INDIA",
          address: "Bawani Nagar, Jaipur, Rajasthan",
          img: "/images/India.png",
        },
      ].map((office, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 text-center group hover:-translate-y-2"
        >

          {/* Image Box */}
<div className="w-full h-52 mb-6 rounded-xl overflow-hidden bg-gray-100">
  <img
    src={office.img}
    alt={office.country}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
</div>

          {/* Country */}
          <h3 className="text-2xl font-bold text-blue-900 mb-3 tracking-wide">
            {office.country}
          </h3>

          {/* Address */}
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            {office.address}
          </p>

          {/* Icons */}
          <div className="flex justify-center gap-6 text-blue-900 text-xl">
            <button className="hover:text-orange-500 transition">📍</button>
            <button className="hover:text-orange-500 transition">📞</button>
            <button className="hover:text-orange-500 transition">✉️</button>
          </div>

        </div>

      ))}

    </div>

  </div>
</section>
    </Layout>
  );
};

export default Services;