
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Link } from 'react-router-dom';

const Home = () => {
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
              Explore Our Key Resources
            </h2>
            <p className="mt-4 text-gray-700 text-lg">
              Comprehensive guidance through every step of your maternal journey
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pregnancy",
                description: "Week-by-week development guides, nutrition advice, and prenatal care tips.",
                image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/64afc069cc53f4e8ae52c8de_2%20.%207%20Months%20Pregnant.jpg",
                link: "/pregnancy"
              },
              {
                title: "Parenting",
                description: "Evidence-based guidance on child development, nutrition, and positive parenting.",
                image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/64709e0efec7114b4aede3d5_12.%20What%20is%20placenta%20encapsulation.jpg",
                link: "/parenting"
              },
              {
                title: "Research",
                description: "Latest studies and scientific findings in maternal and child health.",
                image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/63ff79c2d350850e5e555415_WhatsApp%20Image%202023-03-01%20at%209.36.32%20PM.jpeg",
                link: "/research"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {item.description}
                  </p>
                  <Link
                    to={item.link}
                    className="mt-4 inline-flex items-center text-maternal-600 font-medium"
                  >
                    Learn more
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
                Get Our Mobile App
              </h2>
              <p className="mt-4 text-gray-700">
                Download our app for iOS and Android for a complete maternal health experience.
                Track your pregnancy, access personalized content, and connect with our community anytime, anywhere.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/#"
                  className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5,1.24c0.43,0,0.86,0.08,1.26,0.26l0.06,0.02c0.27,0.1,0.53,0.25,0.78,0.43l0.03,0.02c0.24,0.19,0.46,0.41,0.65,0.65l0.02,0.03c0.18,0.25,0.33,0.51,0.43,0.78l0.02,0.06c0.18,0.41,0.26,0.83,0.26,1.26v15.5c0,0.43-0.08,0.86-0.26,1.26l-0.02,0.06c-0.1,0.27-0.25,0.53-0.43,0.78l-0.02,0.03c-0.19,0.24-0.41,0.46-0.65,0.65l-0.03,0.02c-0.25,0.18-0.51,0.33-0.78,0.43l-0.06,0.02c-0.41,0.18-0.83,0.26-1.26,0.26h-15.5c-0.43,0-0.86-0.08-1.26-0.26l-0.06-0.02c-0.27-0.1-0.53-0.25-0.78-0.43l-0.03-0.02c-0.24-0.19-0.46-0.41-0.65-0.65l-0.02-0.03c-0.18-0.25-0.33-0.51-0.43-0.78l-0.02-0.06c-0.18-0.41-0.26-0.83-0.26-1.26v-15.5c0-0.43,0.08-0.86,0.26-1.26l0.02-0.06c0.1-0.27,0.25-0.53,0.43-0.78l0.02-0.03c0.19-0.24,0.41-0.46,0.65-0.65l0.03-0.02c0.25-0.18,0.51-0.33,0.78-0.43l0.06-0.02c0.41-0.18,0.83-0.26,1.26-0.26h15.5M17.5,0h-15.5c-2.21,0-4,1.79-4,4v15.5c0,2.21,1.79,4,4,4h15.5c2.21,0,4-1.79,4-4v-15.5c0-2.21-1.79-4-4-4L17.5,0z"></path>
                    <path d="M15.2,13.1c-0.06-0.04-0.15-0.09-0.26-0.14c-0.11-0.05-0.24-0.1-0.39-0.15c-0.15-0.05-0.3-0.1-0.46-0.13c-0.16-0.04-0.31-0.06-0.46-0.06c-0.38,0-0.68,0.08-0.91,0.25c-0.23,0.16-0.34,0.4-0.34,0.69c0,0.17,0.04,0.31,0.12,0.43c0.08,0.12,0.18,0.22,0.3,0.29c0.13,0.08,0.27,0.14,0.44,0.18c0.17,0.04,0.34,0.06,0.51,0.06c0.53,0,0.99-0.18,1.37-0.53c0.08-0.08,0.14-0.17,0.19-0.27c0.05-0.1,0.07-0.22,0.07-0.36C15.38,13.29,15.32,13.18,15.2,13.1L15.2,13.1z"></path>
                    <path d="M13.8,9.25c-0.04-0.07-0.08-0.15-0.12-0.22c-0.04-0.08-0.06-0.17-0.06-0.28c0-0.21,0.09-0.37,0.27-0.48c0.18-0.11,0.36-0.17,0.56-0.17c0.09,0,0.18,0.01,0.27,0.03c0.09,0.02,0.17,0.04,0.24,0.07c0.07,0.03,0.13,0.06,0.18,0.09c0.05,0.03,0.08,0.06,0.11,0.08c0.02,0.02,0.04,0.01,0.05-0.01c0.01-0.02,0.02-0.05,0.02-0.08c0-0.1-0.08-0.18-0.23-0.26c-0.15-0.08-0.36-0.12-0.61-0.12c-0.35,0-0.66,0.09-0.91,0.28c-0.25,0.19-0.38,0.45-0.38,0.78c0,0.09,0.01,0.18,0.04,0.27c0.03,0.09,0.06,0.17,0.11,0.24c0.05,0.08,0.1,0.15,0.16,0.21c0.06,0.06,0.12,0.12,0.19,0.17c-0.15,0.1-0.28,0.21-0.39,0.34c-0.11,0.13-0.16,0.29-0.16,0.5c0,0.15,0.04,0.29,0.11,0.4c0.07,0.12,0.17,0.22,0.29,0.3c0.12,0.08,0.26,0.15,0.41,0.19c0.15,0.04,0.31,0.07,0.47,0.07c0.11,0,0.22-0.01,0.34-0.03c0.12-0.02,0.23-0.05,0.35-0.09c0.12-0.04,0.23-0.09,0.34-0.15c0.11-0.06,0.21-0.13,0.29-0.22c0.09-0.09,0.15-0.19,0.21-0.31c0.05-0.12,0.08-0.26,0.08-0.41c0-0.27-0.09-0.5-0.26-0.68C14.53,9.64,14.21,9.42,13.8,9.25L13.8,9.25z"></path>
                    <path d="M16.92,5.33c-0.27,0-0.51,0.09-0.71,0.29c-0.2,0.19-0.3,0.43-0.3,0.71v10.61c0,0.28,0.1,0.52,0.3,0.71c0.2,0.19,0.44,0.29,0.71,0.29c0.55,0,1-0.45,1-1v-10.61C17.91,5.78,17.47,5.33,16.92,5.33L16.92,5.33z"></path>
                    <path d="M7.11,15.86V8.12c0-0.16,0.03-0.33,0.08-0.51c0.05-0.18,0.13-0.34,0.23-0.48c0.11-0.14,0.23-0.25,0.39-0.34c0.16-0.09,0.33-0.13,0.51-0.13c0.17,0,0.33,0.04,0.47,0.12c0.14,0.08,0.26,0.18,0.35,0.31c0.07,0.09,0.12,0.2,0.15,0.31c0.03,0.11,0.08,0.18,0.14,0.19c0.04,0.01,0.08-0.02,0.11-0.08c0.03-0.06,0.05-0.16,0.05-0.29v-1.2c0-0.27-0.1-0.56-0.29-0.85c-0.19-0.29-0.51-0.44-0.97-0.44c-0.25,0-0.48,0.05-0.67,0.15c-0.2,0.1-0.36,0.23-0.5,0.4c-0.06,0.07-0.11,0.14-0.16,0.22c-0.01,0.02-0.04,0.03-0.06,0.02c-0.02-0.01-0.04-0.04-0.04-0.07V5.33c0-0.55-0.45-1-1-1c-0.28,0-0.52,0.1-0.71,0.29C4,4.82,3.9,5.06,3.9,5.33v10.53c0,0.57,0.46,1.03,1.03,1.03c0.27,0,0.52-0.11,0.71-0.29C5.84,16.42,5.95,16.16,5.96,15.86L7.11,15.86z"></path>
                    <path d="M10.86,15.86c0,0.28,0.1,0.52,0.3,0.7c0.2,0.18,0.44,0.28,0.71,0.28c0.27,0,0.51-0.09,0.71-0.28c0.2-0.19,0.29-0.42,0.29-0.7V9.87c0-0.28-0.1-0.52-0.29-0.71c-0.2-0.19-0.44-0.29-0.71-0.29c-0.28,0-0.51,0.1-0.71,0.29c-0.2,0.19-0.3,0.43-0.3,0.71V15.86z"></path>
                    <path d="M11.87,8.12c0.27,0,0.51-0.09,0.71-0.29c0.2-0.2,0.29-0.44,0.29-0.71V6.33c0-0.27-0.1-0.51-0.29-0.71c-0.19-0.2-0.43-0.29-0.71-0.29c-0.27,0-0.51,0.1-0.71,0.29c-0.2,0.2-0.3,0.43-0.3,0.71v0.79c0,0.27,0.1,0.51,0.3,0.71C11.36,8.02,11.6,8.12,11.87,8.12L11.87,8.12z"></path>
                  </svg>
                  <div>
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="/#"
                  className="inline-flex items-center px-4 py-2 bg-black text-white rounded-lg"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5C3,21.33 3.67,22 4.5,22H19.5C20.33,22 21,21.33 21,20.5V3.5C21,2.67 20.33,2 19.5,2L4.5,2C3.67,2 3,2.67 3,3.5L3,20.5M16.71,11.29L12.71,7.29C12.32,6.9 11.69,6.9 11.3,7.29C10.91,7.68 10.91,8.31 11.3,8.7L14.59,12L11.3,15.29C10.91,15.68 10.91,16.31 11.3,16.7C11.69,17.09 12.32,17.09 12.71,16.7L16.71,12.7C17.1,12.31 17.1,11.68 16.71,11.29Z"></path>
                  </svg>
                  <div>
                    <div className="text-xs opacity-80">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
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
                  src="https://cdn.prod.website-files.com/6305ab39bd83e6b704958561/644940c5dc178e1fdc5fae5b_iMumz-logo-medium.png"
                  alt="Mobile app"
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
