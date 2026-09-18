function Experience() {
  const experiences = [
    {
      company: "Technify",
      role: "DevOps Intern",
      year: "2026",
      description:
        "Worked on deployment, Git, GitHub, cPanel and DevOps-related tasks. Gained practical experience with deploying web applications and understanding development workflows.",
    },
    {
      company: "Solsify",
      role: "Graphic Designing Intern",
      year: "2025",
      description:
        "Worked on graphic design tasks and created visual content while gaining practical experience with professional design workflows.",
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="section-title">
        <p>My Journey</p>
        <h2>Working Experience</h2>
      </div>

      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-year">
              {experience.year}
            </div>

            <div className="experience-content">
              <h3>{experience.role}</h3>

              <h4>{experience.company}</h4>

              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;