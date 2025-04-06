"use client";
import { useState } from "react";

export default function TabMenu({ data, setActiveTab, activeTab, latest }) {
  // local state to manage active tab if 'setActiveTab' and 'activeTab' are not provided
  const [localActiveTab, setLocalActiveTab] = useState(data[0]?.title || "");

  // determine which state to use
  const isControlled = setActiveTab && activeTab !== undefined;
  const currentActiveTab = isControlled ? activeTab : localActiveTab;

  const handleTabChange = (title) => {
    if (isControlled) {
      setActiveTab(title); // use parent-provided state management
    } else {
      setLocalActiveTab(title); // Fallback to local state
    }
  };

  return (
    <>
      <div
        className={`flex justify-center ${
          latest
            ? "latest_tab_large_device gap-3 lg:gap-0 lg:space-x-4"
            : "space-x-1"
        }`}
      >
        {data.map((item) => (
          <button
            key={item.title}
            onClick={() => handleTabChange(item.title)}
            className={`flex items-center justify-center gap-1 text-sm font-semibold transition-all duration-300 ${
              latest
                ? "rounded-[4px] w-[130px] py-[10px]"
                : "rounded-t-md w-[100px] py-[11px]"
            } ${
              currentActiveTab === item.title
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {item.icon && <span className="text-lg">{item.icon}</span>}
            {item.title}
          </button>
        ))}
      </div>

      {/* Samall device tabs for latest properties */}
      <div className={latest ? "latest_tab_samll_device" : "hidden"}>
        {data.map((item, index) => (
          <div
            className={`w-full ${
              index === 2 || index == 5
                ? "col-span-2 flex items-center justify-center"
                : ""
            }`}
            key={item.title}
          >
            <button
              onClick={() => handleTabChange(item.title)}
              className={`flex border items-center justify-center gap-1 text-sm font-semibold transition-all duration-300 rounded-[4px] py-[10px] ${
                currentActiveTab === item.title
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-600"
              } ${index === 2 || index === 5 ? "w-1/2" : "w-full"}`}
            >
              {item.icon && <span className="text-lg">{item.icon}</span>}
              {item.title}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
