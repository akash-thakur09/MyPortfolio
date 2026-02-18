// import { useState, useEffect } from "react";
// import { FaUser, FaCode } from "react-icons/fa";
// import { useInView } from "react-intersection-observer";
// import CodingCalendar from "./CodingCalender";
// import LeetCodeProfile from "./LeetcodeProfile";

// interface ProgressBars {
//   frontend: number;
//   backend: number;
//   devops: number;
//   mobile: number;
// }

// const About = () => {
//   const [progress, setProgress] = useState<ProgressBars>({
//     frontend: 0,
//     backend: 0,
//     devops: 0,
//     mobile: 0,
//   });

//   const { ref: frontendRef, inView: frontendInView } = useInView({ triggerOnce: true });
//   const { ref: backendRef, inView: backendInView } = useInView({ triggerOnce: true });
//   const { ref: devopsRef, inView: devopsInView } = useInView({ triggerOnce: true });
//   const { ref: mobileRef, inView: mobileInView } = useInView({ triggerOnce: true });

//   useEffect(() => { if (frontendInView) setProgress(p => ({ ...p, frontend: 90 })); }, [frontendInView]);
//   useEffect(() => { if (backendInView) setProgress(p => ({ ...p, backend: 85 })); }, [backendInView]);
//   useEffect(() => { if (devopsInView) setProgress(p => ({ ...p, devops: 75 })); }, [devopsInView]);
//   useEffect(() => { if (mobileInView) setProgress(p => ({ ...p, mobile: 65 })); }, [mobileInView]);

//   return (
//     <section id="about" className="py-16 sm:py-20 bg-gray-900 relative">
//       <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto relative z-10">

//         {/* Header */}
//         <div className="text-center mb-8 sm:mb-12">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
//             About <span className="text-green-400">Me</span>
//           </h2>
//           <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
//             Passionate developer with a love for clean code, strong coffee, and open source contributions.
//           </p>
//         </div>

//         {/* Contribution Calendar */}
//         {/* <div className="flex justify-center mb-10">
//           <CodingCalendar />
//         </div> */}

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">

//           {/* Who I Am */}
//           <div className="bg-gray-950 rounded-lg p-5 sm:p-6 border border-gray-800 shadow-lg">
//             <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
//               <FaUser className="text-green-400" /> Who I Am
//             </h3>
//             <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
//               I’m a passionate software developer specializing in the MERN stack with over a year of hands-on experience.            </p>
//             <p className="text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">
//               I’ve built full-stack web applications, contributed to open-source projects, and solved 500+ DSA problems to strengthen my logical thinking and code efficiency.            </p>
//             <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
//               Currently, I’m open to freelance opportunities, open-source collaborations, and software development roles where I can create impactful digital solutions.            </p>

//             {/* GitHub Stats */}
//             <div className="mt-5 grid grid-cols-3 gap-2 text-center">
//               {[
//                 { value: "152", label: "Repositories" },
//                 { value: "4.2k", label: "Commits" },
//                 { value: "87", label: "PRs Merged" },
//               ].map((stat, i) => (
//                 <div key={i} className="bg-gray-700/20 p-2 sm:p-3 rounded">
//                   <div className="text-lg sm:text-2xl font-bold text-green-400">{stat.value}</div>
//                   <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* My Toolbox */}
//           <div className="bg-gray-950 rounded-lg p-5 sm:p-6 border border-gray-800 shadow-lg">
//             <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
//               <FaCode className="text-green-400" /> My Toolbox
//             </h3>

//             {/* Progress Bars */}
//             <div className="space-y-4">
//               {[
//                 { label: 'Frontend', value: progress.frontend, ref: frontendRef },
//                 { label: 'Backend', value: progress.backend, ref: backendRef },
//                 { label: 'DevOps', value: progress.devops, ref: devopsRef },
//                 { label: 'Mobile', value: progress.mobile, ref: mobileRef },
//               ].map(({ label, value, ref }) => (
//                 <div key={label} ref={ref}>
//                   <div className="flex justify-between mb-1 text-gray-300 text-sm sm:text-base">
//                     <span>{label}</span>
//                     <span className="text-gray-400">{value}%</span>
//                   </div>
//                   <div className="h-2 bg-gray-700 rounded">
//                     <div
//                       className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded transition-all duration-1000"
//                       style={{ width: `${value}%` }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Tech Tags */}
//             <div className="mt-6 flex flex-wrap gap-2">
//               {['JavaScript', 'React', 'Node.js', 'TypeScript', 'TailwindCSS', 'Java', 'Docker', 'Git',].map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700/20 text-gray-300 text-xs sm:text-sm rounded"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>
          
