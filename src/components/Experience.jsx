import React from 'react';
import ExperienceImage from '../assets/experience.png'; 

const Experience = () => {
  return (
  
    <div className="bg-white flex items-center justify-center p-4 sm:p-6 mb-12 md:mb-48">
      <div className="max-w-7xl w-full">
       
        <div className="bg-[#1CA195] rounded-3xl shadow-2xl p-6 sm:p-10 md:p-16 pb-10 md:pb-52 relative">

         
          <div className="text-center text-white mb-12 md:mb-16 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Delivering Quality paired with Experience
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-green-50 max-w-4xl mx-auto pt-4 md:pt-9">
              With a commitment to quality and innovation, we stand out as the go-to platform for researchers seeking reliable, efficient tools to excel in their work.
            </p>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:absolute md:bottom-0 md:translate-y-1/2 md:left-10 md:right-10 md:px-0 z-20">

           
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
             
             <div>
               <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                Real-Time Plagiarism Detection
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Scans documents and provides instant feedback on originality. Highlights duplicated text with side-by-side comparisons.
              </p>
             </div>
               <div className="flex justify-center mb-6">
              
                <img src={ExperienceImage} alt="Plagiarism Detection" className="w-58 h-54 object-contain mx-auto" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
              <div className="flex justify-center mb-6">
                <img src={ExperienceImage} alt="Multi-Language Support" className="58 h-54 object-contain mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                Multi-Language Support & Seamless Compatibility
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Check documents in multiple languages with ease. Our tool supports various file formats like .doc, .pdf, and .txt.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center">
               
              <div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                Secure and Private
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                All documents remain private and are never stored or shared, ensuring complete data safety and peace of mind.
              </p>
              </div>
              <div className="flex justify-center mb-6">
                <img src={ExperienceImage} alt="Security" className="58 h-54 object-contain mx-auto" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;