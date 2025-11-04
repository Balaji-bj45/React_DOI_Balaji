import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";

export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white relative overflow-hidden">
      {/* ============ NAVBAR ============ */}
      <nav className="w-full flex items-center justify-between px-4 sm:px-8 md:px-16 py-6">
        <div className="text-xl sm:text-2xl font-semibold">Logo</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-15 text-gray-700 text-[14px] lg:text-[16px]">
          <li className="text-teal-500 font-medium cursor-pointer">Home</li>
          <li className="cursor-pointer hover:text-teal-500">About</li>
          <li className="cursor-pointer hover:text-teal-500">Our Services</li>
          <li className="cursor-pointer hover:text-teal-500">Contact</li>
        </ul>

        {/* CTA Button (Desktop) */}
        <button className="hidden md:block bg-teal-500 hover:bg-teal-600 transition text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full text-[13px] sm:text-[15px]">
          Plagiarism Checker
        </button>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden w-full px-6 py-4 bg-white border-t shadow-sm animate-slide-down">
          <ul className="flex flex-col space-y-5 text-gray-700 text-[15px]">
            <li className="cursor-pointer text-teal-500 font-medium">Home</li>
            <li className="cursor-pointer hover:text-teal-500">About</li>
            <li className="cursor-pointer hover:text-teal-500">Our Services</li>
            <li className="cursor-pointer hover:text-teal-500">Contact</li>
          </ul>

          <button className="mt-6 w-full bg-teal-500 hover:bg-teal-600 transition text-white px-4 py-2 rounded-full text-[15px]">
            Plagiarism Checker
          </button>
        </div>
      )}

      {/* ============ HERO CONTENT ============ */}
      <section className="relative w-full flex flex-col items-center text-center mt-8 sm:mt-10 px-4 sm:px-6 z-10">
        <img
          src={hero1}
          alt="hero-left"
          className="hidden lg:block absolute left-30 top-25 w-60 opacity-90 -z-10"
        />

        <img
          src={hero2}
          alt="hero-right"
          className=" hidden lg:block absolute right-12 top-45 w-150 opacity-90 -z-10"
        />

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-snug sm:leading-tight tracking-tight mt-14 sm:mt-20">
          Transforming Research Into <br />
          <span className="block text-teal-600 md:text-gray-900 sm:text-teal-600 mt-2">Impactful Outcomes.</span>
        </h1>

        <p className="text-gray-600 mt-6 sm:mt-8 mb-6 sm:mb-10 max-w-3xl text-sm sm:text-lg md:text-xl leading-relaxed">
          Join thousands of researchers using our services to elevate their
          work. Whether you're checking for plagiarism or seeking publication
          support, we're here to streamline your efforts and maximize your
          research efficiency.
        </p>

        <button className="mt-8 sm:mt-10 bg-teal-500 hover:bg-teal-600 transition text-white px-8 py-3 sm:px-10 sm:py-3 rounded-full text-base sm:text-lg">
          Explore Our Services
        </button>
      </section>
    </div>
  );
};
