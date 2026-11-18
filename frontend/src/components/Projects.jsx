const projects = [
  {
    number: "01",
    title: "Enterprise AI Knowledge Assistant",
    description:
      "An AI-powered knowledge assistant that answers questions using company documents with Retrieval Augmented Generation (RAG).",
    technologies: ["Python", "LangChain", "RAG", "FAISS", "Groq"],
    category: "Generative AI",
    github: "#",
    demo: "#",
  },
  {
    number: "02",
    title: "Movie Recommendation System",
    description:
      "A semantic movie recommendation system that uses embeddings and vector search to find movies based on user preferences.",
    technologies: ["Python", "Embeddings", "FAISS", "Streamlit"],
    category: "Machine Learning",
    github: "#",
    demo: "#",
  },
  {
    number: "03",
    title: "SQL Developer Workspace",
    description:
      "A subscription and billing analytics project involving SQL queries, payment tracking, and access entitlement analysis.",
    technologies: ["Python", "SQL", "PostgreSQL", "Pandas"],
    category: "Data Engineering",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section className="projects-section container" id="work">

      <div className="section-heading">
        <span className="section-label">WHAT I'VE BUILT</span>

        <h2>Selected Work<span>.</span></h2>

        <p>
          Some projects where I experiment, learn, and build
          practical solutions.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-card" key={project.number}>

            <div className="project-top">
              <span className="project-number">
                PROJECT / {project.number}
              </span>

              <span className="project-category">
                {project.category}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>

              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo ↗
              </a>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;