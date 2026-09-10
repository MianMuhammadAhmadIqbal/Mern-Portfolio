import restoposDashboard from "../assets/projects/restopos-dashboard.png";
import cueCommandDashboard from "../assets/projects/cue-command-dashboard.png";

export const HERO_CONTENT = `I design and ship full-stack products end to end — React on the front, Node/Express/MongoDB underneath, and everything wired together to survive real traffic, not just a demo.`;

export const ABOUT_TEXT = `I'm a Computer Science student at KFUEIT and a Full Stack MERN Developer passionate about building modern, scalable, and user-focused web applications. I started my journey with HTML, CSS, and JavaScript, then expanded my skills into React and full-stack development with Node.js, Express.js, and MongoDB.

I focus on creating clean, efficient, and maintainable applications with strong foundations in frontend architecture, backend development, API integration, authentication, database management, and deployment. I enjoy solving the problems that often go unnoticed — the edge cases, the production bugs, the configuration details, and the small improvements that make applications reliable and ready for real-world use.

`;

export const JOURNEY = [
  {
    year: "2024",
    title: "HTML, CSS & JavaScript",
    detail:
      "Certified web development training. Built the reflexes: semantic markup, layout systems, DOM manipulation.",
  },
  {
    year: "2024",
    title: "React",
    detail:
      "Hooks, routing, context, custom hooks. Shipped a todo app and a GitHub profile finder to production on Vercel.",
  },
  {
    year: "2025",
    title: "Node.js & Express",
    detail:
      "REST APIs, middleware, JWT auth. Started thinking in request/response cycles instead of just components.",
  },
  {
    year: "2025",
    title: "MongoDB & the full MERN loop",
    detail:
      "Schema design with Mongoose, Atlas in production, and the discipline of keeping frontend and backend contracts in sync.",
  },
  {
    year: "2026",
    title: "RestoPOS — client delivery",
    detail:
      "A full restaurant POS system: granular permissions, OTP email, PDF receipts, offline queuing, Cloudinary uploads. Deployed and debugged in production.",
  },
  {
    year: "2026",
    title: "Cue Command — multi-tenant SaaS",
    detail:
      "A multi-tenant snooker club management platform for real clubs across Pakistan, with real-time sync, billing, and a full permissions system.",
  },
  {
    year: "2026",
    title: "Appverse Technologies internship",
    detail: "Frontend Developer Intern.",
  },
];

export const TECH_STACK = [
  {
    group: "Frontend",
    items: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Redux",
      "RTK Query",
      "React Router",
      "Framer Motion",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "JWT Auth",
      "REST APIs",
      "Socket.IO",
      "Nodemailer",
      "Multer",
    ],
  },
  {
    group: "Database",
    items: ["MongoDB", "Mongoose", "MongoDB Atlas"],
  },
  {
    group: "DevOps & Tools",
    items: [
      "Vercel",
      "Render",
      "Cloudinary",
      "Resend",
      "Git & GitHub",
      "Postman",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution:
      "Khwaja Fareed University of Engineering & Information Technology (KFUEIT)",
    duration: "2024 - Present (Expected Graduation: 2028)",
    description:
      "Building strong foundational roots in software engineering, algorithms, and application architectures.",
    coursework: [
      "Programming Fundamentals (C++)",
      "Object-Oriented Programming (Java)",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Artificial Intelligence",
      "Python Programming",
    ],
  },
  {
    degree: "Professional Full-Stack Web Development Training",
    institution: "Promoteez International IT Training Institute",
    duration: "2024",
    description:
      "Completed hands-on full-stack web development training focused on building responsive and scalable web applications. Developed frontend interfaces, created backend APIs, managed databases, and learned modern software development practices.",
    coursework: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React JS",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git & GitHub",
      "Responsive Web Design",
    ],
  },
];

export const EXPERIENCES = [
  {
    year: "28-JUN-2026 — 22-AUG-2026",
    role: "Frontend Developer Intern",
    company: "Appverse Technologies",
    description:
      "Delivering production-ready assignments covering semantic HTML5, modern CSS architecture, responsive design, accessibility (WCAG), JavaScript (ES6+), React, state management, API integration, performance optimization, reusable component architecture, design systems, and design tokens—each grounded in real-world development",
    technologies: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Accessibility (WCAG)",
      "JavaScript (ES6+)",
      "React",
      "State Management",
      "REST APIs",
      "Component Architecture",
      "Design Systems",
      "Design Tokens",
      "Performance Optimization",
    ],
  },
  {
    year: "2026",
    role: "Freelance Full Stack Developer",
    company: "Independent Client Work",
    description:
      "Delivered RestoPOS, a production MERN restaurant point-of-sale system, Cue Command, a multi-tenant SaaS snooker club management platform, plus Cryptool, FitTrack and Velora frontend. Handled the full lifecycle: build, debug, deploy, and hand off.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Render",
      "Vercel",
    ],
  },
];

