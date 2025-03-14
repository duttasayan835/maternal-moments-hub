
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Link } from 'react-router-dom';

const Home = () => {
  // Blog article data
  const blogArticles = [
    {
      id: 1,
      title: "Yoga for Expecting Moms: Asanas to Adopt & Avoid",
      category: "Complications",
      date: "June 12, 2023",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/651aff6368770316aff12a7f_Cover.jpg",
      link: "/post/yoga-for-expecting-moms"
    },
    {
      id: 2,
      title: "Don't Ignore Itching in Pregnancy",
      category: "Complications",
      date: "June 12, 2023",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/651affeabf28071b79e174e6_Cover.jpg",
      link: "/post/dont-ignore-itching-in-pregnancy"
    },
    {
      id: 3,
      title: "Boosting Hemoglobin Levels for a Healthy Pregnancy",
      category: "Complications",
      date: "June 12, 2023",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/6508970fcca17508fff222ca_cover1.jpg",
      link: "/post/boosting-hemoglobin-levels"
    },
    {
      id: 4,
      title: "Sleeping During Pregnancy: Right Positions, Dealing with Insomnia",
      category: "Complications",
      date: "June 12, 2023",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/63ff7a78fcca1a0d3c421f86_WhatsApp%20Image%202023-03-01%20at%209.36.33%20PM%20(1).jpeg",
      link: "/post/sleeping-during-pregnancy"
    },
    {
      id: 5,
      title: "Hidden Signs and Symptoms of Twin Pregnancy",
      category: "Weeks and Trimesters",
      date: "June 12, 2023",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/63ff552f94d53bfad61e59e5_WhatsApp%20Image%202023-03-01%20at%207.00.35%20PM.jpeg",
      link: "/post/hidden-signs-twin-pregnancy"
    },
    {
      id: 6,
      title: "Coping with Nuchal Chord Diagnosis: Support and Resources for Expecting Parents",
      category: "Complications",
      date: "June 12, 2023",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/63ff7a3b0ae94e0a395e5e57_WhatsApp%20Image%202023-03-01%20at%209.36.33%20PM.jpeg",
      link: "/post/coping-with-nuchal-chord-diagnosis"
    }
  ];

  // Categories for the filter
  const categories = [
    "Birth Stories",
    "Garbh Sanskar",
    "Nutrition",
    "Weeks and Trimesters",
    "Complications"
  ];

  return (
    <PageTransition>
      <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-xl"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                  Your Complete Guide to Maternal Wellness
                </h1>
                <p className="mt-6 text-lg text-gray-700">
                  From pregnancy to parenting, discover expert advice, personalized guidance, 
                  and a supportive community for every step of your maternal journey.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/pregnancy"
                    className="px-6 py-3 bg-maternal-600 text-white rounded-full font-medium shadow-sm hover:bg-maternal-700 transition-colors"
                  >
                    Explore Pregnancy
                  </Link>
                  <Link
                    to="/parenting"
                    className="px-6 py-3 bg-white text-maternal-700 border border-maternal-200 rounded-full font-medium hover:bg-maternal-50 transition-colors"
                  >
                    Discover Parenting
                  </Link>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="md:w-1/2 mt-10 md:mt-0"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-maternal-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-maternal-300 rounded-full opacity-50"></div>
                <img
                  src="https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/646263ba005896236fa9e287_wepik-export-202305151654052wSj.png"
                  alt="Mother and baby"
                  className="relative rounded-2xl shadow-xl mx-auto z-10 w-full max-w-md"
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
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">
              Latest Articles
            </h2>
            <p className="mt-4 text-gray-700 text-lg">
              Explore our recent articles for expert insights on maternal health
            </p>
          </motion.div>

          {/* Search and Category Filters */}
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-maternal-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button 
                    key={index}
                    className="px-3 py-1 bg-gray-100 hover:bg-maternal-100 text-gray-700 rounded-full text-sm transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium bg-maternal-100 text-maternal-700 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-gray-900 leading-tight">
                    {article.title}
                  </h3>
                  <Link
                    to={article.link}
                    className="mt-4 inline-flex items-center text-maternal-600 font-medium"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-white text-maternal-700 border border-maternal-200 rounded-full font-medium hover:bg-maternal-50 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-maternal-50">
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
                Expert Resources at Your Fingertips
              </h2>
              <p className="mt-4 text-gray-700">
                Access our comprehensive library of evidence-based articles, guides, and resources 
                on pregnancy, childbirth, and parenting tailored to your unique journey.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/pregnancy"
                  className="inline-flex items-center px-5 py-2 bg-maternal-600 text-white rounded-lg hover:bg-maternal-700 transition-colors"
                >
                  Pregnancy Resources
                  <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 mt-10 md:mt-0"
            >
              <div className="relative max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-maternal-400 to-maternal-600 rounded-xl opacity-10 blur-xl transform scale-110"></div>
                <img
                  src="https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/64afc069cc53f4e8ae52c8de_2%20.%207%20Months%20Pregnant.jpg"
                  alt="Maternal health resources"
                  className="relative rounded-xl shadow-lg w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
