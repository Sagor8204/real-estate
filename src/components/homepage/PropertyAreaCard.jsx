import Image from "next/image";

export default function PropertyAreaCard({ data }) {
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
          {data.city}
        </h3>
        <span className="text-sm">{data.listings} listings</span>
      </div>
    </div>
  );
}
