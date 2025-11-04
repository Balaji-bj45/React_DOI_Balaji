import React from "react";
import explore1 from "../assets/explore-1.png";
import explore2 from "../assets/explore-2.png";
import explore3 from "../assets/explore-3.png";
import explore4 from "../assets/explore-4.png";
import explore5 from "../assets/explore-5.png";

const Explore = () => {
  return (
    <>
      <section>
        <div className="w-full px-6 sm:px-10 md:px-20 py-10 font-sans">

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            <div>
              <h2 className="text-2xl sm:text-[26px] font-semibold">Explore Our Services</h2>
              <p className="text-xs sm:text-[15px] text-gray-800 mt-2 max-w-[750px] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Purus dolor aliquam aenean quisque
                rhoncus nullam massa maecenas Lorem ipsum dolor sit amet consectetur.
                Purus dolor aliquam aenean quisque rhoncus nullam massa maecenas
              </p>
            </div>
          </div>

          {/* ---------- FIRST ROW ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-10 lg:mt-14">

            <div className="border-t border-gray-500 pt-4 lg:relative lg:top-40">
              <div className="flex justify-between items-start">
                <h3 className="text-sm sm:text-[15px] font-semibold">Plagiarism Checker</h3>
               <button className="text-gray-600 lg:absolute lg:top-3 lg:right-0 bg-gray-100 py-2 px-3 rounded-2xl ">➜</button>
              </div>
              <p className="text-xs sm:text-[13px] text-gray-600 mt-2 leading-relaxed max-w-[230px]">
                Lorem ipsum dolor sit amet consectetur. Purus dolor aliquam aenean
              </p>
              <div className="w-full mt-4 overflow-hidden rounded-lg">
                <img 
                  src={explore1} 
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>

            <div className="border-t border-gray-500 pt-4 lg:relative lg:mb-10 lg:top-20">
              <div className="flex justify-between items-start">
                <h3 className="text-sm sm:text-[15px] font-semibold">Impact Factor</h3>
              <button className="text-gray-600 lg:absolute lg:top-3 lg:right-0 bg-gray-100 py-2 px-3 rounded-2xl ">➜</button>
              </div>
              <p className="text-xs sm:text-[13px] text-gray-600 mt-2 leading-relaxed max-w-[230px]">
                Lorem ipsum dolor sit amet consectetur. Purus dolor aliquam aenean
              </p>
              <div className="w-full mt-4 overflow-hidden rounded-lg">
                <img 
                  src={explore2} 
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>

            <div className="border-t border-gray-500 pt-4 lg:relative">
              <div className="flex justify-between items-start">
                <h3 className="text-sm sm:text-[15px] font-semibold">Indexing</h3>
                <button className="text-gray-600 lg:absolute lg:top-3 lg:right-0 bg-gray-100 py-2 px-3 rounded-2xl ">➜</button>
              </div>
              <p className="text-xs sm:text-[13px] text-gray-600 mt-2 leading-relaxed max-w-[230px]">
                Lorem ipsum dolor sit amet consectetur. Purus dolor aliquam aenean
              </p>
              <div className="w-full mt-4 overflow-hidden rounded-lg">
                <img 
                  src={explore3} 
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>

          </div>

          {/* ---------- SECOND ROW ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mt-8 lg:mt-10">

            <div className="border-t border-gray-500 pt-4 lg:relative lg:top-60">
              <div className="flex justify-between items-start">
                <h3 className="text-sm sm:text-[15px] font-semibold">Research Review Network</h3>
               <button className="text-gray-600 lg:absolute lg:top-3 lg:right-0 bg-gray-100 py-2 px-3 rounded-2xl ">➜</button>
              </div>
              <p className="text-xs sm:text-[13px] text-gray-600 mt-2 leading-relaxed max-w-[230px]">
                Lorem ipsum dolor sit amet consectetur. Purus dolor aliquam aenean
              </p>
              <div className="w-full mt-4 overflow-hidden rounded-lg">
                <img 
                  src={explore4} 
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>

            <div className="border-t border-gray-500 pt-4 lg:relative lg:top-40">
              <div className="flex justify-between items-start">
                <h3 className="text-sm sm:text-[15px] font-semibold">Research Assistance</h3>
                <button className="text-gray-600 lg:absolute lg:top-3 lg:right-0 bg-gray-100 py-2 px-3 rounded-2xl ">➜</button>
              </div>
              <p className="text-xs sm:text-[13px] text-gray-600 mt-2 leading-relaxed max-w-[230px]">
                Lorem ipsum dolor sit amet consectetur. Purus dolor aliquam aenean
              </p>
              <div className="w-full mt-4 overflow-hidden rounded-lg">
                <img 
                  src={explore5} 
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------- MEET COMPANY SECTION (FIXED POSITION) ---------- */}
      <section>
        <div className="w-full bg-[#E89416] py-16 md:py-24 mt-32 lg:mt-[250px] clear-both relative z-[5]">
          <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center md:text-left text-black leading-tight">
              Meet <br className="hidden md:block" /> [Your Company Name]
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-black/90 max-w-[480px] text-center md:text-right leading-relaxed">
              Founded to revolutionize the research landscape, we empower academics 
              and researchers with cutting-edge tools to ensure originality, 
              foster collaboration, and streamline publication processes.
            </p>

          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
