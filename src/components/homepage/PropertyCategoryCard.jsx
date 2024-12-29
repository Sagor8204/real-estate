import Image from "next/image";

export default function PropertyCategoryCard({ item, itemLen }) {
  return (
    <div
      className={`relative h-[270px] rounded-[4px] ${
        item?.id === 1 ? "col-span-2" : item?.id === itemLen && "col-span-2"
      }`}
    >
      {/* Radial Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.2) 40%)",
        }}
      ></div>

      <Image
        src={item?.image}
        width={1000}
        height={1000}
        alt={item?.title}
        className="w-full h-full object-cover rounded-[4px]"
      />
      <div className="text-white text-sm font-semibold">
        <h3 className="absolute top-3 left-3">{item.title}</h3>
        <p className="absolute bottom-3 left-3">{item.listings} listings</p>
      </div>
    </div>
  );
}
