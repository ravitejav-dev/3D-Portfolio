import { useEffect, useRef } from "react";
import "./styles/Projects.css";

const projects = [
  {
    title: "Agentic AI Evaluation Platform",
    subtitle: "Multi-Agent Orchestration System",
    description:
      "Production-style agentic AI platform that autonomously evaluates LLM outputs using planner, execution, and validation agents. Built-in retry logic, human-in-the-loop escalation, and deterministic evaluation focusing on correctness, consistency, and policy alignment.",
    tags: ["LLM Evaluation", "Multi-Agent", "Python", "Orchestration", "Guardrails"],
    highlight: "Reliability-First Architecture",
    color: "#bb86fc",
  },
  {
    title: "AI Developer Tooling Assistant",
    subtitle: "AI-Native Debugging & Validation Service",
    description:
      "Backend service that assists engineers with config validation, debugging, and log analysis using structured AI reasoning. Produces deterministic structured outputs with error handling, confidence scoring, and API-first access.",
    tags: ["TypeScript", "REST APIs", "AI Reasoning", "Config Validation", "CI/CD"],
    highlight: "Deterministic AI Outputs",
    color: "#64ffda",
  },
  {
    title: "CrowdCompute Plugin System",
    subtitle: "Scalable Data Annotation Platform",
    description:
      "Built annotation templates and plugins for Google AI teams enabling high-quality human-labeled data collection. Designed task specs with validations, QC gates, and rubrics, improving label consistency across annotation cycles.",
    tags: ["Google AI", "Data Pipelines", "YAML", "Quality Assurance", "Docker"],
    highlight: "80% Faster Evaluation Setup",
    color: "#ff9900",
  },
  {
    title: "Synthetic Data Pipeline Engine",
    subtitle: "Automated Test Data Generation",
    description:
      "Pipeline-generation scripts producing 1K–10K records/batch of synthetic evaluation data. Docker-containerized environments for Trust & Safety teams to run robustness, fairness, and edge-case tests at scale.",
    tags: ["Pipeline Automation", "Docker", "Schema Validation", "Python", "Terraform"],
    highlight: "10K+ Records Per Batch",
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
          Systems I've designed and shipped in production environments
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
