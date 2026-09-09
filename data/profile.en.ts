import type { Profile } from "@/schemas/profile";

export const profileEn: Profile = {
  version: "2.0.0",
  id: "alex-chen-2024",
  lastUpdated: "2024-11-13",

  person: {
    name: "Emanuel Barboza",
    headline:
      "Software Engineering + Agility & Project Management + Artificial Intelligence",
    avatar: "/profile_photo.png",
    location: "Argentina",
  },

  contact: [
    {
      network: "Email",
      username: "emanuelbarboza5@gmail.com",
      type: "primary",
    },
    {
      icon: "GitHub",
      network: "GitHub",
      username: "emanuel-22",
      url: "https://github.com/emanuel-22/emanuel-22",
      type: "social",
    },
    {
      icon: "LinkedIn",
      network: "LinkedIn",
      username: "emabarboza",
      url: "https://www.linkedin.com/in/emabarboza/",
      type: "social",
    },
    {
      icon: "X",
      network: "X",
      username: "@emabarboza5_ok",
      url: "https://x.com/emabarboza5_ok",
      type: "social",
    },
    {
      icon: "Instagram",
      network: "Instagram",
      username: "argis_lab",
      url: "https://www.instagram.com/argis_lab/",
      type: "social",
    },
    {
      icon: "GoogleScholar",
      network: "GoogleScholar",
      username: "Emanuel Barboza",
      url: "https://scholar.google.com/citations?user=vTxKeVMAAAAJ&hl=es",
      type: "social",
    },
    {
      icon: "ResearchGate",
      network: "ResearchGate",
      username: "Emanuel Barboza",
      url: "https://www.researchgate.net/profile/Emanuel-Barboza-2",
      type: "social",
    },
  ],

  about: {
    bio: [
      "My name is Emanuel Barboza, originally from Salta, Argentina. I graduated with a degree in Systems Analysis from the National University of Salta (UNSa). My professional life began as a teaching assistant and as a research scholarship holder (EVC) through CIN (National Interuniversity Council). Over the years I've combined different areas that today make up my profile: software development, project management, agility, and software engineering. More recently, I also started digging deeper into applied AI and the possibilities it opens up for transforming how we build products, make decisions, and work as a team. That's why my experience combines a technical perspective with management practices and continuous improvement.",
      "I am currently finishing a Master's degree in Software Engineering at the National University of La Plata (UNLP). My research work focuses on technical debt in agile environments — particularly its identification, communication, prioritization, and management — as well as exploring the impact of generative AI on software engineering.",
      "Professionally, I've taken part in the development and evolution of software systems, working with multidisciplinary teams and combining the technical side with coordination, continuous improvement, and management. I've worked mainly with technologies such as PHP, JavaScript, TypeScript, Python, Java, Ruby, relational and non-relational databases, Docker, and web architectures. I also really enjoy sharing what I'm learning and listening experiences of other professionals— that's why I take part in teaching, talks, and communities. I'm interested in continuing to build projects where I can connect these different angles: technology, people, management, and continuous learning.",
    ].join("\n\n"),
  },

  communities: [
    {
      name: "Ágiles Salta",
      role: "Founder",
      description:
        "A local agile community in Salta, Argentina: a meeting space to share agile practices, learn from peers, and strengthen the province's tech ecosystem.",
      logo: "/communities/com_agilessalta.png",
      url: "https://www.linkedin.com/company/agiles-salta/",
    },
    {
      name: "Argis Lab",
      role: "Founder",
      description:
        "My own space for sharing articles, projects, and research on software engineering, agility, and artificial intelligence. Also on Instagram (@argis_lab).",
      logo: "/communities/com_argislab.png",
      url: "https://www.argislab.com",
    },
    {
      name: "Ágiles Argentina",
      role: "Representative",
      description:
        "A division of SADIO (Argentine Computer Science Society) dedicated to spreading agility across the country, coordinating meetups and events in different cities.",
      logo: "/communities/com_agilesargentina.jpeg",
      url: "https://www.meetup.com/agiles-arg/",
    },
    {
      name: "Agile-Lean Virtual Lab",
      role: "Member",
      description:
        "An international community of practice on agility, lean thinking, and change leadership, with monthly virtual meetups open to the whole region.",
      logo: "/communities/com_agilelean.png",
      url: "https://leonelzapien.com/comunidades-de-practica/agile-lean-virtual-lab",
    },
    {
      name: "Programadores Argentina",
      role: "Member",
      description:
        "Argentina's largest community of IT professionals, featuring technical articles, job opportunities, and networking among developers.",
      logo: "/communities/com_programadoresargentina.png",
      url: "https://programadoresargentina.com/",
    },
    {
      name: "Salta Dev",
      role: "Member",
      description:
        "A community of developers, designers, and entrepreneurs from Salta focused on events, learning, and collaboration to boost local talent.",
      logo: "/communities/com_saltadev.png",
      url: "https://salta.dev/",
    },
    {
      name: "Informática Salta",
      role: "Member",
      description:
        "A tech community from Salta that brings together IT professionals and enthusiasts from the province to share knowledge and experiences.",
      logo: "/communities/com_informaticasalta.jpeg",
      url: "https://chat.whatsapp.com/FBvjond1JgXKdESDv3faN7",
    },
    {
      name: "Scrum Latam Comunidad",
      role: "Member",
      description:
        "A Latin American community focused on Scrum and agile methodologies, sharing experiences and content to empower agile teams and leaders.",
      logo: "/communities/com_scrumlatam.png",
      url: "https://www.linkedin.com/company/scrum-latam-comunidad",
    },
  ],

  talks: [
    {
      title: "Prompt Engineering for Agile Teams",
      event: "Scrum LATAM Comunidad",
      category: "charla",
      role: "Speaker",
      date: "2026-07",
      description:
        "A webinar on how to apply prompt engineering in agile teams to enhance daily work with generative AI.",
      image: "/events/cha_prompt.jpeg",
      url: "https://prezi.com/view/yFho4OfruCqhANz90pBG/?referral_token=yPOKgglnB3FN",
    },
    {
      title: "Faster, but More Agile?",
      event: "Agile Lean Virtual Lab",
      category: "charla",
      role: "Speaker",
      date: "2026-08",
      description:
        "A talk on whether we're still agile when we stop understanding what we're doing with teams developing with generative AI: technical debt, transparency, and adaptability.",
      image: "/events/cha_masrapidos.jpeg",
      url: "https://lnkd.in/p/dJmjCg-b",
    },
    {
      title: "Applying Scrum Patterns in the IT Sector",
      event: "Scrum LATAM Comunidad — 5th Anniversary",
      category: "charla",
      role: "Speaker",
      date: "2025-02",
      description:
        "A talk presented at the event celebrating Scrum LATAM Comunidad's 5th anniversary.",
      image: "/events/cha_aplicaciones.png",
      url: "https://www.youtube.com/watch?v=hEWu7mHaJoU&t=282s",
    },
    {
      title: "Get on the Train – Second Station",
      event:
        "Panel with Claudio Aranda, Adriana Carina E., and Carlos Felipe Manzur Vicencio",
      category: "charla",
      role: "Panelist",
      date: "2026-07",
      description:
        "A panel discussion streamed on YouTube about AI, education/competency, agility, and organizational management, focused on how to adopt AI without losing one's own judgment.",
      image: "/events/cha_subetetren2.png",
      url: "https://www.youtube.com/live/s4ndLzI_NyA?si=fKcxeIunoXPy5X9D",
    },
    {
      title: "Get on the Train – Fourth Station",
      event:
        "Panel with Carlos Felipe Manzur Vicencio, Leonel Zapien, Iveth V., and José de Jesús Martínez Rojano",
      category: "charla",
      role: "Panelist",
      date: "2026-08",
      description:
        "A panel discussion streamed on YouTube about AI in software development, augmented teams, agility, talent, autonomous agents, productivity, and technical debt.",
      image: "/events/cha_subetetren4.png",
      url: "https://www.youtube.com/live/Ly2iReQffcY?si=rCjDkVM1N2WcBE-M",
    },
    {
      title:
        "Welcome Session for Incoming Students — Systems Analysis Degree and Programming Technical Degree",
      event: "Universidad Nacional de Salta (UNSA)",
      category: "charla",
      role: "Presenter",
      description:
        "A welcome session with incoming students of the Systems Analysis degree and the Programming technical degree at UNSA.",
      image: "/events/cha_ingresantes.png",
      url: "https://www.youtube.com/live/Re_MMj9RLiI",
    },
    {
      title: "Backlog in Action: From Theory to Practice with Agile Teams",
      event: "Live talk",
      category: "charla",
      role: "Speaker",
      description:
        "A live talk on how to put the backlog into practice with agile teams, moving from theory to real-world application.",
      image: "/events/cha_red4patas.png",
      url: "https://www.youtube.com/live/I_hcpoE4ObY?si=GMleVe8oioi1osC4",
    },
    {
      title: "Cognitive Debt in Agile Environments",
      event: "Ágiles Argentina — Tucumán 2026",
      category: "charla",
      role: "Participant · Proposed the discussion",
      date: "2026-08",
      description:
        "As a participant at Ágiles Argentina, I proposed a panel discussion on cognitive debt in agile environments.",
      image: "/events/cha_agiles.png",
      url: "https://lnkd.in/p/djSVwiWB",
    },
    {
      title: "Préndete Salta",
      event: "Salta entrepreneurship contest",
      category: "profesional",
      role: "Participant",
      date: "2025-05",
      description:
        "A contest that helps entrepreneurs from Salta turn their ideas into real businesses.",
      image: "/events/cha_prendete.png",
      url: "https://www.instagram.com/p/DKBJihzgX5u/",
    },
    {
      title: "Reasons for Software Project Failure: A Systematic Mapping",
      event: "CACIC 2024 — Software Engineering Workshop, UNLP",
      category: "congreso",
      role: "Author · Best presenter of the day",
      date: "2024-10",
      description:
        "Presented in person at the Software Engineering Workshop of the 30th Argentine Congress of Computer Science. Recognized as the best presenter of the first day.",
      image: "/events/cha_fracasos.png",
      url: "http://sedici.unlp.edu.ar/handle/10915/176524",
    },
    {
      title: "Presentation of Content-Based Image Retrieval (CBIR)",
      event: "SAIV — 48th JAIIO (Argentine Conference on Informatics)",
      category: "congreso",
      role: "Presenter",
      date: "2019-09",
      description:
        "Presented a paper on Content-Based Image Retrieval (CBIR) at the Argentine Symposium on Image and Vision (SAIV), part of the 48th Argentine Conference on Informatics (JAIIO), Salta.",
      image: "/events/cha_jaiio.png",
      url: "https://www.researchgate.net/publication/343904548_Presentacion_de_Content_Based_Image_Retrieval_CBIR",
    },
    {
      title: "What does an IT professional do? Talk for incoming students",
      event: "Universidad Nacional de Salta (UNSA) — Amphitheater",
      category: "charla",
      role: "Presenter",
      date: "2024",
      description:
        "Talk in UNSA's amphitheater for incoming students, about what an IT professional does and the scope of the degree.",
      image: "/events/cha_ingresantes2024.png",
    },
    {
      title: "Collaborator at FLISoL 2025",
      event: "Latin American Free Software Installation Festival (FLISoL)",
      category: "profesional",
      role: "Collaborator",
      date: "2025",
      description:
        "Collaborated in organizing the 2025 edition of the Latin American Free Software Installation Festival (FLISoL), an event promoting the use of free and open-source software.",
      image: "/events/cha_flisol.png",
    },
  ],

  skills: [
    { text: "Java", icon: "Java", category: "language" },
    { text: "Python", icon: "Python", category: "language" },
    { text: "TypeScript", icon: "TypeScript", category: "language" },
    { text: "JavaScript", icon: "JavaScript", category: "language" },
    { text: "PHP", icon: "PHP", category: "language" },
    { text: "Laravel", icon: "Laravel", category: "framework" },
    { text: "CakePHP", icon: "CakePHP", category: "framework" },
    { text: "Ruby on Rails", icon: "RubyOnRails", category: "framework" },
    { text: "Turbo Rails", icon: "TurboRails", category: "framework" },
    { text: "Stimulus", icon: "Stimulus", category: "framework" },
    { text: "Node.js", icon: "Nodejs", category: "framework" },
    { text: "Nest.js", icon: "Nestjs", category: "framework" },
    { text: "React", icon: "React", category: "framework" },
    { text: "Bootstrap", icon: "Bootstrap", category: "framework" },
    { text: "Tailwind", icon: "Tailwindcss", category: "framework" },
    { text: "Spring", icon: "Spring", category: "framework" },
    { text: "Next.js", icon: "nextjs", category: "framework" },
    { text: "PostgreSQL", icon: "postgresql", category: "database" },
    { text: "MySQL", icon: "MySQL", category: "database" },
    { text: "MongoDB", icon: "MongoDB", category: "database" },
    { text: "Redis", icon: "Redis", category: "database" },
    { text: "Docker", icon: "docker", category: "tool" },
    { text: "Azure", icon: "Azure", category: "tool" },
    { text: "GitLab", icon: "GitLab", category: "tool" },
    { text: "Jira", icon: "Jira", category: "tool" },
    { text: "Apache", icon: "Apache", category: "tool" },
  ],

  services: [
    {
      title: "Custom Software Development",
      description:
        "Building web applications and systems tailored to business needs, with a focus on quality, maintainability, and best practices.",
      icon: "Code2",
      image: "/services/desarrollo.png",
      details: [
        "Requirements gathering and architecture design oriented toward maintainability and scalability.",
        "Full-stack development with PHP/Laravel, Ruby on Rails, and Node.js, on top of relational and non-relational databases.",
        "Continuous integration, version control, and good testing (QA) practices throughout the project.",
        "Deployment and maintenance with Docker and cloud environments.",
      ],
    },
    {
      title: "Agile Consulting & Coaching",
      description:
        "Supporting teams in adopting Scrum and Kanban, facilitating ceremonies, and continuously improving the way they work.",
      icon: "RefreshCw",
      image: "/services/coaching-de-equipos.jpg",
      details: [
        "Assessing the team's agile maturity and defining a continuous improvement plan.",
        "Facilitating Scrum and Kanban ceremonies: planning, dailies, reviews, and retrospectives.",
        "One-on-one coaching for Scrum Masters and Product Owners in training.",
        "Agile metrics (velocity, lead time, cycle time) to make the team's progress visible.",
      ],
    },
    {
      title: "Project Management",
      description:
        "End-to-end coordination of software projects, combining a technical perspective with agile management practices.",
      icon: "ClipboardList",
      image: "/services/gestion.jpg",
      details: [
        "Planning, tracking, and communication with technical and business stakeholders.",
        "Scope, timeline, and risk management combining traditional and agile approaches.",
        "Coordinating multidisciplinary teams: development, UX/UI design, and QA.",
        "Clear, actionable progress reports to support decision-making.",
      ],
    },
    {
      title: "Training & Workshops",
      description:
        "In-company talks and workshops on agility, Scrum, and artificial intelligence applied to software development.",
      icon: "GraduationCap",
      image: "/services/talleres.jpg",
      details: [
        "In-company workshops on Scrum, Kanban, and agile fundamentals.",
        "Hands-on training in artificial intelligence applied to software development.",
        "Content tailored to the team's level, from introductory to advanced.",
        "Participatory exercises and real cases to reinforce learning.",
      ],
    },
  ],

  work: [
    {
      role: "Sr. Software Developer",
      org: "Kozaca",
      logo: "/companies/comp_kozaca.jpeg",
      location: "Santa Fe, Argentina · Remote",
      start: "2025-10",
      end: null,
      summary:
        "Development and maintenance of the Red-i (clinic management) and Convenia Salud (health insurers) web platforms.",
      highlights: [
        "Implementation of new features and continuous improvement of critical system modules: medical records, appointments, professional and administrative portals, billing, pricing logic, business rules for insurance agreements, provider fees, settlements, among others.",
        "Stack: CakePHP and Python (backend), JavaScript and Bootstrap (frontend), MySQL and MongoDB (databases); Docker, GitLab, Visual Studio Code, and Trello.",
      ],
      tech: [
        "CakePHP",
        "Python",
        "JavaScript",
        "Bootstrap",
        "MySQL",
        "MongoDB",
        "Docker",
        "GitLab",
        "Visual Studio Code",
        "Trello",
      ],
    },
    {
      role: "University Instructor – Professional Practices III",
      org: "UPATecO",
      logo: "/companies/comp_upateco.jpeg",
      start: "2026-03",
      end: null,
      summary:
        "Professional Practice III course for the University Technical Degree in Programming, Application Development track.",
      highlights: [
        "Responsible for guiding students through their transition into the tech workforce, integrating technical knowledge, professional skills, and communication competencies.",
        "Supporting the development of comprehensive projects applying good architecture and software development practices.",
        "Simulating real work environments and exposing students to agile methodologies used in the industry (Scrum, Kanban, etc.).",
        "Tracking professional practices and applied projects, including mock technical and behavioral interviews.",
        "Developing networking skills and career planning.",
      ],
    },
    {
      role: "University Instructor – Agile Methodologies",
      org: "UPATecO",
      logo: "/companies/comp_upateco.jpeg",
      start: "2025-07",
      end: "2025-10",
      summary:
        "University course on Technology Project Management through an Agile Approach, approved by UPATecO Rectoral Resolution No. 496/25.",
      highlights: [
        "Comprehensive training in agile techniques, tools, and methods such as Scrum, Kanban, and Lean Thinking for project management.",
        "Developing skills in collaborative planning and applying iterative, innovative approaches.",
        "Fostering teamwork, effective communication, and continuous improvement in developing technology initiatives.",
      ],
    },
    {
      role: "Scrum Master",
      org: "Proyecto DAR",
      logo: "/companies/comp_dar.jpeg",
      location: "Buenos Aires and surrounding areas · Remote",
      start: "2025-06",
      end: "2025-10",
      summary:
        "Collaborated on the development of a website for the Red4Patas stray animal shelter, aimed at boosting adoptions.",
      highlights: [
        "Supported the development, UX design, and QA teams in applying good agile practices, fostering self-organization and continuous improvement.",
        "Collaborated on task planning and tracking, ensuring integration across all areas.",
        "Actively participated in meetings with the Product Owner, Project Manager, and client to align expectations and goals.",
        "Promoted a collaborative work environment focused on delivering value and supporting the project's social mission.",
      ],
    },
    {
      role: "Full Stack Developer",
      org: "nuntius IT",
      logo: "/companies/comp_nuntius.jpeg",
      location: "Argentina · Hybrid",
      start: "2021-05",
      end: "2025-05",
      summary:
        "Development and maintenance of a comprehensive management system for Luxus, an international import company, covering operations, sales, imports, administration, finance, and billing. Also developed and maintained the management system and website for Bingos del Norte in Salta.",
      highlights: [
        "Backend: Ruby on Rails, Turbo Rails, Stimulus, and Python.",
        "Frontend: Node.js, HTML, Bootstrap, Tailwind, JavaScript, TypeScript, and CSS.",
        "Applied Scrum, Docker, Azure, GitLab, Visual Studio Code, Miro, and Jira.",
      ],
      tech: [
        "Ruby on Rails",
        "Turbo Rails",
        "Stimulus",
        "Python",
        "Node.js",
        "JavaScript",
        "TypeScript",
        "Tailwind",
        "Docker",
        "Azure",
        "GitLab",
        "Jira",
      ],
    },
    {
      role: "Functional Analyst | Business Analyst",
      org: "nuntius IT",
      logo: "/companies/comp_nuntius.jpeg",
      start: "2022-05",
      end: "2024-12",
      summary:
        "Gathered and analyzed client requirements for the development of a multi-category points-redemption application.",
      highlights: [
        "Identified problems, opportunities, and improvements for the project.",
        "Trained the client and pilot users on how to use the points-redemption web application.",
      ],
    },
    {
      role: "Scrum Master | Product Owner",
      org: "MakiSan Tech",
      logo: "/companies/comp_makizan.png",
      location: "Argentina · Remote",
      start: "2024-10",
      end: "2025-03",
      summary:
        "Facilitator, ensuring team communication and goal achievement.",
      highlights: [
        "Optimized workflow using Scrum for the development of an MVP for an events website in the province of Salta.",
        "Led a multidisciplinary team made up of a UX/UI designer, front-end developer, and back-end developer, adopting good agile practices, reducing blockers, and boosting the team's potential.",
      ],
    },
    {
      role: "Research Assistant",
      org: "Universidad Nacional de Salta",
      logo: "/companies/comp_unsa.png",
      location: "Salta, Salta, Argentina",
      start: "2020-08",
      end: "2021-08",
      summary:
        "Member of a project on advances in the recognition and interpretation of historical Argentine handwritten texts, funded by the Scientific Vocations Incentive Scholarship (EVC) of the National Interuniversity Council (CIN).",
      highlights: [
        "Developed and configured a platform for the analysis and processing of images of historical handwritten texts from the province of Salta.",
        "Prepared and wrote articles published in national journals.",
      ],
      tech: ["Python", "Artificial Intelligence"],
    },
    {
      role: "Software Developer",
      org: "Universidad Nacional de Salta",
      logo: "/companies/comp_unsa.png",
      location: "Remote",
      start: "2020-06",
      end: "2021-06",
      summary:
        "Development of a web system for managing neighborhood information in the City of Salta, so that surveyors and supervisors from the General Directorate of Statistics (DGE) could have up-to-date information for decision-making.",
      highlights: ["Requirements gathering, analysis, and system design tasks."],
      tech: ["PHP", "Laravel", "PostgreSQL", "Bootstrap", "Apache"],
    },
    {
      role: "Teaching Assistant",
      org: "Universidad Nacional de Salta",
      logo: "/companies/comp_unsa.png",
      location: "Salta, Salta, Argentina",
      start: "2018-08",
      end: "2021-05",
      summary:
        "Teaching assistant for the courses Programming Elements, Programming, Algorithms and Data Structures, and Numerical Programming in the Systems Analysis degree and the University Technical Degree in Programming.",
      highlights: [
        "Prepared office-hour sessions and study materials for students, under the supervision of the lead professors.",
        "Helped organize student group projects, guiding their development and presentation.",
      ],
      tech: ["Java"],
    },
  ],

  education: [
    {
      school: "Universidad Nacional de La Plata (UNLP)",
      degree: "Master's and Specialization Degree in Software Engineering",
      start: "2024-04",
      end: null,
      logo: "/studies/uni_unlp.png",
      description: [
        'Final Integrative Project for the Specialization in Software Engineering: "A Systematic Literature Review on Technical Debt in Agile Software Development Environments," supervised by Dr. Gustavo Rossi and co-supervised by Dr. Alejandra Garrido.',
        'Master\'s Thesis in Software Engineering: "Design and Evaluation of a Debt Stories-Based Approach to Communicate and Prioritize Technical Debt Between Technical and Business Roles in Agile Teams," supervised by Dr. Alejandra Garrido and co-supervised by Dr. Gustavo Rossi.',
      ].join("\n\n"),
    },
    {
      school:
        "Universidad Tecnológica Nacional - Facultad Regional Resistencia, Chaco (UTN FRRe)",
      degree: "Diploma in Software Testing",
      start: "2026-03",
      end: "2026-07",
      logo: "/studies/uni_utnfrre.jpg",
      url: "https://drive.google.com/file/d/1Dl-leJDsf4kmbgU5WJCqqzJmEvil_mDX/view?usp=sharing",
    },
    {
      school:
        "Universidad Tecnológica Nacional - Facultad de Buenos Aires (UTN BA)",
      degree: "Diploma in Agile Methodologies and Frameworks",
      start: "2024-04",
      end: "2024-08",
      logo: "/studies/uni_utnba.png",
      description: "Certificate validated with blockchain.",
      url: "https://validator.centrodeelearning.com/validator/6daa6343-381f-42ab-8db6-9be96a28f491",
    },
    {
      school: "Universidad Nacional de Salta (UNSa)",
      degree: "Bachelor's Degree in Systems Analysis",
      start: "2015-01",
      end: "2022-12",
      logo: "/studies/uni_unsa.png",
      description: [
        'Thesis: "Applying Scrum to Develop a Management Software System for Institutions Providing Home and Hospital-Based Education in the Province of Salta," supervised by Prof. Adriana Binda and Prof. Martín Díaz.',
        "Framework: Scrum and agile practices. Technologies: Laravel, XAMPP, MySQL, JavaScript, Bootstrap, Visual Studio Code, and Taiga.",
      ].join("\n\n"),
      url: "https://drive.google.com/file/d/1QZnG_AWNHT4rjs_4kgWeDdBAxcu9E6r5/view?usp=sharing",
    },
  ],
};
