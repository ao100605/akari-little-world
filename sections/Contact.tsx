import SectionKicker from "@/components/SectionKicker";

function GithubIcon() {
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.04.78 2.11 0 1.52-.01 2.75-.01 3.12 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <mask id="linkedin-cutout">
        <rect x="0" y="0" width="24" height="24" rx="5" fill="#fff" />
        <path
          d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"
          fill="#000"
        />
      </mask>
      <rect x="0" y="0" width="24" height="24" rx="5" fill="currentColor" mask="url(#linkedin-cutout)" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      className="contact-icon"
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <SectionKicker number="05" japanese="お問い合わせ">CONTACT</SectionKicker>
      <div className="contact-postcard">
        <div className="contact-copy">
          <p className="handwritten">Dear future teammate,</p>
          <h2>Let&apos;s make<br />something lovely.</h2>
          <p>
            Whether it&apos;s a job, collaboration, project, or just a hello,
            I&apos;d love to hear from you.
          </p>
          <div className="contact-links">
            <a className="github" href="https://github.com/ao100605" target="_blank" rel="noopener noreferrer">
              <GithubIcon /> GitHub ↗
            </a>
            <a className="linkedin" href="https://www.linkedin.com/in/akari-oh/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon /> LinkedIn ↗
            </a>
            <a className="email" href="mailto:a4oh@ucsd.edu" target="_blank" rel="noopener noreferrer">
              <EmailIcon /> Email ↗
            </a>
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
