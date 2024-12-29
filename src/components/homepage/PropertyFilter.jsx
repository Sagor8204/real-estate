"use client";
import Button from "../ui/Button";
import { IoIosSearch } from "react-icons/io";
import TabMenu from "../ui/TabMenu";
import { useState } from "react";

const tabmenus = [
  {
    title: "Sales",
  },
  {
    title: "Rentals",
  },
  {
    title: "Invest",
  },
];

export default function PropertyFilter() {
  const [activeTab, setActiveTab] = useState("Sales");

  return (
    <div className="relative max-w-[990px] mx-auto -mt-20">
      {/* tab buttons */}
      <TabMenu
        data={tabmenus}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />

      {/* sales section */}
      {activeTab === "Sales" && (
        <div className="bg-white grid grid-cols-5 gap-2 py-7 px-7 rounded-md shadow-custom-blue">
          <div>
            <label className="block text-sm text-black mb-1">Categories</label>
            <select className="border py-[9px] w-full text-sm px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property Category</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-black mb-1">City</label>
            <select className="border py-[9px] w-full text-sm px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property Category</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-black mb-1">
              Beds & Baths
            </label>
            <select className="border py-[9px] w-full text-sm px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property Category</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-black mb-1">Price</label>
            <select className="border py-[9px] w-full text-sm px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Sale Price</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div className="self-end">
            <Button icon={IoIosSearch} text="Search" custom="w-full" />
          </div>
        </div>
      )}

      {/* rentals section */}
      {activeTab === "Rentals" && (
        <div className="bg-white grid grid-cols-5 gap-2 py-7 px-7 rounded-md shadow-custom-blue">
          <div>
            <label className="block text-sm text-black mb-1">Categories</label>
            <select className="border py-[9px] w-full text-sm px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property Category</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-black mb-1">Cities</label>
            <select className="border py-[9px] w-full text-sm px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property Category</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-black mb-1">
              Beds & Baths
            </label>
            <select className="border py-[9px] w-full text-sm px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property Category</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-black mb-1">Price</label>
            <select className="border py-[9px] w-full text-sm px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Rental Price</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div className="self-end">
            <Button icon={IoIosSearch} text="Search" custom="w-full" />
          </div>
        </div>
      )}

      {/* invest section */}
      {activeTab === "Invest" && (
        <div className="bg-white grid grid-cols-5 gap-2 py-7 px-7 rounded-md shadow-custom-blue">
          <div className="col-span-2">
            <label className="block text-sm text-black mb-1">
              Type Location
            </label>
            <input
              type="text"
              placeholder="Enter and address, state, city, area, or zip code"
              className="w-full p-2 rounded-md text-sm border focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1">
              Beds & Baths
            </label>
            <select className="border py-[9px] w-full text-sm px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property Category</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-black mb-1">Price</label>
            <select className="border py-[9px] w-full text-sm px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Invest Price</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div className="self-end">
            <Button icon={IoIosSearch} text="Search" custom="w-full" />
          </div>
        </div>
      )}
    </div>
  );
}
