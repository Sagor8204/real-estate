"use client";
import { useState } from "react";
import { format, addDays, startOfWeek } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WeeklySlider({ tabSchedule }) {
  const [currentWeekStart, setCurrentWeekStart] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(null);

  const days = Array.from({ length: 7 }, (_, i) =>
    addDays(currentWeekStart, i)
  );

  const handleTransition = (dir) => {
    if (isAnimating) return;

    setDirection(dir);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentWeekStart((prev) => addDays(prev, dir === "left" ? -2 : 2));
      setIsAnimating(false);
      setDirection(null);
    }, 300);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <button
        className={`absolute top-1/2 ${
          tabSchedule ? "-left-[21px]" : "-left-[7px]"
        } -translate-y-1/2 z-10`}
        onClick={() => handleTransition("left")}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div
        className={`${
          tabSchedule ? "w-[300px]" : "w-[342px]"
        } overflow-hidden rounded-md`}
      >
        <div
          className={`flex ${
            tabSchedule ? "space-x-3" : "space-x-2"
          } transition-transform duration-300 ease-in-out`}
          style={{
            transform:
              isAnimating && direction === "left"
                ? "translateX(-0%)"
                : isAnimating && direction === "right"
                ? "translateX(0%)"
                : "translateX(0)",
          }}
        >
          {days.map((day) => (
            <div
              key={day.toISOString()}
              className={`flex flex-col items-center ${
                tabSchedule ? "min-w-[66px]" : "min-w-[62px]"
              } py-2 border rounded-md cursor-pointer transition-all ${
                format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-100"
              }`}
              onClick={() => setSelectedDate(day)}
            >
              <span className="text-sm font-medium">{format(day, "EEE")}</span>
              <span className="text-lg font-bold">{format(day, "d")}</span>
              <span className="text-sm">{format(day, "MMM")}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`absolute top-1/2 ${
          tabSchedule ? "-right-[16px]" : "-right-[7px]"
        } -translate-y-1/2 z-10`}
        onClick={() => handleTransition("right")}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
