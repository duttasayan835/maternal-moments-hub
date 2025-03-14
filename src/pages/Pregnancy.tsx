import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

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

  // Define pregnancy weeks in ascending order
  const pregnancyWeeks = [
    {
      week: 5,
      title: "5 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips",
      category: "Weeks and Trimesters",
      date: "September 30, 2022",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/633816bdedd4565dc2f22958_63367ef11c6e2f88d9176502_week5.jpeg",
      link: "/pregnancy-week/5"
    },
    {
      week: 6,
      title: "6 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips",
      category: "Weeks and Trimesters",
      date: "September 30, 2022",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/633816bfc6e89fefb397173a_6336879d445b4c7be4556afb_week6%2520(1).jpeg",
      link: "/pregnancy-week/6"
    },
    {
      week: 7,
      title: "7 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips",
      category: "Weeks and Trimesters",
      date: "September 30, 2022",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/633816c2ad6a6dba6ff6c0bd_63368a88b9a6e92dc9d14b10_week7.jpeg",
      link: "/pregnancy-week/7"
    },
    {
      week: 8,
      title: "8 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips",
      category: "Weeks and Trimesters",
      date: "September 30, 2022",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/633816c50a9495621f364251_633690257e70db09812b41ff_week8.jpeg",
      link: "/pregnancy-week/8"
    },
    {
      week: 9,
      title: "9 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips",
      category: "Weeks and Trimesters",
      date: "September 30, 2022",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/633816c7c2d6b0f0f888145e_633691f97e70db7c6a2cb5fe_weeK9.jpeg",
      link: "/pregnancy-week/9"
    },
    {
      week: 10,
      title: "10 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips",
      category: "Weeks and Trimesters",
      date: "September 30, 2022",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/6338168d7b04fd3c2ac62388_63369414c9d071151c8adac0_weeK10.jpeg",
      link: "/pregnancy-week/10"
    },
    {
      week: 11,
      title: "11 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips",
      category: "Weeks and Trimesters",
      date: "September 30, 2022",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/6338168d7d3b906f4e8b578e_633696621e9b6f21564e1c1b_weeK11.jpeg",
      link: "/pregnancy-week/11"
    },
    {
      week: 12,
      title: "12 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips",
      category: "Weeks and Trimesters",
      date: "September 30, 2022",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/6338168df6ee972bb544af8b_63369730cf9a687b971bf6db_week12_baby.jpeg",
      link: "/pregnancy-week/12-weeks-pregnant"
    },
    {
      week: 14,
      title: "14 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips",
      category: "Weeks and Trimesters",
      date: "September 30, 2022",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/6338168d823f997271e6bcf3_63369c60445b4c1c33659302_week14.jpeg",
      link: "/pregnancy-week/14"
    },
    {
      week: 15,
      title: "15 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips",
      category: "Weeks and Trimesters",
      date: "September 30, 2022",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/6338168d3b99eceb045eb476_63369c791e9b6f9a34555f3e_week15.jpeg",
      link: "/pregnancy-week/15"
    },
    {
      week: 16,
      title: "16 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips",
      category: "Weeks and Trimesters",
      date: "September 30, 2022",
      image: "https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/6338168d3b99ec6f425eb479_63369ff298515ca375d0e844_week16.jpeg",
      link: "/pregnancy-week/16"
    }
  ];

  // Sort pregnancyWeeks by week number (ascending)
  const sortedPregnancyWeeks = [...pregnancyWeeks].sort((a, b) => a.week - b.week);

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

      {/* Pregnancy Week by Week Section */}
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
              Pregnancy Week by Week
            </h2>
            <p className="mt-4 text-gray-700">
              Follow your baby's development from weeks 5 to 40 with detailed guides
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPregnancyWeeks.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-md transition-all">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={week.image} 
                      alt={week.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                      {week.title}
                    </h3>
                    <div className="flex items-center mb-4">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-maternal-100 text-maternal-700 rounded-full mr-2">{week.category}</span>
                      <span className="text-sm text-gray-500">{week.date}</span>
                    </div>
                    <a href={week.link} className="inline-flex items-center text-maternal-600 font-medium">
                      Read more
                      <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>

      {/* New Blog Article Listing Section */}
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
              Pregnancy Resources
            </h2>
            <p className="mt-4 text-gray-700">
              Expert articles, guides, and week-by-week pregnancy information
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Yoga for Expecting Moms */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Card className="h-full hover:shadow-md transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/651aff6368770316aff12a7f_Cover.jpg" 
                    alt="Yoga for Expecting Moms" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                    Yoga for Expecting Moms: Asanas to Adopt & Avoid
                  </h3>
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-maternal-100 text-maternal-700 rounded-full mr-2">Complications</span>
                    <span className="text-sm text-gray-500">June 12, 2023</span>
                  </div>
                  <a href="/post/yoga-for-expecting-moms-asanas-to-adopt-avoid" className="inline-flex items-center text-maternal-600 font-medium">
                    Read more
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Don't Ignore Itching in Pregnancy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <Card className="h-full hover:shadow-md transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/651affeabf28071b79e174e6_Cover.jpg" 
                    alt="Don't Ignore Itching in Pregnancy" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                    Don't Ignore Itching in Pregnancy
                  </h3>
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-maternal-100 text-maternal-700 rounded-full mr-2">Complications</span>
                    <span className="text-sm text-gray-500">June 12, 2023</span>
                  </div>
                  <a href="/post/dont-ignore-itching-in-pregnancy" className="inline-flex items-center text-maternal-600 font-medium">
                    Read more
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* Boosting Hemoglobin Levels */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <Card className="h-full hover:shadow-md transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/6508970fcca17508fff222ca_cover1.jpg" 
                    alt="Boosting Hemoglobin Levels" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                    Boosting Hemoglobin Levels for a Healthy Pregnancy
                  </h3>
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-maternal-100 text-maternal-700 rounded-full mr-2">Complications</span>
                    <span className="text-sm text-gray-500">June 12, 2023</span>
                  </div>
                  <a href="/post/boosting-hemoglobin-levels-for-a-healthy-pregnancy" className="inline-flex items-center text-maternal-600 font-medium">
                    Read more
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* 9 Weeks Pregnant */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group"
            >
              <Card className="h-full hover:shadow-md transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/633816c7c2d6b0f0f888145e_633691f97e70db7c6a2cb5fe_weeK9.jpeg" 
                    alt="9 Weeks Pregnant" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                    9 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips
                  </h3>
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-maternal-100 text-maternal-700 rounded-full mr-2">Weeks and Trimesters</span>
                    <span className="text-sm text-gray-500">September 30, 2022</span>
                  </div>
                  <a href="/pregnancy-week/9" className="inline-flex items-center text-maternal-600 font-medium">
                    Read more
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* 8 Weeks Pregnant */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group"
            >
              <Card className="h-full hover:shadow-md transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/633816c50a9495621f364251_633690257e70db09812b41ff_week8.jpeg" 
                    alt="8 Weeks Pregnant" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                    8 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips
                  </h3>
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-maternal-100 text-maternal-700 rounded-full mr-2">Weeks and Trimesters</span>
                    <span className="text-sm text-gray-500">September 30, 2022</span>
                  </div>
                  <a href="/pregnancy-week/8" className="inline-flex items-center text-maternal-600 font-medium">
                    Read more
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            {/* 7 Weeks Pregnant */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group"
            >
              <Card className="h-full hover:shadow-md transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://cdn.prod.website-files.com/630c4a66b123fb1a74ccb8a7/633816c2ad6a6dba6ff6c0bd_63368a88b9a6e92dc9d14b10_week7.jpeg" 
                    alt="7 Weeks Pregnant" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                    7 Weeks Pregnant: Garbh Sanskar, Symptoms and Tips
                  </h3>
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-maternal-100 text-maternal-700 rounded-full mr-2">Weeks and Trimesters</span>
                    <span className="text-sm text-gray-500">September 30, 2022</span>
                  </div>
                  <a href="/pregnancy-week/7" className="inline-flex items-center text-maternal-600 font-medium">
                    Read more
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-6 py-3 bg-maternal-600 text-white rounded-full font-medium shadow-sm hover:bg-maternal-700 transition-colors"
            >
              View All Articles
              <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
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
