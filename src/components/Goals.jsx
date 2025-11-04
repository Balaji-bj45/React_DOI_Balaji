import React from 'react';
import integrityIcon from '../assets/integrity-icon.png';
import innovationIcon from '../assets/innovation-icon.png';
import collaborationIcon from '../assets/collaboration-icon.png';
import excellenceIcon from '../assets/excellence-icon.png';

export const Goals = () => {
  return (
    <div className="bg-white font-sans w-full py-16 sm:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-5xl mx-auto">

          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 tracking-wide">
              Our Strategies To Make you Accomplish
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 tracking-wide mt-2">
              your Goals
            </h1>
            <p className="mt-6 max-w-2xl mx-auto  text-sm sm:text-base text-gray-500">
              To support researchers worldwide by providing reliable, innovative tools for academic success.
            </p>
          </div>

          {/* Goals List */}
          <div className="mt-16 sm:mt-20 flex flex-col items-center lg:block space-y-5">

            {/* 1. Integrity */}
            <div className="flex items-center rounded-full p-2 pr-6 shadow-sm w-full max-w-md lg:w-[600px] lg:ml-[30rem] text-white bg-gray-900 text-gray-900 hover:bg-black hover:text-white transition-colors duration-300">
              <div className="flex-shrink-0 bg-white rounded-full h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center shadow-inner">
                <img src={integrityIcon} alt="Integrity" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
              </div>
              <span className="ml-4 sm:ml-6 text-base sm:text-lg font-normal tracking-wide">Integrity</span>
            </div>

            {/* 2. Innovation */}
            <div className="flex items-center rounded-full p-2 pr-6 shadow-sm w-full max-w-md lg:w-[600px] lg:ml-[22.5rem] bg-gray-100 text-gray-900 hover:bg-black hover:text-white transition-colors duration-300">
              <div className="flex-shrink-0 bg-white rounded-full h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center shadow-inner">
                <img src={innovationIcon} alt="Innovation" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
              </div>
              <span className="ml-4 sm:ml-6 text-base sm:text-lg font-normal tracking-wide">Innovation</span>
            </div>

            {/* 3. Collaboration */}
            <div className="flex items-center rounded-full p-2 pr-6 shadow-sm w-full max-w-md lg:w-[600px] lg:ml-[15rem] bg-gray-100 text-gray-900 hover:bg-black hover:text-white transition-colors duration-300">
              <div className="flex-shrink-0 bg-white rounded-full h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center shadow-inner">
                <img src={collaborationIcon} alt="Collaboration" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
              </div>
              <span className="ml-4 sm:ml-6 text-base sm:text-lg font-normal tracking-wide">Collaboration</span>
            </div>

            {/* 4. Excellence */}
            <div className="flex items-center rounded-full p-2 pr-6 shadow-sm w-full max-w-md lg:w-[600px] lg:ml-[7.5rem] bg-gray-100 text-gray-900 hover:bg-black hover:text-white transition-colors duration-300">
              <div className="flex-shrink-0 bg-white rounded-full h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center shadow-inner">
                <img src={excellenceIcon} alt="Excellence" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
              </div>
              <span className="ml-4 sm:ml-6 text-base sm:text-lg font-normal tracking-wide">Excellence</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
