import { IconSearch, IconMapPin, IconRecharging } from "@tabler/icons-react";

export const searchFields = [
  {
    title: "Job Title",
    icon: IconSearch,
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Executive",
      "Content Writer",
      "Customer Support",
    ],
  },
  {
    title: "Location",
    icon: IconMapPin,
    options: [
      "Delhi",
      "New York",
      "San Francisco",
      "London",
      "Berlin",
      "Tokyo",
      "Sydney",
      "Toronto",
    ],
  },
  {
    title: "Skills",
    icon: IconRecharging,
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular",
      "Node.js",
      "Python",
      "Java",
      "Ruby",
      "PHP",
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "API Development",
      "Testing and Debugging",
      "Agile Methodologies",
      "DevOps",
      "AWS",
      "Azure",
      "Google Cloud",
    ],
  },
];

export const talents = [
  {
    name: "Jarrod Wood",
    role: "Software Engineer",
    company: "Google",
    location: "New York, United States",
    package: "48 - 60 LPA",
    topSkills: ["React", "SpringBoot", "MongoDB"],
    about:
      "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies using React and SpringBoot with MongoDB."
  },
  {
    name: "Sophia Martinez",
    role: "Frontend Developer",
    company: "Meta",
    location: "San Francisco, United States",
    package: "40 - 55 LPA",
    topSkills: ["React", "TypeScript", "TailwindCSS"],
    about:
      "Frontend developer at Meta with strong experience in building modern and responsive web applications. I focus on delivering seamless user experiences using React, TypeScript, and modern UI frameworks."
  },
  {
    name: "Liam Anderson",
    role: "Backend Engineer",
    company: "Amazon",
    location: "Seattle, United States",
    package: "50 - 65 LPA",
    topSkills: ["Node.js", "Express", "PostgreSQL"],
    about:
      "Backend engineer specializing in scalable microservices and API development. I design efficient backend systems using Node.js and PostgreSQL to handle large-scale production traffic."
  },
  {
    name: "Ava Thompson",
    role: "UI/UX Designer",
    company: "Adobe",
    location: "Los Angeles, United States",
    package: "38 - 50 LPA",
    topSkills: ["Figma", "UI Design", "User Research"],
    about:
      "Creative UI/UX designer focused on crafting intuitive and visually appealing digital experiences. I combine user research with design thinking to create impactful interfaces."
  },
  {
    name: "Noah Wilson",
    role: "Machine Learning Engineer",
    company: "Apple",
    location: "Cupertino, United States",
    package: "55 - 75 LPA",
    topSkills: ["Python", "TensorFlow", "Deep Learning"],
    about:
      "Machine learning engineer passionate about building intelligent systems. I work on developing predictive models and AI-driven solutions using Python and deep learning frameworks."
  },
  {
    name: "Isabella Brown",
    role: "Data Scientist",
    company: "Spotify",
    location: "Stockholm, Sweden",
    package: "35 - 48 LPA",
    topSkills: ["Python", "Pandas", "Data Visualization"],
    about:
      "Data scientist with expertise in analyzing large datasets to uncover insights. I build data pipelines and visual dashboards that help drive product decisions."
  },
  {
    name: "James Taylor",
    role: "DevOps Engineer",
    company: "Microsoft",
    location: "Hyderabad, India",
    package: "30 - 45 LPA",
    topSkills: ["Docker", "Kubernetes", "AWS"],
    about:
      "DevOps engineer experienced in automating deployment pipelines and managing scalable cloud infrastructure using Kubernetes and AWS."
  },
  {
    name: "Emily Davis",
    role: "Mobile App Developer",
    company: "Uber",
    location: "San Francisco, United States",
    package: "32 - 46 LPA",
    topSkills: ["Flutter", "Dart", "Firebase"],
    about:
      "Mobile developer focused on creating cross-platform apps using Flutter. I design smooth and performant mobile experiences backed by Firebase services."
  },
  {
    name: "Daniel Clark",
    role: "Full Stack Developer",
    company: "Netflix",
    location: "Los Gatos, United States",
    package: "45 - 62 LPA",
    topSkills: ["React", "Node.js", "GraphQL"],
    about:
      "Full stack developer building end-to-end web applications. I enjoy developing scalable APIs and interactive frontends using React and GraphQL."
  },
  {
    name: "Olivia Harris",
    role: "Cloud Engineer",
    company: "IBM",
    location: "Austin, United States",
    package: "42 - 58 LPA",
    topSkills: ["AWS", "Terraform", "CI/CD"],
    about:
      "Cloud engineer specializing in infrastructure automation and cloud architecture. I design reliable systems using Terraform and CI/CD pipelines."
  }
];

export const profile = {
  name: "Jarrod Wood",
  role: "Software Engineer",
  company: "Google",
  location: "New York, United States",

  about:
    "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",

  skills: [
    "React",
    "SpringBoot",
    "MongoDB",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "MySQL",
    "Python",
    "Django",
    "Figma",
    "Sketch",
    "Docker",
    "AWS",
  ],

  experience: [
    {
      title: "Software Engineer III",
      company: "Google",
      location: "New York, United States",
      startDate: "Apr 2022",
      endDate: "Present",
      description:
        "As a Software Engineer at Google, I design and develop scalable software solutions that enhance user experience and improve operational efficiency. I collaborate with cross-functional teams to define project requirements and implement robust applications using modern technologies.",
    },
    {
      title: "Software Engineer II",
      company: "Amazon",
      location: "Seattle, United States",
      startDate: "Jan 2020",
      endDate: "Mar 2022",
      description:
        "Worked on backend services and APIs that support large-scale distributed systems. Improved system performance and reliability while contributing to architectural improvements.",
    },
    {
      title: "Junior Software Engineer",
      company: "Netflix",
      location: "Los Gatos, United States",
      startDate: "Jun 2018",
      endDate: "Dec 2019",
      description:
        "Developed web applications and internal tools used by engineering teams. Focused on building responsive UI components and integrating REST APIs.",
    },
  ],

  certifications: [
    {
      name: "Google Professional Cloud Architect",
      issuer: "Google",
      issueDate: "Aug 2023",
      certificateId: "CB72982GG",
    },
    {
      name: "Microsoft Certified: Azure Solutions Architect Expert",
      issuer: "Microsoft",
      issueDate: "May 2022",
      certificateId: "MS12345AZ",
    },
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon",
      issueDate: "Jan 2023",
      certificateId: "AWS89321SA",
    },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "Stanford University",
      startYear: "2014",
      endYear: "2018",
    },
  ],

  projects: [
    {
      title: "AI Job Recommendation System",
      techStack: ["React", "Node.js", "MongoDB", "TensorFlow"],
      description:
        "Built an AI-powered job recommendation platform that analyzes user profiles and suggests relevant job opportunities using machine learning algorithms.",
    },
    {
      title: "Real-Time Collaboration Tool",
      techStack: ["React", "WebSocket", "Node.js"],
      description:
        "Developed a collaborative platform that allows teams to edit documents simultaneously with real-time updates.",
    },
  ],
};