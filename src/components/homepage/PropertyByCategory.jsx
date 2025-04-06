import { propertyCategoryData } from "@/common/data";
import Heading from "../ui/Heading";
import PropertyCategoryCard from "./PropertyCategoryCard";

export default function PropertyByCategory() {
  return (
    <div className="pb-20 bg-primary-50">
      <Heading
        title="Properties by Category"
        desc="Highlight the best of your properties by using the List Category shortcode. You can list specific properties categories, types, cities, areas."
      />

      <div className="max-w-[1140px] mx-auto -mt-5 px-5 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {propertyCategoryData?.map((item) => (
            <PropertyCategoryCard
              key={item?.id}
              item={item}
              itemLen={propertyCategoryData?.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
