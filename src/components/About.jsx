import image1 from "../assets/image1.png";
function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <p className="section-subtitle">Get To Know Me</p>

          <h2>About Me</h2>

          <p>
            I'm Abdul Rehman, a developer interested in building modern
            websites and web applications.
          </p>

          <p>
            My main skills include Frontend Development, React, Python,
            DevOps and Graphic Designing. I enjoy learning new technologies
            and turning ideas into practical projects.
          </p>

          <p>
            I'm continuously improving my development and DevOps skills by
            working on real-world projects.
          </p>
        </div>

        <div className="about-image">
          <div className="image-placeholder">
            <img src={image1} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;