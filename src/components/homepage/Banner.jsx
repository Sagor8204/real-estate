import styles from "@/app/styles/Home.module.css";
import PropertyFilter from "@/components/homepage/PropertyFilter";

export default function Banner({ category }) {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: "url('/assets/images/wpresidece-header.webp')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={`${styles.home_banner} w-full h-[580px] lg:h-[695px] relative flex items-center justify-center z-0`}
      >
        <div className="text-white relative max-w-[850px] px-10 text-center">
          <h2 className="text-3xl lg:text-[50px] mb-3 font-semibold">
            Find your dream home
          </h2>
          <p className="text-base leading-6">
            We are recognized for exceeding client expectations and delivering
            great results through dedication, ease of process, and extraordinary
            services to our worldwide clients.
          </p>
        </div>
      </div>

      {category == "home" && (
        <div className="absolute w-full">
          <PropertyFilter />
        </div>
      )}
    </div>
  );
}
