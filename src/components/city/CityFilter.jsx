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

export default function CityFilter() {
  const [activeTab, setActiveTab] = useState("Sales");

  return (
    <div className="relative max-w-[1100px] mx-auto -mt-8">
      {/* tab buttons */}
      <TabMenu
        data={tabmenus}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />

      {/* sales section */}
      {activeTab === "Sales" && (
        <div className="bg-white grid grid-cols-4 gap-3 py-7 rounded-md">
          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property Category</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property County</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property City</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property Area</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Baths | Beds</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property Status</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Sale Price</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div className="self-end">
            <Button text="Search Propertites" custom="w-full" />
          </div>
        </div>
      )}

      {/* rentals section */}
      {activeTab === "Rentals" && (
        <div className="bg-white grid grid-cols-4 gap-3 py-7 rounded-md">
          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property Category</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property City</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property Area</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Baths | Beds</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property Status</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Min Size</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Rental Price</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div className="self-end">
            <Button text="Search Propertites" custom="w-full" />
          </div>
        </div>
      )}

      {/* invest section */}
      {activeTab === "Invest" && (
        <div className="bg-white grid grid-cols-4 gap-2 py-7 rounded-md">
          <div className="col-span-2">
            <input
              type="text"
              placeholder="Enter and address, state, city, area, or zip code"
              className="w-full p-2 rounded-md text-sm border focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property Category</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Invest Price</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Baths | Beds</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Property Status</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div>
            <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="property-cateogry">Invest Price</option>
              <option value="condos">Condos</option>
              <option value="houses">Houses</option>
            </select>
          </div>

          <div className="self-end">
            <Button text="Search Properties" custom="w-full" />
          </div>
        </div>
      )}
    </div>
  );
}
