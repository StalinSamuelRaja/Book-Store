import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { base_url } from "../helpers/API";

const ShowBook = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${base_url}/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4 m-5">
      <BackButton />
      <h1 className="text-3xl text-white font-bold m-10 mb-8">{book.title} Details</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Book Information</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <span className="font-bold mr-4">Title:</span>
                <span>{book.title}</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-4">Author:</span>
                <span>{book.author}</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold mr-4">Publish Year:</span>
                <span>{book.publishYear}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
