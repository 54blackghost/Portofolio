export const personalInfo = {
  name: "Ulrich Leblack",
  title: "Full-Stack Developer",
  tagline: "Building modern web experiences with clean code and creative solutions.",
  bio: "I'm a passionate full-stack developer with 2+ years of experience building scalable web applications. I specialize in React, Node.js, Django. I love turning complex problems into simple, beautiful solutions.",
  email: "ulrichleblack@gmail.com",
  location: "Douala, CM 😂😂😂",
  socials: {
    github: "https://github.com/54blackghost/",
    linkedin: "https://www.linkedin.com/in/ulrich-leblack-7a803220a/",
    twitter: "https://twitter.com",
  },
};

export const experiences = [
  { year: "2023 - Present", role: "Freelance Full-Stack Developer", company: "ULB TV", description: "Leading development of microservices architecture and React-based frontends and backend.",  demo_link: "https://example.com" },
  { year: "2025 - 2026", role: "Frontend Developer", company: "ULB Agence", description: "Built and shipped a web App.",  demo_link: "https://ulb-agence.vercel.app/" },
];

export const education = [
  { year: "2022 - 2023", degree: "Certificat", institution: "LocalHost Academy" },
];

export const skills = [
  { name: "HTML", category: "Frontend", level: 95 },
  { name: "CSS", category: "Frontend", level: 95 },
  { name: "JavaScript", category: "Frontend", level: 95 },
  { name: "React", category: "Frontend", level: 95 },
  { name: "TypeScript", category: "Frontend", level: 90 },
  { name: "TailwindCSS", category: "Frontend", level: 92 },
  { name: "Node.js", category: "Backend", level: 88 },
  { name: "Express", category: "Backend", level: 85 },
  { name: "MongoDB", category: "Database", level: 80 },
  { name: "MySql", category: "Database", level: 65 },
  { name: "Python", category: "Backend", level: 75 },
  { name: "REST APIs", category: "Backend", level: 90 },
  { name: "Django", category: "Backend", level: 65 },
  { name: "Clerk", category: "Auth", level: 80 },
  { name: "JWT", category: "Auth", level: 80 },
  { name: "Git", category: "Tools", level: 92 },
  
  { name: "VS Code", category: "Tools", level: 95 },
];

export const projects = [
  {
    id: "1",
    title: "Quick Show",
    description: "A web platform for cinema, which allows booking of films or series, seats in a specific cinema.",
    technologies: ["React", "Node.js", "Express", "TaiwindCss", "MongoDB", "clerk"],
    github_link: "https://github.com/54blackghost/QuickShow",
    demo_link: "https://example.com",
    image_url: "/quickshow.webp",
  },
  {
    id: "2",
    title: "Facebook Downloader",
    description: "Application for downloading videos from Facebook.",
    technologies: ["HTML", "CSS", "PYTHON"],
    github_link: "https://github.com/54blackghost/FB_downloader",
    demo_link: "https://example.com",
    image_url: "/fb_downloader.webp",
  },
  {
    id: "3",
    title: "Social Page",
    description: "showcase project allowing to present an online structure.",
    technologies: ["React", "TaiwindCss", "WebForm3", "framer-motion"],
    github_link: "https://github.com/54blackghost/ulb-social",
    demo_link: "https://example.com",
    image_url: "/Capture2.webp",
  },
  {
    id: "4",
    title: "PinkUP",
    description: "A social network similar to Facebook and others that allows users to connect.",
    technologies: ["React", "Node.js", "Express", "TaiwindCss", "MongoDB", "clerk"],
    github_link: "https://github.com/54blackghost/ULB_social_media",
    demo_link: "https://example.com",
    image_url: "#",
  },
  {
    id: "5",
    title: "Video Call",
    description: "A full-stack chat and video calling application for learning different languages ​​based on user preferences.",
    technologies: ["React", "Node.js", "Express", "TaiwindCss", "MongoDB", "JWT", "STREAM"],
    github_link: "https://github.com/54blackghost/VideoCall",
    demo_link: "https://videocall-33w9.onrender.com/",
    image_url: "#",
  },
  {
    id: "6",
    title: "SAVEURS D'AFRIQUE",
    description: "A web page that showcases African dishes, and especially Cameroonian dishes.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github_link: "https://github.com/54blackghost/Saveur_Afrique",
    demo_link: "https://saveur-afrique.netlify.app/",
    image_url: "#",
  },
  
];

export const services = [
  { title: "Web Development", description: "Custom web applications built with modern technologies and best practices.", icon: "Globe" },
  { title: "API Development", description: "Scalable RESTful and GraphQL APIs designed for performance and reliability.", icon: "Server" },
  { title: "Consulting", description: "Technical consulting and code reviews to improve your development process.", icon: "MessageSquare" },
];

export const testimonials = [
  { id: "1", name: "Sarah Chen", company: "ULB TV.", message: "Ulrich delivered an outstanding web application that exceeded our expectations. The attention to detail and clean code made the project a success." },
  { id: "2", name: "Michael ", company: "ULB Agence.", message: "Working with Ulrich was a fantastic experience. The project was delivered on time and the quality was exceptional." },
  { id: "3", name: "Emily Watson", company: "E-Commerce Solutions", message: "Ulrich transformed our outdated platform into a modern, high-performance application. Highly recommended!" },
];

export const skillCategories = ["Frontend", "Backend", "Database", "Tools"] as const;

export const allTechnologies = [...new Set(projects.flatMap((p) => p.technologies))];
