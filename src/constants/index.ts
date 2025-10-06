// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import { i } from "framer-motion/client";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  bootstrap,
  express,
  docker,
  vercel,
  vei,

  threejs,
 micro,
  youtube,
  linkedin,
  twitter,
  github,
  codebuolders,
  techno,
  lost,
  agro,
  product,
  waste,
  food,
  studio,
  ivmonitor,
} from "../assets";


// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "projects",
    title: "Projects",
    link: null,
  },{
    id: "Certifications",
    title: "Certifications",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
] as const;

// Education
export const EDUCATION = [
  {
  degree: "Diploma in Electrical and Electronics Engineering",
  institution: "Sri Venkatachalapathy Polytechnic College",
  location: "Villupuram, Tamil Nadu",
  date: "2020 - 2023",
  grade: "Percentage: 77%",
  description: [
    "Graduated as one of the top performers in the class with strong academic excellence.",
    "Actively represented the class and coordinated academic as well as extracurricular activities.",
    "Worked on practical projects involving electrical circuits, power systems, and automation basics.",
    "Recognized as a good team player with leadership qualities and consistent contribution to group tasks.",
  ],
},
{
  degree: "B.Tech in Computer Science and Business Systems",
  institution: "Mailam Engineering College",
  location: "Mailam, Tindivanam, Villupuram",
  date: "2023 - 2026",
  grade: "CGPA: 2.16",
  description: [
    "Active participant in inter-college competitions and events, securing wins through strong teamwork and problem-solving skills.",
    "Recognized as a good team player with effective collaboration in both academic and extracurricular activities.",
    "Engaged in coursework blending computer science fundamentals with business system applications.",
    "Continuously working on improving technical and soft skills to align with industry-ready standards.",
  ],
}

];

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile, // Changed from web to mobile
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "vercel",
    icon: vercel,
  },  
 
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "React.js Developer",
    company_name: "Code Builders",
    icon: codebuolders,
    iconBg: "#383E56",
    date: "-",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
  title: "Machine Learning Intern",
  company_name: "VEI Technologies Pvt. Ltd.",
  icon: vei,
  iconBg: "#383E56",
  date: "Mar 2024 - Apr 2024",
  points: [
    "Completed a 30-day internship focused on Machine Learning at VEI Technologies Pvt. Ltd.",
    "Gained exposure to fundamental ML concepts, models, and applications.",
    "Worked on tasks and assignments involving practical machine learning implementations.",
    "Enhanced understanding of data-driven approaches and their role in AI solutions.",
  ],
},
  {
  title: "React.js Intern",
  company_name: "Technova Solutions",
  icon: techno,
  iconBg: "#383E56",
  date: "Jul 2025 - Aug 2025",
  points: [
    "Completed internship training in React.js development at Technova Solutions.",
    "Gained hands-on experience in building web applications using React.js.",
    "Successfully developed and completed a project during the internship.",
    "Improved practical knowledge of front-end development and modern web practices.",
  ],
},
] as const;


// Projects
export const PROJECTS = [
  {
  name: "IoT IV Infusion Monitoring System",
  description:
    "IoT-powered system that tracks IV fluid levels using a weight sensor and Atmega microcontroller, sending real-time Wi-Fi alerts when the bottle is low.",
  tags: [
    {
      name: "arduino",
      color: "blue-text-gradient",
    },
    {
      name: "iot",
      color: "green-text-gradient",
    },
    {
      name: "embedded",
      color: "pink-text-gradient",
    },
    {
      name: "wifi",
      color: "orange-text-gradient",
    },
  ],
  image: ivmonitor, // replace with your generated image variable
  source_code_link: "",
  live_site_link: "",
},
  {
  name: "Lost & Found Web Portal",
  description:
    "A full-stack web application that helps users report and find lost items. The platform allows users to post lost/found items, manage accounts, and directly connect with others to recover their belongings.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "express",
      color: "green-text-gradient",
    },
    {
      name: "nodejs",
      color: "pink-text-gradient",
    },
    {
      name: "mongodb",
      color: "orange-text-gradient",
    },
  ],
  image: lost,
  source_code_link: "https://github.com/your-github-username/lost-found-web-portal",
  live_site_link: "https://lost-found-web-portal-inside-the-ca.vercel.app/",
},
  {
  name: "Agro Connect",
  description:
    "An agricultural marketplace platform connecting farmers directly with buyers. Features include product listings, bidding, messaging, and order management to streamline farm-to-market sales.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "express",
      color: "pink-text-gradient",
    },
    {
      name: "mongodb",
      color: "orange-text-gradient",
    },
  ],
  image: agro, // replace with your actual image variable
  source_code_link: "https://github.com/your-github-username/agro-connect",
  live_site_link: "https://agro-connect-f25j.vercel.app/",
}
,
  {
  name: "EcoManage",
  description:
    "A smart waste management platform designed to promote sustainable communities. It provides intelligent waste tracking, citizen engagement, and data-driven insights to help reduce environmental impact.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "orange-text-gradient",
    },
  ],
  image: waste, // replace with your project screenshot variable
  source_code_link: "-",
  live_site_link: "-", // replace with deployed URL once live
}
,
 {
  name: "Product Customization Website",
  description:
    "A web application that allows users to customize product designs (e.g. colors, text, images) in real-time and preview them instantly before purchase.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "css",
      color: "pink-text-gradient",
    },
    {
      name: "threejs",
      color: "green-text-gradient",
    },
  ],
  image: product, // replace with your project screenshot/image variable
  source_code_link: "https://github.com/your-github-username/product-customization-website",
  live_site_link: "https://product-customization-website.vercel.app/",
}, {
  name: "Grill Restaurant Website",
  description:
    "A modern restaurant website showcasing menu items, chef specials, customer reviews, and contact/reservation features to enhance user experience and brand presence.",
  tags: [
    {
      name: "html",
      color: "blue-text-gradient",
    },
    {
      name: "css",
      color: "pink-text-gradient",
    },
    {
      name: "javascript",
      color: "green-text-gradient",
    },
  ],
  image: food, // replace with your project screenshot variable
  source_code_link: "https://github.com/Saravanakumar0004/Grill-Restaurant---Amazing-Delicious-Food",
  live_site_link: "https://saravanakumar0004.github.io/Grill-Restaurant---Amazing-Delicious-Food/",
},

] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@Fresher-Fullstack-Developer/featured",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/saravanakumar1912/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Saravanakumar0004",
  },
] as const;