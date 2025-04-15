export default function Heading({ title, desc }) {
  return (
    <div className="max-w-[530px] mx-auto text-center px-5 lg:px-0 py-16">
      <h1 className="text-[32px] text-black leading-[55px] font-medium">
        {title}
      </h1>
      <p className="text-[#5C727D] text-base">{desc}</p>
    </div>
  );
}
