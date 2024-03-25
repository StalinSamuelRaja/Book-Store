import React from "react";

const Spinner = () => {
  return (
    <div className="m-5 p-10">
      <h1 className="font-bold text-xl pl-2">
        Loading please wait
        <span className="pl-10 loading loading-spinner loading-lg"></span>
      </h1>
    </div>
  );
};

export default Spinner;
