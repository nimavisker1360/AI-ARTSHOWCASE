"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./home.css";
import { ReactLenis } from "@studio-freight/react-lenis";
gsap.registerPlugin(ScrollTrigger);

import { CgArrowLongRight } from "react-icons/cg";

export default function Home() {
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

  const helloWorld = () => {
    console.log("Hello World");
  };

  return (
    <ReactLenis root>
      <div className="app">
        <section className="hero">
          <div className="hero-img">
            <img src="/images/home/hero.jpeg" alt="" />
          </div>
          <div className="hero-img-overlay"></div>
          <div className="hero-img-gradient"></div>

          <div className="container">
            <div className="hero-copy">
              <div className="hero-copy-col">
                <h3>A short exploration on</h3>
                <h1>Generative AI in the Fine Arts</h1>
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
          <div className="intro-container">
            <div className="container">
              <div className="col">
                <p className="primary">[ A short introduction ]</p>
              </div>
              <div className="col">
                <div className="intro-copy">
                  <p>
                    Generative AI has undergone substantial evolution over the
                    years, transitioning from its initial capability to generate
                    images of merely 32x32 pixels to producing high-resolution
                    images that are often indistinguishable from reality.
                  </p>

                  <p>
                    This advancement has democratized access to powerful visual
                    creation tools for everyone from professional designers to
                    hobbyists. However, this accessibility has also sparked
                    controversies around the ethical implications of
                    AI-generated content, including copyright infringement,
                    misinformation, and concerns over artistic authenticity.
                  </p>
                </div>

                <div className="prompt-example">
                  <div className="prompt-example-header">
                    <h4>// PROMPT: A bowl of bananas centered on a table</h4>
                  </div>

                  <div className="prompt-example-results">
                    <div className="prompt-example-result-item">
                      <div className="prompt-example-result-item-img">
                        <img src="/images/home/prompt-eg-1.jpeg" alt="" />
                        <div className="hero-img-overlay"></div>
                        <div className="hero-img-gradient"></div>
                      </div>
                      <div className="prompt-example-result-item-title">
                        <h4>2016 — Generated using Aligndraw</h4>
                      </div>
                    </div>
                    <div className="prompt-example-result-item">
                      <div className="prompt-example-result-item-img">
                        <img src="/images/home/prompt-eg-2.jpeg" alt="" />
                        <div className="hero-img-overlay"></div>
                        <div className="hero-img-gradient"></div>
                      </div>
                      <div className="prompt-example-result-item-title">
                        <h4>2024 — generated using DALL-E 3</h4>
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
              <h2>Explore Past Case Studies</h2>
            </div>
          </div>

          <div className="case-studies-content">
            <div className="container">
              <div className="col">
                <p className="primary">[ Case Studies ]</p>
              </div>
              <div className="col">
                <div className="case-studies-copy">
                  <h2>Is generative AI friend or foe for artists?</h2>

                  <p>
                    Generative AI has undergone substantial evolution over the
                    years, transitioning from its initial capability to generate
                    images of merely 32x32 pixels to producing high-resolution
                    images that are often indistinguishable from reality.
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
                <h3>“I won, and I didn’t break any rules”</h3>
                <p className="primary">
                  [ Théâtre D’opéra Spatial — Jason Allen ]
                </p>
                <div className="case-studies-item-inner-img">
                  <img src="/images/home/case-study-1.jpeg" alt="" />
                </div>
                <p>
                  Annika wins first prize at the world's first AI photography
                  festival, sparking debates about the authenticity and ethics
                  of AI-generated images — especially within photography.
                </p>
                <div className="case-studies-item-inner-link">
                  <a href="#">View Article</a>{" "}
                  <div className="link-icon">
                    <CgArrowLongRight size={24} />
                  </div>
                </div>
              </div>
            </div>
            <div className="case-studies-item case-studies-item-2">
              <div className="container">
                <h3>The First A.I. Fashion Magazine ”</h3>
                <p className="primary">
                  [ Copy magazine — Carl-Axel Wahlstrom ]
                </p>
                <div className="case-studies-item-inner-img">
                  <img src="/images/home/case-study-2.jpeg" alt="" />
                </div>
                <p>
                  Jason Allen won first prize in the Colorado State Fair’s
                  annual art competition with an AI generated artwork. The work
                  has sparked controversy across the internet — leaving people
                  argue on the topic of authenticity, and plagarism.
                </p>
                <div className="case-studies-item-inner-link">
                  <a href="#">View Article</a>
                  <div className="link-icon">
                    <CgArrowLongRight size={24} />
                  </div>
                </div>
              </div>
            </div>
            <div className="case-studies-item case-studies-item-3">
              <div className="container">
                <h3>World’s First A.I. Art Award</h3>
                <p className="primary">
                  [ Twin Sisters in Love — Annika Nordenskiöld ]
                </p>
                <div className="case-studies-item-inner-img">
                  <img src="/images/home/case-study-3.jpeg" alt="" />
                </div>
                <p>
                  The Copy Magazine features solely A.I. generated
                  photorealistic images with fictional figures that have real
                  names. The magazine explores the implications and biases of
                  generative AI in the high-end fashion industry.
                </p>
                <div className="case-studies-item-inner-link">
                  <a href="#">View Article</a>
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

        <section className="works">
          <div className="works-header">
            <div className="container">
              <h2>Reimagination of Iconic Works</h2>
            </div>
          </div>

          <div className="works-content">
            <div className="container">
              <div className="col">
                <p className="primary">[ Experiments ]</p>
              </div>
              <div className="col">
                <div className="works-copy">
                  <h2>
                    How does A.I. compare with authentic human creativity?
                  </h2>

                  <p>
                    In the following experiments, we will use cutting edge
                    visual AI tools (Midjourney & DALL-E 3) to generatively
                    reinterpret iconic artworks via a set of creative prompts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
