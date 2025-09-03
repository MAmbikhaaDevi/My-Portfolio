import { Code, GitMerge, Github, Figma, Bot, Database, Flame, BrainCircuit, Unplug, Brain, CodeXml, GitBranch, TerminalSquare, DatabaseZap, Cloud } from 'lucide-react';
import React from 'react';

export const about = {
  paragraph: "As a passionate software developer with a Master's in Computer Science, I specialize in both creative web development and intelligent AI/ML solutions. My experience includes building responsive user interfaces and developing predictive models with Python and TensorFlow. I thrive on solving complex problems and am dedicated to creating efficient, scalable applications that push the boundaries of technology.",
};

export const experience = [
  {
    role: "AI Intern",
    company: "SkillForge",
    period: "July 2025 – Aug 2025",
    description: "Developed and implemented machine learning models for predictive analytics.",
  },
  {
    role: "Web Developer Intern",
    company: "Acme Infotek",
    period: "July 2024 – Dec 2024",
    description: "Contributed to the development of responsive and user-friendly web interfaces.",
  },
];

export const education = [
  {
    degree: "M.Sc. Computer Science",
    institution: "Sri Sarada College for Women, Tirunelveli",
    period: "2022–2024",
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "Sri Sarada College for Women, Tirunelelveli",
    period: "2019–2022",
  },
];

export const skills = [
  { name: 'HTML', icon: <CodeXml /> },
  { name: 'CSS', icon: <CodeXml /> },
  { name: 'JavaScript', icon: <CodeXml /> },
  { name: 'Python', icon: <Code /> },
  { name: 'SQL', icon: <Database /> },
  { name: 'MongoDB', icon: <DatabaseZap /> },
  { name: 'MySQL', icon: <Database /> },
  { name: 'Firebase', icon: <Flame /> },
  { name: 'Pandas', icon: <Code /> },
  { name: 'NumPy', icon: <Code /> },
  { name: 'Matplotlib', icon: <Code /> },
  { name: 'TensorFlow', icon: <BrainCircuit /> },
  { name: 'Keras', icon: <Brain /> },
  { name: 'Git', icon: <GitBranch /> },
  { name: 'GitHub', icon: <Github /> },
  { name: 'VS Code', icon: <TerminalSquare /> },
  { name: 'Jupyter', icon: <Code /> },
  { name: 'Netlify', icon: <Cloud /> },
  { name: 'Figma', icon: <Figma /> },
  { name: 'UI/UX', icon: <Figma /> },
  { name: 'Bootstrap', icon: <CodeXml /> },
  { name: 'AWS', icon: <Unplug /> },
];

export const projects = [
  // AI/ML
  {
    title: "Real-time Parkinson’s Disease Detector",
    category: "AI/ML",
    emoji: "🧠",
    githubUrl: "https://github.com/MAmbikhaaDevi/Real-Time-Parkinson-Disease-Detector",
  },
  {
    title: "Customer Churn Prediction using ANN",
    category: "AI/ML",
    emoji: "💡",
    githubUrl: "https://github.com/MAmbikhaaDevi/Customer-Churn-Prediction-using-ANN",
  },
  // Data Science
  {
    title: "Diamonds Price Prediction",
    category: "Data Science",
    emoji: "💎",
    githubUrl: "https://github.com/MAmbikhaaDevi/Data-Science-Projects/tree/main/Diamonds-Price-Prediction-main",
  },
  {
    title: "House Price Prediction",
    category: "Data Science",
    emoji: "🏠",
    githubUrl: "https://github.com/MAmbikhaaDevi/Data-Science-Projects/tree/main/House-Price-Prediction-main",
  },
  {
    title: "Titanic Detection",
    category: "Data Science",
    emoji: "🚢",
    githubUrl: "https://github.com/MAmbikhaaDevi/Data-Science-Projects/tree/main/Titanic-Detection-main/Titanic-Detection-main",
  },
  // Frontend
  {
    title: "Rock Paper Scissor Game",
    category: "Frontend",
    emoji: "✂️",
    liveUrl: "https://ambirockpapperscissorgame.netlify.app/",
    githubUrl: "https://github.com/MAmbikhaaDevi/FrontEnd-projects",
  },
  {
    title: "Code Editor",
    category: "Frontend",
    emoji: "💻",
    liveUrl: "https://ambiadcodeeditor.netlify.app/",
    githubUrl: "https://github.com/MAmbikhaaDevi/FrontEnd-projects",
  },
  {
    title: "AI Voice Assistant",
    category: "Frontend",
    emoji: "🤖",
    liveUrl: "https://ambisambharaaivoiceassistant.netlify.app/",
    githubUrl: "https://github.com/MAmbikhaaDevi/FrontEnd-projects",
  },
  {
    title: "My Portfolio",
    category: "Frontend",
    emoji: "👩‍💼",
    liveUrl: "https://ambikhaadevimportfolio.netlify.app/",
    githubUrl: "https://github.com/MAmbikhaaDevi/FrontEnd-projects",
  },
  {
    title: "E-Commerce Website",
    category: "Frontend",
    emoji: "🛒",
    liveUrl: "https://ambiecommercewebsite.netlify.app/",
    githubUrl: "https://github.com/MAmbikhaaDevi/FrontEnd-projects",
  },
  // UI/UX
  {
    title: "The Animated E-Commerce Website Landing Page",
    category: "UI/UX",
    emoji: "🛍️",
    liveUrl: "https://www.figma.com/proto/H4gdkOFLsoVL1Hl0Ad7iro/Animated-E-Commerce-Website-Landing-Page-%28Community%29?node-id=1-2&p=f&t=OZREET4zImu3DhFN-0&scaling=contain&content-scaling=fixed&page-id=0%3A1",
  },
  {
    title: "Login Animated Landing Page",
    category: "UI/UX",
    emoji: "🔑",
    liveUrl: "https://www.figma.com/proto/FWfrt4fsW9hXMOjH1N3NHv/Animated-Landing-Page-with-Login-Form-%28Community%29?node-id=6-3&p=f&t=7qzlxhZDY4W3pZup-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A3",
  },
  {
    title: "YouTube Wireframes",
    category: "UI/UX",
    emoji: "📺",
    liveUrl: "https://www.figma.com/proto/SAnkCtRvevXS4lt8W5JWjZ/Wireframe-%28Youtube%29-%28Community%29?node-id=1-2&p=f&t=waWgpjRdnb9G9JgU-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
  {
    title: "The Food Delivery App",
    category: "UI/UX",
    emoji: "🍔",
    liveUrl: "http://figma.com/proto/RUPZKa1FzrasOsOnEkqsPw/Food-App-%28Community%29?node-id=80-883&p=f&t=mail9DFKDdD9ldiN-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
];


export const contact = {
  email: "mailto:mjambikhaadevi@gmail.com",
  linkedin: "https://www.linkedin.com/in/ambikhaadevim/",
  github: "https://github.com/MAmbikhaaDevi",
};
