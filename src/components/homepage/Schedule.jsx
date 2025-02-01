import React from "react";
import styles from "@/app/styles/Home.module.css";

export default function Schedule() {
  return (
    <div className={`py-24 bg-fixed bg-repeat ${styles.schedule_section}`}>
      {/* content */}
      <div className="z-[9999]">
        <h1 className="text-center text-2xl font-semibold text-white pb-12">
          Contact us today if you’d like to know more <br /> about how we help
          buy, sell or rent your home
        </h1>

        <div className="bg-white max-w-[650px] mx-auto opacity-100 px-14 py-10 rounded-md pointer-events-auto z-50">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-black pb-4">
              Schedule a meeting with our team
            </h2>
            <p>
              Our experts and developers would love to contribute <br /> their
              expertise and insights to your real estate plans.
            </p>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <input
              className="w-full py-[6px] bg-gray-50 px-2 text-[15px] rounded-md border border-gray-100 outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full py-[6px] bg-gray-50 px-2 text-[15px] rounded-md border border-gray-100 outline-none"
              type="number"
              placeholder="Mobile"
            />
          </div>
          <div className="flex items-center gap-2 mb-3">
            <input
              className="w-full py-[6px] bg-gray-50 px-2 text-[15px] rounded-md border border-gray-100 outline-none"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full py-[6px] bg-gray-50 px-2 text-[15px] rounded-md border border-gray-100 outline-none"
              type="text"
              placeholder="City"
            />
          </div>
          <textarea
            className="w-full border border-gray-100 rounded-md outline-none py-[6px] bg-gray-50 px-2 mb-3"
            rows="4"
            placeholder="Message"
          ></textarea>

          <button className="w-full bg-primary p-3 rounded-md text-white font-semibold text-s[15px]">
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}
