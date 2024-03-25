import React from "react";
import { PlusCircle } from "react-feather";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="navbar bg-base-200 text-base-content mb-20"> {/* Apply the background color for navbar */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Books</a> {/* Adjust text color */}
      </div>
      <div className="flex-none bg-#A0153E"> {/* Apply a different background color for topbar */}
        <ul className="menu menu-horizontal px-1">
          <Link to="/books/create">
            <PlusCircle className="w-6 h-8 mr-2" /> {/* Adjust icon color */}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
