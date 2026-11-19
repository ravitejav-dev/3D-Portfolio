import { useEffect, useRef } from "react";
import "./styles/Projects.css";

const projects = [
  {
    title: "Agentic AI Evaluation Platform",
    subtitle: "Multi-Agent Orchestration System",
    description:
      "Personal project: an agentic AI platform that evaluates LLM outputs using planner, execution, and validation agents. Built-in retry logic, human-in-the-loop escalation, and deterministic evaluation focused on correctness, consistency, and policy alignment.",
    tags: ["LLM Evaluation", "Multi-Agent", "Python", "Orchestration", "Guardrails"],
    highlight: "Reliability-First Architecture",
    color: "#bb86fc",
  },
  {
    title: "AI Developer Tooling Assistant",
    subtitle: "AI-Native Debugging & Validation Service",
    description:
      "Personal project: a backend service that helps with config validation, debugging, and log analysis using structured AI reasoning. Produces deterministic structured outputs with error handling, confidence scoring, and API-first access.",
    tags: ["TypeScript", "REST APIs", "AI Reasoning", "Config Validation", "CI/CD"],
    highlight: "Deterministic AI Outputs",
    color: "#64ffda",
  },
  {
    title: "Side-by-Side Evaluation Tooling",
    subtitle: "Human-in-the-Loop LLM Comparison",
    description:
      "Configured Side-by-Side human rating interfaces across 19 custom plugin builds for multi-model LLM comparison and indirect prompt injection evaluation.",
    tags: ["Human-in-the-Loop", "LLM Evaluation", "TypeScript", "Python", "Go"],
    highlight: "19 Custom Plugin Builds",
    color: "#ff9900",
  },
  {
    title: "Synthetic Data Framework",
    subtitle: "Repeatable Agent Test Environments",
    description:
      "Synthetic data seeding for 48 personas across 9 cloud services, with Playwright login automation and a Python QA suite confirming 100% numerical accuracy.",
    tags: ["Synthetic Data", "Python", "Playwright", "QA Automation", "Test Environments"],
    highlight: "48 Personas, 9 Services",
    color: "#4fc3f7",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".project-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-header">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <p className="projects-sub">
          Personal projects and evaluation systems I've built
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{
              animationDelay: `${index * 0.12}s`,
              "--project-color": project.color,
            } as React.CSSProperties}
          >
            <div className="project-number">0{index + 1}</div>
            <div className="project-highlight">
              <span
                className="project-highlight-dot"
                style={{ background: project.color }}
              />
              {project.highlight}
            </div>
            <h3 className="project-title">{project.title}</h3>
            <h4 className="project-subtitle">{project.subtitle}</h4>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span className="project-tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-gradient" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
