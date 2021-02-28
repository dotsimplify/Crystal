import chr12 from "./images/character12.svg";
import chr15 from "./images/character15.svg";
import shop from "./images/ecart.svg";
import { Link } from "react-router-dom";
import { HiPlusCircle } from "react-icons/hi";
import { BiBadgeCheck } from "react-icons/bi";
import { FaWordpress, FaRegHandPointRight, FaShopify } from "react-icons/fa";

import gif from "./images/giphy.gif";
const Home = () => {
  return (
    <>
      <div className="h-96 bg-hero flex justify-items-center items-center flex-row md:flex md:justify-items-center md:items-center md:flex-row-reverse ">
        <div className="p-4 ">
          <h1 className="text-xl md:text-5xl text-pink-600 font-bold p-2">
            Built for Success & Scalablity.
          </h1>
          <p className="text-xs md:text-xl md:m-2 font-semibold text-center pb-4 text-green-800 ">
            Build a smarter organization with the <br />
            training platform designed to help great teams grow
          </p>
        </div>
      </div>

      <div className="h-24 bg-pink-50 font-bold text-2xl text-center text-black m-auto p-8">
        Crystal offers you
      </div>
      <div className="grid grid-flow-row md:grid-cols-2 grid-cols-1 bg-gray-100 shadow-2xl m-8 rounded-xl md:m-24">
        <div className="flex m-10 mb-0 md:m-8">
          <img src={gif} className="h-84 rounded-xl m-auto " alt="" />
        </div>
        <div className=" m-2 mt-8 cursor-pointer">
          <p className="bg-white p-2 font-semibold text-red-700 m-4 mt-0  rounded-full  ">
            <BiBadgeCheck className="m-2 text-4xl text-green-600 inline" />
            Your Own Secure Cloud Space
          </p>
          <p className="bg-white p-2 font-semibold text-red-700 m-4 mt-0  rounded-full  ">
            <BiBadgeCheck className="m-2 text-4xl text-green-600 inline" />
            Training Module with unlimited audience
          </p>
          <p className="bg-white p-2 font-semibold text-red-700 m-4 mt-0  rounded-full  ">
            <BiBadgeCheck className="m-2 text-4xl text-green-600 inline" />
            Built in CRM & Accounting software
          </p>
          <p className="bg-white p-2 font-semibold text-red-700 m-4 mt-0  rounded-full  ">
            <BiBadgeCheck className="m-2 text-4xl text-green-600 inline" />
            Integrate Payment System
          </p>
        </div>
      </div>
      <div className="bg-white flex p-2 m-4 mb-0">
        <p className="text-2xl border-2 border-pink-100 flex p-4 text-pink-500 rounded-lg font-semibold m-auto">
          For Enterprise
          <FaRegHandPointRight className="inline m-2 text-pink-500 text-2xl" />
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 m-8 p-1 grid-flow-row md:m-32 md:mt-8 bg-gray-200 rounded-lg">
        <div className="flex justify-items-center items-center m-4 md:p-8 ">
          <h1 className="m-4  p-1 text-blue-800 text-2xl font-semibold">
            Train your great team from interactive training program
            <p className="text-sm m-4 ml-0 text-black font-base">
              Automate tasks like compliance training with crystal for your
              organisation.
            </p>
          </h1>
        </div>

        <div className=" w-full rounded-full flex justify-items-center items-center">
          <img src={chr12} className="h-64 p-4 rounded-xl m-auto" alt="" />
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 grid-flow-row p-1 m-8 md:m-32 bg-gray-200 rounded-lg">
        <div className=" flex justify-items-center items-center">
          <img src={chr15} className="h-64 p-4 rounded-xl m-auto" alt="" />
        </div>
        <div className=" flex justify-items-center items-center m-8">
          <h1 className="m-4 p-1 text-blue-800 text-2xl font-semibold ">
            Intract with team / learner & Assign tasks via secure messaging
            <p className="text-sm text-black font-base m-2">
              Scale your business by broadcasting important infomation through
              portal
            </p>
          </h1>
        </div>
      </div>
      <div className="bg-white flex p-2 m-4">
        <p className="text-2xl border-2 border-indigo-200 flex p-4 text-indigo-500 rounded-lg font-semibold m-auto">
          For Business
          <FaRegHandPointRight className="inline m-2 text-indigo-500 text-2xl" />
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 m-8 p-1 grid-flow-row md:m-32 md:mb-8 md:mt-8 bg-gray-200 rounded-lg">
        <div className=" flex justify-items-center items-center m-4 md:p-8">
          <h1 className="m-4  p-1 text-blue-800 text-2xl font-semibold ">
            Create an e-commerce store & attract creators to sell their courses
            to learners.
            <p className="text-sm m-4 ml-0 text-black font-base">
              Appoint creators to platform and sell services to them. A Win -
              Win Business Model.
            </p>
          </h1>
        </div>

        <div className=" flex justify-items-center items-center">
          <img src={shop} className="h-48 m-auto p-2 rounded-xl" alt="" />
        </div>
      </div>
      <div className="bg-white m-8 cursor-pointer grid grid-cols-1 md:grid-cols-3 grid-flow-row  gap-4 ">
        <p className="bg-pink-100 p-4 font-semibold text-black m-auto rounded-full  ">
          <BiBadgeCheck className="m-1 text-4xl text-green-600 inline" />
          Compliance training
        </p>
        <p className="bg-pink-100 p-4 font-semibold text-black m-auto rounded-full  ">
          <BiBadgeCheck className="m-1 text-4xl text-green-600 inline" />
          Sales Training
        </p>
        <p className="bg-pink-100 p-4 font-semibold text-black m-auto rounded-full  ">
          <BiBadgeCheck className="m-1 text-4xl text-green-600 inline" />
          Consumer Training
        </p>
        <p className="bg-pink-100 p-4 font-semibold text-black m-auto rounded-full  ">
          <BiBadgeCheck className="m-1 text-4xl text-green-600 inline" />
          On Boarding Training
        </p>
        <p className="bg-pink-100 p-4 font-semibold text-black m-auto rounded-full  ">
          <BiBadgeCheck className="m-1 text-4xl text-green-600 inline" />
          Partner Training
        </p>
        <p className="bg-pink-100 p-4 font-semibold text-black m-auto rounded-full  ">
          <BiBadgeCheck className="m-1 text-4xl text-green-600 inline" />
          Online Teaching
        </p>
      </div>

      <div className=" text-center p-4 bg-gray-50 mb-0">
        <h4 className=" font-bold text-2xl text-gray-700">
          Can be easily integrated with
        </h4>
        <FaWordpress className="text-4xl inline m-2 text-gray-600 text-center" />
        <FaShopify className="text-4xl inline m-2 text-gray-600 text-center" />
      </div>
      <div className="bg-red-50 m-16 rounded-lg">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Wants to know more ?</span>
            <span className="block text-indigo-600">
              Request for free demo today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/platform">
                <button
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  See Platform
                </button>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link to="/free-demo">
                <button
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Order Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
