import svgImage from "./images/blueprint.svg";
import svgImage1 from "./images/database.svg";
import svgImage2 from "./images/geology.svg";
import svgImage3 from "./images/analytic.svg";
import svgImage4 from "./images/broadcast.svg";
import svgImage5 from "./images/budget.svg";
import svgImage6 from "./images/networking.svg";
import svgImage7 from "./images/shoping.svg";
import svgImage8 from "./images/flow.svg";
import svgImage9 from "./images/certificate.svg";
import { BiBadgeCheck } from "react-icons/bi";
import {
  FaRegCheckCircle,
  FaDatabase,
  FaCommentDots,
  FaServer,
  FaPuzzlePiece,
} from "react-icons/fa";
const Features = () => {
  return (
    <>
      <div className="py-12 bg-white m-8 mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-red-700 sm:text-4xl">
              One step for smart organisation
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Crystal comes with so many exciting features for enterprise which
              makes consumar training , sales training & other training modules
              easier and efforlessely
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                    <FaDatabase className="text-2xl" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Centeralised Update via Cloud
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Crystal is made on Cloud platform so there is central
                    updating system let you enjoy new features which our
                    dedicated team exploring & updating time to time.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                    <FaServer className="text-2xl" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Say No to On-Premises software
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We all know that maintaining an on-premises software
                    requires lots of money as well as technical maintainance but
                    with Crystal there is everthing made & maintained for you by
                    us.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                    <FaCommentDots className="text-2xl" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    24x7 Support
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    At Crystal , We believe that our partners feel ease in
                    workflow , so if any bug appears in softwares we fix that as
                    soon as possible. Our support is 24x7 & we value your time
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                    <FaPuzzlePiece className="text-2xl" />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Easy to Integrate
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Crystal can be integrate with popular website builder like
                    Wordpress , Shopify etc. or if you have domain then you can
                    integrate crystal as part of your organisation website. We
                    can integrate your website on request too.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className=" bg-gray-200  shadow-2xl rounded-lg  m-20 p-4 hover:p-8  text-center cursor-pointer">
        <div className="m-auto flex w-48 p-4">
          <img
            src={svgImage}
            className="h-28 hover:shadow-rounded-lg w-28 m-auto"
            alt=""
          />
        </div>
        <div className="flex m-4">
          <h3 className="bg-red-800 rounded-lg text-xl w-96 text-white font-semibold m-auto p-2">
            Key Features
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row grid-rows-2 m-6 p-2 md:m-4 ">
          <div className="flex m-4">
            <img src={svgImage1} alt="" className="h-16  m-auto " />
            <p className="font-semibold text-medium m-auto">
              Encrypted & Secure Data
            </p>
          </div>
          <div className="flex m-4">
            <img src={svgImage2} alt="" className="h-16 m-auto " />
            <p className="font-semibold text-medium m-auto">
              Access from Anywhere
            </p>
          </div>
          <div className="flex  m-4">
            <img src={svgImage3} alt="" className="h-16 m-auto " />
            <p className="font-semibold text-medium m-auto">
              Generates Reports & Analytics
            </p>
          </div>{" "}
          <div className="flex m-4">
            <img src={svgImage4} alt="" className="h-16 m-auto " />
            <p className="font-semibold text-medium m-auto">
              Broadcast Notifications
            </p>
          </div>{" "}
          <div className="flex m-4">
            <img src={svgImage5} alt="" className="h-16 m-auto" />
            <p className="font-semibold text-medium m-auto">
              Long term Money saver
            </p>
          </div>
          <div className="flex m-4">
            <img src={svgImage6} alt="" className="h-16 m-auto " />
            <p className="font-semibold text-medium m-auto">
              Team Work in Organisation
            </p>
          </div>
          <div className="flex m-4 ">
            <img src={svgImage7} alt="" className="h-16 m-auto " />
            <p className="font-semibold text-medium m-auto">
              Customized Online Store
            </p>
          </div>
          <div className="flex m-4 ">
            <img src={svgImage8} alt="" className="h-16 m-auto " />
            <p className="font-semibold text-medium m-auto">
              Organised Workforce
            </p>
          </div>
          <div className="flex m-4">
            <img src={svgImage9} alt="" className="h-16 m-auto " />
            <p className="font-semibold text-medium m-auto">
              Certification to Trainee
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
