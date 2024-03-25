import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import {useSnackbar} from "notistack"
import { base_url } from "../helpers/API";

const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] =useState (false);
  const {enqueueSnackbar} = useSnackbar();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`${base_url}/delete/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted Successfully',{variant:'success'})
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar('Error',{variant:'error'})
        setLoading(false);
      });
  };
  return (
    <div className="p-4 md:m-0 p-0">
      <BackButton />
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        <span className="inline-block mr-4 p-2 rounded-full bg-red-500 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        Delete a Book
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 py-6">
          <h2 className="text-lg font-semibold mb-4">
            Are you sure you want to delete this book?
          </h2>
          <p className="text-gray-600 mb-8">This action cannot be undone.</p>
          <div className="flex justify-end">
            <button
              onClick={handleDeleteBook}
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Yes, delete it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
