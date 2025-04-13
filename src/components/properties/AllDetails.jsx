"use client";
import { BsFiletypePdf } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { PiSkypeLogoLight } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
import Link from "next/link";

const scores = [
  {
    id: 1,
    image: "/assets/properties/score1.svg",
    title: "Very Walkable",
    desc: "Most errands can be accomplished on foot",
  },
  {
    id: 2,
    image: "/assets/properties/score2.svg",
    title: "Excellent Transit",
    desc: "Transit is convenient for most trips",
  },
  {
    id: 3,
    image: "/assets/properties/score3.svg",
    title: "Very Bikeable",
    desc: "Biking is convenient for most trips",
  },
];

export default function AllDetails() {
  const [active, setActive] = useState("scores");
  const [sections, setSections] = useState({
    description: false,
    document: false,
    address: false,
    details: false,
    features: false,
    video: false,
    map: false,
    virtual_tour: false,
    walkscore: false,
    calculator: false,
    floor_plans: false,
    statistics: false,
    schedule_tour: false,
  });
  const [floorPlan, setFloorPlan] = useState({
    floor_plan_a: true,
    floor_plan_b: false,
  });

  const toggleSection = (section) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleFloorPlan = (floor) => {
    setFloorPlan((prevState) => ({
      ...prevState,
      [floor]: !prevState[floor],
    }));
  };

  const walkScoreActive = (state) => {
    setActive(state);
  };

  return (
    <>
      {/* description */}
      <div className="mt-10 bg-white p-6">
        <div
          onClick={() => toggleSection("description")}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="text-gray-800 font-semibold">Description</h2>
          <button className="text-lg">
            <IoIosArrowDown
              className={`transform transition-transform duration-700 rotate-180 ${
                sections.description ? "rotate-0" : ""
              }`}
            />
          </button>
        </div>
        <p
          className={`text-[15px] ransition-all duration-700 overflow-hidden ${
            sections.description
              ? "max-h-0 mt-0 opacity-0"
              : "max-h-96 mt-3 opacity-100"
          }`}
        >
          This property is mostly wooded and sits high on a hilltop overlooking
          the Mohawk River Valley. Located right in the heart of Upstate NYs
          Amish farm Country, this land is certified organic making it extremely
          rare! Good road frontage on a paved county road with utilities make it
          an amazing setting for your dream country getaway! If you like views,
          you must see this property!
        </p>
      </div>

      {/* documents */}
      <div className="mt-10 bg-white p-6">
        <div
          onClick={() => toggleSection("document")}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="text-gray-800 font-semibold">Documents</h2>
          <button className="text-lg">
            <IoIosArrowDown
              className={`transform transition-transform duration-700 rotate-180 ${
                sections.document ? "rotate-0" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`ransition-all duration-700 overflow-hidden ${
            sections.document
              ? "max-h-0 mt-0 opacity-0"
              : "max-h-96 mt-3 opacity-100"
          }`}
        >
          <div className="flex gap-2 items-center text-[15px] py-2">
            <BsFiletypePdf className="text-xl text-black" />
            <span>Energetic-Certificate-PDF6</span>
          </div>
          <div className="flex gap-2 items-center text-[15px] py-2">
            <BsFiletypePdf className="text-xl text-black" />
            <span>Another-PDF-Sample6</span>
          </div>
        </div>
      </div>

      {/* address */}
      <div className="mt-10 bg-white p-6">
        <div
          onClick={() => toggleSection("address")}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="text-gray-800 font-semibold mb-2">Address</h2>
          <button className="text-lg">
            <IoIosArrowDown
              className={`transform transition-transform duration-700 rotate-180 ${
                sections.address ? "rotate-0" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 ransition-all duration-700 overflow-hidden ${
            sections.address
              ? "max-h-0 mt-0 opacity-0"
              : "max-h-96 mt-3 opacity-100"
          }`}
        >
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Address:</span>
            <span>Ferris Park</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">City:</span>
            <span>Jersey City</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Area:</span>
            <span>Grennville</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">State/Country:</span>
            <span>New Jersy State</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Zip:</span>
            <span>07305</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Country:</span>
            <span>United States</span>
          </div>
        </div>
        <button className="text-xs bg-primary text-white rounded-md px-2 py-[3px] mt-4">
          Open In Google Maps
        </button>
      </div>

      {/* Details */}
      <div className="mt-10 bg-white p-6">
        <div
          onClick={() => toggleSection("details")}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="text-gray-800 font-semibold mb-2">Details</h2>
          <button className="text-lg">
            <IoIosArrowDown
              className={`transform transition-transform duration-700 rotate-180 ${
                sections.details ? "rotate-0" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 ransition-all duration-700 overflow-hidden ${
            sections.details
              ? "max-h-0 mt-0 opacity-0"
              : "max-h-96 mt-3 opacity-100"
          }`}
        >
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Property Id:</span>
            <span>22972</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Price:</span>
            <span>$ 860,000</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Price Info:</span>
            <span>$ 1,098 /sq ft</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Property Size:</span>
            <span>190 ft2</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Property Lot Size:</span>
            <span>1,200 ft2</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Rooms:</span>
            <span>10</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Bedrooms:</span>
            <span>5</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Bathrooms:</span>
            <span>6</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Custom ID:</span>
            <span>68</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Garages:</span>
            <span>2</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Year Built:</span>
            <span>2005</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Garage Size:</span>
            <span>2 cars</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Available from:</span>
            <span>2017-11-18</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Structure Type:</span>
            <span>Brick</span>
          </div>
          <div className="flex gap-1 items-center text-sm py-1">
            <span className="font-semibold">Floors No:</span>
            <span>3</span>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-10 bg-white p-6">
        <div
          onClick={() => toggleSection("features")}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="text-gray-800 font-semibold">Features</h2>
          <button className="text-lg">
            <IoIosArrowDown
              className={`transform transition-transform duration-700 rotate-180 ${
                sections.features ? "rotate-0" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`ransition-all duration-700 overflow-hidden ${
            sections.features
              ? "max-h-0 mt-0 opacity-0"
              : "max-h-96 mt-3 opacity-100"
          }`}
        >
          {/* Interior Details */}
          <div className="mb-4">
            <h3 className="text-[15px] text-black mb-3">Interior Details</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Equipped Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Gym</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Laundry</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Media Room</span>
              </div>
            </div>
          </div>
          {/* Outdoor details */}
          <div className="mb-4">
            <h3 className="text-[15px] text-black mb-3">Outdor Details</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Equipped Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Gym</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Laundry</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Media Room</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Gym</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Laundry</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Media Room</span>
              </div>
            </div>
          </div>
          {/* Utilites */}
          <div className="mb-4">
            <h3 className="text-[15px] text-black mb-3">Utilities</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Equipped Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Gym</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Laundry</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Media Room</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Gym</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Laundry</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Media Room</span>
              </div>
            </div>
          </div>
          {/* Other Features */}
          <div className="mb-4">
            <h3 className="text-[15px] text-black mb-3">Other Features</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Equipped Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Gym</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Laundry</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Media Room</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Gym</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Laundry</span>
              </div>
              <div className="flex items-center gap-2">
                <FaRegCircleCheck className="text-primary" />
                <span>Media Room</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video */}
      <div className="mt-10 bg-white p-6">
        <div
          onClick={() => toggleSection("video")}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="text-gray-800 font-semibold">Video</h2>
          <button className="text-lg">
            <IoIosArrowDown
              className={`transform transition-transform duration-700 rotate-180 ${
                sections.video ? "rotate-0" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`ransition-all duration-700 overflow-hidden ${
            sections.video
              ? "max-h-0 mt-0 opacity-0"
              : "max-h-full mt-3 opacity-100"
          }`}
        >
          <div className="w-full h-[200px] lg:h-[435px] relative cursor-pointer ">
            <Image
              src="/assets/properties/property1image5.webp"
              width={1000}
              height={1000}
              className="rounded-lg w-full h-full"
              alt="property-video"
            />
            <IoPlayCircleOutline className="absolute top-[50%] left-[50%] text-7xl text-white translate-x-[-50%] translate-y-[-50%]" />
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-10 bg-white p-6">
        <div
          onClick={() => toggleSection("map")}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="text-gray-800 font-semibold">Map</h2>
          <button className="text-lg">
            <IoIosArrowDown
              className={`transform transition-transform duration-700 rotate-180 ${
                sections.map ? "rotate-0" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`ransition-all duration-700 overflow-hidden ${
            sections.map
              ? "max-h-0 mt-0 opacity-0"
              : "max-h-[450px] mt-3 opacity-100"
          }`}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29204.915926890204!2d90.43380270886225!3d23.796738500341007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c9311e395aa5%3A0x864c094d10bf08ce!2sUnited%20Group!5e0!3m2!1sen!2sbd!4v1734852807065!5m2!1sen!2sbd"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Virtual Tour */}
      <div className="mt-10 bg-white p-6">
        <div
          onClick={() => toggleSection("virtual_tour")}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="text-gray-800 font-semibold">Virtual Tour</h2>
          <button className="text-lg">
            <IoIosArrowDown
              className={`transform transition-transform duration-700 rotate-180 ${
                sections.virtual_tour ? "rotate-0" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`ransition-all duration-700 overflow-hidden ${
            sections.virtual_tour
              ? "max-h-0 mt-0 opacity-0"
              : "max-h-full mt-3 opacity-100"
          }`}
        >
          <div className="w-full h-[435px] relative cursor-pointer ">
            <Image
              src="/assets/properties/property1image5.webp"
              width={1000}
              height={1000}
              className="rounded-lg w-full h-full object-cover"
              alt="property-video"
            />
            <IoPlayCircleOutline className="absolute top-[50%] left-[50%] text-7xl text-white translate-x-[-50%] translate-y-[-50%]" />
          </div>
        </div>
      </div>

      {/* Walkscore */}
      <div className="mt-10 bg-white p-6">
        <div
          onClick={() => toggleSection("walkscore")}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="text-gray-800 font-semibold">Walkscore</h2>
          <button className="text-lg">
            <IoIosArrowDown
              className={`transform transition-transform duration-700 rotate-180 ${
                sections.walkscore ? "rotate-0" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`ransition-all duration-700 overflow-hidden ${
            sections.walkscore
              ? "max-h-0 mt-0 opacity-0"
              : "max-h-96 mt-3 opacity-100"
          }`}
        >
          <div className="p-2 md:p-5">
            <span className="text-base line-clamp-1 md:line-clamp-none md:text-2xl font-thin">
              Ferris Park 07305 Jersey City New Jersey State
            </span>
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => walkScoreActive("scores")}
                className={`text-xs uppercase border-b-2 font-semibold pb-1 ${
                  active === "scores" ? "border-b-primary" : "border-b-white"
                }`}
              >
                SCORES
              </button>
              <button
                onClick={() => walkScoreActive("nearby")}
                className={`text-xs uppercase border-b-2 font-semibold pb-1 ${
                  active === "nearby" ? "border-b-primary" : "border-b-white"
                }`}
              >
                NEARBY
              </button>
            </div>

            {/* scores */}
            {active === "scores" && (
              <div>
                {scores.map((score) => (
                  <div key={score.id} className="flex gap-4 items-center py-2">
                    <Image
                      src={score.image}
                      width={500}
                      height={500}
                      alt="score-image"
                      className="w-16"
                    />
                    <div>
                      <h3 className="text-sm">{score.title}</h3>
                      <p className="text-xs">{score.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* calculator */}
      <div className="mt-10 bg-white p-6">
        <div
          onClick={() => toggleSection("calculator")}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="text-gray-800 font-semibold">Calculator</h2>
          <button className="text-lg">
            <IoIosArrowDown
              className={`transform transition-transform duration-700 rotate-180 ${
                sections.calculator ? "rotate-0" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`transition-all duration-700 overflow-hidden ${
            sections.calculator
              ? "max-h-0 mt-0 opacity-0"
              : "max-h-fit mt-3 opacity-100"
          }`}
        >
          {/* top content */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* left content */}
            <div className="w-full md:w-1/2">
              <div className="flex items-center justify-center relative">
                <Image
                  src="/assets/properties/download.png"
                  width={500}
                  height={500}
                  alt="chart"
                  className="w-[186px] h-[188px]"
                />
                <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                  <h3 className="text-black font-medium text-[17px] -mb-1">
                    $ 241.20
                  </h3>
                  <span className="text-sm">per month</span>
                </div>
              </div>
              <div className="flex items-center flex-wrap sm:flex-nowrap justify-center sm:justify-start text-[13px] pt-3">
                <div className="text-nowrap">
                  <span className="w-3 h-[6px] bg-primary inline-block mr-2"></span>
                  <span>Principal and Interest</span>
                </div>
                <div className="text-nowrap">
                  <span className="w-3 h-[6px] bg-sky-400 inline-block mx-2"></span>
                  <span>Property Tax</span>
                </div>
                <div className="text-nowrap">
                  <span className="w-3 h-[6px] bg-red-500 inline-block mx-2"></span>
                  <span>HOA fee</span>
                </div>
              </div>
            </div>

            {/* right content */}
            <div className="w-full md:w-1/2">
              <div>
                <label
                  className="text-[13px] text-black font-medium mt-[13px] mb-1 inline-block"
                  htmlFor="principal_interest"
                >
                  Principal and Interest
                </label>
                <h5 className="text-sm">$ - 833.60</h5>
              </div>
              <div>
                <label
                  className="text-[13px] text-black font-medium mt-[13px] mb-1 inline-block"
                  htmlFor="property_tax"
                >
                  Property Tax
                </label>
                <input
                  type="number"
                  className="w-full border outline-none p-[10px] text-sm rounded-md"
                  placeholder="1075"
                />
              </div>
              <div>
                <label
                  className="text-[13px] text-black font-medium mt-[13px] mb-1 inline-block"
                  htmlFor="homeowners_association_fee"
                >
                  Homeowners Association Fee
                </label>
                <input
                  type="number"
                  className="w-full border outline-none p-[10px] text-sm rounded-md"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          {/* bottom content */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* left content */}
            <div className="w-full lg:w-1/2">
              <div>
                <label
                  className="text-[13px] text-black font-medium mt-[13px] mb-1 inline-block"
                  htmlFor="home_price"
                >
                  Home Price
                </label>
                <input
                  type="number"
                  className="w-full border outline-none p-[10px] rounded-md text-sm"
                  placeholder="20000"
                />
              </div>
              <div>
                <label
                  className="text-[13px] text-black font-medium mt-[13px] mb-1 inline-block"
                  htmlFor="down_payment"
                >
                  Down Payment
                </label>
                <div className="flex">
                  <input
                    type="number"
                    className="w-2/3 border outline-none p-[10px] rounded-md text-sm"
                    placeholder="1720000"
                  />
                  <input
                    type="number"
                    className="w-1/3 border outline-none p-[10px] rounded-md text-sm"
                    placeholder="20"
                  />
                </div>
              </div>
            </div>
            {/* right content */}
            <div className="w-full lg:w-1/2">
              <div>
                <label
                  className="text-[13px] text-black font-medium mt-[13px] mb-1 inline-block"
                  htmlFor="term(in_years)"
                >
                  Terms(*in years)
                </label>
                <input
                  type="number"
                  className="w-full border outline-none p-[10px] text-sm rounded-md"
                  placeholder="30"
                />
              </div>
              <div>
                <label
                  className="text-[13px] text-black font-medium mt-[13px] mb-1 inline-block"
                  htmlFor="interest"
                >
                  Interest
                </label>
                <input
                  type="number"
                  className="w-full border outline-none p-[10px] text-sm rounded-md"
                  placeholder="4.125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Plans */}
      <div className="mt-10 bg-white p-6">
        <div
          onClick={() => toggleSection("floor_plans")}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="text-gray-800 font-semibold">Floor Plans</h2>
          <button className="text-lg">
            <IoIosArrowDown
              className={`transform transition-transform duration-700 rotate-180 ${
                sections.floor_plans ? "rotate-0" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`transition-all duration-700 overflow-hidden ${
            sections.floor_plans
              ? "max-h-0 mt-0 opacity-0"
              : "min-h-fit mt-3 opacity-100"
          }`}
        >
          {/* floor plan A */}
          <div className="mb-2">
            {/* Floor plan A Button */}
            <div
              onClick={() => toggleFloorPlan("floor_plan_a")}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-md text-sm cursor-pointer group"
            >
              <span className="text-black font-medium">Floor Plan A</span>

              <div className="sm:flex hidden items-center gap-3 group-hover:text-primary">
                <div>
                  <span className="font-medium">Price:</span> $ 600
                </div>
                <div>
                  <span className="font-medium">Baths:</span> 7
                </div>
                <div>
                  <span className="font-medium">Rooms:</span> 5
                </div>
                <div>
                  <span className="font-medium">Size:</span> 200 ft2
                </div>
              </div>
            </div>
            {/* floor plan A content */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                floorPlan.floor_plan_a
                  ? "max-h-[750px] mt-3 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <Image
                src="/assets/properties/floor-plan-1-A.webp"
                width={1000}
                height={1000}
                alt="floor-plan-a"
              />
              <div className="bg-gray-50 sm:hidden p-2 mb-1 rounded-md text-sm">
                <div className="flex items-center gap-3 group-hover:text-primary">
                  <div>
                    <span className="font-medium">Price:</span> $ 600
                  </div>
                  <div>
                    <span className="font-medium">Baths:</span> 7
                  </div>
                  <div>
                    <span className="font-medium">Rooms:</span> 5
                  </div>
                  <div>
                    <span className="font-medium">Size:</span> 200 ft2
                  </div>
                </div>
              </div>
              <p className="text-[15px] leading-6">
                Inside this enchanting home, the great room enjoys a fireplace
                and views of the rear patio. The secluded master suite at the
                front of the home delights in tons of natural light, a splendid
                bath, a sitting room with a fireplace, and a private lanai.
                Three upper-level bedrooms share an optional bonus room, perfect
                for a home gym, playroom, or studio. Click the home to see the
                layout!
              </p>
            </div>
          </div>

          {/* floor plan B */}
          <div>
            {/* Floor plan B Button */}
            <div
              onClick={() => toggleFloorPlan("floor_plan_b")}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-md text-sm cursor-pointer group"
            >
              <span className="text-black font-medium">Floor Plan B</span>

              <div className="hidden sm:flex items-center gap-3 group-hover:text-primary">
                <div>
                  <span className="font-medium">Price:</span> $ 375
                </div>
                <div>
                  <span className="font-medium">Baths:</span> 2
                </div>
                <div>
                  <span className="font-medium">Rooms:</span> 2
                </div>
                <div>
                  <span className="font-medium">Size:</span> 135 ft2
                </div>
              </div>
            </div>
            {/* floor plan A content */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                floorPlan.floor_plan_b
                  ? "max-h-[750px] mt-3 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <Image
                src="/assets/properties/floor-plan-1-B.webp"
                width={1000}
                height={1000}
                alt="floor-plan-b"
              />
              <div className="bg-gray-50 sm:hidden p-2 mb-1 rounded-md text-sm">
                <div className="flex items-center gap-3 group-hover:text-primary">
                  <div>
                    <span className="font-medium">Price:</span> $ 600
                  </div>
                  <div>
                    <span className="font-medium">Baths:</span> 7
                  </div>
                  <div>
                    <span className="font-medium">Rooms:</span> 5
                  </div>
                  <div>
                    <span className="font-medium">Size:</span> 200 ft2
                  </div>
                </div>
              </div>
              <p className="text-[15px] leading-6">
                Living Spaces are more easily interpreted. All-In-Ones color
                floor plan option clearly defines your listing’s living spaces,
                making them obvious and clearly visible to your potential
                buyers/clients. Add extra value to your services. Color
                floor-plans show that you care about selling your client’s
                listing; they add a premium, high value look to any listing and
                can be used in your brochures, email and websites.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-10 bg-white p-6">
        <div
          onClick={() => toggleSection("statistics")}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="text-gray-800 font-semibold">Statistics</h2>
          <button className="text-lg">
            <IoIosArrowDown
              className={`transform transition-transform duration-700 rotate-180 ${
                sections.statistics ? "rotate-0" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`transition-all duration-700 overflow-hidden ${
            sections.statistics
              ? "max-h-0 mt-0 opacity-0"
              : "min-h-fit mt-3 opacity-100"
          }`}
        ></div>
      </div>

      {/* profile */}
      <div className="mt-10 bg-white p-6">
        <div className="flex gap-10 mb-3">
          <div className="w-1/2">
            <Image
              src="/assets/images/property1avatar.webp"
              width={500}
              height={500}
              alt="john-collins"
              className="rounded-md h-[260px] object-cover"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-xl text-black font-medium pb-1">
              John Collins
            </h2>
            <p className="text-sm pb-2">Member ID: 987654321</p>

            <div className="flex items-center gap-2 py-[6px] text-sm">
              <IoCallOutline className="text-lg" />
              <span className="text-black">1-800-555-6789</span>
            </div>
            <div className="flex items-center gap-2 py-[6px] text-sm">
              <MdOutlinePhoneAndroid className="text-lg" />
              <span className="text-black">1-800-555-0000</span>
            </div>
            <div className="flex items-center gap-2 py-[6px] text-sm">
              <HiOutlineMail className="text-lg" />
              <span className="text-black">John_demo@email.com</span>
            </div>
            <div className="flex items-center gap-2 py-[6px] text-sm">
              <PiSkypeLogoLight className="text-lg" />
              <span>johnc_demo</span>
            </div>
            <div className="flex items-center gap-2 py-[6px] text-sm">
              <RiGlobalLine className="text-lg" />
              <span className="text-black">paris.wpresidence.net/</span>
            </div>
            <div className="flex text-sm py-[6px]">
              <span className="text-gray-500 font-medium">Member Of:</span>
              Global Real Estate Professionals Network (GREP)
            </div>
          </div>
        </div>
        {/* contact form */}
        <div>
          <div className="flex items-center gap-5 mb-2">
            <h1 className="text-lg font-medium text-black">Contact Me</h1>
            <button className="bg-primary text-white py-1 px-2 rounded-md text-xs">
              Schedule a showing?
            </button>
          </div>
          <form>
            <div className="flex items-center gap-2 mb-2">
              <input
                className="w-full py-[10px] px-4 rounded-md text-sm border outline-none"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="w-full py-[10px] px-4 rounded-md text-sm border outline-none"
                type="text"
                placeholder="Your Email"
              />
              <input
                className="w-full py-[10px] px-4 rounded-md text-sm border outline-none"
                type="text"
                placeholder="Your Phone"
              />
            </div>
            <textarea
              rows="7"
              className="border outline-none w-full px-4 py-[10px] rounded-md text-sm mb-2"
              placeholder="I'm interested in [ Luxury House in Greenville ]"
            ></textarea>
            <div className="flex items-center gap-2">
              <button className="rounded-md border border-primary px-5 py-2 text-white bg-primary font-medium text-sm">
                Send Mail
              </button>
              <button className="rounded-md border border-primary px-5 py-2 text-primary font-medium text-sm">
                Call 1-800-555-0000
              </button>
              <button className="rounded-md border border-primary px-5 py-2 text-primary font-medium text-sm">
                WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Schedule a tour */}
      <div className="mt-10 bg-white p-6">
        <div
          onClick={() => toggleSection("schedule_tour")}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="text-gray-800 font-semibold">Schedule a tour</h2>
          <button className="text-lg">
            <IoIosArrowDown
              className={`transform transition-transform duration-700 rotate-180 ${
                sections.schedule_tour ? "rotate-0" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`transition-all duration-700 overflow-hidden flex gap-8 ${
            sections.schedule_tour
              ? "max-h-0 mt-0 opacity-0"
              : "min-h-fit mt-3 opacity-100"
          }`}
        >
          <div className="w-1/2">
            <Image
              src="/assets/images/property1.webp"
              width={1000}
              height={1000}
              alt="property"
              className="rounded-md h-[597px] object-cover"
            />
          </div>
          <div className="w-1/2">
            <div className="mb-8 border py-[30px]">
              will be here weekly calender slider
            </div>
            <div>
              <select className="w-full bg-gray-100 p-3 rounded-md text-sm outline-none mb-3">
                <option value="">Please select the time</option>
                <option value="">10:00 am</option>
                <option value="">10:30 am</option>
                <option value="">11:00 am</option>
                <option value="">11:30 am</option>
                <option value="">12:00 pm</option>
                <option value="">12:30 pm</option>
                <option value="">01:00 pm</option>
                <option value="">01:30 pm</option>
                <option value="">02:00 pm</option>
                <option value="">02:30 pm</option>
              </select>
              <div className="flex items-center gap-3 mb-3">
                <button className="flex items-center gap-2 border border-primary text-sm py-3 w-full justify-center rounded-md">
                  <BsPerson className="text-lg" /> In Person
                </button>
                <button className="flex items-center gap-2 border text-sm py-3 w-full justify-center rounded-md">
                  <IoVideocamOutline className="text-lg" /> Video Chat
                </button>
              </div>
              <div>
                <input
                  className="w-full p-2 rounded-md text-sm border outline-none mb-3"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="w-full p-2 rounded-md text-sm border outline-none mb-3"
                  type="email"
                  placeholder="Your Email"
                />
                <input
                  className="w-full p-2 rounded-md text-sm border outline-none mb-3"
                  type="number"
                  placeholder="Your Phone"
                />
                <textarea
                  className="w-full border outline-none rounded-md text-sm p-2 mb-3"
                  rows="7"
                ></textarea>
              </div>

              <button className="w-full bg-primary text-white font-semibold py-2 rounded-md text-[15px] mb-2">
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Property Reviews */}
      <div className="mt-10 bg-white p-6">
        <h2 className="text-gray-800 font-semibold text-lg pb-[10px]">
          Property Reviews
        </h2>
        <div className="bg-gray-100 text-sm p-1 px-2 text-gray-700 font-medium rounded-md">
          You need to <Link href="/">login</Link> in order to post a review
        </div>
      </div>
    </>
  );
}
