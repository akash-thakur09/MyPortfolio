import React from "react";
import { MdCloudDownload } from "react-icons/md"
const HomePage: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-12 sm:py-16 space-y-12 sm:space-y-16">
       {/* <div className="bg-red-500 relative z-10">  */}
        {/* === TOP SECTION: Intro Text === */}
        <div className="w-full text-center space-y-4 sm:space-y-6 xl:pt-8">
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-green-500 text-lg sm:text-xl md:text-2xl font-semibold">
              Hello World! I&apos;m
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-mono tracking-tight text-white">
              Akash Thakur
            </h1>
          </div>

          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Crafting elegant solutions to complex problems with clean code and innovative
            thinking. Welcome to my personal dev workspace where ideas come to life.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 py-4">
            <a
              href="#projects"
              className="py-2.5 sm:py-3 px-4 sm:px-6 bg-green-500 hover:bg-green-600 text-gray-900 font-bold rounded-lg transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              <MdCloudDownload className="text-xl" /> My Resume
            </a>
            <a
              href="#contact"
              className="py-2.5 sm:py-3 px-4 sm:px-6 bg-transparent hover:bg-gray-800 text-green-400 border border-green-400 font-bold rounded-lg transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              <i className="fas fa-envelope"></i> Contact Me
            </a>
          </div>
        </div>

        {/* === BOTTOM SECTION: Workspace Illustration === */}
        <div className="w-full relative">
          <div className="workspace-container relative w-full aspect-[16/10] sm:aspect-video mx-auto">
            {/* Neon Effects */}
            <div className="absolute top-0 left-10 sm:left-20 w-40 sm:w-72 h-40 sm:h-72 bg-purple-400/40 blur-2xl sm:blur-3xl"></div>
            <div className="absolute top-0 right-10 sm:right-20 w-40 sm:w-72 h-40 sm:h-72 bg-green-400/40 blur-2xl sm:blur-3xl"></div>

            {/* Desk Surface */}
            <div className="absolute top-[50%] left-[10%] w-4/5 h-20 sm:h-28 border-2 border-gray-700 rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

            {/* Monitor */}
            <div className="absolute top-0 left-1/2 w-5/6 sm:w-4/6 md:w-4/7 -translate-x-1/2 aspect-[4/3] sm:aspect-video bg-black rounded-lg border border-gray-600 shadow-lg flex">
              {/* Monitor Stand */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-1/2 h-3 sm:h-4 bg-gray-700 rounded-b-sm"></div>

              {/* Terminal Screen */}
              <div className="flex-1 p-2 sm:p-4 bg-gray-700 relative">
                <div className="absolute inset-1 sm:inset-2 bg-black rounded border border-gray-700 flex flex-col">
                  {/* Top bar */}
                  <div className="bg-gray-800 px-1 sm:p-1 flex items-center gap-1">
                    <div className="flex gap-1 ml-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 mx-auto font-mono">
                      akash@dev-workspace
                    </div>
                  </div>
                  {/* Terminal Content */}
                  <div className="p-1 sm:p-2 flex-1 font-mono text-[10px] sm:text-xs md:text-sm overflow-hidden">
                    <pre className="text-green-500 mt-1">
{`          _____  
         /     \\    akash@dev-workspace
        | () () |   ------------------
         \\  ^  /    OS: DevOS v4.2.0
          |||||     Host: ThinkPad X1 Carbon
          |||||     Kernel: 5.15.0-dev
                    Uptime: 45 days, 17 hours
                    Languages: JavaScript, Python, Go
                    Editor: VSCode / Neovim
                    Frameworks: React, Next.js, TailwindCSS`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Notes */}
            <div className="absolute top-10 sm:top-16 left-[20%] w-10 sm:w-12 h-10 sm:h-12 bg-yellow-200 rounded rotate-[-15deg]">
              <div className="w-full h-full p-1">
                <div className="w-full text-center text-gray-800 font-bold text-[0.45rem] sm:text-[0.5rem]">
                  TODO:
                </div>
                <div className="w-full text-center text-gray-800 text-[0.45rem] sm:text-[0.5rem] leading-tight">
                  Fix navbar bug
                </div>
              </div>
            </div>
            <div className="absolute top-28 sm:top-34 left-[20%] w-10 sm:w-12 h-10 sm:h-12 bg-blue-200 rounded rotate-[15deg]">
              <div className="w-full h-full p-1">
                <div className="w-full text-center text-gray-800 font-bold text-[0.45rem] sm:text-[0.5rem]">
                  IDEA:
                </div>
                <div className="w-full text-center text-gray-800 text-[0.45rem] sm:text-[0.5rem] leading-tight">
                  New portfolio
                </div>
              </div>
            </div>

            {/* Coffee Cup */}
            <div className="absolute bottom-20 sm:bottom-28 left-[12%] top-[55%] w-10 sm:w-12 h-14 sm:h-16">
              {/* Handle */}
              <div className="absolute -right-3 sm:-right-4 top-4 sm:top-6 h-6 sm:h-8 w-6 sm:w-8 border-4 border-gray-700 rounded-r-full"></div>

              {/* Cup base */}
              <div className="absolute bottom-0 w-full h-8 sm:h-10 bg-gray-700 rounded-b-lg"></div>

              {/* Coffee liquid */}
              <div className="absolute bottom-6 sm:bottom-8 w-full h-6 sm:h-8 bg-gray-600 rounded-lg">
                <div className="absolute inset-1 rounded-lg bg-gradient-to-b from-amber-700 to-amber-900"></div>
              </div>

              {/* Reflection */}
              <div className="absolute w-4 sm:w-6 h-1 bg-white/20 left-2 sm:left-3 top-2 sm:top-3"></div>

              {/* Steam lines */}
              <div className="absolute -top-4 sm:-top-5 left-2 sm:left-3 flex gap-1">
                <div className="steam-line1 animate-steam1"></div>
                <div className="steam-line2 animate-steam2"></div>
                <div className="steam-line3 animate-steam3"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
