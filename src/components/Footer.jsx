import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#1CA195] text-white py-14 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10">

        {/* Left Section - LOGO */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">LOGO</h2>
          <p className="text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur. Purus dolor aliquam aenean
            quisque rhoncus nullam massa maecenas. Dui varius at vel dignissim.
          </p>
        </div>

        {/* Center Vertical Line */}
        <div className="hidden md:block w-[1px] h-32 bg-white opacity-70"></div>

        {/* Middle Section - Location */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Location</h3>
          <p className="text-sm mb-2">Address</p>
          <p className="text-sm">Contact</p>
        </div>

        {/* Center Vertical Line */}
        <div className="hidden md:block w-[1px] h-32 bg-white opacity-70"></div>

        {/* Right Section - Social Icons */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Follow Us On</h3>
          <div className="flex justify-center md:justify-start items-center space-x-5 text-2xl">
            <FaWhatsapp className="text-[#25D366] hover:scale-110 transition cursor-pointer" />
            <FaFacebook className="text-[#1877F2] hover:scale-110 transition cursor-pointer" />
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
