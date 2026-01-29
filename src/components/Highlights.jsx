import { motion } from "framer-motion";

const items = [
  {
    title: "Learning Strategy",
    text: "Roadmaps aligned to business goals, stakeholder buy-in, and measurable outcomes.",
    icon: "🧭",
  },
  {
    title: "Training Delivery",
    text: "ILT/VILT facilitation, onboarding, sales enablement, and leadership workshops.",
    icon: "🎤",
  },
  {
    title: "Instructional Design",
    text: "ADDIE-based programs with assessment, evaluation, and continuous improvement.",
    icon: "🧩",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="section">
      <div className="highlights">
        <motion.div
          className="highlights-left"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <p className="pill">What I bring</p>
          <h2 className="h2-gradient">Impact-focused L&D that moves performance</h2>
          <p className="lead">
            From needs analysis to delivery and evaluation — I build learning systems that
            improve capability, speed up onboarding, and raise sales effectiveness.
          </p>
        </motion.div>

        <div className="highlights-right">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              className="highlight-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="icon">{it.icon}</div>
              <div>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
