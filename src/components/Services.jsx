import { motion } from "framer-motion";
import "../styles/Services.css";

export default function Services() {
  const services = [
    {
      icon: "📘",
      title: "Training Programs",
      description: "ILT/VILT workshops, onboarding, sales bootcamps, and leadership sessions.",
    },
    {
      icon: "🧠",
      title: "Instructional Design",
      description: "ADDIE-based curriculum design with assessments and learning evaluation.",
    },
    {
      icon: "📊",
      title: "Learning Strategy",
      description: "TNA, roadmaps, LMS setup, analytics, and ROI tracking for performance impact.",
    },
  ];

  return (
    <section id="services" className="section services-section">
      <h2>Services</h2>

      <div className="services-grid">
        {services.map((s) => (
          <motion.div
            key={s.title}
            className="service-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
