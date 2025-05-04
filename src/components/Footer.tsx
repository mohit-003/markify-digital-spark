
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-markify-purple to-markify-light-purple bg-clip-text text-transparent">
              Markify
            </h3>
            <p className="text-gray-300 mb-6">
              We help businesses grow their online presence through innovative digital marketing strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-markify-purple transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-markify-purple transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-markify-purple transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-markify-purple transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Search Engine Optimization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Content Marketing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web Design & Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Analytics & Reporting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Markify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
