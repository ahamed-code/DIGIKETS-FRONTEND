import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import CountUp from "react-countup";
import { useState, useEffect } from "react";
import logo from "../../../../asssets/logo.png";
import DK from "../../../../asssets/DK.mp4";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
  darkMode?: boolean;
}

export default function HeroSection({ onNavigate, darkMode }: HeroSectionProps) {
  const [showHint, setShowHint] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const newMuted = !muted;
    video.muted = newMuted;
    setMuted(newMuted);

    setShowHint(true);
    setTimeout(() => setShowHint(false), 2000);
  };

  const stats = [
    { icon: TrendingUp, value: "20", label: "Projects Handling" },
    { icon: Users, value: "300", label: "Leads / Project" },
    { icon: Award, value: "2", label: "Years Experience" },
  ];

  const sectionBg = darkMode ? "bg-black text-white" : "bg-white text-gray-900";

  const coinBg = darkMode
    ? "bg-gradient-to-br from-purple-800/30 via-purple-600/20 to-purple-400/20 backdrop-blur-md"
    : "bg-gradient-to-br from-purple-300/20 via-purple-200/20 to-purple-100/20 backdrop-blur-md";

  const pulseOverlay = darkMode
    ? "bg-gradient-to-br from-purple-600/10 to-purple-400/10"
    : "bg-gradient-to-br from-purple-200/5 to-purple-100/5";

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="company"
        className={`w-full min-h-[80vh] md:min-h-screen flex items-center pt-12 md:pt-16 pb-10 transition-colors duration-500 ${sectionBg}`}
      >
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
            {/* ✅ Alignment fix added here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center justify-items-center">
              
              {/* LEFT SIDE */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-chart-2 bg-clip-text text-transparent">
                    Digikets Marketing
                  </span>
                </h1>

                <p
                  className={`mt-4 sm:mt-6 text-base sm:text-lg md:text-xl ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Digikets Marketing transforms businesses with creative digital strategies,
                  innovative campaigns, and data-driven results to make happy clients.
                </p>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    onClick={() => onNavigate("projects")}
                    className="bg-gradient-to-r from-primary to-chart-2 hover:opacity-90 transition-all"
                  >
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => onNavigate("contact")}
                  >
                    Get in Touch
                  </Button>
                </div>

                <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center lg:text-left">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <stat.icon className="h-6 w-6 text-primary mx-auto lg:mx-0 mb-2" />
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                        <CountUp
                          start={0}
                          end={parseInt(stat.value)}
                          duration={2}
                          delay={0.5 + index * 0.3}
                          suffix="+"
                        />
                      </div>
                      <div
                        className={`text-sm sm:text-base ${
                          darkMode ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* ✅ RIGHT SIDE (perfectly centered coin + text) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mt-10 lg:mt-0 flex justify-center items-center"
              >
                <div
                  className={`relative rounded-2xl p-6 sm:p-10 md:p-12 ${coinBg}
                              flex flex-col justify-center items-center text-center
                              w-80 h-80 sm:w-[22rem] sm:h-[22rem] md:w-[26rem] md:h-[26rem] mx-auto`}
                >
                  <div
                    className={`absolute inset-0 rounded-2xl animate-pulse pointer-events-none ${pulseOverlay}`}
                  ></div>

                  <div className="relative flex flex-col items-center justify-center h-full">
                    <motion.div
                      className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64"
                      style={{ perspective: 1000 }}
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <div
                        className="absolute w-full h-full rounded-full shadow-xl flex items-center justify-center bg-white"
                        style={{
                          backfaceVisibility: "hidden",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <img
                          src={logo}
                          alt="Owner"
                          className="w-11/12 h-11/12 object-contain rounded-full p-4"
                        />
                      </div>
                    </motion.div>

                    <h3
                      className={`text-lg sm:text-xl md:text-2xl font-display font-bold mt-6 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      “Where Every Digital Move Begins with DIGIKETS.”
                    </h3>
                    <p
                      className={`mt-2 text-sm sm:text-base ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Creative • Strategic • Results-Driven
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎥 VIDEO SECTION */}
      <section className="w-full flex justify-center items-center bg-transparent mt-4 mb-8">
        <div className="max-w-5xl w-full px-4 flex justify-center">
          <div
            className="relative overflow-hidden rounded-2xl shadow-lg 
                        w-[70%] sm:w-[60%] md:w-[40%] lg:w-[25%] aspect-[9/16]"
          >
            <video
              src={DK}
              autoPlay
              loop
              muted={muted}
              playsInline
              onClick={handleVideoClick}
              className="w-full h-full object-cover rounded-2xl cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
            />

            {/* Hint Overlay */}
            {showHint && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs sm:text-sm px-3 py-1.5 rounded-full animate-fadeOut pointer-events-none">
                {muted ? "Tap for Sound 🔈" : "Tap to Mute 🔇"}
              </div>
            )}
          </div>
        </div>

        {/* Fade Animation */}
        <style>{`
          @keyframes fadeOut {
            0% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; }
          }
          .animate-fadeOut {
            animation: fadeOut 3s ease forwards;
          }
        `}</style>
      </section>
    </>
  );
}
