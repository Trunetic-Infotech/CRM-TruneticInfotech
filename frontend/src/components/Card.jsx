import React from 'react';

const Card = ({ label, data, icon, className }) => {
  return (
    <div className={`flex flex-col justify-between bg-white shadow-md rounded-2xl p-5 w-full max-w-xs sm:max-w-sm md:max-w-md 
                    transform hover:scale-[1.03] hover:shadow-xl transition duration-300 border-l-4 border-blue-500 animate-fade-in relative z-0 ${className}
                    `}>
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <p className="text-sm sm:text-base text-gray-500 font-semibold tracking-wide">{label}</p>
        <div className="p-2 rounded-full bg-blue-100 absolute right-5 top-9 sm:right-5 sm:top-5">
          <img src={icon} alt="icon" className="w-8 h-8 sm:w-14 sm:h-14" />
        </div>
      </div>

      {/* Data */}
      <div className="mt-4">
        <p className="text-2xl sm:text-3xl font-extrabold text-gray-800">{data}</p>
      </div>
    </div>
  );
};

export default Card;
