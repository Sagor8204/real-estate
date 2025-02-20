import Image from "next/image";
import Link from "next/link";

export default function PropertyAreaCard({ data }) {
  const citySlug = (city) => {
    return city
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  return (
    <div className="flex gap-3">
      <div className="w-[80px] h-[76px]">
        <Image
          className="w-full h-full rounded-md"
          width={100}
          height={100}
          alt={data.city}
          src={data.img}
        />
      </div>
      <div>
        <h3 className="text-[15px] font-semibold text-gray-700 whitespace-nowrap">
          <Link href={`/city/${citySlug(data.city)}`}>{data.city}</Link>
        </h3>
        <span className="text-sm">{data.listings} listings</span>
      </div>
    </div>
  );
}
