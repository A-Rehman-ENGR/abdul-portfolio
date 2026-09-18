function Projects() {
  const projects = [
    {
      title: "Car Rental System",
      description:
        "A Desktop-Based Car Rental Management System developed using Java GUI and connected with a MySQL database using XAMPP. The system provides an easy-to-use interface for managing cars and customer records.",
      tech: "Java • Java Swing • Java GUI • MySQL • XAMPP",
      liveDemo: "https://github.com/A-Rehman-ENGR/car-rental-system",
    },
    {
      title: "E-Commerce Website",
      description:
        "A simple E-Commerce website developed using HTML, CSS, and JavaScript with a responsive and user-friendly interface.",
      tech: "HTML • CSS • JavaScript",
      liveDemo: "https://a-rehman-engr.github.io/E-Commeres-/",
    },
    {
      title: "AI Property/Room Rental System",
      description:
        "An AI-Powered Property & Room Rental System designed to make property and room rentals safer and more reliable.",
      tech: "Full Stack • React • JavaScript • MongoDB • Node.js",
      liveDemo: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section-title">
        <p>My Work</p>
        <h2>My Projects</h2>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <span>Project {index + 1}</span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="project-tech">
                {project.tech}
              </span>

              <div className="project-buttons">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;