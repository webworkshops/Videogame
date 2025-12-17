import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/inventory", label: "Inventory" },
    { path: "/reviews", label: "Reviews" },
    { path: "/contact", label: "Visit Us" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#1a1a1b] border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="text-2xl md:text-3xl font-black tracking-tight">
              <img
                src={logo}
                alt="Videogames Then & Now logo"
                class="site-logo"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-[#F4C430] bg-[#F4C430]/10"
                    : "text-gray-300 hover:text-[#F4C430] hover:bg-[#F4C430]/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:7088675309">
              <Button className="bg-[#F4C430] text-black hover:bg-[#F4C430]/90 font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-[#F4C430] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "text-[#F4C430] bg-[#F4C430]/10"
                      : "text-gray-300 hover:text-[#F4C430] hover:bg-[#F4C430]/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:7088675309" className="pt-2">
                <Button className="w-full bg-[#F4C430] text-black hover:bg-[#F4C430]/90 font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
