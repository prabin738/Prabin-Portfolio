import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section
      className="h-screen bg-gradient-to-b from-violet-900
    to-black flex xl:flex-row flex-col-reverse
    items-center justify-between lg:px-24 px-10 relative overflow-hidden"
    >
      {/* Left Section  */}
      <div className="z-40 xl:mb-0 mb-[20%]">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6"
        >
          Building Fast <br /> Reliable Results
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xl md:text-1xl lg:text-2xl text-purple-200 max-w-2xl"
        >
          I'm a frontend developer passionate about crafting sleek, responsive
          interfaces with React, Tailwind, and Framer Motion. From intuitive UI
          animations to scalable component systems, I build web experiences that
          feel as good as they look. <br />
          <br /> Whether it's Bootstrap layouts, Toastify alerts, or
          pixel-perfect iconography, I bring together performance and polish to
          deliver tools that are fast, functional, and visually compelling.
        </motion.p>
      </div>
      {/* Right Section  */}
      {/* <Spline scene="https://prod.spline.design/TfOlRF6pNBYVP40i/scene.splinecode" />  */}
      {/* <Spline scene="https://prod.spline.design/wuj6AVi2Op5jgCgN/scene.splinecode" /> */}
      <Spline
        className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
        scene="https://prod.spline.design/i-lxgsc8Yq7IQU9O/scene.splinecode"
      />
    </section>
  );
};

export default HeroSection;
