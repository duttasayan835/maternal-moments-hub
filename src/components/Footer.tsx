
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-xl font-display font-semibold bg-clip-text text-transparent bg-gradient-to-r from-maternal-600 to-maternal-800">
              Maternal Moments
            </span>
            <p className="text-gray-600 mt-2 max-w-xs">
              Supporting mothers through every step of their journey with evidence-based resources and compassionate care.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-gray-800">PAGES</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-maternal-600 transition-colors">Home</Link></li>
              <li><Link to="/pregnancy" className="text-gray-600 hover:text-maternal-600 transition-colors">Pregnancy</Link></li>
              <li><Link to="/parenting" className="text-gray-600 hover:text-maternal-600 transition-colors">Parenting</Link></li>
              <li><Link to="/research" className="text-gray-600 hover:text-maternal-600 transition-colors">Research</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-maternal-600 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-maternal-600 transition-colors">Contact Us</Link></li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-gray-800">CONNECT</h3>
            <div className="flex space-x-4">
              <a href="/#" className="w-10 h-10 rounded-full bg-maternal-100 flex items-center justify-center text-maternal-600 hover:bg-maternal-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="/#" className="w-10 h-10 rounded-full bg-maternal-100 flex items-center justify-center text-maternal-600 hover:bg-maternal-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="/#" className="w-10 h-10 rounded-full bg-maternal-100 flex items-center justify-center text-maternal-600 hover:bg-maternal-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
            <p className="text-gray-600">Stay connected with us on social media for updates and resources on maternal health.</p>
          </motion.div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Maternal Moments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
