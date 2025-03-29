import React from "react";
import Heading from "../ui/Heading";
import Image from "next/image";
import { FaFacebookF, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import Link from "next/link";

const datas = [
  {
    id: 1,
    listing: 4,
    name: "Lily Bicharm",
    designation: "Realtor",
    desc: "Lily Bicharm is a dedicated and professional real estate agent who specializes in providin",
    image: "/assets/images/agent1.webp",
  },
  {
    id: 2,
    listing: 4,
    name: "Samuel Diesel",
    designation: "Commercial Broker",
    desc: "Lily Bicharm is a dedicated and professional real estate agent who specializes in providin",
    image: "/assets/images/agent2.jpg",
  },
  {
    id: 3,
    name: "Dennis Albo",
    designation: "Member ID: 987654321",
    desc: "Lily Bicharm is a dedicated and professional real estate agent who specializes in providin",
    image: "/assets/images/agent3.webp",
  },
];

export default function RealEstateAgents() {
  const agentSlug = (agent) => {
    return agent
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  };

  return (
    <div>
      <Heading
        title="Real Estate Agents"
        desc="With the “list agents shortcode” you can show your agents in any page, alognside with their contact details and link to their agent profile."
      />

      <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20 px-5 lg:px-0">
        {datas.map((data) => (
          <div
            className="bg-white rounded-md group cursor-pointer"
            key={data.id}
          >
            <Link href={`/agents/${agentSlug(data.name)}`}>
              <div className="m-2 relative overflow-hidden rounded-md">
                <Image
                  src={data.image}
                  width={500}
                  height={500}
                  alt="agent-image"
                  className="rounded-md scale-100 group-hover:scale-110 transition-all duration-700"
                />

                {data.listing && (
                  <span className="absolute left-3 bottom-3 bg-green-400 text-white px-3 rounded-md text-sm">
                    {data.listing} listings
                  </span>
                )}
              </div>
              <div className="p-5">
                <h1 className="text-xl font-semibold text-black">
                  {data.name}
                </h1>
                <span className="text-sm pb-3 block">{data.designation}</span>
                <p className="text-sm line-clamp-2 pb-6">{data.desc}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-gray-400">
                    <FaFacebookF className="text-sm" />
                    <FaXTwitter className="text-sm" />
                    <FaLinkedin className="text-sm" />
                    <FaPinterest className="text-sm" />
                    <FaInstagram className="text-sm" />
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MdEmail />
                    <MdPhone />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
