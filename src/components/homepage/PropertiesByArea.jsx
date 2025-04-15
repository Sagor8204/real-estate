import { propetiesAreaData } from "@/common/data";
import Heading from "../ui/Heading";
import PropertyAreaCard from "./PropertyAreaCard";

export default function PropertiesByArea() {
  return (
    <div className="section pt-16">
      <Heading
        title="Properties by Area"
        desc="Highlight the best of your properties by using the List Category
        shortcode. You can list categories, types, cities, areas and states of
        your choice."
      />

      <div className="px-5">
        <div className="max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 bg-white lg:mx-auto p-12 rounded-md shadow-custom-blue">
          {propetiesAreaData.map((property) => (
            <PropertyAreaCard key={property.id} data={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
