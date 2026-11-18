const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "C++", "SQL", "JavaScript"],
  },
  {
    title: "Data Engineering",
    skills: ["PostgreSQL", "Pandas", "ETL", "DBMS", "Data Pipelines"],
  },
  {
    title: "Generative AI",
    skills: ["LLMs", "RAG", "LangChain", "Embeddings", "Vector Databases"],
  },
  {
    title: "Tools & Frameworks",
    skills: ["React", "FastAPI", "Git", "Docker", "REST APIs"],
  },
];

function Skills() {
  return (
    <section className="skills-section container" id="skills">
      <div className="section-heading">
        <span className="section-label">WHAT I WORK WITH</span>
        <h2>Skills & Technologies</h2>
        <p>Technologies and tools I use to build software and AI applications.</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.title}>
            <h3>{category.title}</h3>

            <div className="skill-list">
              {category.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;