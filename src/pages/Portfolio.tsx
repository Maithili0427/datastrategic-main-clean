import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight, ExternalLink, X } from "lucide-react";

const categories = ["All", "AI & ML", "Social Intelligence", "Web Apps", "Mobile", "Analytics"];

const projects = [
  {
    id: 1,
    title: "Global Sentiment Tracker",
    category: "Social Intelligence",
    description: "Real-time social sentiment monitoring platform for Fortune 500 companies",
    fullDescription: "A comprehensive social listening platform that monitors millions of conversations across 50+ languages, providing real-time sentiment analysis, trend detection, and competitive insights for global enterprises.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    client: "Fortune 500 Retail",
    results: ["300% increase in response time", "40% improved customer satisfaction", "Real-time monitoring across 50+ languages"],
    tags: ["NLP", "Real-time Analytics", "Dashboard"],
  },
  {
    id: 2,
    title: "AI-Powered Fraud Detection",
    category: "AI & ML",
    description: "Machine learning system that identifies fraudulent transactions in real-time",
    fullDescription: "An advanced fraud detection system using deep learning algorithms to analyze transaction patterns and identify suspicious activities with 99.9% accuracy, processing millions of transactions per second.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    client: "Major Banking Institution",
    results: ["99.9% detection accuracy", "$50M annual savings", "Real-time processing"],
    tags: ["Machine Learning", "Security", "Finance"],
  },
  {
    id: 3,
    title: "Smart Analytics Dashboard",
    category: "Analytics",
    description: "Enterprise BI platform with predictive analytics capabilities",
    fullDescription: "A next-generation business intelligence platform that combines historical data analysis with predictive modeling, enabling executives to make data-driven decisions with confidence.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    client: "Global Manufacturing Corp",
    results: ["60% faster reporting", "25% cost reduction", "Unified data view"],
    tags: ["BI", "Predictive Analytics", "Enterprise"],
  },
  {
    id: 4,
    title: "Healthcare Mobile App",
    category: "Mobile",
    description: "Patient engagement platform with telemedicine integration",
    fullDescription: "A comprehensive healthcare mobile application that connects patients with healthcare providers, featuring appointment scheduling, telemedicine consultations, prescription management, and health tracking.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    client: "Healthcare Network",
    results: ["500K+ downloads", "4.8 star rating", "30% reduced no-shows"],
    tags: ["iOS", "Android", "Healthcare"],
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    category: "Web Apps",
    description: "Scalable online marketplace with AI recommendations",
    fullDescription: "A high-performance e-commerce platform built to handle millions of users, featuring personalized AI-powered product recommendations, real-time inventory management, and seamless payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    client: "Retail Startup",
    results: ["200% revenue growth", "3x conversion rate", "99.99% uptime"],
    tags: ["React", "Node.js", "AI"],
  },
  {
    id: 6,
    title: "Influencer Analytics Platform",
    category: "Social Intelligence",
    description: "Comprehensive influencer tracking and ROI measurement",
    fullDescription: "An end-to-end influencer marketing platform that helps brands identify, evaluate, and manage influencer partnerships while accurately measuring campaign ROI and audience engagement.",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    client: "Marketing Agency",
    results: ["10M+ influencers tracked", "85% ROI accuracy", "50% time savings"],
    tags: ["Social Media", "Analytics", "Marketing"],
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <Layout>
      {/* Portfolio / Case Studies Hero Section */}
<section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center justify-center">
  {/* Video Background */}
  <video
    className="absolute inset-0 w-full h-full object-cover z-0"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/profilio.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark overlay for text clarity */}
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
        Our Work
      </span>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight drop-shadow-xl">
        Case Studies & <span className="gradient-text-light">Success Stories</span>
      </h1>

      <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md">
        Explore how we've helped organizations transform their operations 
        and achieve measurable results through innovative technology solutions.
      </p>
    </motion.div>
  </div>
</section>


      {/* Portfolio Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-cyan/30 transition-all duration-500 hover:shadow-card-hover">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <div className="flex items-center gap-2 text-cyan font-medium">
                          <span>View Case Study</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-xs font-medium text-cyan uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold font-display text-primary mt-2 mb-3 group-hover:text-cyan transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header Image */}
              <div className="relative aspect-video">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent p-8">
                  <span className="text-cyan text-sm font-medium uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground mt-2">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-bold font-display text-primary mb-4">
                      Overview
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {selectedProject.fullDescription}
                    </p>

                    <h3 className="text-lg font-bold font-display text-primary mb-4">
                      Key Results
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.results.map((result) => (
                        <li key={result} className="flex items-center gap-3 text-foreground">
                          <div className="w-2 h-2 rounded-full bg-cyan" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="glass-card rounded-2xl p-6">
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">
                        Client
                      </h4>
                      <p className="text-lg font-bold text-primary mb-4">
                        {selectedProject.client}
                      </p>

                      <h4 className="text-sm font-medium text-muted-foreground mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-12 bg-muted/50">
  <div className="container-custom">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

      {[
        { value: "150+", label: "Projects Delivered" },
        { value: "50+", label: "Enterprise Clients" },
        { value: "99%", label: "Client Satisfaction" },
        { value: "15+", label: "Industry Awards" },
      ].map((stat, index) => (

        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-card rounded-2xl p-6 text-center border border-white/30 hover:border-cyan/60 transition-all duration-300"
        >

          <div className="w-20 h-20 mx-auto mb-3 rounded-full border-4 border-cyan/60 flex items-center justify-center shadow-lg shadow-cyan/20">
            <span className="text-2xl md:text-3xl font-bold font-display text-primary">
              {stat.value}
            </span>
          </div>

          <div className="text-muted-foreground">
            {stat.label}
          </div>

        </motion.div>

      ))}

    </div>
  </div>
</section>

     {/* Industries Section */}
<section className="py-16 bg-white overflow-hidden">

  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-3">
      We Serve All Industries
    </h2>
    <p className="text-gray-500">
      We stay on top of our industry by being experts in yours.
    </p>
  </div>

  <div className="flex w-full h-[420px]">

    {[
      { title: " RESTAURANT", img: "/hotel.webp" },
      { title: "BANKING", img: "/banker.jpg" },
      { title: "EDUCATION", img: "/student.avif" },
      { title: "TRAVEL", img: "/travel.jpg" },
      { title: "HEALTHCARE", img: "/doctor.jpg" },
      { title: "FITNESS", img: "/yoga.jpg" },
      { title: "MEDIA", img: "/media.avif" },
    ].map((item, index) => (

      <motion.div
        key={index}
        whileHover={{ flex: 2 }}
        transition={{ duration: 0.4 }}
        className="relative flex-1 cursor-pointer overflow-hidden group"
      >

        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

        {/* 👇 ONLY THIS LINE CHANGED */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 rotate-[-90deg] text-white font-bold tracking-widest text-lg whitespace-nowrap">
          {item.title}
        </div>

      </motion.div>

    ))}

  </div>

</section>


    </Layout>
  );
};

export default Portfolio;