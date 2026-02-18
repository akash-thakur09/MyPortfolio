import React, { useState } from "react";
import { FaCode, FaTimes, FaUserCircle } from "react-icons/fa";

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
}

const LeetCodeProfilePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const username = "imaakash0218";

  const fetchStats = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
      const data = await response.json();

      if (data.status === "error" || !data.totalSolved) {
        setError(true);
      } else {
        setStats(data);
      }
    } catch (err) {
      console.error("Error fetching LeetCode stats:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const openPopup = () => {
    setIsOpen(true);
    fetchStats();
  };

  const closePopup = () => {
    setIsOpen(false);
    setStats(null);
  };

  return (
    <>
      {/* Button to Open Popup */}
      <div className="flex justify-center mt-8">
        <button
          onClick={openPopup}
          className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
        >
          My LeetCode Profile
        </button>
      </div>

      {/* Section-Scoped Popup (absolute inside About) */}
      {isOpen && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-20 backdrop-blur-sm">
          <div className="bg-gray-950 border border-green-600 rounded-2xl shadow-2xl p-6 w-[500px] sm:w-[500px] relative text-white overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-green-400 hover:text-green-300 transition"
            >
              <FaTimes size={22} />
            </button>

            {/* Content Section */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-green-400">
                LeetCode Profile
              </h2>

              {/* Loading State */}
              {loading && (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="loader mb-4"></div>
                  <p className="text-green-400">Loading your LeetCode stats...</p>
                </div>
              )}

              {/* Error State */}
              {!loading && error && (
                <div className="flex flex-col items-center justify-center py-8">
                  <p className="text-red-400 text-center font-semibold mb-4">
                    Sorry, there was a problem while loading your LeetCode profile.
                  </p>
                  <a
                    href="https://leetcode.com/u/imaakash0218/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-5 rounded-lg transition-all"
                  >
                    Visit On LeetCode
                  </a>
                </div>
              )}

              {/* Success State */}
              {!loading && !error && stats && (
                <>
                  <div className="flex flex-col items-center mb-6">
                    <FaUserCircle className="text-5xl text-green-400 mb-2" />
                    <h3 className="text-xl font-bold">{username}</h3>
                    <p className="text-gray-400">Full LeetCode Stats</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 text-center mb-6">
                    <div className="bg-gray-800 p-3 rounded-lg border border-green-700">
                      <h4 className="text-green-400 font-semibold">Total Solved</h4>
                      <p className="text-2xl font-bold">{stats.totalSolved}</p>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg border border-green-700">
                      <h4 className="text-green-400 font-semibold">Total Questions</h4>
                      <p className="text-2xl font-bold">{stats.totalQuestions}</p>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg border border-green-700">
                      <h4 className="text-green-400 font-semibold">Medium Solved</h4>
                      <p className="text-2xl font-bold">{stats.mediumSolved}</p>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg border border-green-700">
                      <h4 className="text-green-400 font-semibold">Hard Solved</h4>
                      <p className="text-2xl font-bold">{stats.hardSolved}</p>
                    </div>
                  </div>

                  {/* Rank */}
                  <div className="text-center mb-6">
                    <h4 className="text-gray-400">Global Ranking</h4>
                    <p className="text-xl font-semibold text-green-400">
                      #{stats.ranking}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex justify-center">
                    <a
                      href={`https://leetcode.com/u/${username}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-5 rounded-lg transition-all"
                    >
                      <FaCode />
                      View Full Profile
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Green Loader Animation */}
      <style>{`
        .loader {
          border: 4px solid #1f2937;
          border-top: 4px solid #22c55e;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default LeetCodeProfilePopup;
