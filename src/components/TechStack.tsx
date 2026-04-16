import { useEffect, useRef } from "react";
import "./styles/TechStack.css";

const skillCategories = [
  {
    title: "Languages",
    color: "#64ffda",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C++", "Go", "C#", "Rust", "Kotlin", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    color: "#bb86fc",
    skills: ["LLM Evaluation", "Agentic AI", "PyTorch", "TensorFlow", "Machine Learning", "AI Reliability"],
  },
  {
    title: "Cloud & Infrastructure",
    color: "#ff9900",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD", "Pipeline Automation"],
  },
  {
    title: "Backend & Frontend",
    color: "#61dafb",
    skills: ["React", "AngularJS", "Node.js", "REST APIs", "API Design", "System Design"],
  },
  {
    title: "Data & Tools",
    color: "#4fc3f7",
    skills: ["SQL Server", "Git", "YAML", "Matplotlib", "Debugging", "Developer Tooling"],
  },
  {
    title: "Practices",
    color: "#a5d6a7",
    skills: ["Distributed Systems", "System Reliability", "Workflow Orchestration", "Backend Engineering"],
  },
];

const marqueeSkills = [
  "Python", "TypeScript", "JavaScript", "Java", "C++", "Go", "Rust",
  "AWS", "Docker", "Kubernetes", "React", "PyTorch", "TensorFlow",
  "LLM Evaluation", "Agentic AI", "CI/CD", "Terraform", "SQL",
  "API Design", "System Design", "Pipeline Automation", "Azure",
];

const TechStack = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = entry.target as HTMLElement;
            const delay = Number(category.dataset.index || 0) * 150;

            setTimeout(() => {
              category.classList.add("tech-visible");

              // Animate tags inside this category with stagger
              const tags = category.querySelectorAll(".tech-tag");
              tags.forEach((tag, tagIndex) => {
                setTimeout(() => {
                  tag.classList.add("tech-tag-visible");
                }, tagIndex * 60);
              });
            }, delay);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const categories = gridRef.current?.querySelectorAll(".tech-category");
    categories?.forEach((cat) => observer.observe(cat));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="techstack">
      <h2>My Techstack</h2>

      <div className="tech-grid" ref={gridRef}>
        {skillCategories.map((category, catIndex) => (
          <div
            className="tech-category"
            key={catIndex}
            data-index={catIndex}
          >
            <div className="tech-category-title">{category.title}</div>
            <div className="tech-tags">
              {category.skills.map((skill, skillIndex) => (
                <div className="tech-tag" key={skillIndex}>
                  <span
                    className="tech-tag-dot"
                    style={{ background: category.color }}
                  />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tech-marquee-section">
        <div className="tech-marquee">
          {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
            <div className="tech-marquee-item" key={i}>
              <span className="tech-marquee-dot" />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
