import React from "react";

const Spinner = () => {
  return (
    <div className="m-5 p-10">
      <h1 className="font-bold pl-2 text-4xl font-bold mb-8 text-center text-white">
        Loading please wait
        <span className="pl-10 loading loading-spinner loading-lg"></span>
      </h1>
    </div>
  );
};

export default Spinner;
