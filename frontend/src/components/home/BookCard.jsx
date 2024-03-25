import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ books, currentPage, cardsPerPage }) => {
  // Calculate the starting index of books to display based on the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  // Slice the books array to display only the books for the current page
  const displayedBooks = books.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="overflow-x-auto m-5 xl:m-10 md:m-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {displayedBooks.map((book, index) => (
          <div key={book._id} className="bg-white shadow-md rounded-md p-4">
            <p className="font-bold text-lg md:text-xl lg:text-2xl mb-2">
              {book.title}
            </p>
            <p className="text-gray-700 mb-2">Author: {book.author}</p>
            <p className="text-gray-700 mb-4">
              Publish Year: {book.publishYear}
            </p>
            <div className="flex justify-end">
              <Link
                to={`/books/details/${book._id}`}
                className="text-blue-500 mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12" y2="8"></line>
                </svg>
              </Link>
              <Link
                to={`/books/edit/${book._id}`}
                className="text-green-500 mr-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                >
                  <path d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z" />
                </svg>
              </Link>
              <Link to={`/books/delete/${book._id}`} className="text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
