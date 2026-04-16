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
                <h4>Software Engineer</h4>
                <h5>GlobalLogic · Santa Clara</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building CrowdCompute plugins and annotation templates for Google
              AI teams. Designing task specs, implementing guardrails, and
              automating test data environments. Reduced evaluation setup time
              by ~80% through synthetic data pipelines.
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
                <h4>Software Engineer</h4>
                <h5>Wells Fargo · Hyderabad, India</h5>
              </div>
              <h3>2021–22</h3>
            </div>
            <p>
              Built and maintained backend services and APIs on AWS using Python.
              Developed SQL queries, stored procedures, and data fixes in SQL
              Server. Delivered batch and integration workflows in Python and
              .NET with idempotent processing and safe failure handling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
