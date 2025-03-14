
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & Lead Obstetrician",
      bio: "With over 15 years of experience in maternal healthcare, Dr. Johnson founded Maternal Moments to provide evidence-based information to expectant and new parents.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/64afc069cc53f4e8ae52c8de_2%20.%207%20Months%20Pregnant.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Garbha Sanskar Specialist",
      bio: "A certified practitioner with 10+ years of experience in traditional prenatal practices, Priya bridges ancient wisdom with modern prenatal care.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/646263ba005896236fa9e287_wepik-export-202305151654052wSj.png"
    },
    {
      name: "Michael Chen, Ph.D.",
      role: "Child Development Researcher",
      bio: "A developmental psychologist specializing in early childhood, Michael ensures our parenting content is aligned with the latest scientific research.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/63ff79c2d350850e5e555415_WhatsApp%20Image%202023-03-01%20at%209.36.32%20PM.jpeg"
    }
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-r from-maternal-100 to-maternal-200">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-block px-3 py-1 bg-maternal-200 text-maternal-700 rounded-full text-sm font-medium mb-4">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
              About Maternal Moments
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Dedicated to empowering parents with evidence-based information and holistic approaches to 
              pregnancy and parenting.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-700">
                At Maternal Moments, we believe that every parent deserves access to reliable, 
                evidence-based information along with the wisdom of traditional practices. 
                Our mission is to bridge modern science with holistic approaches, creating a 
                supportive resource for families throughout their pregnancy and parenting journey.
              </p>
              <p className="mt-4 text-gray-700">
                We are committed to providing comprehensive, inclusive content that respects 
                diverse perspectives and cultural practices, while ensuring all our recommendations 
                are grounded in scientific research whenever possible.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-maternal-300 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-maternal-400 rounded-full opacity-50"></div>
                <img
                  src="https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/646263ba005896236fa9e287_wepik-export-202305151654052wSj.png"
                  alt="Maternal Moments Mission"
                  className="relative rounded-2xl shadow-xl z-10 w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-maternal-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Our Expert Team
            </h2>
            <p className="mt-4 text-gray-700">
              Meet the specialists behind our content and research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <div className="text-maternal-600 font-medium mt-1">
                    {member.role}
                  </div>
                  <p className="mt-3 text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                Our Approach
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-maternal-100 flex items-center justify-center text-maternal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Evidence-Based Information</h3>
                    <p className="mt-1 text-gray-700">All our content is reviewed by specialists and backed by scientific research whenever possible.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-maternal-100 flex items-center justify-center text-maternal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Holistic Perspective</h3>
                    <p className="mt-1 text-gray-700">We embrace both modern medicine and traditional wisdom, offering a comprehensive approach to maternal and child wellbeing.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-maternal-100 flex items-center justify-center text-maternal-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Inclusive Content</h3>
                    <p className="mt-1 text-gray-700">We recognize and respect diverse family structures, cultural backgrounds, and parenting approaches.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 mt-10 md:mt-0"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-maternal-300 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-maternal-400 rounded-full opacity-50"></div>
                <img
                  src="https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/64c9393662e7981a0c6b1f8b_Cover%20copy.jpg"
                  alt="Our Approach"
                  className="relative rounded-2xl shadow-xl z-10 w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-maternal-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">
                Have Questions?
              </h2>
              <p className="mt-4 text-gray-700">
                We'd love to hear from you! Reach out to our team with any questions or feedback.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex px-6 py-3 bg-maternal-600 text-white rounded-full font-medium shadow-sm hover:bg-maternal-700 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
