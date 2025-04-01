"use client";
import { useState, useEffect } from "react";

export default function CityTabFilter() {
  const [filters, setFilters] = useState({
    type: "",
    category: "",
    state: "",
    city: "",
    area: "",
    sort: "default",
  });

  useEffect(() => {
    fetchData();
  }, [filters]);

  const fetchData = async () => {
    const query = new URLSearchParams(filters).toString();
    const res = await fetch(`/api/properties?${query}`);
    const data = await res.json();
    console.log("Filtered Properties:", data);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <div className="filters flex flex-wrap lg:flex-nowrap text-sm">
        <select
          className="w-full border-b lg:border-b-0  py-3 lg:py-0 px-3 lg:px-0"
          onChange={(e) => handleFilterChange("type", e.target.value)}
        >
          <option value="">Types</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
        </select>
        <select
          className="w-full border-b lg:border-b-0  py-3 lg:py-0 px-3 lg:px-0"
          onChange={(e) => handleFilterChange("category", e.target.value)}
        >
          <option value="">Categories</option>
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
        </select>
        <select
          className="w-full border-b lg:border-b-0  py-3 lg:py-0 px-3 lg:px-0"
          onChange={(e) => handleFilterChange("state", e.target.value)}
        >
          <option value="">States</option>
          <option value="new-york">New York</option>
          <option value="california">California</option>
        </select>
        <select
          className="w-full border-b lg:border-b-0  py-3 lg:py-0 px-3 lg:px-0"
          onChange={(e) => handleFilterChange("city", e.target.value)}
        >
          <option value="">City</option>
          <option value="jersey-city">Jersey City</option>
          <option value="los-angeles">Los Angeles</option>
        </select>
        <select
          className="w-full border-b lg:border-b-0  py-3 lg:py-0 px-3 lg:px-0"
          onChange={(e) => handleFilterChange("area", e.target.value)}
        >
          <option value="">Areas</option>
          <option value="downtown">Downtown</option>
          <option value="suburbs">Suburbs</option>
        </select>
        <select
          className="w-full border-b lg:border-b-0  py-3 lg:py-0 px-3 lg:px-0"
          onChange={(e) => handleFilterChange("sort", e.target.value)}
        >
          <option value="default">Default</option>
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
        </select>
      </div>
    </div>
  );
}
