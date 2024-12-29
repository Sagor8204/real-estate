import { propetiesAreaData } from "@/common/data";
import Heading from "../ui/Heading";
import PropertyAreaCard from "./PropertyAreaCard";

export default function PropertiesByArea() {
  return (
    <div className="">
      <Heading
        title="Properties by Area"
        desc="Highlight the best of your properties by using the List Category
        shortcode. You can list categories, types, cities, areas and states of
        your choice."
      />

      <div className="max-w-[1000px] grid grid-cols-4 gap-5 mx-auto bg-white px-8 py-10 rounded-md">
        {propetiesAreaData.map((property) => (
          <PropertyAreaCard key={property.id} data={property} />
        ))}
      </div>
    </div>
  );
}
