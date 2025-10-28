import { motion } from "framer-motion";
import React, { useRef, useState, useEffect, memo } from "react";
import vid1 from "../../../../asssets/vid1.mp4";
import vid2 from "../../../../asssets/vid2.mp4";
import vid3 from "../../../../asssets/vid3.mp4";
import vid4 from "../../../../asssets/vid4.mp4";

interface Achievement {
  id: number;
  title: string;
  description: string;
  video?: string;
  poster?: string;
}

interface AchievementsProps {
  darkMode: boolean;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "RESOURCE PERSON @ CARE BUSINESS SCHOOL - TRICHY 2025",
    description: "Entrepreneurship Training & Development.",
    video: vid1,
  },
  {
    id: 2,
    title: "GUEST LECTURE @ IFET COLLEGE OF ENGINEERING - Villupuram",
    description: "Industrial Placement Training.",
    video: vid2,
  },
  {
    id: 3,
    title: "Alumni Seminar @ IFET COLLEGE OF ENGINEERING - Villupuram",
    description: "From Startup to Scaleup: My Entrepreneurial Journey.",
    video: vid3,
  },
  {
    id: 4,
    title: "MY E- business Story @ St.Peter college of Engineering and Technology - Chennai ",
    description: "From startup to scaleup: My entrepreneurial journey.",
    video: vid4,
  },
];

