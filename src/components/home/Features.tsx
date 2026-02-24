import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Expertise & Innovation",
    description:
      "We have 15+ years of experience working with clients worldwide in delivering modern and expandable software services.",
  },
  {
    number: "02",
    title: "End-to-End Services",
    description:
      "From idea validation to design, development, deployment, and maintenance — we handle the complete lifecycle.",
  },
  {
    number: "03",
    title: "Modern Technology",
    description:
      "We use cutting-edge tools and frameworks to build scalable and high-performance digital products.",
  },
  {
    number: "04",
    title: "Client-Centered Approach",
    description:
      "We focus on long-term partnerships and deliver solutions tailored to your business needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 text-black">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-xl"
        >
          <img
  src={`${import.meta.env.BASE_URL}whychooseus.webp`}
  alt="Team"
  className="w-full h-full object-cover rounded-3xl"
/>

          {/* soft glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/20 to-purple-200/20"></div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 mb-4 text-sm bg-gray-100 rounded-full"
          >
            Why Choose
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Why Choose Us
          </motion.h2>

          <p className="text-gray-600 mb-10">
            Reimagined user experiences with modern technology and innovative
            digital solutions.
          </p>

          {/* FEATURE CARDS */}
          <div className="grid md:grid-cols-2 gap-6">

            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  rotateX: 6,
                  rotateY: -6,
                  scale: 1.05,
                }}
                className="bg-white border border-black-200 p-8 rounded-2xl cursor-pointer  duration-300 shadow-md hover:shadow-xl"
              >
                <h3 className="text-3xl font-bold text-black-400 mb-2">
                  {item.number}
                </h3>

                <h4 className="text-xl font-semibold mb-3">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
