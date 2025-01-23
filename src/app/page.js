"use client";

import "./home.css";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Home() {
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
                      </div>
                      <div className="prompt-example-result-item-title">
                        <h4>2016 — Generated using Aligndraw</h4>
                      </div>
                    </div>
                    <div className="prompt-example-result-item">
                      <div className="prompt-example-result-item-img">
                        <img src="/images/home/prompt-eg-2.jpeg" alt="" />
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
      </div>
    </ReactLenis>
  );
}
