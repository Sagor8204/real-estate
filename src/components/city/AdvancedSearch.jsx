import React from "react";
import Button from "../ui/Button";
import Link from "next/link";

export default function AdvancedSearch() {
  return (
    <div className="mb-8 bg-white rounded-md py-9 px-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Advanced Search
      </h2>
      <div className="flex items-center gap-1 mb-3">
        <button className="rounded-md text-sm border px-3 py-2">Sales</button>
        <button className="rounded-md text-sm border px-3 py-2">Rentals</button>
        <button className="rounded-md text-sm border px-3 py-2">Invest</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter an address, state, city, area or zip code"
          className="text-sm rounded-md px-3 py-2 outline-none border w-full mb-3"
        />

        <div className="mb-3">
          <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option value="property-cateogry">Property Category</option>
            <option value="condos">Condos</option>
            <option value="houses">Houses</option>
          </select>
        </div>

        <div className="mb-3">
          <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option value="property-cateogry">Rooms No</option>
            <option value="condos">Condos</option>
            <option value="houses">Houses</option>
          </select>
        </div>

        <div className="mb-3">
          <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option value="property-cateogry">Beds | Baths</option>
            <option value="condos">Condos</option>
            <option value="houses">Houses</option>
          </select>
        </div>

        <div className="mb-3">
          <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option value="property-cateogry">Property Status</option>
            <option value="condos">Condos</option>
            <option value="houses">Houses</option>
          </select>
        </div>

        <div className="mb-3">
          <select className="border py-[10px] w-full text-[13px] px-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option value="property-cateogry">Invest Price</option>
            <option value="condos">Condos</option>
            <option value="houses">Houses</option>
          </select>
        </div>

        <Button text="Search Properties" custom="w-full" />

        <Link
          className="mt-5 inline-block text-sm text-primary font-semibold"
          href="#"
        >
          More Search Options
        </Link>
      </div>
    </div>
  );
}
