"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

const ShuffleText = ({
  text,
  as: Component = "div",
  className = "",
  triggerOnScroll = false,
  ...props
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(containerRef.current, {
      types: "lines,words,chars",
      tagName: "span",
    });

    const chars = split.chars;
    const signs = ["+", "-"];

    gsap.set(chars, { opacity: 0 });

    const animateChars = () => {
      chars.forEach((char) => {
        const originalLetter = char.textContent;
        let shuffleCount = 0;
        const maxShuffles = 5;

        gsap.to(char, {
          opacity: 1,
          duration: 0.1,
          delay: gsap.utils.random(0, 0.75),
          onStart: () => {
            const shuffle = () => {
              if (shuffleCount < maxShuffles) {
                char.textContent =
                  signs[Math.floor(Math.random() * signs.length)];
                shuffleCount++;
                requestAnimationFrame(() => setTimeout(shuffle, 75));
              } else {
                char.textContent = originalLetter;
              }
            };
            shuffle();
          },
        });
      });
    };

    if (triggerOnScroll) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top bottom-=100",
        onEnter: () => {
          animateChars();
        },
        once: true,
      });
    } else {
      animateChars();
    }

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [text, triggerOnScroll]);

  return (
    <Component
      ref={containerRef}
      className={`shuffle-text ${className}`.trim()}
      {...props}
    >
      {text}
    </Component>
  );
};

export default ShuffleText;
