function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <p>Get In Touch</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Let's Work Together</h3>

          <p>
            Have a project idea or want to work together?
            Feel free to connect with me through my social profiles.
          </p>

          <div className="social-links">
            <a
              href="https://github.com/A-Rehman-ENGR"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.instagram.com/a_rehman05?"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        <form className="contact-form" action="https://formspree.io/f/mzebkrop" method="POST">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            name="message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;