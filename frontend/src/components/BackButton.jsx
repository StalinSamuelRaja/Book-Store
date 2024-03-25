import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "react-feather"; // Importing the ChevronLeft icon from Feather Icons

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex items-center">
      <Link to={destination} className="text-gray-700 hover:text-gray-900">
        <ChevronLeft className="w-8 h-8" />
      </Link>
    </div>
  );
};

export default BackButton;
