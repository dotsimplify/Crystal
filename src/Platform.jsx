import online from "./images/online.png";
import { Link } from "react-router-dom";
import cloud1 from "./images/cloud1.svg";
import cloud2 from "./images/cloud2.svg";
import admin from "./images/admin.svg";
import user from "./images/user.svg";
import video from "./images/video.svg";
import {
  FaRegCheckCircle,
  FaArrowRight,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
  FaCcApplePay,
} from "react-icons/fa";
const Home = () => {
  return (
    <>
      <div className="m-8 text-center">
        <h2 className=" text-xl font-xs pt-8 pb-0">The platform built for</h2>
        <h4 className=" text-4xl font-semibold text-red-800">
          Complete buy-in
        </h4>
        <h4 className=" text-xl font-semibold p-2">
          Easy to learn. Easy to use. Easy to like.
        </h4>
      </div>
      <div className="bg-pink-50 flex m-8 p-4">
        <div className="m-auto">
          <img src={cloud1} alt="" className="h-48 inline m-4" />
          <FaArrowRight className="h-12 w-16 text-red-600 md:m-8 inline" />
          <img src={cloud2} alt="" className="h-48 inline m-4" />
        </div>
      </div>
      <div className=" h-full text-center p-8">
        <h4 className=" bg-gradient-to-r from-yellow-100 via-red-100 to-pink-100 p-8 hover:text-red-800 text-lg font-semibold rounded-lg shadow-xl border-2 border-gray-300 mb-4 ">
          Crystal , a cloud platform available as web application & desktop
          application allow you to create your own cloud space for training
          modules , manage tasks for team , secure messaging & other custom
          needs of enterprise.
        </h4>

        <div className="grid grid-col-1 md: grid-col-4 grid-flow-row">
          <div className="col-start-1 col-end-1 md:col-start-1 md:col-end-2 m-4 flex">
            <img
              src={online}
              className="h-96 rounded-xl shadow-xl mb-4 m-auto"
              alt=""
            />
          </div>
          <div className="md:col-start-2 md;col-end-4">
            <p className="text-medium font-semibold md:m-4 p-2 md:flex justify-items-center items-center">
              <FaRegCheckCircle className="inline m-1 p-1 text-3xl text-green-500" />
              Data Encryped & Secure
            </p>
            <p className="text-medium font-semibold md:m-4 p-2 md:flex justify-items-center items-center">
              <FaRegCheckCircle className="text-3xl m-1 p-1 inline text-green-500" />
              Access from Anywhere
            </p>
            <p className="text-medium font-semibold md:m-4 p-2 md:flex justify-items-center items-center">
              <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
              Easy to Integrate
            </p>
            <p className="text-medium font-semibold md:m-4 p-2 md:flex justify-items-center items-center">
              <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
              24x7 team support
            </p>
            <p className="text-medium font-semibold md:m-4 p-2 md:flex justify-items-center items-center">
              <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
              Easily Customization
            </p>
          </div>
        </div>
        <p className=" bg-gradient-to-r from-yellow-100 via-red-100 to-pink-100 p-8 text-base font-semibold rounded-lg shadow-xl border-2 border-gray-300">
          Crystal platform is enterprise learning management system engineered
          to support the most demanding and complex learning ecosystems. fits in
          all kind of enterprise such as health care , manufacturing , call
          center business , automobile , schools and almost all business who
          willing to scale and wants to make their organisation smart
        </p>
      </div>
      <div className="bg-gray-200 h-20 text-center">
        <h2 className="text-3xl p-4 text-red-800 font-bold ">
          Crystal at a Glance
        </h2>
      </div>

      <div className="grid grid-col-1 grid-flow-row md:grid-flow-col md:m-2 md:p-0 m-8 p-4 gap-4 ">
        <div className=" bg-white border-2 rounded-xl border-black hover:shadow-xl m-8 p-4 hover:p-8  text-center cursor-pointer">
          <div className="m-4 p-2 flex">
            <div className="m-auto h-48 w-48">
              <img src={admin} className=" h-48 hover:shadow-rounded-lg w-48" />
            </div>
          </div>
          <h3 className="bg-blue-200 rounded-lg text-2xl text-indigo-900 font-semibold m-2 p-2">
            Role based login
          </h3>
          <p className=" m-4 p-2 text-purple-900">
            Login will be different as per user role i.e Super Admin , Admin ,
            Creator , Learner.
          </p>
          <p className="text-sm  font-semibold m-2 mb-0 p-1">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Super Admin can create unlimited Admin.
          </p>
          <p className=" text-sm  font-semibold">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Can set customized e-commerce store
          </p>
          <p className="text-sm font-semibold">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Can assign tasks to Admin & Creators.
          </p>
          <p className="text-sm font-semibold">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Complete control over Cloud space.
          </p>
          <p className="text-sm font-semibold">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Secure Private Communication.
          </p>
          <p className="text-sm font-semibold">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Can integrate payment system.
          </p>
        </div>

        <div className=" bg-white border-2 rounded-xl border-black hover:shadow-xl m-8 p-4 hover:p-8  text-center cursor-pointer">
          <div className="m-4 p-2 flex">
            <div className="m-auto h-48 w-48">
              <img src={user} className=" h-48 hover:shadow-rounded-lg w-48" />
            </div>
          </div>
          <h3 className="bg-blue-200 rounded-lg text-2xl text-indigo-900 font-semibold m-2 p-2">
            Interactive Training Module
          </h3>
          <p className=" m-4 p-2 text-purple-900">
            Creator friendly training module where creator can make unlimited
            training programs.
          </p>
          <p className="text-sm  font-semibold m-2 mb-0 p-1">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Live Video session with Team mates / learners
          </p>
          <p className=" text-sm  font-semibold">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            All files eg. pdf , Video ,word , excel supported
          </p>
          <p className="text-sm font-semibold">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Can sell courses to e-commerce store
          </p>
          <p className="text-sm font-semibold">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Notifications to learners/ team mates
          </p>
          <p className="text-sm font-semibold">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Issue Certicates to Learners
          </p>
        </div>
        <div className="bg-white border-2 rounded-xl border-black hover:shadow-xl m-8 p-4 hover:p-8  text-center cursor-pointer">
          <div className="m-4 p-2 flex">
            <div className="m-auto h-48 w-48">
              <img src={video} className=" h-48 hover:shadow-rounded-lg w-48" />
            </div>
          </div>
          <h3 className="bg-blue-200 rounded-lg text-2xl text-indigo-900 font-semibold m-2 p-2">
            Fun Learning
          </h3>
          <p className=" m-4 p-2 text-purple-900">
            Track learning progress & Exam based Module
          </p>

          <p className="text-sm font-semibold">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Fun Learning with Videos & simplified content
          </p>
          <p className="text-sm font-semibold">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Raise Questions & Give feedback to Creators.
          </p>
          <p className="text-sm  font-semibold ">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Buy courses from e-commerce store
          </p>
          <p className="text-sm font-semibold">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Fully customizable user Dashboard.
          </p>
          <p className=" text-sm  font-semibold">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Certification on Completion
          </p>
          <p className="text-sm mb-2 font-semibold">
            <FaRegCheckCircle className="inline p-1 m-1 text-3xl text-green-500" />
            Webinars at one click
          </p>
        </div>
      </div>
      <div className="bg-red-100 h-24 text-center flex">
        <Link to="/features" className="m-auto">
          <button className="m-auto font-bold active:border-none p-4 rounded-lg hover:border-4 hover:border-black  bg-black text-white hover:bg-white hover:text-black">
            Check more features
          </button>
        </Link>
      </div>
      <div className="h-48 bg-white  text-center">
        <h4 className="text-xl p-4 font-semibold">
          All Payment Gateways supported
        </h4>
        <FaCcMastercard className="inline text-3xl h-24 w-24 m-2 text-red-500 " />
        <FaCcApplePay className="inline text-3xl h-24 w-24 m-2 text-black " />
        <FaCcVisa className="inline text-3xl h-24 w-24 m-2 text-blue-800 " />
        <FaCcStripe className="inline text-3xl h-24 w-24 m-2 text-indigo-400 " />
        <FaCcPaypal className="inline text-3xl h-24 w-24 m-2 text-blue-900 " />
      </div>
    </>
  );
};

export default Home;
