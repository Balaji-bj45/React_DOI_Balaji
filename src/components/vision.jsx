import React from "react";
import visionImage1 from "../assets/vision.png";
import Assistance from "../assets/assistance.png";

const Vision = () => {
  return (
    <div className="w-full bg-white font-sans">

      {/* ================== SECTION 1 ================== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          {/* Replace `your-image-1.png` with your image */}
          <img 
            src= {visionImage1}
            alt="vision illustration" 
            className="w-[380px] md:w-[450px] rounded-xl p-2"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            The Values Behind Our Vision!
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-xl">•</span> Promoting academic honesty.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">•</span> Leveraging technology for research success.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">•</span> Building connections among researchers.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">•</span> Delivering top-notch services.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">•</span> Tailoring solutions to researchers’ needs.
            </li>
          </ul>
        </div>
      </div>

      {/* ================== SECTION 2 ================== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          {/* Replace `your-image-2.png` with your image */}
          <img 
            src={Assistance}
            alt="assistance illustration" 
            className="w-[380px] md:w-[450px]  rounded-md"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
            Reach Out for Expert Assistance
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
            Check documents in multiple languages with ease, ensuring accessibility for global users.
            Our tool supports various file formats such as .doc, .pdf, and .txt, making it effortless to upload in your preferred format.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
            Check documents in multiple languages with ease, ensuring accessibility for global users.
            Our tool supports various file formats such as .doc, .pdf, and .txt, making it effortless to upload in your preferred format.
          </p>

          <button className="px-6 py-3 bg-[#21B592] text-white rounded-full shadow-md hover:scale-105 transition-all">
            Call Us  +91-1234567890
          </button>
        </div>
      </div>

    </div>
  );
};

export default Vision;
