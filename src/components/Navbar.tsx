
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-markify-purple to-markify-dark-purple bg-clip-text text-transparent">
            Markify
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`font-medium transition-colors ${isActive("/") ? "text-markify-purple" : "text-gray-700 hover:text-markify-purple"}`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`font-medium transition-colors ${isActive("/services") ? "text-markify-purple" : "text-gray-700 hover:text-markify-purple"}`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`font-medium transition-colors ${isActive("/about") ? "text-markify-purple" : "text-gray-700 hover:text-markify-purple"}`}
          >
            About
          </Link>
          <Link
            to="/testimonials"
            className={`font-medium transition-colors ${isActive("/testimonials") ? "text-markify-purple" : "text-gray-700 hover:text-markify-purple"}`}
          >
            Testimonials
          </Link>
          <Link
            to="/contact"
            className={`font-medium transition-colors ${isActive("/contact") ? "text-markify-purple" : "text-gray-700 hover:text-markify-purple"}`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button 
            className="bg-markify-purple hover:bg-markify-dark-purple text-white"
            onClick={() => window.location.href = "/contact"}
          >
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
            <Link
              to="/"
              className={`font-medium py-2 ${isActive("/") ? "text-markify-purple" : "text-gray-700 hover:text-markify-purple"}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`font-medium py-2 ${isActive("/services") ? "text-markify-purple" : "text-gray-700 hover:text-markify-purple"}`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`font-medium py-2 ${isActive("/about") ? "text-markify-purple" : "text-gray-700 hover:text-markify-purple"}`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={`font-medium py-2 ${isActive("/testimonials") ? "text-markify-purple" : "text-gray-700 hover:text-markify-purple"}`}
            >
              Testimonials
            </Link>
            <Link
              to="/contact"
              className={`font-medium py-2 ${isActive("/contact") ? "text-markify-purple" : "text-gray-700 hover:text-markify-purple"}`}
            >
              Contact
            </Link>
            <Link to="/contact" className="mt-2">
              <Button className="bg-markify-purple hover:bg-markify-dark-purple text-white w-full">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
