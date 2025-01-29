"use client";
import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

import "./home.css";
import { ReactLenis } from "@studio-freight/react-lenis";
gsap.registerPlugin(ScrollTrigger);

import { CgArrowLongRight } from "react-icons/cg";

export default function Home() {
  const carouselItems = [
    {
      id: "101",
      title: "Starlight Reverie Celestial",
      bg: "/images/carousel/carousel1.jpeg",
      main: "/images/carousel/carousel1.jpeg",
      url: "/project",
    },
    {
      id: "102",
      title: "The Infinite Eternity Flow",
      bg: "/images/carousel/carousel2.jpeg",
      main: "/images/carousel/carousel2.jpeg",
      url: "/project",
    },
    {
      id: "103",
      title: "Aurora's Horizon Colors",
      bg: "/images/carousel/carousel3.jpeg",
      main: "/images/carousel/carousel3.jpeg",
      url: "/project",
    },
  ];

  useEffect(() => {
    gsap.set("footer", { opacity: 0 });

    const footerTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".carousel",
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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const projects = gsap.utils.toArray(".project");

    ScrollTrigger.create({
      trigger: ".carousel",
      start: "top top",
      end: `+=${window.innerHeight * (projects.length - 1)}`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress * (projects.length - 1);
        const currentSlide = Math.floor(progress);
        const slideProgress = progress - currentSlide;

        if (currentSlide < projects.length - 1) {
          gsap.set(projects[currentSlide], {
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          });

          const nextSlideProgress = gsap.utils.interpolate(
            "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            slideProgress
          );

          gsap.set(projects[currentSlide + 1], {
            clipPath: nextSlideProgress,
          });
        }

        projects.forEach((project, index) => {
          if (index < currentSlide) {
            gsap.set(project, {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            });
          } else if (index > currentSlide + 1) {
            gsap.set(project, {
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            });
          }
        });
      },
    });

    gsap.set(projects[0], {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    // Create ScrollTrigger for geometric background animation
    ScrollTrigger.create({
      trigger: ".intro",
      start: "top bottom", // start when the top of intro enters bottom of viewport
      end: "bottom top", // end when bottom of intro leaves top of viewport
      scrub: 1, // smooth scrubbing, takes 1 second to catch up
      onUpdate: (self) => {
        const progress = self.progress;

        // Calculate translateY value (moving upward as we scroll)
        // Start at 0 and move up to -100px based on scroll progress
        const yMove = -750 * progress;

        // Calculate rotation (0 to 360 degrees)
        const rotation = 360 * progress;

        // Apply transforms
        gsap.to(".geo-bg", {
          y: yMove,
          rotation: rotation,
          duration: 0.1,
          ease: "none",
          overwrite: true,
        });
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const images = gsap.utils.toArray(".case-studies-img");

    images.forEach((img, i) => {
      const imgElement = img.querySelector("img");

      ScrollTrigger.create({
        trigger: img,
        start: "top bottom",
        end: "top top",
        onUpdate: (self) => {
          gsap.to(imgElement, {
            scale: 2 - self.progress,
            duration: 0.1,
            ease: "none",
          });
        },
      });

      ScrollTrigger.create({
        trigger: img,
        start: "top top",
        end: () =>
          `+=${
            document.querySelector(".case-studies-item").offsetHeight *
            (images.length - i - 1)
          }`,
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="app">
        <ProgressBar />
        <section className="hero">
          <div className="hero-img">
            <img src="/images/home/hero.jpeg" alt="" />
          </div>
          <div className="hero-img-overlay"></div>
          <div className="hero-img-gradient"></div>

          <div className="container">
            <div className="hero-copy">
              <div className="hero-copy-col">
                <h3>A brief journey into</h3>
                <h1>The Fusion of Art and Algorithms</h1>
              </div>
              <div className="hero-copy-col">
                <div className="hero-icon">
                  <img src="/images/home/hero-abstract-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="intro">
          <div className="geo-bg">
            <svg
              width="201"
              height="200"
              viewBox="0 0 201 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_1034)">
                <mask
                  id="mask0_1_1034"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="201"
                  height="200"
                >
                  <path d="M200.5 0H0.5V200H200.5V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_1_1034)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M189.441 100C193.269 100 196.977 99.4861 200.5 98.5234C197.699 97.9327 194.795 97.622 191.819 97.622H142.355C134.185 97.622 126.561 95.2811 120.119 91.2334C121.527 82.9896 125.413 75.0866 131.777 68.7229L163.391 37.1094C166.098 34.4024 168.356 31.4169 170.167 28.2452C167.768 29.8079 165.495 31.6416 163.391 33.7463L128.414 68.7229C122.637 74.4999 115.591 78.2351 108.174 79.9285C103.34 73.1033 100.5 64.7671 100.5 55.7675V11.0593C100.5 7.23107 99.9861 3.5229 99.0234 0C98.4327 2.80071 98.122 5.70466 98.122 8.68118V58.1456C98.122 66.3155 95.7811 73.9388 91.7335 80.3812C83.4897 78.9727 75.5866 75.0865 69.2229 68.7228L37.6094 37.1094C34.9024 34.4024 31.9169 32.1437 28.7452 30.3334C30.3079 32.7315 32.1416 35.0047 34.2463 37.1094L69.2229 72.086C74.9999 77.8631 78.7352 84.9088 80.4285 92.3263C73.6033 97.1596 65.2671 100 56.2675 100H11.5593C7.73105 100 4.02289 100.514 0.5 101.477C3.30073 102.067 6.20469 102.378 9.18122 102.378H58.6456C66.8156 102.378 74.4388 104.719 80.8812 108.767C79.4727 117.01 75.5866 124.913 69.2229 131.277L37.6094 162.891C34.9025 165.598 32.6438 168.583 30.8335 171.755C33.2316 170.192 35.5047 168.358 37.6094 166.254L72.586 131.277C78.363 125.5 85.4088 121.765 92.8263 120.071C97.6596 126.897 100.5 135.233 100.5 144.233V188.941C100.5 192.769 101.014 196.477 101.977 200C102.567 197.199 102.878 194.295 102.878 191.319V141.854C102.878 133.684 105.219 126.061 109.267 119.619C117.51 121.027 125.413 124.913 131.777 131.277L163.391 162.891C166.098 165.598 169.083 167.856 172.255 169.667C170.692 167.268 168.858 164.995 166.754 162.891L131.777 127.914C126 122.137 122.265 115.091 120.572 107.674C127.397 102.84 135.733 100 144.733 100H189.441Z"
                    fill="#30726E"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_1_1034">
                  <rect
                    width="200"
                    height="200"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="intro-container">
            <div className="container">
              <div className="col">
                <p className="primary">[ Setting the Scene ]</p>
              </div>
              <div className="col">
                <div className="intro-copy">
                  <p>
                    Algora has revolutionized the creative potential of AI,
                    advancing from basic, low-resolution outputs to producing
                    hyper-realistic, high-definition visuals that push the
                    boundaries of imagination and innovation.
                  </p>

                  <p>
                    This progress has opened the doors to powerful visual
                    creation tools for users of all skill levels, from seasoned
                    professionals to casual creators. Yet, it has also raised
                    critical debates around the ethical challenges of
                    AI-generated content, such as intellectual property
                    disputes, the spread of false information, and questions
                    surrounding the essence of true artistic expression.
                  </p>
                </div>

                <div className="prompt-example">
                  <div className="prompt-example-header">
                    <h4>
                      // PROMPT: A sci-fi fashion portrait of a person in
                      futuristic attire
                    </h4>
                  </div>

                  <div className="prompt-example-results">
                    <div className="prompt-example-result-item">
                      <div className="prompt-example-result-item-img">
                        <img src="/images/home/prompt-1.jpeg" alt="" />
                        <div className="hero-img-overlay"></div>
                      </div>
                      <div className="prompt-example-result-item-title">
                        <h4>2016 — Built with pioneering generative tools</h4>
                      </div>
                    </div>
                    <div className="prompt-example-result-item">
                      <div className="prompt-example-result-item-img">
                        <img src="/images/home/prompt-2.jpeg" alt="" />
                        <div className="hero-img-overlay"></div>
                      </div>
                      <div className="prompt-example-result-item-title">
                        <h4>2024 — Created with Algora V2</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-studies">
          <div className="case-studies-header">
            <div className="container">
              <h2>Dive Into New Success Stories</h2>
            </div>
          </div>

          <div className="case-studies-content">
            <div className="container">
              <div className="col">
                <p className="primary">[ Case Studies ]</p>
              </div>
              <div className="col">
                <div className="case-studies-copy">
                  <h2>How is AI Reshaping Artistic Boundaries?</h2>

                  <p>
                    Generative AI has rapidly advanced, moving beyond its humble
                    beginnings of basic visual outputs to now creating stunning,
                    lifelike artworks that challenge our perceptions of
                    creativity and technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="case-studies-items">
          <div className="case-studies-items-content col">
            <div className="case-studies-item case-studies-item-1">
              <div className="container">
                <h3>Art in the Age of Algorithms</h3>
                <p className="primary">[ Lumina Horizon — Zara Lee ]</p>
                <div className="case-studies-item-inner-img">
                  <img
                    src="/images/home/case-study-1.jpeg"
                    alt="Futuristic AI-generated art"
                  />
                </div>
                <p>
                  Zara Lee’s AI-powered installation captivates audiences at the
                  Global Digital Arts Forum, raising questions about the fusion
                  of human intent and machine precision. The work highlights the
                  limitless potential of AI as a creative partner in the world
                  of modern art.
                </p>
                <div className="case-studies-item-inner-link">
                  <a href="#">Discover the Journey</a>
                  <div className="link-icon">
                    <CgArrowLongRight size={24} />
                  </div>
                </div>
              </div>
            </div>

            <div className="case-studies-item case-studies-item-2">
              <div className="container">
                <h3>The Dawn of AI-Driven Fashion</h3>
                <p className="primary">[ Visionary Threads — Elena Marquez ]</p>
                <div className="case-studies-item-inner-img">
                  <img
                    src="/images/home/case-study-2.jpeg"
                    alt="AI-driven fashion design showcase"
                  />
                </div>
                <p>
                  Elena Marquez launches the first fashion magazine curated
                  entirely by AI, featuring futuristic designs and concepts that
                  redefine the boundaries of creativity. While widely praised
                  for its innovation, the magazine ignites debates over the role
                  of human designers in a machine-led creative process.
                </p>
                <div className="case-studies-item-inner-link">
                  <a href="#">Read Full Story</a>
                  <div className="link-icon">
                    <CgArrowLongRight size={24} />
                  </div>
                </div>
              </div>
            </div>
            <div className="case-studies-item case-studies-item-3">
              <div className="container">
                <h3>The Rise of AI-Curated Art Awards</h3>
                <p className="primary">
                  [ Synthetic Realities — Sophia Armitage ]
                </p>
                <div className="case-studies-item-inner-img">
                  <img
                    src="/images/home/case-study-3.jpeg"
                    alt="AI-curated artwork showcase"
                  />
                </div>
                <p>
                  Sophia Armitage’s groundbreaking AI-curated exhibition
                  highlights the creative potential of machine-generated art.
                  The event features photorealistic works of entirely fictional
                  subjects, sparking a discussion about bias, authenticity, and
                  AI’s role in shaping the future of artistic recognition.
                </p>
                <div className="case-studies-item-inner-link">
                  <a href="#">Explore the Exhibit</a>
                  <div className="link-icon">
                    <CgArrowLongRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="case-studies-items-images col">
            <div className="case-studies-img case-studies-img-1">
              <img src="/images/home/case-study-1.jpeg" alt="" />
              <div className="hero-img-overlay"></div>
              <div className="case-studies-img-link">
                <a href="#">
                  <span>( View Article )</span>
                </a>
              </div>
            </div>
            <div className="case-studies-img case-studies-img-2">
              <img src="/images/home/case-study-2.jpeg" alt="" />
              <div className="hero-img-overlay"></div>
              <div className="case-studies-img-link">
                <a href="#">
                  <span>( View Article )</span>
                </a>
              </div>
            </div>
            <div className="case-studies-img case-studies-img-3">
              <img src="/images/home/case-study-3.jpeg" alt="" />
              <div className="hero-img-overlay"></div>
              <div className="case-studies-img-link">
                <a href="#">
                  <span>( View Article )</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="abstract-bg">
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
          <div className="strip"></div>
        </section>

        <section className="works">
          <div className="works-header">
            <div className="container">
              <h2>Timeless Art Through a New Lens</h2>
            </div>
          </div>

          <div className="works-content">
            <div className="container">
              <div className="col">
                <p className="primary">[ Creative Explorations ]</p>
              </div>
              <div className="col">
                <div className="works-copy">
                  <h2>Can machines innovate Like Human Artists?</h2>

                  <p>
                    These experiments explore the potential of advanced AI
                    tools, such as Midjourney and DALL-E 3, to reimagine classic
                    masterpieces through unique and boundary-pushing prompts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="carousel">
          {carouselItems.map((item) => (
            <div
              key={item.id}
              id={`project-${item.id}`}
              className="project"
              style={{
                clipPath:
                  item.id === "01"
                    ? "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
                    : "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
              }}
            >
              <div className="project-bg">
                <img src={item.bg} alt="" />

                <div className="hero-img-overlay"></div>
                <div className="hero-img-gradient"></div>
              </div>
              <div className="project-main">
                <img src={item.main} alt="" />
              </div>
              <div className="project-header">
                <div className="project-id">
                  <h2>Archive {item.id}</h2>
                </div>
                <div className="project-whitespace"></div>
                <div className="project-title">
                  <h2>{item.title}</h2>
                </div>
              </div>
              <div className="project-info">
                <div className="project-url">
                  <Link href={item.url}>( The Journey )</Link>
                </div>
              </div>
              <Link
                href={item.url}
                className="project-overlay-link"
                aria-label={`View ${item.title} project`}
              />
            </div>
          ))}
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
                <div className="footer-sub-col">
                  <p className="footer-col-header">[ * Navigation ]</p>
                  <p>The Origins</p>
                  <p>Highlights</p>
                  <p>Innovations</p>
                </div>
                <div className="footer-sub-col">
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
}
