
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Link } from 'react-router-dom';

const Pregnancy = () => {
  const pregnancyTopics = [
    {
      title: "First Trimester",
      description: "Essential information on the first 13 weeks of pregnancy, including early symptoms, important prenatal tests, and fetal development.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/64afc069cc53f4e8ae52c8de_2%20.%207%20Months%20Pregnant.jpg",
      link: "#"
    },
    {
      title: "Second Trimester",
      description: "What to expect during weeks 14-27, including baby's development, pregnancy symptoms, and preparing for birth.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/63ff79c2d350850e5e555415_WhatsApp%20Image%202023-03-01%20at%209.36.32%20PM.jpeg",
      link: "#"
    },
    {
      title: "Third Trimester",
      description: "Guidance for weeks 28-40, covering final preparations, labor signs, and delivery options.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/64c9393662e7981a0c6b1f8b_Cover%20copy.jpg",
      link: "#"
    },
    {
      title: "Nutrition & Diet",
      description: "Balanced meal plans, essential nutrients, and dietary guidelines for a healthy pregnancy.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/64709e0efec7114b4aede3d5_12.%20What%20is%20placenta%20encapsulation.jpg",
      link: "#"
    },
    {
      title: "Garbha Sanskar",
      description: "Ancient holistic practices for prenatal bonding and nurturing your baby's development in the womb.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/646263ba005896236fa9e287_wepik-export-202305151654052wSj.png",
      link: "#"
    },
    {
      title: "Pregnancy Complications",
      description: "Understanding potential complications, risk factors, and when to seek medical attention.",
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
              Pregnancy Journey
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
              Your Complete Pregnancy Guide
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              From conception to delivery, explore expert advice on prenatal care, fetal development, 
              nutrition, and holistic wellness for a healthy pregnancy journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pregnancyTopics.map((topic, index) => (
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
                Featured: Garbha Sanskar
              </h2>
              <p className="mt-4 text-gray-700">
                Discover the ancient Indian tradition of Garbha Sanskar, a holistic approach to nurturing your baby's development during pregnancy. 
                This practice combines meditation, music, positive affirmations, and nutrition to create a harmonious environment for your growing baby.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-maternal-600 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Daily meditation practices for maternal bonding</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-maternal-600 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Curated music and mantras for fetal development</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-maternal-600 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ayurvedic dietary recommendations for pregnancy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-maternal-600 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Yoga postures safe for pregnancy</span>
                </li>
              </ul>
              <a
                href="#"
                className="mt-8 inline-flex px-6 py-3 bg-maternal-600 text-white rounded-full font-medium shadow-sm hover:bg-maternal-700 transition-colors"
              >
                Explore Garbha Sanskar
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
                  src="https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/646263ba005896236fa9e287_wepik-export-202305151654052wSj.png"
                  alt="Garbha Sanskar"
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
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-700">
              Common questions about pregnancy and prenatal care
            </p>
          </motion.div>

          <div className="mt-12 max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What are the early signs of pregnancy?",
                answer: "Early pregnancy signs include missed periods, nausea, breast tenderness, fatigue, frequent urination, and mood changes. Every woman's experience may differ, and some may not experience all symptoms."
              },
              {
                question: "When should I schedule my first prenatal visit?",
                answer: "Most healthcare providers recommend scheduling your first prenatal visit as soon as you know you're pregnant, ideally within the first 8 weeks. This early visit is important for establishing your due date and baseline health status."
              },
              {
                question: "What prenatal vitamins should I take?",
                answer: "Look for prenatal vitamins containing folic acid (at least 400mcg), iron, calcium, vitamin D, and DHA. It's best to consult with your healthcare provider for personalized recommendations based on your specific needs."
              },
              {
                question: "Is it safe to exercise during pregnancy?",
                answer: "For most women with uncomplicated pregnancies, moderate exercise is not only safe but beneficial. Activities like walking, swimming, prenatal yoga, and stationary cycling are generally recommended. Always consult your healthcare provider before starting any exercise regimen."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center text-maternal-600 font-medium"
            >
              Have more questions? Contact us
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

export default Pregnancy;
