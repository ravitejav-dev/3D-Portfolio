import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          AI & LLM Software Engineer (3.5+ years) building reliable AI infrastructure
          across LLM evaluation, human-in-the-loop workflows, and data pipelines.
          At GlobalLogic (supporting Google AI), I develop annotation plugins and
          automation that enable scalable data collection and model testing, including
          synthetic data pipelines (1K–10K records/batch) that reduced evaluation
          setup time by ~80%. I also build sandboxed test environments for agentic/AI
          feature validation, focusing on reproducibility, guardrails, and observability.
        </p>
        <div className="about-seeking">
          <div className="seeking-pulse" />
          <span>Seeking Software Engineer / AI Platform / GenAI Infrastructure roles</span>
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
