import React from "react";
import download from "../assets/fi_9131795.png";
import star from "../assets/fi_1828884.png";
import { Link } from "react-router";
const App = ({ app }) => {
  const { image, title, downloads, ratingAvg ,id} = app;
  return (
    <div>
      <Link to={`/app/${id}`}
       className="cursor-pointer card bg-base-100 hover:scale-105 transition ease-in-out shadow-sm p-4">
        <figure className="h-48 overflow-hidden">
          <img className="w-full object-cover" src={image} alt="App" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold h-10">{title}</h2>

          <div className="card-actions flex mt-8 justify-between">
            <div className="badge  bg-gray-50 text-green-400">
              {" "}
              <img src={download} alt="" />
              {downloads}
            </div>
            <div className="badge  bg-amber-50 text-orange-600">
              <img src={star} alt="" />
              {ratingAvg}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default App;
