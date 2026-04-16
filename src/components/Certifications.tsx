import { useEffect, useRef } from "react";
import "./styles/Certifications.css";

const certifications = [
  {
    title: "Advanced Software Engineering",
    issuer: "Walmart USA",
    icon: "🏪",
  },
  {
    title: "Software Development",
    issuer: "Datacom",
    icon: "💻",
  },
  {
    title: "Pair Programming with AI",
    issuer: "Professional Certificate",
    icon: "🤖",
  },
  {
    title: "Azure AI Essentials",
    issuer: "Microsoft",
    icon: "☁️",
  },
  {
    title: "Professional Certificate",
    issuer: "Microsoft & LinkedIn",
    icon: "🏆",
  },
  {
    title: "Gemini for Developers",
    issuer: "Google",
    icon: "✦",
  },
];

const Certifications = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement;
            card.classList.add("cert-visible");
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = gridRef.current?.querySelectorAll(".cert-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="certs-section">
      <div className="certs-header">
        <h3 className="certs-title">Certifications</h3>
        <p className="certs-subtitle">Industry-recognized credentials</p>
      </div>
      <div className="certs-grid" ref={gridRef}>
        {certifications.map((cert, index) => (
          <div
            className="cert-card"
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="cert-icon">{cert.icon}</div>
            <div className="cert-info">
              <h4 className="cert-name">{cert.title}</h4>
              <span className="cert-issuer">{cert.issuer}</span>
            </div>
            <div className="cert-shine" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
