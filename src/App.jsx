import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const gridItemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
function App() {
  const [completionProgress, setCompletionProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCompletionProgress((prev) => {
        if (prev >= 1) {
          clearInterval(timer);
          return 1;
        }
        return prev + 0.01; // Increment progress
      });
    }, 50); // Set interval for smooth animation over a few seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-10 overflow-x-hidden h-full">
        <h1 className="mt-20 text-center text-[40px] font-mono">
          FRAMER MOTION & REACT
        </h1>
        <motion.section
          variants={gridContainerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 p-10 gap-10"
        >
          <motion.div
            variants={gridItemVariants}
            className="h-full bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
          >
            <motion.div
              className="w-20 h-20 bg-[#E1F780] rounded-md"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 5,
                ease: "easeOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="w-20 h-20 bg-[#FD8A04] rounded-full"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 5,
                ease: "easeOut",
                delay: 0.5,
              }}
            />
          </motion.div>

          <motion.div
            variants={gridItemVariants}
            className="h-full bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
          >
            <motion.div
              className="w-1/3 h-1/3 bg-[#f0ceed] shadow-sm"
              animate={{
                scale: [1, 2, 2, 1],
                rotate: [0, 90, 90, 0],
                borderRadius: ["5%", "10%", "50%", "5%"],
              }}
              transition={{
                duration: 5,
                ease: "easeOut",
                delay: 0.5,
              }}
            />
          </motion.div>

          <motion.div
            variants={gridItemVariants}
            className="h-full bg-slate-800 aspect-square rounded-lg flex justify-center items-center gap-10"
          >
            <motion.div className="w-40 aspect-square bg-[#858e5a] rounded-xl">
              <motion.div
                className="w-full h-full bg-[#E1F780] rounded-xl origin-bottom"
                style={{ scaleY: completionProgress }}
                duration={5}
              />
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}

export default App;
