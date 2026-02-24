import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Target, Eye, Heart, Award, Users, Globe, Lightbulb, Shield } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge technology and creative solutions.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building trust through transparency, honesty, and ethical practices.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together to achieve extraordinary results for our clients.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for the highest standards in everything we do.",
  },
];

const timeline = [
  { year: "2018", title: "Founded", description: "IC SocialPulse was established with a vision to democratize social intelligence." },
  { year: "2019", title: "First Major Client", description: "Partnered with Fortune 500 companies to deliver enterprise-grade solutions." },
  { year: "2020", title: "AI Integration", description: "Launched our proprietary AI engine for advanced sentiment analysis." },
  { year: "2021", title: "Global Expansion", description: "Extended operations to 20+ countries across 4 continents." },
  { year: "2022", title: "500+ Clients", description: "Reached milestone of serving over 500 enterprise clients worldwide." },
  { year: "2023", title: "Industry Leader", description: "Recognized as a top provider in the Gartner Magic Quadrant." },
];

const team = [
  { name: "Alexandra Chen", role: "CEO & Co-Founder", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop" },
  { name: "Marcus Williams", role: "CTO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Sofia Rodriguez", role: "Head of AI", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
  { name: "David Kim", role: "VP of Engineering", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
  {/* Video background */}
  <video
  className="absolute inset-0 w-full h-full object-cover"
  src={`${import.meta.env.BASE_URL}ai.mp4`}
  autoPlay
  muted
  loop
  playsInline
/>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/80" />

  {/* Text content centered */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl"
    >
      <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium mb-6">
        About IC SocialPulse
      </span>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
        Pioneering the Future of{" "}
        <span className="gradient-text-light">Social Intelligence</span>
      </h1>

      <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
        We're on a mission to transform how organizations understand and
        engage with their audiences through the power of data and AI.
      </p>
    </motion.div>
  </div>
</section>


      <section className="section-padding bg-white">
  <div className="container mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-10 items-start">

      {/* LEFT SIDE */}
<div className="relative">

  {/* Main Image */}
  <img
  src={`${import.meta.env.BASE_URL}about.jpg`}
  alt="Team"
  className="w-full object-cover"
/>

  {/* Blue Card */}
  <div className="mt-6 w-[85%] bg-blue-600 text-white p-8 rounded-tr-[70px] shadow-xl">

    {/* Quote symbol */}
    <p className="text-5xl leading-none mb-2">"</p>

    <p className="text-lg leading-relaxed">
      We always believe in making a great work relationship with clients
      and we always love to support our clients with all ups and downs
      in their business.
    </p>

    <p className="mt-4 font-semibold">
      Amit Shukla — Founder & Director
    </p>

  </div>

</div>



      {/* RIGHT SIDE */}
<div className="animate-fade-in">

  <p className="text-blue-600 font-bold text-lg mb-2 uppercase">
    ABOUT NEXT BIG TECHNOLOGY
  </p>

  <h2 className="text-4xl font-bold mb-6 leading-snug">
    We Deliver Your Thoughts <br />
    Long Term IT Partner
  </h2>

  <p className="text-gray-600 mb-6 leading-relaxed">
    Next Big Technology provides high-quality Web & Mobile App
    Development Services. Our excellent in-house team delivers
    requirement-specific and business-oriented solutions.
  </p>

  <div className="border-l-4 border-orange-500 pl-4 mb-6">
    <p className="font-semibold text-gray-700">
      Being a Top Web & Mobile App Development Company, our team
      executes excellent services.
    </p>
  </div>

  <p className="text-gray-600 mb-6 leading-relaxed">
    We have experts in all latest technologies delivering top-notch
    solutions worldwide.
  </p>

  <ul className="space-y-3 text-gray-800">
    <li>✔ Top-Notch Web & App Development Services</li>
    <li>✔ Highly Skilled Team With Excellent Communication</li>
    <li>✔ Delivery As Per Requirements & Client Ideas</li>
    <li>✔ Modern Technology & Innovative Solutions</li>
    <li>✔ Global Client Support</li>
  </ul>

</div>

      

    </div>

  </div>
</section>

     <section className="relative bg-gradient-to-r from-[#e9f3f1] to-[#f3e6ee] py-20 overflow-hidden">
  <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

    {/* LEFT TEXT */}
    <div>
      <p className="text-teal-500 font-semibold mb-4 tracking-wide">
        | REVOLUTIONARY SOLUTIONS AHEAD
      </p>

      <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
        Comprehensive IT <br />
        Solutions & Services
      </h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Next Big Technology (NBT) is a leading web and mobile app development
        company providing end-to-end IT solutions for startups, enterprises,
        and businesses across various industries.
      </p>

      <div className="flex gap-4 flex-wrap">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full">
          Talk To Consultant
        </button>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full">
          Case Study
        </button>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full">
          Our Work
        </button>
      </div>
    </div>

   

{/* RIGHT IMAGE DESIGN */}
<div className="relative w-full h-[650px]">

 {/* Top Left */}
<div className="absolute top-10 left-16 w-56 h-56 rounded-full bg-pink-400 overflow-hidden">
  <img 
    src={`${import.meta.env.BASE_URL}img1.png`} 
    className="w-full h-full object-cover" 
  />
</div>

{/* Top Right */}
<div className="absolute top-10 right-16 w-56 h-56 rounded-3xl bg-yellow-400 overflow-hidden">
  <img 
    src={`${import.meta.env.BASE_URL}img2.png`} 
    className="w-full h-full object-cover" 
  />
</div>

{/* Bottom Left */}
<div className="absolute top-[300px] left-20 w-60 h-60 rounded-[50px] bg-teal-400 overflow-hidden">
  <img 
    src={`${import.meta.env.BASE_URL}img3.png`} 
    className="w-full h-full object-cover" 
  />
</div>

{/* Bottom Right */}
<div className="absolute top-[300px] right-20 w-56 h-56 rounded-full bg-blue-400 overflow-hidden">
  <img 
    src={`${import.meta.env.BASE_URL}img4.png`} 
    className="w-full h-full object-cover" 
  />
</div>

</div>



    </div>
  
</section>


      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeading
            badge="Our Journey"
            title="Milestones That Define Us"
            description="From a small startup to a global leader, our journey has been marked by continuous growth and innovation."
          />

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="glass-card rounded-2xl p-6 inline-block">
                    <span className="text-2xl font-bold font-display text-cyan">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold font-display text-primary mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-cyan border-4 border-background shadow-glow" />

                {/* Spacer for desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
<section className="section-padding bg-primary overflow-hidden">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="container-custom"
  >
    <SectionHeading
      badge="Our Leadership"
      title="Meet the Visionaries"
      description="Our diverse team of experts brings together decades of experience in technology, AI, and business strategy."
      light
    />

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {team.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: "easeOut",
          }}
          whileHover={{ y: -10 }}
          className="group"
        >
          <div className="glass-card-dark rounded-2xl p-8 text-center border border-white/40 hover:border-white transition-all duration-500 hover:shadow-2xl">

            {/* BIGGER IMAGE */}
            <div className="relative w-56 h-56 mx-auto mb-6 rounded-2xl overflow-hidden">

              <motion.img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="bg-primary-foreground/5 rounded-xl p-4 mt-3">
              <h3 className="text-xl font-bold font-display text-primary-foreground">
                {member.name}
              </h3>

              <p className="text-cyan text-sm font-medium mt-1">
                {member.role}
              </p>
            </div>

          </div>
        </motion.div>
      ))}

    </div>
  </motion.div>
</section>


      {/* Global Presence */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Global Presence
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">
                Serving Clients Across the Globe
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With offices in major tech hubs and a distributed team of experts, 
                we provide 24/7 support and services to clients in over 50 countries.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "20+", label: "Countries" },
                  { value: "500+", label: "Team Members" },
                  { value: "4", label: "Continents" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold font-display text-cyan mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="glass-card rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Simplified World Map Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full rounded-full border-2 border-dashed border-cyan/30" />
                  </div>
                  {/* Location Dots */}
                  {[
                    { top: "20%", left: "30%" },
                    { top: "35%", left: "50%" },
                    { top: "40%", left: "75%" },
                    { top: "60%", left: "25%" },
                    { top: "55%", left: "60%" },
                    { top: "30%", left: "85%" },
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="absolute w-4 h-4"
                      style={{ top: pos.top, left: pos.left }}
                    >
                      <div className="w-full h-full rounded-full bg-cyan animate-pulse" />
                      <div className="absolute inset-0 rounded-full bg-cyan animate-ping opacity-75" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;