//         </div>
//         <div className="flex justify-center mb-10">
//           {/* <CodingCalendar /> */}
//           <LeetCodeProfile />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
import { useState, useEffect } from "react";
import { FaUser, FaCode } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import LeetCodeProfilePopup from "./LeetCodeProfilePopup"; // ✅ Updated import

interface ProgressBars {
  frontend: number;
  backend: number;
  devops: number;
  mobile: number;
}

const About = () => {
  const [progress, setProgress] = useState<ProgressBars>({
    frontend: 0,
    backend: 0,
    devops: 0,
    mobile: 0,
  });

  const { ref: frontendRef, inView: frontendInView } = useInView({ triggerOnce: true });
  const { ref: backendRef, inView: backendInView } = useInView({ triggerOnce: true });
  const { ref: devopsRef, inView: devopsInView } = useInView({ triggerOnce: true });
  const { ref: mobileRef, inView: mobileInView } = useInView({ triggerOnce: true });

  useEffect(() => { if (frontendInView) setProgress(p => ({ ...p, frontend: 90 })); }, [frontendInView]);
  useEffect(() => { if (backendInView) setProgress(p => ({ ...p, backend: 85 })); }, [backendInView]);
  useEffect(() => { if (devopsInView) setProgress(p => ({ ...p, devops: 75 })); }, [devopsInView]);
  useEffect(() => { if (mobileInView) setProgress(p => ({ ...p, mobile: 65 })); }, [mobileInView]);

  return (
   <section id="about" className="py-16 sm:py-20 bg-gray-900 relative overflow-hidden">
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            About <span className="text-green-400">Me</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Passionate developer with a love for clean code, strong coffee, and open source contributions.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Who I Am */}
          <div className="bg-gray-950 rounded-lg p-5 sm:p-6 border border-gray-800 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaUser className="text-green-400" /> My Developer Journey
            </h3>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
              I’m a passionate software developer specializing in the MERN stack with over a year of hands-on experience.
            </p>
            <p className="text-gray-300 mb-3 text-sm sm:text-base leading-relaxed">
              I’ve built full-stack web applications, contributed to open-source projects, and solved 500+ DSA problems to strengthen my logical thinking and code efficiency.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Currently, I’m open to freelance opportunities, open-source collaborations, and software development roles where I can create impactful digital solutions.
            </p>

            {/* GitHub Stats */}
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              {[
                { value: "152", label: "Repositories" },
                { value: "4.2k", label: "Commits" },
                { value: "87", label: "PRs Merged" },
              ].map((stat, i) => (
                <div key={i} className="bg-gray-700/20 p-2 sm:p-3 rounded">
                  <div className="text-lg sm:text-2xl font-bold text-green-400">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* My Toolbox */}
          <div className="bg-gray-950 rounded-lg p-5 sm:p-6 border border-gray-800 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaCode className="text-green-400" /> My Toolbox
            </h3>

            {/* Progress Bars */}
            <div className="space-y-4">
              {[
                { label: 'Frontend', value: progress.frontend, ref: frontendRef },
                { label: 'Backend', value: progress.backend, ref: backendRef },
                { label: 'DevOps', value: progress.devops, ref: devopsRef },
                { label: 'Mobile', value: progress.mobile, ref: mobileRef },
              ].map(({ label, value, ref }) => (
                <div key={label} ref={ref}>
                  <div className="flex justify-between mb-1 text-gray-300 text-sm sm:text-base">
                    <span>{label}</span>
                    <span className="text-gray-400">{value}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded transition-all duration-1000"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Node.js', 'TypeScript', 'TailwindCSS', 'Java', 'Docker', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700/20 text-gray-300 text-xs sm:text-sm rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* LeetCode Section */}
        <div className="flex justify-center mt-10">
          <LeetCodeProfilePopup />
        </div>
      </div>
    </section>
  );
};

export default About;
