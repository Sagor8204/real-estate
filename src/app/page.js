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
    console.log("Token from cookie:", accessToken);
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
