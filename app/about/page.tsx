const AboutPage = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Me</h1>
        <p className="subtitle">Get to know who I am and what I do</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Who I Am</h2>
          <p>
            I am a passionate developer with expertise in building modern web
            applications. My journey in technology started with a curiosity for
            creating things that make a difference.
          </p>
        </div>

        <div className="about-section">
          <h2>My Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>SCSS</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>REST APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
