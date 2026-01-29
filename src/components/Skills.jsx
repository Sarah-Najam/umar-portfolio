import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Learning Strategy & Roadmaps",
    "Sales Enablement Training",
    "Instructional Design (ADDIE, Kirkpatrick)",
    "Curriculum Design & Facilitation",
    "Training Needs Analysis (TNA)",
    "Onboarding & Induction",
    "Leadership Development",
    "Learning Analytics & ROI",
    "Stakeholder & Vendor Management",
    "LMS (Build/Admin)",
  ];

  return (
    <section id="skills" className="section">
      <h2>Core Strengths</h2>

      <motion.div
        className="card"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="chips">
          {skills.map((s) => (
            <span className="chip" key={s}>{s}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