const Achievements = memo(({ darkMode }: AchievementsProps) => {
  const sectionBg = darkMode ? "bg-black text-white" : "bg-white text-gray-900";
  const cardBg = darkMode
    ? "bg-black text-white"
    : "bg-white text-gray-900 border border-gray-200";
  const mutedText = darkMode
    ? "opacity-80 text-muted-foreground"
    : "opacity-80 text-gray-600";

  const [isMobile, setIsMobile] = useState(false);
  const [visibleVideos, setVisibleVideos] = useState<boolean[]>([]);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const containerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const hoverTimerRefs = useRef<Array<number | null>>([]);
  const [openStates, setOpenStates] = useState<boolean[]>([]);
  const [loadedStates, setLoadedStates] = useState<boolean[]>([]);
  const [hoverHints, setHoverHints] = useState<boolean[]>([]);

  // detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // init arrays
  useEffect(() => {
    const len = achievements.length;
    setOpenStates(Array(len).fill(false));
    setLoadedStates(Array(len).fill(false));
    setHoverHints(Array(len).fill(false));
    hoverTimerRefs.current = Array(len).fill(null);
    // make only first visible initially (preload first)
    setVisibleVideos((prev) => {
      if (prev.length === len) return prev;
      return [true, ...Array(len - 1).fill(false)];
    });
  }, []);

  // Observe container divs (safer than observing video elements)
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const attr = entry.target.getAttribute("data-index");
          if (!attr) return;
          const idx = Number(attr);
          if (entry.isIntersecting) {
            setVisibleVideos((prev) => {
              if (prev[idx]) return prev;
              const copy = [...prev];
              copy[idx] = true;
              return copy;
            });
            // if we only need to observe until first intersection, we could unobserve here:
            if (containerRefs.current[idx]) obs.unobserve(containerRefs.current[idx]!);
          }
        });
      },
      { threshold: 0.25 }
    );

    containerRefs.current.forEach((el) => {
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [/* run after mounts */]);

  // helper: pause all others and set open state
  const pauseAllExcept = (index: number) => {
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index) {
        try {
          v.pause();
          v.muted = true;
        } catch {}
      }
    });
    setOpenStates((prev) => prev.map((_, i) => i === index));
  };

  const safePlay = async (index: number, unmute = false) => {
    const v = videoRefs.current[index];
    if (!v) return;
    try {
      // ensure others are paused first (important for mobile concurrency)
      pauseAllExcept(index);

      // reset only if it's user-triggered; resetting currentTime sometimes causes flicker,
      // but we keep it because original behavior used currentTime = 0
      try {
        v.currentTime = 0;
      } catch {}

      if (unmute) v.muted = false;

      const playPromise = v.play();
      if (playPromise !== undefined) {
        await playPromise.catch(() => {
          // retry once silently (some mobile browsers require this dance)
          return v.play().catch(() => {});
        });
      }

      setOpenStates((prev) => {
        const copy = [...prev];
        copy[index] = true;
        return copy;
      });
    } catch (err) {
      console.log("play error", err);
    }
  };

  const safePause = (index: number) => {
    const v = videoRefs.current[index];
    if (!v) return;
    try {
      v.pause();
      v.muted = true;
    } catch {}
    setOpenStates((prev) => {
      const copy = [...prev];
      copy[index] = false;
      return copy;
    });
  };

  const handleToggle = (index: number) => {
    const v = videoRefs.current[index];
    if (!v) {
      // if video not mounted yet, mark visible and return (user tapped before mount)
      setVisibleVideos((prev) => {
        const copy = [...prev];
        copy[index] = true;
        return copy;
      });
      return;
    }
    if (openStates[index]) safePause(index);
    else safePlay(index, true);
  };

  const handleMouseEnter = (index: number) => {
    if (isMobile) return;
    setHoverHints((prev) => {
      const copy = [...prev];
      copy[index] = true;
      return copy;
    });

    if (hoverTimerRefs.current[index]) window.clearTimeout(hoverTimerRefs.current[index]!);

    hoverTimerRefs.current[index] = window.setTimeout(async () => {
      // ensure the video is visible/mounted
      setVisibleVideos((prev) => {
        const copy = [...prev];
        copy[index] = true;
        return copy;
      });
      await safePlay(index, true);
      setHoverHints((prev) => {
        const copy = [...prev];
        copy[index] = false;
        return copy;
      });
      hoverTimerRefs.current[index] = null;
    }, 2000);
  };

  const handleMouseLeave = (index: number) => {
    if (isMobile) return;
    if (hoverTimerRefs.current[index]) window.clearTimeout(hoverTimerRefs.current[index]!);
    setHoverHints((prev) => {
      const copy = [...prev];
      copy[index] = false;
      return copy;
    });
    safePause(index);
  };

  return (
    <section
      id="achievements"
      className={`py-12 px-6 md:px-12 transition-colors duration-500 ${sectionBg}`}
      style={{ contain: "layout paint", willChange: "transform" }}
    >
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">🏆 Achievements</h2>
        <p className={`mt-2 ${mutedText}`}>
          A few milestones that mark my journey of learning and innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {achievements.map((item, index) => {
          const shouldPreload = index === 0; // only first auto preload
          return (
            <motion.div
              key={item.id}
              className={`rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 w-full sm:w-[90%] lg:w-full ${cardBg}`}
              whileHover={!isMobile ? { scale: 1.03 } : {}}
              style={{ contain: "content", willChange: "transform" }}
            >
              <div
                ref={(el) => (containerRefs.current[index] = el)}
                data-index={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={isMobile ? () => handleToggle(index) : undefined}
                className="relative w-full aspect-[9/16] flex items-center justify-center overflow-hidden rounded-t-2xl bg-black"
              >
                {visibleVideos[index] ? (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={item.video}
                    muted
                    playsInline
                    preload={shouldPreload ? "auto" : "none"}
                    poster={item.poster || ""}
                    data-index={index}
                    onLoadedData={() =>
                      setLoadedStates((prev) => {
                        const copy = [...prev];
                        copy[index] = true;
                        return copy;
                      })
                    }
                    className={`w-full h-full object-cover rounded-t-2xl transition-opacity duration-500 ${
                      loadedStates[index] ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ contain: "paint", willChange: "opacity, transform" }}
                  />
                ) : (
                  // lightweight placeholder (keeps layout stable and paints fast)
                  <div className="w-full h-full bg-[#0b0b0b] rounded-t-2xl" />
                )}

                {/* Golden Door panels (unchanged visuals) */}
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: openStates[index] ? "-102%" : 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute left-0 top-0 w-[51%] h-full origin-left"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(45deg, rgba(255,215,0,0.15) 0px, rgba(255,215,0,0.15) 2px, transparent 3px, transparent 6px),
                      linear-gradient(135deg, #8B0000, #A30000 40%, #5A0000)
                    `,
                    borderRight: "2px solid gold",
                    boxShadow: "inset -4px 0 15px rgba(255,215,0,0.6)",
                    backgroundBlendMode: "overlay",
                    willChange: "transform",
                  }}
                />
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: openStates[index] ? "102%" : 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute right-0 top-0 w-[51%] h-full origin-right"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(-45deg, rgba(255,215,0,0.15) 0px, rgba(255,215,0,0.15) 2px, transparent 3px, transparent 6px),
                      linear-gradient(225deg, #8B0000, #A30000 40%, #5A0000)
                    `,
                    borderLeft: "2px solid gold",
                    boxShadow: "inset 4px 0 15px rgba(255,215,0,0.6)",
                    backgroundBlendMode: "overlay",
                    willChange: "transform",
                  }}
                />

                {/* Hint messages */}
                {isMobile && !openStates[index] && (
                  <div className="absolute bottom-3 left-0 right-0 text-center bg-black/60 text-white text-sm py-1 rounded-md mx-2 animate-pulse">
                    Tap to reveal video 🎥
                  </div>
                )}
                {!isMobile && hoverHints[index] && !openStates[index] && (
                  <div className="absolute bottom-3 left-0 right-0 text-center bg-black/60 text-white text-xs py-1 rounded-md mx-3 animate-pulse">
                    Hover & hold 2s to preview 🎥
                  </div>
                )}
              </div>

              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className={`mt-2 text-sm ${mutedText}`}>{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
});

export default Achievements;