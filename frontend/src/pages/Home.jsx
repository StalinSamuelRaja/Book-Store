import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { PlusCircle } from "react-feather";
import BookCard from "../components/home/BookCard";
import TopBar from "../components/home/TopBar";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(4);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://localhost:9000/books/all?page=${currentPage}&limit=${booksPerPage}`
      )
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [currentPage, booksPerPage]);

  // Pagination Logic
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="p-0 m-0 mb-5 md:m-0 p-0">
      
      <div className="flex justify-center m-5">
        <div className="max-w-xs p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-blue-500 flex items-center">
            <PlusCircle className="w-6 h-6 mr-2" /> Add New Book
          </h2>
          <p className="text-gray-600 mt-2">
            Enter details to create a new book.
          </p>
          <div className="mt-4 flex justify-end">
            <Link
              to="/books/create"
              className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Add New
            </Link>
          </div>
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <BookCard
            books={books}
            currentPage={currentPage}
            cardsPerPage={4} // Change this value to the number of cards you want to display per page
          />

          <div className="flex justify-center mt-4">
            <ul className="flex">
              {currentPage > 1 && (
                <li className="mx-1">
                  <button
                    onClick={prevPage}
                    className="px-3 py-2 text-sm rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    Previous
                  </button>
                </li>
              )}
              {[...Array(Math.ceil(books.length / booksPerPage)).keys()].map(
                (number) => (
                  <li key={number} className="mx-1">
                    <button
                      onClick={() => paginate(number + 1)}
                      className={`px-3 py-2 text-sm rounded ${
                        currentPage === number + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      } hover:bg-blue-500 hover:text-white focus:outline-none focus:bg-blue-500 focus:text-white`}
                    >
                      {number + 1}
                    </button>
                  </li>
                )
              )}
              {currentPage < Math.ceil(books.length / booksPerPage) && (
                <li className="mx-1">
                  <button
                    onClick={nextPage}
                    className="px-3 py-2 text-sm rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    Next
                  </button>
                </li>
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
