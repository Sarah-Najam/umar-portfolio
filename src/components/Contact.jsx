import { motion } from "framer-motion";

export default function Contact() {
  const email = "umarhussain.dxb@gmail.com";
  const phone = "+971564529713";
  const linkedin = "https://www.linkedin.com/in/umarhossain/";
  const linkedinText = "linkedin.com/in/umarhossain";

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="pill">Contact</p>
        <h2 className="h2-gradient">Let’s connect</h2>
        <p className="lead">
          Reach out for roles, collaborations, or training/enablement projects.
        </p>

        <div className="contact-grid">
          {/* LEFT: cards */}
          <div className="contact-cards">
            <a className="contact-card" href={`mailto:${email}`}>
              <div className="contact-icon">✉️</div>
              <div className="contact-meta">
                <h3>Email</h3>
                <p>{email}</p>
              </div>
              <span className="contact-arrow">→</span>
            </a>

            <a
              className="contact-card"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div className="contact-icon">in</div>
              <div className="contact-meta">
                <h3>LinkedIn</h3>
                <p>{linkedinText}</p>
              </div>
              <span className="contact-arrow">→</span>
            </a>

            <a className="contact-card" href={`tel:${phone}`}>
              <div className="contact-icon">📞</div>
              <div className="contact-meta">
                <h3>Phone</h3>
                <p>{phone}</p>
              </div>
              <span className="contact-arrow">→</span>
            </a>

            <div className="contact-mini card">
              <div className="contact-mini-item">
                <span className="label">Location</span>
                <span className="value">Ras Al Khaimah, UAE</span>
              </div>
              <div className="contact-mini-item">
                <span className="label">Availability</span>
                <span className="value">Open to opportunities</span>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="card contact-form">
            <h3 className="contact-form-title">Send a message</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;

                const name = form.name.value.trim();
                const from = form.email.value.trim();
                const message = form.message.value.trim();

                const subject = encodeURIComponent(`Website message from ${name}`);
                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${from}\n\nMessage:\n${message}`
                );

                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
              }}
            >
              <div className="field">
                <label>Your name</label>
                <input name="name" placeholder="Your name" required />
              </div>

              <div className="field">
                <label>Your email</label>
                <input name="email" type="email" placeholder="you@email.com" required />
              </div>

              <div className="field">
                <label>Message</label>
                <textarea name="message" rows="6" placeholder="Write your message..." required />
              </div>

              <button type="submit" className="hero-button primary contact-send">
                Send Message
              </button>

              <p className="contact-note">
                This opens your email app (mailto).
              </p>
            </form>
          </div>
        </div>

        <div className="contact-footer">
          <span>© {new Date().getFullYear()} Umar Hussain</span>
          <span className="dot-sep">•</span>
          <a href="#hero">Back to top</a>
        </div>
      </motion.div>
    </section>
  );
}
