
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Link } from 'react-router-dom';

const Parenting = () => {
  const parentingTopics = [
    {
      title: "Newborn Care",
      description: "Essential guides for welcoming your baby, including feeding, sleep, bathing, and health monitoring.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/64afc069cc53f4e8ae52c8de_2%20.%207%20Months%20Pregnant.jpg",
      link: "#"
    },
    {
      title: "Infant Development",
      description: "Milestones, activities, and expert guidance for supporting your baby's growth from 0-12 months.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/64c9393662e7981a0c6b1f8b_Cover%20copy.jpg",
      link: "#"
    },
    {
      title: "Toddler Years",
      description: "Managing the toddler phase, encouraging independence, and navigating developmental changes.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/63ff79c2d350850e5e555415_WhatsApp%20Image%202023-03-01%20at%209.36.32%20PM.jpeg",
      link: "#"
    },
    {
      title: "Nutrition & Feeding",
      description: "Age-appropriate nutrition, from breastfeeding to introducing solids and developing healthy eating habits.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/64709e0efec7114b4aede3d5_12.%20What%20is%20placenta%20encapsulation.jpg",
      link: "#"
    },
    {
      title: "Sleep Solutions",
      description: "Evidence-based approaches to establishing healthy sleep routines and addressing common sleep challenges.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/646263ba005896236fa9e287_wepik-export-202305151654052wSj.png",
      link: "#"
    },
    {
      title: "Positive Discipline",
      description: "Gentle, effective approaches to guiding behavior and fostering emotional intelligence.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/64afc069cc53f4e8ae52c8de_2%20.%207%20Months%20Pregnant.jpg",
      link: "#"
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
              Parenting Journey
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
              Nurturing Your Child's Growth
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Evidence-based guidance and practical advice for every stage of your parenting journey, 
              from newborn care to toddler development and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parentingTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={topic.image} 
                    alt={topic.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-gray-900">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {topic.description}
                  </p>
                  <a
                    href={topic.link}
                    className="mt-4 inline-flex items-center text-maternal-600 font-medium"
                  >
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-maternal-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 md:pr-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                Featured: Developmental Milestones
              </h2>
              <p className="mt-4 text-gray-700">
                Understanding your child's development helps you provide the right support at the right time. 
                Our comprehensive milestone guides break down physical, cognitive, and social-emotional 
                development by age, with practical activities to encourage growth.
              </p>
              <div className="mt-8 space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-maternal-200 rounded-full flex items-center justify-center text-maternal-600 font-semibold">
                      0-3
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Newborn to 3 Months</h3>
                      <p className="text-gray-600 text-sm">First smiles, head control, tracking objects</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-maternal-200 rounded-full flex items-center justify-center text-maternal-600 font-semibold">
                      4-6
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">4 to 6 Months</h3>
                      <p className="text-gray-600 text-sm">Rolling over, babbling, recognizing familiar faces</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-maternal-200 rounded-full flex items-center justify-center text-maternal-600 font-semibold">
                      7-12
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">7 to 12 Months</h3>
                      <p className="text-gray-600 text-sm">Sitting, crawling, first words, object permanence</p>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="mt-8 inline-flex px-6 py-3 bg-maternal-600 text-white rounded-full font-medium shadow-sm hover:bg-maternal-700 transition-colors"
              >
                View All Milestones
              </a>
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
                  src="https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/63ff79c2d350850e5e555415_WhatsApp%20Image%202023-03-01%20at%209.36.32%20PM.jpeg"
                  alt="Parenting"
                  className="relative rounded-2xl shadow-xl z-10 w-full max-w-lg mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Expert Parenting Tips
            </h2>
            <p className="mt-4 text-gray-700">
              Practical advice from child development specialists and experienced parents
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Establishing Consistent Routines",
                content: "Children thrive on predictability. Create consistent daily routines for meals, naps, playtime, and bedtime to help your child feel secure and understand what to expect throughout the day.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Responding to Emotional Needs",
                content: "Validate your child's feelings, even when they're challenging. Phrases like 'I see you're feeling frustrated' help children develop emotional intelligence and learn that all emotions are acceptable.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              {
                title: "Encouraging Independent Play",
                content: "Foster independence by creating safe spaces for uninterrupted play. Start with short periods and gradually increase the time as your child becomes more comfortable playing independently.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Communicating Effectively",
                content: "Get down to your child's eye level when talking to them. Use clear, simple language and give one instruction at a time. This approach helps build strong communication skills and mutual respect.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                )
              }
            ].map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-maternal-100 flex items-center justify-center text-maternal-600">
                    {tip.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{tip.title}</h3>
                    <p className="mt-2 text-gray-700">{tip.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center text-maternal-600 font-medium"
            >
              Have specific parenting questions? Contact us
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Parenting;
