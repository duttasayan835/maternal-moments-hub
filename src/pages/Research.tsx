
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Link } from 'react-router-dom';

const Research = () => {
  const researchCategories = [
    {
      title: "Prenatal Development",
      description: "Studies on fetal development, maternal health influences, and the impact of various factors on pregnancy outcomes.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/64afc069cc53f4e8ae52c8de_2%20.%207%20Months%20Pregnant.jpg",
      link: "#"
    },
    {
      title: "Early Childhood Development",
      description: "Research on cognitive, physical, and emotional development in the first five years of life.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/64c9393662e7981a0c6b1f8b_Cover%20copy.jpg",
      link: "#"
    },
    {
      title: "Maternal Health",
      description: "Studies on maternal mental health, physical recovery, and long-term effects of pregnancy and childbirth.",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/63ff79c2d350850e5e555415_WhatsApp%20Image%202023-03-01%20at%209.36.32%20PM.jpeg",
      link: "#"
    }
  ];

  const recentStudies = [
    {
      title: "The Impact of Maternal Diet on Fetal Neurodevelopment",
      authors: "Johnson et al.",
      journal: "Journal of Maternal Health",
      year: "2023",
      summary: "This study found significant correlations between maternal nutrition during pregnancy and cognitive development outcomes in children up to 5 years of age."
    },
    {
      title: "Sleep Patterns in Infants: A Longitudinal Study",
      authors: "Martinez, Wong, & Singh",
      journal: "Pediatric Sleep Science",
      year: "2022",
      summary: "This research tracked sleep patterns in infants from birth to 12 months, identifying key developmental transitions and factors affecting sleep consolidation."
    },
    {
      title: "Effectiveness of Garbha Sanskar Practices on Maternal Stress Levels",
      authors: "Patel, Sharma, & Williams",
      journal: "International Journal of Traditional Practices in Pregnancy",
      year: "2023",
      summary: "This study demonstrated measurable reductions in cortisol levels and reported stress in pregnant women who practiced Garbha Sanskar techniques compared to control groups."
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
              Evidence-Based Insights
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
              Research & Studies
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Explore the latest scientific research on pregnancy, child development, and parenting
              practices to help inform your journey with evidence-based knowledge.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Research Categories
            </h2>
            <p className="mt-4 text-gray-700">
              Discover studies organized by focus area to find relevant information for your specific interests
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchCategories.map((category, index) => (
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
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-gray-900">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {category.description}
                  </p>
                  <a
                    href={category.link}
                    className="mt-4 inline-flex items-center text-maternal-600 font-medium"
                  >
                    Explore research
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Recent Studies
            </h2>
            <p className="mt-4 text-gray-700">
              The latest research findings in maternal and child health
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {recentStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="text-xl font-display font-semibold text-gray-900">{study.title}</h3>
                <div className="mt-2 text-sm text-gray-500">
                  {study.authors} • {study.journal} • {study.year}
                </div>
                <p className="mt-3 text-gray-700">{study.summary}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-maternal-600 font-medium text-sm"
                >
                  Read full study
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
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-maternal-100 rounded-2xl p-8 md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">
                Join Our Research Panel
              </h2>
              <p className="mt-4 text-gray-700">
                Help contribute to the advancement of maternal and child health research by participating in our studies
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex px-6 py-3 bg-maternal-600 text-white rounded-full font-medium shadow-sm hover:bg-maternal-700 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Research;
