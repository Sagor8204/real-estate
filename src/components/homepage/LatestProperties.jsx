import Heading from "../ui/Heading";
import { IoHomeOutline } from "react-icons/io5";
import TabMenu from "../ui/TabMenu";
import { propertiesData } from "@/common/data";
import PropertyCard from "./PropeertyCard";
import Button from "../ui/Button";

const tabmenus = [
  {
    title: "For Sale",
    icon: <IoHomeOutline />,
  },
  {
    title: "Villas",
    icon: <IoHomeOutline />,
  },
  {
    title: "Apartments",
    icon: <IoHomeOutline />,
  },
  {
    title: "Houses",
    icon: <IoHomeOutline />,
  },
  {
    title: "Condos",
    icon: <IoHomeOutline />,
  },
  {
    title: "Retail",
    icon: <IoHomeOutline />,
  },
];

export default function LatestProperties() {
  return (
    <div>
      <Heading
        title="Latest Properties"
        desc="These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories."
      />

      <div className="max-w-[1030px] mx-auto">
        <TabMenu data={tabmenus} latest />

        <div className="grid grid-cols-3 gap-7 mt-6">
          {propertiesData.map((property) => (
            <PropertyCard key={property?.id} data={property} />
          ))}
        </div>

        <div className="flex justify-center mt-7">
          <Button
            text="Load More Listings"
            custom="w-[180px] text-xs py-[10px]"
          />
        </div>
      </div>
    </div>
  );
}