export const FEATURED_PROJECTS = [
  {
    title: "RestoPOS",
    tagline:
      "A full restaurant point-of-sale system, built and deployed for a real client.",
    image: restoposDashboard,
    description:
      "RestoPOS handles the whole floor-to-kitchen loop — orders, billing, inventory, and staff roles — as a production MERN application, not a portfolio demo. It runs on MongoDB Atlas with an Express/Node API, a React/Redux/Tailwind frontend, and a deployment pipeline split across Render and Vercel.",
    highlights: [
      {
        label: "Role-based access",
        detail:
          "Granular permissions separating owners, managers, and staff at the API layer, not just the UI.",
      },
      {
        label: "OTP email verification",
        detail:
          "Account flows secured with one-time codes, sent via Brevo's HTTP API after Render blocked outbound SMTP.",
      },
      {
        label: "Offline order queuing",
        detail:
          "Orders taken during a dropped connection queue locally and sync once the network returns.",
      },
      {
        label: "PDF receipts & Cloudinary",
        detail:
          "Generated PDF receipts and persistent image storage, replacing Render's ephemeral disk.",
      },
    ],
    stack: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Cloudinary",
      "Render",
      "Vercel",
    ],
    metrics: [
      { value: "4", label: "Core modules" },
      { value: "3", label: "Role tiers" },
      { value: "100%", label: "Client delivered" },
    ],
    mockUrl: "restopos.app/dashboard",
    mockWidgets: ["Orders", "Inventory", "Staff"],
  },
  {
    title: "Cue Command",
    tagline:
      "A multi-tenant SaaS platform for snooker clubs, from bookings to daily cash reconciliation.",
    image: cueCommandDashboard,
    description:
      "Cue Command is a multi-tenant snooker club management platform built for real clubs across Pakistan — bookings, per-game billing, POS, customer and supplier ledgers, and staff permissions, all isolated per tenant on a shared MongoDB backend and synced live over WebSockets.",
    highlights: [
      {
        label: "True multi-tenancy",
        detail:
          "Tenant-scoped MongoDB plugins isolate every club's data on a shared database and schema.",
      },
      {
        label: "Real-time sync",
        detail:
          "Socket.IO pushes table status, bookings, and POS updates live across every connected device in a club.",
      },
      {
        label: "37-key permissions system",
        detail:
          "Granular, tenant-aware permission keys governing exactly what each staff role can see and do.",
      },
      {
        label: "Cash & billing operations",
        detail:
          "Per-game billing, POS, membership benefits, daily closing with cash reconciliation, and customer/supplier ledgers.",
      },
      {
        label: "Analytics & PWA",
        detail:
          "Timezone-correct analytics for Pakistan, a recycle bin for safe deletes, Resend-powered email, and a full PWA setup.",
      },
    ],
    stack: [
      "React",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Resend",
    ],
    metrics: [
      { value: "37", label: "Permission keys" },
      { value: "1st", label: "Live club onboarded" },
      { value: "Real-time", label: "Sync across devices" },
    ],
    mockUrl: "cuecommand.app/dashboard",
    mockWidgets: ["Bookings", "POS", "Ledgers"],
  },
];

export const PROJECTS = [
  {
    title: "RestoPOS — Restaurant POS System",
    image: restoposDashboard,
    description:
      "A production restaurant point-of-sale system covering orders, billing, inventory, and role-based staff access — built and deployed for a real client.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    tags: ["Full Stack", "MERN", "POS"],
  },
  {
    title: "Cue Command — Snooker Club SaaS",
    image: cueCommandDashboard,
    description:
      "A multi-tenant SaaS platform for managing snooker clubs — bookings, per-game billing, POS, ledgers, and real-time sync across devices, live with its first real club.",
    technologies: [
      "React",
      "RTK Query",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
    ],
    tags: ["Full Stack", "MERN", "SaaS", "Multi-tenant"],
  },
  {
    title: "Cryptool — Crypto Analytics Dashboard",
    description:
      "A data-dense crypto dashboard with live market prices, historical charts, and portfolio tracking, built as a frontend client project.",
    technologies: ["React", "Tailwind CSS", "Recharts", "REST API", "Vite"],
    tags: ["Frontend", "Dashboard", "Data Viz"],
    mockUrl: "cryptool.app/dashboard",
    mockWidgets: ["Market", "Charts", "Portfolio"],
  },
];

export const SERVICES = [
  {
    title: "Full Stack Web Development",
    description:
      "End-to-end builds — React frontend, Node/Express API, MongoDB data layer — shipped as one coherent system.",
  },
  {
    title: "REST API Development",
    description:
      "Clean, documented endpoints with proper validation, error handling, and JWT-based authentication.",
  },
  {
    title: "Admin Dashboards",
    description:
      "Role-aware dashboard UIs for managing orders, inventory, users, or content — built for people who use them daily.",
  },
  {
    title: "Deployment & DevOps",
    description:
      "Production deployment on Render and Vercel, MongoDB Atlas configuration, and the debugging that comes after launch.",
  },
];

export const STATS = [
  { value: "6+", label: "Projects shipped" },
  { value: "10+", label: "Technologies" },
  { value: "10+", label: "GitHub repositories" },
  { value: "2+", label: "Years learning & building" },
];

export const CONTACT = {
  address: "Rahim Yar Khan, Punjab, Pakistan",
  phoneNo: "+92 314 967111 4",
  email: "ahmad70iqbal@gmail.com",
};
