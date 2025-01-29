"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./ProgressBar.css";

const ProgressBar = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const progressBar = progressRef.current;
    gsap.set(progressBar, { scaleX: 0 });

    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const progress = scrollTop / (documentHeight - windowHeight);

      gsap.to(progressBar, {
        scaleX: progress,
        duration: 0.1,
        ease: "none",
        overwrite: true,
      });
    };

    window.addEventListener("scroll", updateProgress, { passive: true });

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return <div ref={progressRef} className="progress-bar"></div>;
};

export default ProgressBar;
