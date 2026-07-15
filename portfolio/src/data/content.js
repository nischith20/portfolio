export const skills = [
  { group: "Languages", items: ["Java", "Python", "JavaScript", "SQL"] },
  { group: "Backend", items: ["Spring Boot", "Spring Security", "Hibernate", "REST APIs", "Flask"] },
  { group: "Frontend", items: ["React", "Angular", "Tailwind CSS"] },
  { group: "Database", items: ["PostgreSQL", "MySQL"] },
  { group: "DevOps", items: ["Docker", "Docker Compose", "Git", "CI/CD"] },
  { group: "Data", items: ["Pandas", "NumPy", "Power BI", "Tableau"] },
];

export const projects = [
  {
    entry: "001",
    title: "Banking Microservices Platform",
    stack: "Spring Boot · Java · PostgreSQL · Docker · JWT",
    desc: "Architected a microservices banking system — independently deployable Customer, Account, Transaction, Gateway, and Registry services, secured with JWT auth and RBAC, containerized end-to-end with Docker Compose.",
    accent: "brass",
  },
  {
    entry: "002",
    title: "Real-Time Sign Language Recognition",
    stack: "Python · OpenCV · TensorFlow",
    desc: "Computer vision system recognizing hand gestures live via webcam using contour analysis — 95% accuracy on core gesture classes.",
    accent: "teal",
  },
  {
    entry: "003",
    title: "Outhana Cafe — Full Stack Ordering App",
    stack: "Angular · Spring Boot · MySQL",
    desc: "End-to-end cafe management app: Angular frontend, Spring Boot REST backend, MySQL persistence, CRUD-ready feedback/contact APIs.",
    accent: "brass",
  },
];

export const experience = {
  role: "Data Analyst Intern",
  company: "Adversity Solutions",
  period: "Feb – May 2025",
  desc: "Ran exploratory data analysis on structured and unstructured datasets, built interactive Power BI/Tableau dashboards, and cleaned large datasets in Python (Pandas, NumPy) for downstream accuracy.",
};

export const education = {
  school: "The National Institute of Engineering, Mysuru",
  degree: "B.E. in Information Science",
  period: "2021 – 2025",
};

export const certifications = [
  { name: "The Joy of Computing Using Python", issuer: "NPTEL" },
  { name: "Introduction to DevOps", issuer: "Coursera (IBM)" },
];