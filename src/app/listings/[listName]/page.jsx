"use client";
import CityHeader from "@/components/city/CityHeader";
import PropertiesListedByCity from "@/components/city/PropertiesListedByCity";
import { useParams } from "next/navigation";

export default function page() {
  const { listName } = useParams();

  return (
    <div>
      <CityHeader />
      <PropertiesListedByCity listName={listName} />
    </div>
  );
}
