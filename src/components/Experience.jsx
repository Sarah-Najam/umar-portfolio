import { motion } from "framer-motion";

export default function Experience() {
  const roles = [
    {
      title: "Learning & Development Specialist",
      company: "RAK Properties PJSC • Ras Al Khaimah, UAE",
      date: "Jul 2024 – Present",
      bullets: [
        "Manage end-to-end L&D portfolio aligned to business priorities",
        "Implemented enterprise LMS & Learning Hub",
        "Redesigned onboarding & induction to accelerate productivity",
        "Led vendor selection/negotiation and managed outsourced training",
        "Conducted TNA with leaders and delivered targeted programs",
      ],
    },
    {
      title: "HR & Training Manager",
      company: "Pentagon Real Estate • Dubai, UAE",
      date: "Mar 2023 – Jun 2024",
      bullets: [
        "Led recruitment, performance, employee relations, and talent development",
        "Built engagement initiatives to improve recognition and retention",
        "Delivered L&D strategy aligned with organizational priorities",
        "Developed HR policies and supported leaders with insights",
      ],
    },
    {
      title: "Training & Development Manager",
      company: "The Dubizzle Group (Zameen) • Dubai, UAE",
      date: "Jun 2022 – Feb 2023",
      bullets: [
        "Built L&D strategy aligned with business goals",
        "Delivered workshops, recognition initiatives, and engagement campaigns",
        "Tracked learning metrics and reported insights to senior leadership",
      ],
    },
    {
      title: "Training & Development Specialist (Business Excellence)",
      company: "Danube Home • Dubai, UAE",
      date: "Aug 2018 – May 2022",
      bullets: [
        "Designed training for product, customer service, sales, and soft skills",
        "Facilitated interactive sessions and supported onboarding",
        "Administered LMS and evaluated program effectiveness",
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>

      <div className="grid">
        {roles.map((r) => (
          <motion.div
            key={r.title + r.date}
            className="card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="card-title">{r.title}</h3>
            <p className="muted">{r.company}</p>
            <p className="muted">{r.date}</p>
            <ul className="list">
              {r.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
