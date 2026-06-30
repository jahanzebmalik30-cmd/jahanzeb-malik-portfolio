import {
  FaAward,
  FaBookOpen,
  FaBrain,
  FaBullhorn,
  FaCertificate,
  FaChalkboardTeacher,
  FaFacebookF,
  FaGraduationCap,
  FaLinkedinIn,
  FaMosque,
  FaSchool,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FiBook,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiMapPin,
  FiMonitor,
  FiPenTool,
  FiUsers,
} from "react-icons/fi";

export const contact = {
  email: "jahanzeb.malik@example.com",
  whatsapp: "+92 300 0000000",
  facebook: "https://facebook.com/",
  linkedin: "https://linkedin.com/",
  location: "Sindh, Pakistan",
};

export const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Research", "research"],
  ["Projects", "projects"],
  ["Blog", "blog"],
  ["Contact", "contact"],
];

export const stats = [
  { label: "Leadership Roles", value: "5+" },
  { label: "Core Disciplines", value: "8" },
  { label: "Research Focus", value: "Islamic Studies" },
];

export const qualifications = [
  {
    title: "M.Phil Islamic Studies",
    source: "Riphah International University",
    detail: "Advanced study in Islamic scholarship, research methodology and contemporary educational discourse.",
  },
  {
    title: "B.Sc",
    source: "University of Sindh",
    detail: "Scientific foundation supporting analytical thinking, planning and evidence-based education practice.",
  },
  {
    title: "Certifications & Trainings",
    source: "Professional Development",
    detail: "Teacher training, school management, curriculum design, educational technology and AI tool integration.",
  },
];

export const experiences = [
  {
    role: "Principal & Owner",
    place: "Al-Naseeha High School",
    text: "Leads academic vision, school operations, parent engagement and staff development with a student-centered approach.",
  },
  {
    role: "Islamic Studies Lecturer",
    place: "Academic Institutions",
    text: "Delivers research-informed Islamic Studies instruction with emphasis on Seerah, ethics and applied understanding.",
  },
  {
    role: "Academic In-Charge",
    place: "School Leadership",
    text: "Coordinates schedules, assessment quality, teacher performance and learning outcomes across departments.",
  },
  {
    role: "Curriculum Developer",
    place: "Education Projects",
    text: "Designs coherent learning pathways, lesson frameworks and assessment rubrics for modern Islamic education.",
  },
  {
    role: "Teacher Trainer",
    place: "Workshops & Sessions",
    text: "Mentors educators in classroom management, pedagogy, technology use and reflective teaching practice.",
  },
];

export const skills = [
  { name: "Educational Leadership", icon: FiUsers },
  { name: "Curriculum Development", icon: FiLayers },
  { name: "Islamic Research", icon: FaMosque },
  { name: "Teacher Training", icon: FaChalkboardTeacher },
  { name: "Public Speaking", icon: FaBullhorn },
  { name: "School Management", icon: FaSchool },
  { name: "AI Tools Integration", icon: FaBrain },
  { name: "Educational Technology", icon: FiMonitor },
];

export const researchItems = [
  {
    title: "M.Phil Thesis",
    tag: "Islamic Studies",
    text: "Research focused on classical Islamic scholarship, contemporary relevance and practical educational application.",
  },
  {
    title: "Published Articles",
    tag: "Education & Faith",
    text: "Articles exploring Islamic ethics, Seerah-based character formation and school improvement strategies.",
  },
  {
    title: "Research Interests",
    tag: "Seerah Research",
    text: "Seerah pedagogy, Islamic educational philosophy, youth character building and modern learning technologies.",
  },
];

export const projects = [
  {
    name: "Al-Naseeha High School",
    icon: FaSchool,
    text: "A mission-led school environment focused on academic excellence, moral development and parent partnership.",
  },
  {
    name: "School Management System",
    icon: FiCpu,
    text: "Digital workflows for attendance, records, communication, performance tracking and administrative clarity.",
  },
  {
    name: "Al-Naseeha Quran Academy",
    icon: FiBook,
    text: "Quran learning initiative with structured progression, memorization support and values-oriented mentorship.",
  },
  {
    name: "AI Educational Projects",
    icon: FiGlobe,
    text: "Practical AI-assisted teaching resources, productivity systems and classroom planning experiments.",
  },
  {
    name: "Curriculum Development Projects",
    icon: FiPenTool,
    text: "Learning maps, lesson models and assessment standards for integrated academic and Islamic education.",
  },
];

export const achievements = [
  { title: "School Leadership", icon: FaAward, text: "Built and managed academic systems that support teachers, students and families." },
  { title: "Research Credentials", icon: FaGraduationCap, text: "Completed advanced Islamic Studies research through M.Phil-level scholarship." },
  { title: "Training Programs", icon: FaCertificate, text: "Conducted and participated in pedagogy, leadership and technology-focused trainings." },
  { title: "Academic Development", icon: FaBookOpen, text: "Designed curriculum and classroom frameworks for measurable learning progress." },
];

export const gallery = [
  "School Activities",
  "Teacher Workshops",
  "Academic Seminars",
  "Training Sessions",
  "Student Programs",
  "Community Events",
];

export const testimonials = [
  {
    quote:
      "His leadership combines discipline, compassion and a clear academic direction. Parents feel heard and students feel guided.",
    author: "Parent Feedback",
  },
  {
    quote:
      "Jahanzeb Malik explains Islamic concepts with clarity and connects them with real life in a way students remember.",
    author: "Student Feedback",
  },
  {
    quote:
      "A thoughtful educator with strong curriculum sense, practical management skills and a sincere commitment to learning.",
    author: "Professional Recommendation",
  },
];

export const blogPosts = [
  {
    title: "Seerah as a Model for Character Education",
    category: "Seerah Research",
    text: "How prophetic biography can shape empathy, discipline and purpose in school culture.",
  },
  {
    title: "Building Better Teacher Training Sessions",
    category: "Teacher Training",
    text: "A practical framework for workshops that change classroom habits, not just attendance sheets.",
  },
  {
    title: "AI Tools for Responsible Education",
    category: "Educational Technology",
    text: "Using AI to support planning, feedback and assessment while preserving teacher judgment.",
  },
  {
    title: "Islamic Studies for Contemporary Learners",
    category: "Islamic Studies",
    text: "Making scholarship accessible, authentic and relevant for young learners in modern classrooms.",
  },
];

export const socials = [
  { label: "WhatsApp", href: `https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`, icon: FaWhatsapp },
  { label: "Facebook", href: contact.facebook, icon: FaFacebookF },
  { label: "LinkedIn", href: contact.linkedin, icon: FaLinkedinIn },
  { label: "Location", href: "#contact", icon: FiMapPin },
];
