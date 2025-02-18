"use client";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import { IoCarSportSharp } from "react-icons/io5";
import { BsFiletypePdf } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function Overview() {
  const [sections, setSections] = useState({
    overview: false,
    description: false,
    document: false,
    address: false,
    details: false,
    features: false,
    video: false,
    map: false,
    virtual_tour: false,
    walkscore: false,
  });

  const toggleSection = (section) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      {/* overview */}
      <div className="mt-10 bg-white p-6">
        <div
          onClick={() => toggleSection("overview")}
          className="flex items-center justify-between cursor-pointer"
        >
          <h2 className="text-gray-800 font-semibold">Overview</h2>
          <button className="text-lg">
            <IoIosArrowDown
              className={`transform transition-transform duration-700 rotate-180 ${
                sections.overview ? "rotate-0" : ""
              }`}
            />
          </button>
        </div>
        <div
          className={`flex items-center justify-between transition-all duration-700 overflow-hidden ${
            sections.overview
              ? "max-h-0 mt-0 opacity-0"
              : "max-h-96 mt-3 opacity-100"
          }`}
        >
          <div>
            <h4>Updated On:</h4>
            <span>February 13, 2024</span>
          </div>
          <div>
            <LiaBedSolid />
            <span>5 Bedrooms</span>
          </div>
          <div>
            <LiaBathSolid />
            <span>6 Bathrooms</span>
          </div>
          <div>
            <IoCarSportSharp />
            <span>2 Garages</span>
          </div>
          <div>
            <IoCarSportSharp />
            <span>190 ft2</span>
          </div>
          <div>
            <IoCarSportSharp />
            <span>Year Built:2005</span>
          </div>
        </div>
      </div>

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
          className={`grid grid-cols-3 ransition-all duration-700 overflow-hidden ${
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
          className={`grid grid-cols-3 ransition-all duration-700 overflow-hidden ${
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
            </div>
          </div>
          {/* Outdoor details */}
          <div className="mb-4">
            <h3 className="text-[15px] text-black mb-3">Outdor Details</h3>
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
          <div className="w-full h-[435px] relative cursor-pointer ">
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
              className="rounded-lg w-full h-full"
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
          <div>
            <span className="text-2xl font-thin">
              Ferris Park 07305 Jersey City New Jersey State
            </span>
            <div className="flex items-center gap-3 mt-1">
              <button className="text-xs uppercase font-semibold">
                SCORES
              </button>
              <button className="text-xs uppercase font-semibold">
                NEARBY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
