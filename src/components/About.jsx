import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //Title Animation using gsap
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: -300,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <section
      ref={sectionRef}
      className="h-screen relative overflow-hidden bg-gradient-to-b
  from-black to-[#9a74cf50]
  "
    >
      <div
        className="container mx-auto px-4 h-full flex flex-col
      items-center justify-center
      "
      >
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white"
        >
          About Me
        </h1>
      </div>
    </section>
  );
};

export default About;
