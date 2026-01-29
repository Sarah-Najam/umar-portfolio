import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Professional Summary</h2>
        <p>
          Learning & Development leader and Sales Enablement Trainer with strong ILT/VILT
          facilitation, coaching, and assessment experience. I design onboarding, sales
          bootcamps, and leadership programs that drive performance, supported by TNA,
          Kirkpatrick evaluation, and learning analytics.
        </p>
      </motion.div>
    </section>
  );
}
