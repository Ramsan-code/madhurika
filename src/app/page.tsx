import Image from "next/image";

export default function Home() {
  const skills = [
    "Team coordination",
    "Time management and adaptability",
    "Creativity",
    "Social media marketing engagement",
    "Content creation",
    "Email marketing",
    "Trying creative ideas",
    "Building audience interaction",
    "Targeting audience",
    "Inclusive thinking",
    "Social media page prompting",
    "Risk management",
    "Problem solving",
    "Decision making",
    "Timeline management"
  ];

  return (
    <>
      {/* Persistent UI Header */}
      <nav className="b-ui-top">
        <span className="b-meta" style={{ marginBottom: 0 }}>MADHURIKA</span>
        <span className="b-meta" style={{ marginBottom: 0 }}>PORTFOLIO</span>
      </nav>

      <main className="b-main-content">
        
        {/* Table of Contents */}
        <section className="b-toc">
          <div className="b-toc-item">
            <span className="b-toc-meta">01</span><br/> INTRO<br/>DUCTION
          </div>
          <div className="b-toc-item">
            <span className="b-toc-meta">02</span><br/> EDU<br/>CATION
          </div>
          <div className="b-toc-item">
            <span className="b-toc-meta">03</span><br/> ABOUT<br/>ME
          </div>
          <div className="b-toc-item">
            <span className="b-toc-meta">04</span><br/> PERS<br/>ONAL<br/>SKILLS
          </div>
          <div className="b-toc-item">
            <span className="b-toc-meta">05</span><br/> VOLUN<br/>TEERING
          </div>
          <div className="b-toc-item">
            <span className="b-toc-meta">06</span><br/> CON<br/>TACT
          </div>
        </section>

        {/* 01 Introduction */}
        <section className="b-split" id="introduction">
          <div className="b-split-left">
            <span className="b-meta">01 / Introduction</span>
            <h1 className="b-display b-display-overlap" style={{ marginTop: "2rem" }}>MADHU<br/>-RIKA</h1>
            <p className="b-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
          <div className="b-img-container b-split-right">
            <img src="/hero.png" alt="High Fashion Intro" className="b-img" />
          </div>
        </section>

        {/* 02 Education */}
        <section className="b-list" id="education" style={{ borderTop: "none" }}>
          <div style={{ padding: "4rem 1rem 0" }}>
            <span className="b-meta">02 / Education</span>
          </div>
          
          <div className="b-list-item">
            <div className="b-list-meta">
              <span className="b-meta">Current</span>
              <span className="b-meta">ESOFT Metro Campus</span>
            </div>
            <div>
              <h2 className="b-display" style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}>HND IN<br/>BUSINESS &<br/>MGMT</h2>
              <p className="b-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at erat eros. Nam in felis ut nunc pretium sodales. Curabitur vel
                libero justo. Currently Pursuing, ESOFT Metro Campus, Kandy
                (Online Program).
              </p>
            </div>
          </div>

          <div className="b-list-item">
            <div className="b-list-meta">
              <span className="b-meta">A/L</span>
              <span className="b-meta">Commerce</span>
            </div>
            <div>
              <h2 className="b-display" style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}>ADVANCED<br/>LEVEL</h2>
              <p className="b-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commerce / Business Studies. Final Year Total: 487, First Year Total: 428.
              </p>
            </div>
          </div>

          <div className="b-list-item">
            <div className="b-list-meta">
              <span className="b-meta">2022</span>
              <span className="b-meta">O/L</span>
            </div>
            <div>
              <h2 className="b-display" style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}>ORDINARY<br/>LEVEL</h2>
              <p className="b-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Score: 353 / 500. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          
          <div className="b-list-item">
            <div className="b-list-meta">
              <span className="b-meta">Completed</span>
              <span className="b-meta">Coursera</span>
            </div>
            <div>
              <h2 className="b-display" style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}>GOOGLE<br/>DIGITAL<br/>MARKETING</h2>
              <p className="b-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac elit in eros hendrerit cursus id sit amet nisl.
              </p>
            </div>
          </div>
        </section>

        {/* 03 About Me */}
        <section className="b-split" id="about">
          <div className="b-img-container b-split-left" style={{ borderBottom: '2px solid var(--fg)' }}>
            <img src="/about.png" alt="Fashion Angular Pose Context" className="b-img" />
          </div>
          <div className="b-split-right" style={{ borderBottom: '2px solid var(--fg)' }}>
            <span className="b-meta">03 / About Me</span>
            <h2 className="b-display" style={{ marginTop: "2rem" }}>ABOUT<br/>THE<br/>WORK</h2>
            <p className="b-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis.
            </p>
            <p className="b-body">
              Aenean nec ex vestibulum, hendrerit mauris eu, vehicula mi. Phasellus condimentum, nisl vitae dapibus cursus, libero elit blandit quam, vitae ultrices lectus velit et elit.
            </p>
          </div>
        </section>

        {/* 04 Personal Skills */}
        <section id="skills">
          <div style={{ padding: "4rem 1rem", borderBottom: '2px solid var(--fg)' }}>
            <span className="b-meta">04 / Personal Skills</span>
            <h2 className="b-display" style={{ marginTop: "1rem" }}>SKILLS<br/>& ARCHI<br/>TECTURE</h2>
          </div>
          <div className="b-skill-grid">
            {skills.map((skill, i) => (
              <div key={i} className="b-skill-item">
                <span className="b-meta">{(i+1).toString().padStart(2, '0')}</span>
                <h3 className="b-skill-title">{skill}</h3>
                <p className="b-body" style={{ fontSize: "0.85rem", marginTop: "auto" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum nisl vitae sodales tincidunt.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 05 Volunteering */}
        <section className="b-list" id="volunteering" style={{ borderTop: "none" }}>
          <div style={{ padding: "4rem 1rem 0" }}>
            <span className="b-meta">05 / Volunteering</span>
            <h2 className="b-display" style={{ marginTop: "1rem" }}>SOCIAL<br/>IMPACT</h2>
          </div>
          <div className="b-list-item">
            <div className="b-list-meta">
              <span className="b-meta">Organisation Name</span>
              <span className="b-meta">Role Role</span>
            </div>
            <div>
              <h3 className="b-display" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>WOMEN'S<br/>EMPOWERMENT</h3>
              <p className="b-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in finibus mi, vel finibus libero. Aenean vel sapien at neque dictum rutrum eget at lacus.
              </p>
            </div>
          </div>
          <div className="b-list-item">
            <div className="b-list-meta">
              <span className="b-meta">Organisation Name</span>
              <span className="b-meta">Role Role</span>
            </div>
            <div>
              <h3 className="b-display" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>ENVIRONMENTAL<br/>INITIATIVES</h3>
              <p className="b-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in metus ac elit tincidunt condimentum ac scelerisque.
              </p>
            </div>
          </div>
        </section>

        {/* 06 Contact */}
        <section className="b-split" id="contact" style={{ borderBottom: "none", borderTop: "2px solid var(--fg)" }}>
          <div className="b-split-left" style={{ justifyContent: "flex-end", paddingBottom: "6rem" }}>
            <span className="b-meta">06 / Contact</span>
            <h2 className="b-display" style={{ marginTop: "2rem" }}>GET IN<br/>TOUCH</h2>
            <div style={{ marginTop: "4rem" }}>
               <a href="mailto:madhurika573@gmail.com" className="b-meta" style={{ display: 'block', textDecoration: 'none', borderBottom: '1px solid var(--fg)', width: 'fit-content', opacity: 1, fontSize: '1rem', marginBottom: '1rem' }}>
                 madhurika573@gmail.com
               </a>
               <br/>
               <a href="#" className="b-meta" style={{ display: 'block', textDecoration: 'none', borderBottom: '1px solid var(--fg)', width: 'fit-content', opacity: 1 }}>
                 LINKEDIN
               </a>
               <br/>
               <a href="#" className="b-meta" style={{ display: 'block', textDecoration: 'none', borderBottom: '1px solid var(--fg)', width: 'fit-content', opacity: 1 }}>
                 INSTAGRAM
               </a>
            </div>
          </div>
          <div className="b-img-container b-split-right">
            <img src="/contact.png" alt="Psycho-thrilling cinematic style" className="b-img" />
          </div>
        </section>

      </main>

      {/* Persistent UI Footer */}
      <footer className="b-ui-bottom">
        <span className="b-meta" style={{ marginBottom: 0 }}>© {new Date().getFullYear()}</span>
        <span className="b-meta" style={{ marginBottom: 0 }}>ALL RIGHTS RESERVED</span>
      </footer>
    </>
  );
}
