import React from "react";
import { motion } from "framer-motion";
import "../style.css";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero-badge">Ras Al Khaimah, UAE • Open to opportunities</p>

          <h1 className="hero-title">
            Hi, I’m <span className="accent">Umar Hussain</span>
          </h1>

          <p className="hero-subtitle">
            Learning & Development Leader • Sales Trainer • Talent Development
          </p>

          <div className="hero-actions">
            <a href="#contact" className="hero-button primary">
              Let’s Talk
            </a>

            <a
              href="/assets/Umar-Hussain-Resume.pdf"
              className="hero-button secondary"
              download="Umar-Hussain-Resume.pdf"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Profile Image */}
          <div className="avatar-wrap">
            <img
              className="avatar"
              src="/assets/profile.png"
              alt="Umar Hussain"
              onLoad={(e) => {
                // hide fallback when image loads successfully
                const fallback = e.currentTarget.parentElement?.querySelector(".avatar-fallback");
                if (fallback) fallback.style.display = "none";
              }}
              onError={(e) => {
                // hide broken image if it fails
                e.currentTarget.style.display = "none";
              }}
            />

            <div className="avatar-fallback">
              <span>Upload</span>
              <small>public/assets/profile.png</small>
            </div>
          </div>

          {/* Improved card under the image */}
          <div className="hero-card">
            <div className="hero-card-title">Core Expertise</div>

            <div className="hero-stat">
              <span className="stat-label">ILT / VILT</span>
              <span className="stat-value">Facilitation</span>
            </div>

            <div className="hero-stat">
              <span className="stat-label">ADDIE</span>
              <span className="stat-value">Instructional Design</span>
            </div>

            <div className="hero-stat">
              <span className="stat-label">LMS</span>
              <span className="stat-value">Build & Admin</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
