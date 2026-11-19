import { useEffect, useRef } from "react";
import "./styles/TechStack.css";

const skillCategories = [
  {
    title: "Languages",
    color: "#64ffda",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "Go", "C#", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    color: "#bb86fc",
    skills: ["LLM Evaluation", "Agentic AI", "AI Safety", "Prompt Engineering", "PyTorch", "LangGraph", "RAG"],
  },
  {
    title: "Cloud & Infrastructure",
    color: "#ff9900",
    skills: ["Google Cloud Storage", "Docker", "Kubernetes", "CI/CD", "AWS Lambda"],
  },
  {
    title: "Backend & Frontend",
    color: "#61dafb",
    skills: ["Angular", "React", "Node.js", "FastAPI", ".NET"],
  },
  {
    title: "Data & Tools",
    color: "#4fc3f7",
    skills: ["Playwright", "Promptfoo", "YAML", "Synthetic Data", "Data Pipelines"],
  },
  {
    title: "Practices",
    color: "#a5d6a7",
    skills: ["Test Automation", "Human-in-the-Loop", "Adversarial Testing", "Prompt Injection Testing"],
  },
];

const marqueeSkills = [
  "Python", "TypeScript", "LLM Evaluation", "AI Safety", "Agentic AI",
  "Playwright", "Docker", "Kubernetes", "React", "Angular", "PyTorch",
  "LangGraph", "FastAPI", "Prompt Engineering", "CI/CD", "SQL",
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
