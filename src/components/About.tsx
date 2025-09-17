import { useState, useEffect } from 'react';
import { FaCodeBranch, FaUser, FaCode } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

interface ProgressBars {
  frontend: number;
  backend: number;
  devops: number;
  mobile: number;
}

const About = () => {
  // Tooltip state
  const [tooltipText, setTooltipText] = useState('');

  // Progress bar state
  const [progress, setProgress] = useState<ProgressBars>({
    frontend: 0,
    backend: 0,
    devops: 0,
    mobile: 0,
  });

  // Intersection observers for animations
  const { ref: frontendRef, inView: frontendInView } = useInView({ triggerOnce: true });
  const { ref: backendRef, inView: backendInView } = useInView({ triggerOnce: true });
  const { ref: devopsRef, inView: devopsInView } = useInView({ triggerOnce: true });
  const { ref: mobileRef, inView: mobileInView } = useInView({ triggerOnce: true });

  // Animate progress bars
  useEffect(() => { if (frontendInView) setProgress(p => ({ ...p, frontend: 90 })); }, [frontendInView]);
  useEffect(() => { if (backendInView) setProgress(p => ({ ...p, backend: 85 })); }, [backendInView]);
  useEffect(() => { if (devopsInView) setProgress(p => ({ ...p, devops: 75 })); }, [devopsInView]);
  useEffect(() => { if (mobileInView) setProgress(p => ({ ...p, mobile: 65 })); }, [mobileInView]);

  // Dummy GitHub calendar matrix for "CODING+CD"
  const calendar = [
    // Each subarray represents a row (Monday to Sunday)
    // Each number: 0 = empty, 1-4 = intensity
    [0,0,0,4,0,1,0,2,3,4,0,0], // etc., generate pattern to spell "CODING+CD"
    [1,0,0,3,0,2,1,0,4,3,1,0],
    [0,1,0,4,0,0,2,1,0,3,2,1],
    [2,0,1,3,0,2,0,1,0,2,0,0],
    [0,0,0,1,0,0,0,3,0,1,0,2],
    [1,0,2,0,1,0,2,0,1,0,0,1],
    [0,1,0,2,0,1,0,2,0,1,0,0]
  ];

  const getCellClass = (value: number) => {
    if (value === 0) return 'bg-gray-700';
    if (value === 1) return 'bg-green-500/40';
    if (value === 2) return 'bg-green-500/60';
    if (value === 3) return 'bg-green-500/80';
    return 'bg-green-500';
  };

  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            About <span className="text-green-400">Me</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Passionate developer with a love for clean code, strong coffee, and open source contributions.
          </p>
        </div>

        {/* GitHub-style contribution calendar */}
        <div className="bg-gray-950 rounded-lg p-6 shadow-2xl border border-gray-800 mb-6 inline-block">
          <div className="grid grid-rows-7 grid-flow-col gap-1">
            {calendar.map((row, rowIndex) =>
              row.map((value, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-3 h-3 lg:w-4 lg:h-4 rounded-sm ${getCellClass(value)}`}
                />
              ))
            )}
          </div>

          {/* Name & Role */}
          <div className="text-center mt-6 mb-4">
            <h3 className="text-2xl font-bold text-white mb-1">John Peterson</h3>
            <p className="text-green-400 text-lg">Full-Stack Developer & Open Source Enthusiast</p>
          </div>

          {/* Fork CTA */}
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg border border-gray-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <FaCodeBranch className="text-green-400" />
              Fork My Portfolio
              <span className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 ml-1">14</span>
            </a>
          </div>
        </div>

        {/* About and Toolbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Who I Am */}
          <div className="bg-gray-950 rounded-lg p-6 border border-gray-800 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaUser className="text-green-400" /> Who I Am
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm a passionate developer with 5+ years of experience building web applications and contributing to open source projects. I specialize in creating clean, efficient, and maintainable code.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, writing tech articles, or enjoying a fresh cup of coffee while debugging complex problems.
            </p>

            {/* GitHub Stats */}
            <div className="mt-6 grid grid-cols-3 gap-2 text-center">
              <div className="bg-gray-700/20 p-3 rounded">
                <div className="text-2xl font-bold text-green-400">152</div>
                <div className="text-xs text-gray-400">Repositories</div>
              </div>
              <div className="bg-gray-700/20 p-3 rounded">
                <div className="text-2xl font-bold text-green-400">4.2k</div>
                <div className="text-xs text-gray-400">Commits</div>
              </div>
              <div className="bg-gray-700/20 p-3 rounded">
                <div className="text-2xl font-bold text-green-400">87</div>
                <div className="text-xs text-gray-400">PRs Merged</div>
              </div>
            </div>
          </div>

          {/* My Toolbox */}
          <div className="bg-gray-950 rounded-lg p-6 border border-gray-800 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
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
                  <div className="flex justify-between mb-1 text-gray-300">
                    <span>{label}</span>
                    <span className="text-gray-400 text-sm">{value}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded transition-all duration-1000" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['JavaScript','React','Node.js','TypeScript','TailwindCSS','Python','Docker','Git'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-700/20 text-gray-300 text-sm rounded">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Dot Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-40 right-28 lg:right-40 w-48 h-48 grid grid-cols-10 gap-2">
          {Array.from({ length: 100 }).map((_, i) => <div key={i} className="w-2 h-2 bg-gray-400 rounded" />)}
        </div>
        <div className="absolute bottom-24 left-28 lg:left-40 w-48 h-48 grid grid-cols-10 gap-2">
          {Array.from({ length: 100 }).map((_, i) => <div key={i} className="w-2 h-2 bg-gray-400 rounded" />)}
        </div>
      </div>
    </section>
  );
};

export default About;
