import React from "react";
import CityFilter from "./CityFilter";

export default function CityHeader() {
  return (
    <div>
      {/* map */}
      <div className="lg:mt-[85px]">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29204.915926890204!2d90.43380270886225!3d23.796738500341007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c9311e395aa5%3A0x864c094d10bf08ce!2sUnited%20Group!5e0!3m2!1sen!2sbd!4v1734852807065!5m2!1sen!2sbd"
            width="100%"
            height="500px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-white border-b hidden lg:flex">
          <CityFilter />
        </div>
      </div>
    </div>
  );
}
