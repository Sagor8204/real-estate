"use client";
import { IoIosArrowForward } from "react-icons/io";
import CityTabFilter from "./CityTabFilter";
import PropertyCard from "../homepage/PropeertyCard";
import { propertiesData } from "@/common/data";
import AdvancedSearch from "./AdvancedSearch";
import ListBy from "./ListBy";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function PropertiesListedByCity({ listName }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(propertiesData.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = propertiesData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNum) => setCurrentPage(pageNum);

  function slugToCity(slug) {
    return slug
      ?.replace(/-/g, " ") // Replace hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
  }

  return (
    <div className="max-w-[1100px] mx-auto mb-5">
      <div className="flex items-center text-xs gap-1 text-black py-5">
        <span className="text-gray-600">Home</span> <IoIosArrowForward /> Jersey
        City
      </div>
      {/* City header tab menus */}
      <div className="grid grid-cols-[2.8fr,1.2fr] gap-8 items-start">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 pb-6">
            Properties listed in {slugToCity(listName)}
          </h1>
          <div className="bg-white px-4 py-3 rounded-md">
            <CityTabFilter />
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-2 gap-5">
              {currentItems.map((property) => (
                <PropertyCard key={property?.id} data={property} />
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-5 flex items-center">
              <button
                className="bg-white w-11 h-10 flex items-center justify-center text-lg text-black rounded-sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <IoIosArrowBack />
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  disabled={currentPage === i + 1}
                  className={`w-11 h-10 flex items-center justify-center rounded-sm font-semibold text-[15px] ${
                    currentPage === i + 1 ? "bg-primary text-white" : "bg-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="bg-white w-11 h-10 flex items-center justify-center text-lg text-black rounded-sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.max(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
        <div>
          <AdvancedSearch />
          <ListBy />
        </div>
      </div>
    </div>
  );
}
