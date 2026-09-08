export default function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="cloud cloud-a">☁</div>
      <div className="cloud cloud-b">☁</div>
      <div className="sparkle sparkle-a">✦</div>
      <div className="sparkle sparkle-b">✦</div>

      <div className="hero-copy">
        <p className="handwritten">hello, little traveler!</p>
        <h1>AKARI</h1>
        <p className="hero-subtitle">
          software <span>×</span> creativity <span>×</span> interaction
        </p>
        <p className="hero-description">
          A little collection of things I&apos;ve built, learned, and loved.
        </p>
      </div>

      <div className="hero-paper">
        <div className="tape tape-top" />
        <p className="tiny-label">WELCOME TO</p>
        <h2>AKARI&apos;S<br />LITTLE WORLD</h2>
        <div className="paper-line" />
        <p>Math-CS · HCI · Graphics · Creative Technology</p>
        <span className="paper-stamp">✦ Hi ✦</span>
        <span className="paper-stamp">✦ こんにちは ✦</span>
        <span className="paper-stamp">✦ 你好 ✦</span>
      </div>

      <div className="scroll-hint">
        <span>follow the plane</span>
        <span className="scroll-arrow">↓</span>
      </div>
    </section>
  );
}
