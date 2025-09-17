import React from "react";

const HomePage: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-12 relative z-10 py-16 space-y-16">

        {/* === TOP SECTION: Intro Text === */}
        <div className="w-full text-center space-y-6 xl:pt-8">
          <div className="space-y-2">
            <h2 className="text-green-500 text-xl md:text-2xl font-semibold">
              Hello World! I&apos;m
            </h2>
            <h1 className="text-4xl lg:text-6xl font-bold font-mono tracking-tight text-white">
              Akash Thakur
            </h1>
          </div>

          <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Crafting elegant solutions to complex problems with clean code and innovative
            thinking. Welcome to my personal dev workspace where ideas come to life.
          </p>

          <div className="flex flex-wrap justify-center gap-4 py-4">
            <a
              href="#projects"
              className="py-3 px-6 bg-green-500 hover:bg-green-600 text-gray-900 font-bold rounded-lg transition-all flex items-center gap-2"
            >
              <i className="fas fa-code"></i> View Projects
            </a>
            <a
              href="#contact"
              className="py-3 px-6 bg-transparent hover:bg-gray-800 text-green-400 border border-green-400 font-bold rounded-lg transition-all flex items-center gap-2"
            >
              <i className="fas fa-envelope"></i> Contact Me
            </a>
          </div>
        </div>

        {/* === BOTTOM SECTION: Workspace Illustration === */}
        <div className="w-full relative">
          <div className="workspace-container relative w-full aspect-video mx-auto">
            {/* Neon Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400/40 blur-3xl"></div>
            <div className="absolute top-0 right-0 w-72 h-72 bg-green-400/40 blur-3xl"></div>

            {/* Desk Surface */}
            <div className="absolute -bottom-8 w-full h-40 border-2 border-gray-500 rounded-lg bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900"></div>

            {/* Monitor */}
            <div className="absolute top-0 left-1/2 w-4/5 -translate-x-1/2 aspect-video bg-black rounded-lg border border-gray-600 shadow-lg flex">
              {/* Monitor Stand */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-1/2 h-4 bg-gray-700 rounded-b-sm"></div>

              {/* Terminal Screen */}
              <div className="flex-1 p-4 bg-gray-700 relative">
                <div className="absolute inset-2 bg-black rounded border border-gray-700 flex flex-col">
                  {/* Top bar */}
                  <div className="bg-gray-800 p-1 flex items-center gap-1">
                    <div className="flex gap-1 ml-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400 mx-auto font-mono">
                      akash@dev-workspace
                    </div>
                  </div>
                  {/* Terminal Content */}
                  <div className="p-2 flex-1 font-mono text-xs lg:text-sm">
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

            {/* Sticky Note */}
            <div
              className="absolute top-16 left-12 w-12 h-12 bg-yellow-200 rounded rotate-[-15deg]"
            >
              <div className="w-full h-full p-1">
                <div className="w-full text-center text-gray-800 font-bold text-[0.5rem]">
                  TODO:
                </div>
                <div className="w-full text-center text-gray-800 text-[0.5rem] leading-tight">
                  Fix navbar bug
                </div>
              </div>
            </div>

            {/* Coffee Cup */}
            <div className="absolute -bottom-4 left-10 w-12 h-16">
              {/* Handle */}
              <div className="absolute -right-4 top-6 h-8 w-8 border-4 border-gray-700 rounded-r-full"></div>

              {/* Cup base */}
              <div className="absolute bottom-0 w-full h-10 bg-gray-700 rounded-b-lg"></div>

              {/* Coffee liquid */}
              <div className="absolute bottom-8 w-full h-8 bg-gray-600 rounded-lg">
                <div className="absolute inset-1 rounded-lg bg-gradient-to-b from-amber-700 to-amber-900"></div>
              </div>

              {/* Reflection */}
              <div className="absolute w-6 h-1 bg-white/20 left-3 top-3"></div>

              {/* Steam lines */}
              <div className="absolute -top-5 left-3 flex gap-1">
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
