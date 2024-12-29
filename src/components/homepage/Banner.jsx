export default function Banner() {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/images/wpresidece-header.webp')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[695px] relative home_banner flex items-center justify-center z-0"
    >
      <div className="text-white relative max-w-[750px] px-10 text-center">
        <h2 className="text-[50px] leading-[80px]">Find your dream home</h2>
        <p className="text-base leading-6">
          We are recognized for exceeding client expectations and delivering
          great results through dedication, ease of process, and extraordinary
          services to our worldwide clients.
        </p>
      </div>
    </div>
  );
}
