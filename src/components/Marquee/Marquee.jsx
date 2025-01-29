"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Marquee.css";

const ANIMATION_DURATION = 15;

const Marquee = () => {
  const wrapperRef = useRef(null);
  const animationRef = useRef(null);
  const directionRef = useRef(-1);
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const originalText = wrapper.children[0].cloneNode(true);
    wrapper.appendChild(originalText);

    const distance = wrapper.children[0].offsetWidth;

    const createAnimation = () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }

      const currentX = gsap.getProperty(wrapper, "x");

      const targetX = directionRef.current === -1 ? -distance : 0;
      const remainingDistance = Math.abs(targetX - currentX);
      const remainingDuration =
        (remainingDistance / distance) * ANIMATION_DURATION;

      animationRef.current = gsap.to(wrapper, {
        x: targetX,
        duration: remainingDuration,
        ease: "none",
        repeat: -1,
        onRepeat: () => {
          gsap.set(wrapper, { x: directionRef.current === -1 ? 0 : -distance });
        },
      });
    };

    createAnimation();

    let lastScrollTop = 0;
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const newDirection = st > lastScrollTop ? -1 : 1;

      if (newDirection !== directionRef.current) {
        directionRef.current = newDirection;
        createAnimation();
      }

      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return (
    <div className="marquee">
      <div className="marquee-wrapper" ref={wrapperRef}>
        <div className="marquee-content">
          <h1>
            The Evolution of AI — The Evolution of AI — The Evolution of AI —
            The Evolution of AI —
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
