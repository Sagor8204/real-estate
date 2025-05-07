"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import Banner from "@/components/homepage/Banner";
import FeaturedGallery from "@/components/homepage/FeaturedGallery";
import FeaturedProperty from "@/components/homepage/FeaturedProperty";
import LatestProperties from "@/components/homepage/LatestProperties";
import PropertiesByArea from "@/components/homepage/PropertiesByArea";
import PropertyByCategory from "@/components/homepage/PropertyByCategory";
import PropertyForRent from "@/components/homepage/PropertyForRent";
import RealEstateAgents from "@/components/homepage/RealEstateAgents";
import Schedule from "@/components/homepage/Schedule";
import Testimonials from "@/components/homepage/Testimonials";

export default function Home() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const accessToken = Cookies.get("access_token");
    setToken(accessToken);

    if (accessToken) {
      fetch("http://127.0.0.1:8000/user-list/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch user list");
          }
          return res.json();
        })
        .then((data) => {
          console.log("User List:", data);
        })
        .catch((err) => {
          console.error("Error fetching user list:", err.message);
        });
    }
  }, []);

  return (
    <div className="">
      <div>
        <Banner category="home" />
        <PropertiesByArea />
        <LatestProperties />
        <PropertyByCategory />
        <PropertyForRent />
        <FeaturedProperty />
        <FeaturedGallery />
        <RealEstateAgents />
        <Testimonials />
        <Schedule />
      </div>
    </div>
  );
}
