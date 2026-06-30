"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiArrowRight,
  FiDownload,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { Header } from "@/components/Header";
import { ScrollTools } from "@/components/ScrollTools";
import { Section } from "@/components/Section";
import {
  achievements,
  blogPosts,
  contact,
  experiences,
  gallery,
  projects,
  qualifications,
  researchItems,
  skills,
  socials,
  stats,
  testimonials,
} from "@/data/portfolio";

const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
} as const;

export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-hidden">
      <Header />
      <ScrollTools />

      <section className="section-shell grid min-h-screen items-center gap-12 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-4 inline-flex rounded-full border border-[var(--line)] bg-white/60 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] gold-text dark:bg-white/10">
            Principal & Educationist
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            Jahanzeb Malik
          </h1>
          <p className="mt-4 text-2xl font-semibold text-[var(--navy-soft)] dark:text-slate-200">
            Islamic Studies Researcher
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            A school leader, curriculum developer and researcher committed to
            excellent education, Islamic scholarship and thoughtful integration
            of modern learning technologies.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/jahanzeb-malik-cv.pdf"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3 font-bold text-white transition hover:bg-[var(--gold)] hover:text-[#0b1736]"
            >
              <FiDownload aria-hidden /> Download CV
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-6 py-3 font-bold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)] dark:bg-white/10"
            >
              Contact Me <FiArrowRight aria-hidden />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="glass rounded-lg p-4">
                <p className="text-2xl font-black gold-text">{item.value}</p>
                <p className="mt-1 text-sm font-semibold text-[var(--muted)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass overflow-hidden rounded-lg p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[var(--navy)]">
              <Image
                src="/profile.svg"
                alt="Professional portrait placeholder for Jahanzeb Malik"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-[var(--foreground)]">
                  Al-Naseeha High School
                </p>
                <p className="text-sm text-[var(--muted)]">
                  Leadership, research and training
                </p>
              </div>
              <span className="rounded-full bg-[var(--gold-soft)] px-3 py-1 text-sm font-bold text-[var(--foreground)]">
                M.Phil
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      <Section
        id="about"
        eyebrow="About Me"
        title="Education leadership rooted in purpose, research and service."
        intro="Jahanzeb Malik works at the intersection of school leadership, Islamic scholarship and practical teacher development."
      >
        <div className="grid gap-5 lg:grid-cols-4">
          {[
            ["Personal Introduction", "An educationist focused on character, clarity and academic progress for every learner."],
            ["Educational Background", "M.Phil Islamic Studies from Riphah International University with a B.Sc foundation from University of Sindh."],
            ["Mission & Vision", "To build learning environments where modern excellence and Islamic values strengthen one another."],
            ["Professional Journey", "From teaching and academic coordination to ownership, principalship, research and curriculum leadership."],
          ].map(([title, text]) => (
            <motion.article key={title} {...cardMotion} className="glass rounded-lg p-6">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{text}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="qualifications"
        eyebrow="Qualifications"
        title="Academic foundation and professional development."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {qualifications.map((item) => (
            <motion.article key={item.title} {...cardMotion} className="glass rounded-lg p-6">
              <p className="text-sm font-bold uppercase tracking-[0.14em] gold-text">
                {item.source}
              </p>
              <h3 className="mt-3 text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="Professional Experience"
        title="School management, teaching, curriculum and teacher growth."
      >
        <div className="grid gap-4">
          {experiences.map((item, index) => (
            <motion.article
              key={item.role}
              {...cardMotion}
              className="glass grid gap-4 rounded-lg p-5 sm:grid-cols-[72px_1fr]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gold-soft)] text-xl font-black gold-text">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-xl font-black">{item.role}</h3>
                <p className="mt-1 font-semibold gold-text">{item.place}</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills" title="Capabilities for modern educational leadership.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.name} {...cardMotion} className="glass rounded-lg p-5">
                <Icon className="text-2xl gold-text" aria-hidden />
                <h3 className="mt-4 font-black">{skill.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section
        id="research"
        eyebrow="Research & Publications"
        title="Islamic scholarship with educational application."
        intro="A focused research profile covering Islamic Studies, Seerah, ethics, education and youth development."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {researchItems.map((item) => (
            <motion.article key={item.title} {...cardMotion} className="glass rounded-lg p-6">
              <p className="text-sm font-bold gold-text">{item.tag}</p>
              <h3 className="mt-3 text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{item.text}</p>
              <a href="#" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full font-bold gold-text">
                Download research paper <FiDownload aria-hidden />
              </a>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects Portfolio" title="Education projects designed for practical impact.">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.article key={project.name} {...cardMotion} className="glass rounded-lg p-6">
                <Icon className="text-3xl gold-text" aria-hidden />
                <h3 className="mt-4 text-xl font-black">{project.name}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{project.text}</p>
              </motion.article>
            );
          })}
        </div>
      </Section>

      <Section id="achievements" eyebrow="Achievements & Certifications" title="Recognition, training and measurable contributions.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} {...cardMotion} className="glass rounded-lg p-5">
                <Icon className="text-2xl gold-text" aria-hidden />
                <h3 className="mt-4 font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </Section>

      <Section id="gallery" eyebrow="Gallery" title="School activities, workshops, seminars and training moments.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.div
              key={item}
              {...cardMotion}
              className="glass flex aspect-[4/3] items-end rounded-lg bg-[linear-gradient(135deg,var(--navy),var(--navy-soft)_55%,var(--gold))] p-5 text-white"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--gold)]">
                  0{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-black">{item}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="testimonials" eyebrow="Testimonials" title="Feedback from students, parents and professionals.">
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <motion.blockquote key={item.author} {...cardMotion} className="glass rounded-lg p-6">
              <p className="text-lg leading-8 text-[var(--foreground)]">"{item.quote}"</p>
              <footer className="mt-5 font-bold gold-text">{item.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </Section>

      <Section id="blog" eyebrow="Blog" title="Articles on Islamic Studies, education and teacher training.">
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <motion.article key={post.title} {...cardMotion} className="glass rounded-lg p-6">
              <p className="text-sm font-bold uppercase tracking-[0.14em] gold-text">
                {post.category}
              </p>
              <h3 className="mt-3 text-xl font-black">{post.title}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{post.text}</p>
              <a href="#" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full font-bold text-[var(--foreground)] hover:text-[var(--gold)]">
                Read article <FiArrowRight aria-hidden />
              </a>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Start a conversation about education, research or collaboration.">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...cardMotion} className="glass rounded-lg p-6">
            <div className="space-y-5">
              <p className="flex items-center gap-3 text-[var(--muted)]">
                <FiMail className="gold-text" aria-hidden /> {contact.email}
              </p>
              <p className="flex items-center gap-3 text-[var(--muted)]">
                <FiPhone className="gold-text" aria-hidden /> {contact.whatsapp}
              </p>
              <p className="flex items-center gap-3 text-[var(--muted)]">
                <FiMapPin className="gold-text" aria-hidden /> {contact.location}
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    title={social.label}
                    className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  >
                    <Icon aria-hidden />
                  </a>
                );
              })}
            </div>
            <div className="mt-8 flex min-h-64 items-center justify-center rounded-lg border border-[var(--line)] bg-[linear-gradient(135deg,rgba(11,23,54,0.08),rgba(200,155,60,0.18))] p-5 text-center">
              <p className="max-w-sm font-semibold text-[var(--muted)]">
                Location map placeholder. Embed a Google Maps iframe here when
                the exact campus or office address is finalized.
              </p>
            </div>
          </motion.div>

          <motion.form {...cardMotion} className="glass rounded-lg p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 font-semibold">
                Name
                <input className="focus-ring rounded-lg border border-[var(--line)] bg-white/70 px-4 py-3 text-[var(--foreground)] dark:bg-white/10" name="name" placeholder="Your name" />
              </label>
              <label className="grid gap-2 font-semibold">
                Email
                <input className="focus-ring rounded-lg border border-[var(--line)] bg-white/70 px-4 py-3 text-[var(--foreground)] dark:bg-white/10" name="email" placeholder="you@example.com" type="email" />
              </label>
            </div>
            <label className="mt-4 grid gap-2 font-semibold">
              Subject
              <input className="focus-ring rounded-lg border border-[var(--line)] bg-white/70 px-4 py-3 text-[var(--foreground)] dark:bg-white/10" name="subject" placeholder="How can I help?" />
            </label>
            <label className="mt-4 grid gap-2 font-semibold">
              Message
              <textarea className="focus-ring min-h-36 rounded-lg border border-[var(--line)] bg-white/70 px-4 py-3 text-[var(--foreground)] dark:bg-white/10" name="message" placeholder="Write your message..." />
            </label>
            <button
              type="submit"
              className="focus-ring mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3 font-bold text-white transition hover:bg-[var(--gold)] hover:text-[#0b1736]"
            >
              Send Message <FiSend aria-hidden />
            </button>
          </motion.form>
        </div>
      </Section>

      <footer className="border-t border-[var(--line)] py-10">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-black">Jahanzeb Malik</p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Principal, Educationist & Islamic Studies Researcher
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["About", "Research", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="focus-ring rounded-full px-3 py-2 text-sm font-semibold text-[var(--muted)] hover:text-[var(--gold)]">
                {item}
              </a>
            ))}
          </div>
          <p className="text-sm text-[var(--muted)]">
            Copyright &copy; 2026 Jahanzeb Malik. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
