import React from "react";

const Upload = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white-100">
      <div className="flex flex-col justify-center items-center w-full max-w-lg  px-6 py-8 gap-5 rounded-2xl">
        
        {/* Heading */}
        <h1 className="text-center text-[#433BFF] text-2xl font-black leading-snug">
          UPLOAD.
          REVIEW.
          QUIZ.
          REPEAT.
        </h1>

        {/* Subhead */}
        <p className="text-center text-sm text-gray-700">
          Let <strong>REVIEWLY</strong> turn your notes and materials into a reviewer — <strong>INSTANTLY</strong>
        </p>

        {/* Upload Box */}
        <div className="flex flex-col items-center w-full border-2 border-[#433BFF] border-dashed rounded-lg p-5 gap-2 text-center mb-1">
          <label htmlFor="file_input" className="text-sm font-semibold text-[#433BFF]">
            UPLOAD YOUR LESSONS HERE!!!
          </label>
          <input
            id="file_input"
            type="file"
            className="text-sm text-gray-700 text-center w-47"
          />
          <p className="text-xs text-gray-500">
            Accepts: PDF, DOCX, JPG, PNG (Max: 10MB)
          </p>
        </div>

        {/* Upload Button */}
        <button className="w-full py-2 text-sm font-medium text-white bg-[#433BFF] rounded-lg hover:bg-[#2f30d5] transition duration-200">
          UPLOAD
        </button>
      </div>
    </div>
  );
};

export default Upload;

