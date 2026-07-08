export default function Hero() {
  return (
    <section className="hero">

      <img
        src="/wedding/images/cover.jpg"
        alt="cover"
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="hero-subtitle">
          The Wedding Of
        </p>

        <h1 className="hero-name">
          백성목
        </h1>

        <div className="hero-heart">
          ♡
        </div>

        <h1 className="hero-name">
          윤은경
        </h1>

        <div className="hero-line"></div>

        <p className="hero-date">
          2026.08.22 SAT
        </p>

        <p className="hero-time">
          PM 12:00
        </p>

        <div className="scroll-wrap">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>

      </div>

    </section>
  );
}