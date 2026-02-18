import React from "react";
import { FaCodeBranch } from "react-icons/fa";

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// 7 rows × 52 cols → blank
const calendar: number[][] = Array.from({ length: 7 }, () => Array(52).fill(0));

// Manually draw CODING like in your image
const coords: [number, number][] = [
  // === C ===
  [1,2],[2,2],[3,2],[4,2],[5,2],[6,2],
  [1,3],[6,3],
  [1,4],[6,4],
  [1,5],[6,5],
  [1,6],[2,6],[3,6],[4,6],[5,6],[6,6],

  // === O ===
  [1,9],[2,9],[3,9],[4,9],[5,9],[6,9],
  [1,10],[6,10],
  [1,11],[6,11],
  [1,12],[6,12],
  [1,13],[2,13],[3,13],[4,13],[5,13],[6,13],

  // === D ===
  [1,16],[2,16],[3,16],[4,16],[5,16],[6,16],
  [1,17],[6,17],
  [1,18],[6,18],
  [1,19],[6,19],
  [1,20],[2,20],[3,20],[4,20],[5,20],[6,20],

  // === I ===
  [1,23],[2,23],[3,23],[4,23],[5,23],[6,23],

  // === N ===
  [1,26],[2,26],[3,26],[4,26],[5,26],[6,26],
  [2,27],[3,28],[4,29],[5,30],
  [1,31],[2,31],[3,31],[4,31],[5,31],[6,31],

  // === G ===
  [1,34],[2,34],[3,34],[4,34],[5,34],[6,34],
  [1,35],
  [1,36],[4,36],[5,36],[6,36],
  [1,37],[6,37],
  [1,38],[2,38],[3,38],[4,38],[6,38],
];

// Fill grid
coords.forEach(([r,c]) => { calendar[r][c] = 1; });

const CodingCalendar: React.FC = () => {
  return (
    <div className="bg-gray-950 rounded-lg p-4 sm:p-6 shadow-xl border border-gray-800 w-full max-w-4xl">
      
      {/* Month Labels */}
      <div className="flex justify-between text-gray-400 text-[10px] sm:text-xs mb-2 px-1">
        {months.map((month, idx) => (
          <span key={idx} className="text-center flex-1">{month}</span>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-rows-7 grid-flow-col gap-0.5 sm:gap-1 overflow-x-auto">
        {calendar.map((row, rIdx) =>
          row.map((val, cIdx) => (
            <div
              key={`${rIdx}-${cIdx}`}
              className={`w-2 h-2 sm:w-3 sm:h-3 md:w-3 md:h-3 rounded-sm ${
                val === 1 ? "bg-green-500" : "bg-gray-700"
              }`}
            />
          ))
        )}
      </div>

      {/* Name & Role */}
      <div className="text-center mt-4 sm:mt-6 mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-2xl font-bold text-white mb-1">Akash Thakur</h3>
        <p className="text-green-400 text-sm sm:text-lg">Full-Stack Developer & Open Source Enthusiast</p>
      </div>

      {/* Fork CTA */}
      <div className="flex justify-center">
        <a
          href="#"
          className="inline-flex gap-1 sm:gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg border border-gray-600 transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base"
        >
          <FaCodeBranch className="text-green-400" />
          Fork My Portfolio
          <span className="bg-gray-700 text-gray-300 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 ml-1">14</span>
        </a>
      </div>
    </div>
  );
};

export default CodingCalendar;
