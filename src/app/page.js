import "./home.css";

export default function Home() {
  return (
    <div className="app">
      <section className="hero">
        <div className="hero-img">
          <img src="/images/home/hero.jpeg" alt="" />
        </div>

        <div className="hero-img-gradient"></div>
        <div className="hero-img-overlay"></div>

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
    </div>
  );
}
