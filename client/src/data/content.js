export const skills = [
  { group: "Backend", items: ["Java","Python","Spring Boot","Node.js","Express.js","RESTful APIs", "Spring Security", "Hibernate", "JPA", "Flask"] },
  { group: "Frontend", items: ["React", "Angular","TypeScript", "JavaScript", "React Router", "Vite", "Bootstrap","HTML5", "Tailwind CSS"," REST API Integration"] },
  { group: "Database", items: ["PostgreSQL", "MySQL","Mongo DB"] },
  { group: "Cloud", items: ["Docker", "Docker Compose", "Git", "GitHub", "OpenAPI/Swagger", "npm","Maven", "CI/CD"] },
  { group: "Testing Skills", items: ["Jest", "SuperTest", "Unit Testing", "API Testing", "Integration Testing", "Manual Testing"] },
  { group: "Concepts/Practices", items: ["Authentication & Authorization", "Soft Delete Patterns", "Data-Layer Security", "Optimistic UI Updates", "Server-Side Pagination & Filtering","API Documentation", "Performance Optimization (Lighthouse auditing)", "Technical Documentation"
] },
];

export const projects = [
  {
    entry: "01",
    github:"https://github.com/nischith20/Banking-Microservices",
    title: "Banking Microservices Platform",
    stack: "Spring Boot · Java · PostgreSQL · Docker · JWT",
    desc: "Architected a microservices banking system — independently deployable Customer, Account, Transaction, Gateway, and Registry services, secured with JWT auth and RBAC, containerized end-to-end with Docker Compose.",
    accent: "brass",
    website: null,
  },
  {
    entry: "02",
    github:"https://github.com/nischith20/taskflow",
    title: "Task Flow — multi-user task management",
    stack: "React · Type Script · Node · Express · PostgreSQL",
    desc: "Built TaskFlow, a full-stack multi-user task management app with React/TypeScript (Kanban board, drag-and-drop, optimistic UI) and a Node.js/Express/PostgreSQL REST API featuring JWT auth, role-based access control, and soft-delete recovery. Implemented server-side filtering, sorting, and pagination; documented the full API with an OpenAPI spec; containerized the stack with Docker Compose for single-command setup, Achieved an 89 Lighthouse performance score.",
    accent: "teal",
    website: "https://taskflow-future.vercel.app/",
  },
  {
    entry: "03",
    github:"https://github.com/nischith20/SignLanguageDetection",
    title: "Real-Time Sign Language Recognition",
    stack: "Python · OpenCV · TensorFlow",
    desc: "Computer vision system recognizing hand gestures live via webcam using contour analysis — 95% accuracy on core gesture classes.",
    accent: "brass",
    website: null,
  },
  {
    entry: "04",
    title: "BotLeague ",
    github:"https://github.com/nischith20/botleague",
    stack: "React · vite · tailwind CSS",
    desc: "A frontend-only React + Vite application for BotLeague, a national robotics competition platform. Landing page with hero section, Registration forms (Judge, Volunteer, Community Member), Footer with quick links and social media.",
    accent: "teal",
    website: null,
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