function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      line1: "Building clean, responsive, and user-friendly web interfaces.Focused on creating smooth and engaging user experiences.",
    },
    {
      title: "React",
      line1: "Creating modern and interactive web applications with React.Building reusable components and dynamic user interfaces.",
    },
    {
      title: "Python",
      line1: "Using Python to build practical and efficient solutions.Continuously learning and improving my programming skills.",
    },
    {
      title: "DevOps",
      line1: "Learning to build, deploy, and manage modern applications.Exploring tools and practices that improve development workflows.",
    },
    {
      title: "Graphic Designing",
      line1: "Creating visually appealing designs that communicate ideas clearly.Focused on creativity, simplicity, and modern visual experiences.",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-title">
        <p>What I Know</p>
        <h2>My Skills</h2>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.title}</h3>

            <p>{skill.line1}</p>

            <p>{skill.line2}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;