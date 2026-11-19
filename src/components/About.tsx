import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I build the systems that test whether AI models and agents are safe and
          reliable before they ship. I'm a Software Developer with about 3 years of
          experience, including 2 years in LLM evaluation on Google AI programs
          through GlobalLogic. My work spans sandboxed test apps, synthetic data
          pipelines, adversarial evaluation, and human-in-the-loop tooling.
        </p>
        <div className="about-seeking">
          <div className="seeking-pulse" />
          <span>Seeking AI Engineer roles in LLM evaluation, AI safety and agent testing</span>
        </div>
        <div className="about-location">
          <span className="loc-icon">📍</span> Newark, California
          <span className="loc-sep">·</span>
          <span className="loc-icon">🎓</span> MS Computer Science, Clark University
        </div>
      </div>
    </div>
  );
};

export default About;
