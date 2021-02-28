import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Articles = () => {
  const [data, SetData] = useState([]);

  const getData = async () => {
    const url = "http://localhost:5000/article";
    const response = await fetch(url);
    const recieve = await response.json();
    SetData(recieve);
    console.log(recieve);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="bg-gradient-to-r from-red-50 via-pink-100 to-purple-100 mt-0">
        <h2 className="text-center text-4xl font-bold text-brown-200 p-4">
          Articles section
        </h2>

        <div className="grid grid-flow-row grid-row-1 p-4 gap-4 md:grid-row-2">
          {data.map((item) => (
            <div
              key={item.id}
              className=" border-2 border-gray-300 rounded-lg p-4 bg-white md:col-start-1 md:col-end-2"
            >
              <span className="font-bold text-xl text-yellow-500 hover:text-yellow-700 ">
                16 feb 2020
              </span>
              <Link to="/articles" className="hover:no-underline">
                <p className="m-4 p-1 text-black text-xl font-bold hover:text-indigo-800 ">
                  {item.title}
                </p>
              </Link>
              <span className=" font-semibold w-auto border-2 border-indigo-200 rounded p-2 hover:bg-black hover:text-white hover:border-2 hover:border-black">
                #React
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Articles;
