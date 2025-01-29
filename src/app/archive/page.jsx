"use client";
import { useEffect } from "react";
import "./archive.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Marquee from "@/components/Marquee/Marquee";

gsap.registerPlugin(ScrollTrigger);

const ArchivePage = () => {
  useEffect(() => {
    let pinAnimation;

    const initPinning = () => {
      if (pinAnimation) {
        pinAnimation.kill();
      }

      if (window.innerWidth > 900) {
        pinAnimation = ScrollTrigger.create({
          trigger: ".sticky-archive",
          start: "top top",
          endTrigger: ".gallery",
          end: "bottom bottom",
          pin: ".source",
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      }
    };

    initPinning();

    const handleResize = () => {
      initPinning();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (pinAnimation) {
        pinAnimation.kill();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.set("footer", { opacity: 0 });

    const footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sticky-archive",
        start: "top center",
        end: "bottom center",
        scrub: true,
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
      },
    });

    footerTl.fromTo("footer", { opacity: 0 }, { opacity: 1, duration: 1 });

    return () => {
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="archive">
        <section className="archive-hero">
          <div className="container">
            <h1>Archive 101: Starlight Reverie Celestial</h1>

            <div className="archive-hero-img-wrapper">
              <div className="archive-hero-img-wrapper-row">
                <p>+</p>
                <p>+</p>
                <p>+</p>
              </div>
              <div className="archive-hero-img-wrapper-row">
                <div className="archive-hero-img">
                  <img src="/images/carousel/carousel1.jpeg" alt="" />
                </div>
              </div>
              <div className="archive-hero-img-wrapper-row">
                <p>+</p>
                <p>+</p>
                <p>+</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky-archive">
          <div className="archive-col source">
            <div className="container">
              <div className="source-img">
                <img src="/images/home/prompt-eg-1.jpeg" alt="" />
              </div>
              <div className="source-content">
                <p className="primary">[ Original Source ]</p>
                <h4>Gazing into the distance </h4>
              </div>
            </div>
          </div>
          <div className="archive-col gallery">
            <div className="container">
              <div className="gallery-copy">
                <p className="primary">
                  // PROMPT: A surrealist portrait of an enigmatic figure,
                  bathed in moody lighting, gazing into the distance with an air
                  of mystery.
                </p>

                <p className="secondary">[ AI Character ]</p>
                <h4>Midjourney</h4>

                <div className="gallery-images-container">
                  <div className="gallery-row main-img">
                    <img src="/images/home/prompt-eg-2.jpeg" alt="" />
                  </div>
                  <div className="gallery-row sub-images">
                    <div className="sub-images-col">
                      <img src="/images/home/prompt-1.jpeg" alt="" />
                    </div>
                    <div className="sub-images-col">
                      <img src="/images/home/prompt-2.jpeg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-archive">
          <div className="next-archive-bg"></div>
          <div className="marquee-archive">
            <Marquee />
          </div>
          <div className="container">
            <p className="primary">[ Archive 002 ]</p>
            <div className="next-archive-img">
              <img src="/images/carousel/carousel2.jpeg" alt="" />
            </div>
            <h2>The Infinite Eternity Flow</h2>
          </div>
        </section>

        <section className="footer-area"></section>

        <footer>
          <div className="container">
            <div className="footer-row footer-content">
              <div className="footer-col">
                <h3>
                  A brief journey into AI-driven artistry by Algora © 2025 — All
                  rights reserved.
                </h3>
              </div>
              <div className="footer-col">
                <div className="footer-sub-col"></div>
                <div className="footer-sub-col footer-links">
                  <p className="footer-col-header">[ * Archive ]</p>
                  <p>Archive 101</p>
                  <p>Archive 102</p>
                  <p>Archive 103</p>
                </div>
              </div>
            </div>
            <div className="footer-row footer-pattern">
              <p>+</p>
              <p>+</p>
              <p>+</p>
            </div>
            <div className="footer-row">
              <h1>Algora</h1>
            </div>
            <div className="footer-row footer-pattern">
              <p>+</p>
              <p>+</p>
              <p>+</p>
            </div>
          </div>
        </footer>
      </div>
    </ReactLenis>
  );
};

export default ArchivePage;
