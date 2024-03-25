import axios from "axios";
  import React, { useEffect, useState } from "react";
  import { useNavigate, useParams } from "react-router-dom";
  import BackButton from "../components/BackButton";
  import Spinner from "../components/Spinner";
  import {useSnackbar} from "notistack"
  import { base_url } from "../helpers/API";
  
  const EditBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [loading, setLoading] = useState(false);
    const {id}=useParams();
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();
    useEffect(()=>{
      setLoading(true);
      axios
        .get(`${base_url}books/${id}`)
        .then((res) => {
          setTitle(res.data.title);
          setAuthor(res.data.author);
          setPublishYear(res.data.publishYear);
          enqueueSnackbar('Book Edited Successfully',{variant:'success'})
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          enqueueSnackbar('Error',{variant:'error'})
          setLoading(false);
        });
    }, [])
    const handleEditBook = () => {
      const data = {
        title,
        author,
        publishYear,
      };
      setLoading(true);
      axios
        .put(`http://localhost:9000/books/update/${id}`, data)
        .then(() => {
          setLoading(false);
          navigate("/");
        })
        .catch((error) => {
          setLoading(false);
          alert("An error occured. Please check Console");
          console.log(error);
        });
    };
    return (
      <div className="p-4 md:m-0 p-0">
        <BackButton />
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          <span className="inline-block mr-4 p-2 rounded-full bg-blue-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12a2 2 0 100-4 2 2 0 000 4Zm0 4a6 6 0 100-12 6 6 0 000 12Zm-3-8a1 1 0 011-1h8a1 1 0 110 2h-8a1 1 0 01-1-1Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Edit a Book
        </h1>
  
        {loading ? (
          <Spinner />
        ) : (
          <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Author
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Publish Year
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Publish Year"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleEditBook}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };


export default EditBook