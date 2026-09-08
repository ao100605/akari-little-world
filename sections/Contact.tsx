import SectionKicker from "@/components/SectionKicker";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <SectionKicker number="06" japanese="お問い合わせ">CONTACT</SectionKicker>
      <div className="contact-postcard">
        <div className="contact-copy">
          <p className="handwritten">Dear future teammate,</p>
          <h2>Let&apos;s make<br />something lovely.</h2>
          <p>
            Whether it&apos;s a job, collaboration, project, or just a hello,
            I&apos;d love to hear from you.
          </p>
          <div className="contact-links">
            <a href="#">GitHub ↗</a>
            <a href="#">LinkedIn ↗</a>
            <a href="#">Email ↗</a>
          </div>
        </div>
        <div className="postcard-art">
          <div className="sun">✦</div>
          <div className="mountain mountain-one" />
          <div className="mountain mountain-two" />
          <div className="landing-plane">✈</div>
        </div>
      </div>
    </section>
  );
}
