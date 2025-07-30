import React from "react";

const Upload = () => {
  return (
    <div className="flex justify-center items-center h-fit md:h-fit md:min-w-[80%] bg-white-100 md:shadow-2xl md:inset-shadow-sm rounded-2xl">
      <div className="flex flex-col justify-center items-center w-full h-full max-w-full  px-6 py-8 md:px-10 md:py-12 gap-5">
        {/* Heading */}
        <h1 className="text-center text-[#433BFF] text-2xl md:text-4xl font-black leading-snug">
          UPLOAD. REVIEW. QUIZ. REPEAT.
        </h1>

        {/* Subhead */}
        <p className="text-center text-sm text-gray-700">
          Let <strong>REVIEWLY</strong> turn your notes and materials into a
          reviewer — <strong>INSTANTLY</strong>
        </p>

        {/* Upload Box */}
        <div className="flex flex-col items-center w-full border-2 border-[#433BFF] border-dashed rounded-lg p-5 gap-2 text-center mb-1">
          <label
            htmlFor="file_input"
            className="text-sm md:text-xl font-semibold md:font-bold"
          >
            UPLOAD YOUR LESSONS HERE!!!
          </label>
          <input
            id="file_input"
            type="file"
            className="text-sm text-gray-700 text-center w-55 
             file:mr-3 file:py-1 file:px-2
             file:rounded-sm file:border-1 border-gray-300
             file:text-sm 
             file:bg-[#fff] file:text-black
             hover:file:text-white 
             hover:file:border-[#2f30d5] 
             hover:file:bg-[#2f30d5]
             cursor-pointer"
          />
          <p className="text-xs text-gray-500">
            Supported: PNG, JPEG, PPT, PDF
          </p>
        </div>

        {/* Upload Button */}
        <button className="w-full md:w-fit md:px-4 py-2 text-sm font-medium text-white bg-[#433BFF] rounded-lg hover:bg-[#2f30d5] transition duration-200">
          UPLOAD
        </button>
      </div>
    </div>
  );
};

export default Upload;
