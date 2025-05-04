
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-markify-purple to-markify-dark-purple bg-clip-text text-transparent">
            Markify
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-700 hover:text-markify-purple font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-markify-purple font-medium transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-markify-purple font-medium transition-colors"
          >
            About
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-markify-purple font-medium transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-markify-purple font-medium transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-markify-purple hover:bg-markify-dark-purple text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <nav className="flex flex-col space-y-4 px-6">
            <a
              href="#home"
              className="text-gray-700 hover:text-markify-purple font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-markify-purple font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-markify-purple font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-markify-purple font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-markify-purple font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-markify-purple hover:bg-markify-dark-purple text-white w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
