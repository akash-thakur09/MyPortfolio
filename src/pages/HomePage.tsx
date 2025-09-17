// import React from "react";
// import { FaCode, FaEnvelope } from "react-icons/fa";
// import "animate.css"; // Import Animate.css for fadeIn animations

// const HomePage: React.FC = () => {
//   return (
//     <section
//       id="home"
//       className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center space-y-12"
//     >
//       {/* Intro Section */}
//       <div className="w-full text-center space-y-6 xl:pt-8">
//         <div className="space-y-2">
//           <h2 className="text-green-500 text-xl md:text-2xl font-semibold">
//             Hello World! I'm
//           </h2>
//           <h1 className="text-4xl lg:text-6xl font-bold font-mono tracking-tight text-white animate__animated animate__fadeInUp animate__delay-1s">
//             John Peterson
//           </h1>
//         </div>

//         <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed animate__animated animate__fadeInUp animate__delay-2s">
//           Crafting elegant solutions to complex problems with clean code and
//           innovative thinking. Welcome to my personal dev workspace where ideas
//           come to life.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-wrap gap-4 justify-center py-2">
//           <a
//             href="#projects"
//             className="py-3 px-5 bg-green-500 hover:bg-green-600 text-gray-900 font-bold rounded-lg transition-all flex items-center gap-2 animate__animated animate__fadeInUp animate__delay-3s"
//           >
//             <FaCode /> View Projects
//           </a>
//           <a
//             href="#contact"
//             className="py-3 px-5 bg-transparent hover:bg-gray-800 text-green-400 border border-green-400 font-bold rounded-lg transition-all flex items-center gap-2 animate__animated animate__fadeInUp animate__delay-4s"
//           >
//             <FaEnvelope /> Contact Me
//           </a>
//         </div>
//       </div>

//       {/* Workspace Section */}
//       <div className="w-full xl:w-3/4 mx-auto relative mb-12">
//         <div className="workspace-container relative w-full aspect-video">
//           {/* Neon lights */}
//           <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/50 blur-3xl"></div>
//           <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/50 blur-3xl"></div>

//           {/* Desk Surface */}
//           <div className="absolute -bottom-8 w-full h-40 border-2 border-gray-400 rounded-lg bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900"></div>

//           {/* Monitor */}
//           <div className="absolute top-0 left-1/2 w-4/5 transform -translate-x-1/2 aspect-video bg-black rounded-lg border border-gray-600 shadow-lg flex mb-24">
//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-1/2 h-4 bg-gray-700 rounded-b-sm"></div>

//             <div className="flex-1 p-4 bg-gray-700 relative">
//               <div className="absolute inset-2 bg-black rounded border border-gray-700 flex flex-col">
//                 <div className="bg-gray-800 p-1 flex items-center gap-1">
//                   <div className="flex gap-1 ml-1">
//                     <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//                     <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
//                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                   </div>
//                   <div className="text-[10px] sm:text-xs text-gray-400 mx-auto font-mono">
//                     john@dev-workspace
//                   </div>
//                 </div>
//                 <div className="p-2 flex-1 font-mono text-xs lg:text-sm text-green-500">
//                   <pre className="mt-1">
//                     {`          _____  
//          /     \\    `}{" "}
//                     <span className="text-yellow-400">john@dev-workspace</span>
//                     {`
//         | () () |   `}
//                     <span className="text-gray-400">------------------</span>
//                     {`
//          \\  ^  /    `}
//                     <span className="text-purple-400">OS:</span>{" "}
//                     <span className="text-gray-300">DevOS v4.2.0</span>
//                     {`
//           |||||     `}
//                     <span className="text-purple-400">Host:</span>{" "}
//                     <span className="text-gray-300">ThinkPad X1 Carbon</span>
//                     {`
//           |||||     `}
//                     <span className="text-purple-400">Kernel:</span>{" "}
//                     <span className="text-gray-300">5.15.0-dev</span>
//                     {`
//                     `}
//                     <span className="text-purple-400">Uptime:</span>{" "}
//                     <span className="text-gray-300">45 days, 17 hours</span>
//                     {`
//                     `}
//                     <span className="text-purple-400">Languages:</span>{" "}
//                     <span className="text-gray-300">
//                       JavaScript, Python, Go
//                     </span>
//                     {`
//                     `}
//                     <span className="text-purple-400">Editor:</span>{" "}
//                     <span className="text-gray-300">VSCode / Neovim</span>
//                     {`
//                     `}
//                     <span className="text-purple-400">Frameworks:</span>{" "}
//                     <span className="text-gray-300">
//                       React, Next.js, TailwindCSS
//                     </span>
//                   </pre>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Coffee Cup */}
//           <div className="absolute -bottom-4 md:-bottom-2 left-10 w-12 h-16 animate__animated animate__fadeInUp animate__delay-2s">
//             <div className="absolute -right-4 top-6 h-8 w-8 border-4 border-gray-700 rounded-r-full"></div>
//             <div className="absolute bottom-0 w-full h-10 bg-gray-700 rounded-b-lg"></div>
//             <div className="absolute bottom-8 w-full h-8 bg-gray-600 rounded-lg">
//               <div className="absolute inset-1 rounded-lg bg-gradient-to-b from-amber-700 to-amber-900"></div>
//             </div>
//             <div className="absolute w-6 h-1 bg-white/20 left-3 top-3"></div>
//           </div>

//           {/* Sticky Notes */}
//           <div className="absolute top-16 left-12 w-12 h-12 bg-yellow-200 rounded rotate-[-15deg]">
//             <div className="w-full h-full p-1">
//               <div className="w-full text-center text-gray-800 font-bold text-[0.4rem] lg:text-[0.5rem]">
//                 TODO:
//               </div>
//               <div className="w-full text-center text-gray-800 text-[0.4rem] leading-tight">
//                 Fix navbar bug
//               </div>
//             </div>
//           </div>

//           <div className="absolute top-32 left-32 w-12 h-12 bg-blue-200 rounded rotate-[10deg] max-sm:hidden">
//             <div className="w-full h-full p-1">
//               <div className="w-full text-center text-gray-800 font-bold text-[0.4rem] lg:text-[0.5rem]">
//                 IDEA:
//               </div>
//               <div className="w-full text-center text-gray-800 text-[0.4rem] leading-tight">
//                 New portfolio
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomePage;


// src/pages/HomePage.tsx
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
              John Peterson
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
                      john@dev-workspace
                    </div>
                  </div>
                  {/* Terminal Content */}
                  <div className="p-2 flex-1 font-mono text-xs lg:text-sm">
                    <pre className="text-green-500 mt-1">
{`          _____  
         /     \\    john@dev-workspace
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
              <div className="absolute -right-4 top-6 h-8 w-8 border-4 border-gray-700 rounded-r-full"></div>
              <div className="absolute bottom-0 w-full h-10 bg-gray-700 rounded-b-lg"></div>
              <div className="absolute bottom-8 w-full h-8 bg-gray-600 rounded-lg">
                <div className="absolute inset-1 rounded-lg bg-gradient-to-b from-amber-700 to-amber-900"></div>
              </div>
              <div className="absolute w-6 h-1 bg-white/20 left-3 top-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
