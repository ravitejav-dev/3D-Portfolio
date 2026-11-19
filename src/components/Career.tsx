import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>GlobalLogic (Client: Google) · Remote</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building LLM evaluation infrastructure, synthetic data pipelines and
              human-in-the-loop tooling for Responsible AI, Trust and Safety, and
              agentic AI testing. Built 13 sandboxed web apps and ranked #1 of 11
              developers in platform throughput.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Game Developer</h4>
                <h5>MassDigi at WPI · Worcester, MA</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built AI-driven NPC behavior systems in Unity (C#) using state
              machines and behavior trees. Created debugging/iteration tooling
              and improved runtime stability through profiling and optimizations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern (.NET Full-Stack)</h4>
                <h5>Wipro · Hyderabad, India</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Developed web applications and backend services in C# and SQL on the
              .NET full-stack ecosystem, through structured mentoring and technical
              assessments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
