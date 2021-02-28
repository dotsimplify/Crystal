import React from "react";
import { FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-4 grid-gap-4 bg-blue-900 h-64 rounded-tr-3xl ">
        <div className="m-3">
          <div className="m-4 p-2 text-center">
            <h2 className="text-white text-3xl font-mono font-bold">Crystal</h2>
            <h5 className="text-white text-xs m-2">
              <span>
                {" "}
                Made with{" "}
                <FaHeart className="text-red-300 inline text-xs m-1" /> by
                Subhash
              </span>
            </h5>
          </div>
        </div>
        <div className=" m-3 p-2">
          <div className="text-center m-2 p-1">
            <h2 className="m-2 p-1  text-gray-200">Articles</h2>
            <h2 className="m-2 p-1  text-gray-200">Contact</h2>
            <h2 className="m-2 p-1  text-gray-200">free Demo</h2>
          </div>
        </div>
        <div className=" m-3 p-2">
          <div className="text-center m-2 p-1">
            <h2 className="m-2 p-1  text-gray-200">Articles</h2>
            <h2 className="m-2 p-1  text-gray-200">Contact</h2>
            <h2 className="m-2 p-1  text-gray-200">free Demo</h2>
          </div>
        </div>
        <div className=" m-2">
          <div className="text-center m-4 p-2 text-gray-200">
            <h2 className="p-1">Social Media</h2>
            <a href="https://instagram.com/jsdev227">
              <FaInstagram className="text-white text-2xl inline m-2" />
            </a>
            <FaLinkedin className="text-white text-2xl inline" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
