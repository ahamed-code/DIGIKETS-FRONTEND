import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import WelcomeAnimation from "@/components/WelcomeAnimation";
import { RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Router Component
function Router({
  darkMode,
  setDarkMode,
  refreshKey,
}: {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
  refreshKey: number;
}) {
  return (
    <Switch>
      <Route
        path="/"
        component={() => (
          <Home
            key={refreshKey}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        )}
      />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1920);
  const [showMobileTip, setShowMobileTip] = useState(false);
  const [mobileAcknowledged, setMobileAcknowledged] = useState(false);

  // ✅ Detect screen size change dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1920);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Load dark mode from storage
  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored) setDarkMode(stored === "true");
    setShowWelcome(true);
  }, []);

  // ✅ Save dark mode preference
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // ✅ Handle Welcome Animation finish
  const handleWelcomeComplete = () => setShowWelcome(false);

  // ✅ Refresh handler
  const handleGlobalRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  // ✅ Show message every 5s for mobile users
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile || mobileAcknowledged) return;

    const interval = setInterval(() => {
      setShowMobileTip(true);
    }, 5000);

    return () => clearInterval(interval);
  }, [mobileAcknowledged]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className={darkMode ? "dark" : ""}>
          {showWelcome ? (
            <WelcomeAnimation onComplete={handleWelcomeComplete} />
          ) : (
            <div className="relative">
              {/* ✅ Global Refresh Button */}
              <button
                onClick={handleGlobalRefresh}
                className={`
                  fixed z-50 p-3 rounded-full text-white 
                  bg-black/70 dark:bg-white/10 shadow-md 
                  hover:scale-110 transition-transform duration-200
                  ${isWideScreen ? "top-4 right-4" : "bottom-5 right-5"}
                `}
                title="Refresh content"
              >
                <RotateCcw className="w-5 h-5" />
              </button>

              {/* ✅ Main Router */}
              <Router
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                refreshKey={refreshKey}
              />

              {/* ✅ Mobile Tip Popup */}
              <AnimatePresence>
                {showMobileTip && !mobileAcknowledged && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
                  >
                    <div className="bg-white/90 dark:bg-gray-900/90 border border-white/20 text-center shadow-2xl rounded-2xl p-6 w-full max-w-sm">
                      <p className="text-sm md:text-base font-medium text-gray-900 dark:text-gray-100">
                        📱 Hey explorer!  
                        For the <span className="font-semibold text-blue-600 dark:text-blue-400">
                          smoothest visuals and audio experience
                        </span>, try switching to  
                        <span className="font-semibold text-purple-600 dark:text-purple-400">
                          desktop view 💻
                        </span> —  
                        your journey will shine brighter ✨
                      </p>

                      <button
                        onClick={() => {
                          setShowMobileTip(false);
                          setMobileAcknowledged(true);
                        }}
                        className="mt-4 px-6 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 transition-transform duration-200"
                      >
                        OK, got it
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
