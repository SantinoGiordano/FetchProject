'use client'
import React, { useState } from "react";

const ExpandableText: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to track if the text is expanded

  const toggleText = () => {
    setIsExpanded((prev) => !prev); // Toggle the expanded state
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="relative">
        <p
          className={`transition-all ease-in-out duration-300 overflow-hidden ${
            isExpanded ? "max-h-[1000px]" : "max-h-16"
          }`}
        >
        </p>
        <button
          onClick={toggleText}
          className="text-blue-500 mt-2 cursor-pointer"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
};

export default ExpandableText;
