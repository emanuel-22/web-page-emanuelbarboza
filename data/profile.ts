import type { Profile } from "@/schemas/profile";

export const profile: Profile = {
  version: "2.0.0",
  id: "alex-chen-2024",
  lastUpdated: "2024-11-13",

  person: {
    name: "Emanuel Barboza",
    headline:
      "Ingeniería de Software + Agilidad y Gestión de Proyectos + Inteligencia Artificial",
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
      "Mi nombre es Emanuel Barboza, oriundo de Salta, Argentina. Soy graduado de la carrera Licenciatura en Análisis de Sistemas en la Universidad Nacional de Salta (UNSa). Mis comienzos en el mundo laboral fueron como auxiliar docente y becario de investigación EVC por la CIN (Consejo Interuniversitario Nacional). A lo largo de los años fui combinando distintas áreas que hoy forman parte de mi perfil: desarrollo de software, gestión de proyectos, agilidad e ingeniería de software. En este último tiempo, también empecé a profundizar en IA aplicada y en las posibilidades que abre para transformar la forma en que desarrollamos productos, tomamos decisiones y trabajamos en equipo. Es por ello que mi experiencia combina una mirada técnica con prácticas de gestión y mejora continua.",
      "Actualmente estoy finalizando una Maestría en Ingeniería de Software en la Universidad Nacional de La Plata (UNLP). Mi trabajo de investigación se centra en la deuda técnica en entornos ágiles, especialmente en su identificación, comunicación, priorización y gestión, además de explorar el impacto de la IA generativa en la ingeniería de software.",
      "En lo profesional, participé en el desarrollo y evolución de sistemas de software, trabajando con equipos multidisciplinarios y combinando la parte técnica con la coordinación, la mejora continua y la gestión. He trabajado principalmente con tecnologías como PHP, JavaScript, TypeScript, Python, Java, Ruby, bases de datos relacionales y no relacionales, Docker y arquitecturas web. Además, disfruto mucho compartir lo que voy aprendiendo y escuchar experiencia de otros profesionales. Por eso también participo en actividades de docencia, charlas y comunidades. Me interesa seguir construyendo proyectos en los que pueda conectar estas distintas miradas: tecnología, personas, gestión y aprendizaje continuo.",
    ].join("\n\n"),
  },

  communities: [
    {
      name: "Ágiles Salta",
      role: "Fundador",
      description:
        "Comunidad local de agilidad en Salta, Argentina: un espacio de encuentro para compartir prácticas ágiles, aprender entre pares y fortalecer el ecosistema tech de la provincia.",
      logo: "/communities/com_agilessalta.png",
      url: "https://www.linkedin.com/company/agiles-salta/",
    },
    {
      name: "Argis Lab",
      role: "Fundador",
      description:
        "Espacio propio para compartir artículos, proyectos e investigaciones sobre ingeniería de software, agilidad e inteligencia artificial. También en Instagram (@argis_lab).",
      logo: "/communities/com_argislab.png",
      url: "https://www.argislab.com",
    },
    {
      name: "Ágiles Argentina",
      role: "Representante",
      description:
        "División de SADIO (Sociedad Argentina de Informática) dedicada a difundir la agilidad en el país, coordinando encuentros y jornadas en distintas ciudades.",
      logo: "/communities/com_agilesargentina.jpeg",
      url: "https://www.meetup.com/agiles-arg/",
    },
    {
      name: "Agile-Lean Virtual Lab",
      role: "Miembro",
      description:
        "Comunidad de práctica internacional sobre agilidad, lean thinking y liderazgo del cambio, con encuentros virtuales mensuales abiertos a toda la región.",
      logo: "/communities/com_agilelean.png",
      url: "https://leonelzapien.com/comunidades-de-practica/agile-lean-virtual-lab",
    },
    {
      name: "Programadores Argentina",
      role: "Miembro",
      description:
        "La comunidad de profesionales IT más grande de Argentina, con artículos técnicos, oportunidades laborales y networking entre developers.",
      logo: "/communities/com_programadoresargentina.png",
      url: "https://programadoresargentina.com/",
    },
    {
      name: "Salta Dev",
      role: "Miembro",
      description:
        "Comunidad de desarrolladores, diseñadores y emprendedores de Salta enfocada en eventos, aprendizaje y colaboración para impulsar el talento local.",
      logo: "/communities/com_saltadev.png",
      url: "https://salta.dev/",
    },
    {
      name: "Informática Salta",
      role: "Miembro",
      description:
        "Comunidad tecnológica de Salta que reúne a profesionales y entusiastas de la informática de la provincia para compartir conocimiento y experiencias.",
      logo: "/communities/com_informaticasalta.jpeg",
      url: "https://chat.whatsapp.com/FBvjond1JgXKdESDv3faN7",
    },
    {
      name: "Scrum Latam Comunidad",
      role: "Miembro",
      description:
        "Comunidad latinoamericana enfocada en Scrum y metodologías ágiles, donde se comparten experiencias y contenido para potenciar equipos y líderes ágiles.",
      logo: "/communities/com_scrumlatam.png",
      url: "https://www.linkedin.com/company/scrum-latam-comunidad",
    },
  ],

  talks: [
    {
      title: "Prompt Engineering para Equipos Ágiles",
      event: "Scrum LATAM Comunidad",
      category: "charla",
      role: "Speaker",
      date: "2026-07",
      description:
        "Webinar sobre cómo aplicar prompt engineering en equipos ágiles para potenciar el trabajo diario con IA generativa.",
      image: "/events/cha_prompt.jpeg",
      url: "https://prezi.com/view/yFho4OfruCqhANz90pBG/?referral_token=yPOKgglnB3FN",
    },
    {
      title: "Más rápidos, pero ¿más ágiles?",
      event: "Agile Lean Virtual Lab",
      category: "charla",
      role: "Speaker",
      date: "2026-08",
      description:
        "Charla sobre si seguimos siendo ágiles cuando dejamos de entender lo que hacemos con equipos que desarrollan con IA generativa: deuda técnica, transparencia y adaptabilidad.",
      image: "/events/cha_masrapidos.jpeg",
      url: "https://lnkd.in/p/dJmjCg-b",
    },
    {
      title: "Aplicación de Patrones de Scrum en el Sector IT",
      event: "Scrum LATAM Comunidad — 5.º aniversario",
      category: "charla",
      role: "Speaker",
      date: "2025-02",
      description:
        "Charla presentada en el evento por el 5.º aniversario de Scrum LATAM Comunidad.",
      image: "/events/cha_aplicaciones.png",
      url: "https://www.youtube.com/watch?v=hEWu7mHaJoU&t=282s",
    },
    {
      title: "Súbete al Tren – Segunda Estación",
      event: "Panel junto a Claudio Aranda, Adriana Carina E. y Carlos Felipe Manzur Vicencio",
      category: "charla",
      role: "Panelista",
      date: "2026-07",
      description:
        "Conversatorio transmitido por YouTube sobre IA, educación/idoneidad, agilidad y gestión organizacional, en torno a cómo incorporar IA sin perder criterio propio.",
      image: "/events/cha_subetetren2.png",
      url: "https://www.youtube.com/live/s4ndLzI_NyA?si=fKcxeIunoXPy5X9D",
    },
    {
      title: "Súbete al Tren – Cuarta Estación",
      event: "Panel junto a Carlos Felipe Manzur Vicencio, Leonel Zapien, Iveth V. y José de Jesús Martínez Rojano",
      category: "charla",
      role: "Panelista",
      date: "2026-08",
      description:
        "Conversatorio transmitido por YouTube sobre IA en desarrollo de software, equipos aumentados, agilidad, talento, agentes autónomos, productividad y deuda técnica.",
      image: "/events/cha_subetetren4.png",
      url: "https://www.youtube.com/live/Ly2iReQffcY?si=rCjDkVM1N2WcBE-M",
    },
    {
      title: "Encuentro con Ingresantes — Licenciatura en Análisis de Sistemas y Tecnicatura en Programación",
      event: "Universidad Nacional de Salta (UNSA)",
      category: "charla",
      role: "Expositor",
      description:
        "Encuentro con estudiantes ingresantes de la Licenciatura en Análisis de Sistemas y la Tecnicatura en Programación de la UNSA.",
      image: "/events/cha_ingresantes.png",
      url: "https://www.youtube.com/live/Re_MMj9RLiI",
    },
    {
      title: "Backlog en acción: De la teoría a la práctica con equipos ágiles",
      event: "Charla en vivo",
      category: "charla",
      role: "Speaker",
      description:
        "Charla en vivo sobre cómo llevar el backlog de la teoría a la práctica en equipos ágiles.",
      image: "/events/cha_red4patas.png",
      url: "https://www.youtube.com/live/I_hcpoE4ObY?si=GMleVe8oioi1osC4",
    },
    {
      title: "Deuda Cognitiva en Entornos Ágiles",
      event: "Ágiles Argentina — Tucumán 2026",
      category: "charla",
      role: "Participante · Propuso el conversatorio",
      date: "2026-08",
      description:
        "Como participante de Ágiles Argentina, propuse un conversatorio sobre deuda cognitiva en entornos ágiles.",
      image: "/events/cha_agiles.png",
      url: "https://lnkd.in/p/djSVwiWB",
    },
    {
      title: "Préndete Salta",
      event: "Concurso de emprendedores de Salta",
      category: "profesional",
      role: "Participante",
      date: "2025-05",
      description:
        "Concurso que impulsa a emprendedores salteños a transformar sus ideas en negocios reales.",
      image: "/events/cha_prendete.png",
      url: "https://www.instagram.com/p/DKBJihzgX5u/",
    },
    {
      title: "Razones de Fracaso de Proyectos de Software: un Mapeo Sistemático",
      event: "CACIC 2024 — Workshop de Ingeniería de Software, UNLP",
      category: "congreso",
      role: "Autor · Mejor expositor del día",
      date: "2024-10",
      description:
        "Presentado presencialmente en el Workshop de Ingeniería de Software del 30.º Congreso Argentino de Ciencias de la Computación. Distinguido como mejor expositor del primer día.",
      image: "/events/cha_fracasos.png",
      url: "http://sedici.unlp.edu.ar/handle/10915/176524",
    },
    {
      title: "Presentación de Content-Based Image Retrieval (CBIR)",
      event: "SAIV — 48° JAIIO (Jornadas Argentinas de Informática)",
      category: "congreso",
      role: "Expositor",
      date: "2019-09",
      description:
        "Presentación de un trabajo sobre Content-Based Image Retrieval (CBIR) en el Simposio Argentino de Imágenes y Visión (SAIV), en el marco de las 48° Jornadas Argentinas de Informática (JAIIO), Salta.",
      image: "/events/cha_jaiio.png",
      url: "https://www.researchgate.net/publication/343904548_Presentacion_de_Content_Based_Image_Retrieval_CBIR",
    },
    {
      title: "¿Qué hace un informático? Charla para ingresantes",
      event: "Universidad Nacional de Salta (UNSA) — Anfiteatro",
      category: "charla",
      role: "Expositor",
      date: "2024",
      description:
        "Charla en el anfiteatro de la UNSA para estudiantes ingresantes, sobre qué hace un informático y los alcances de la carrera.",
      image: "/events/cha_ingresantes2024.png",
    },
    {
      title: "Colaborador en FLISoL 2025",
      event: "Festival Latinoamericano de Instalación de Software Libre (FLISoL)",
      category: "profesional",
      role: "Colaborador",
      date: "2025",
      description:
        "Colaboración en la organización del Festival Latinoamericano de Instalación de Software Libre (FLISoL) 2025, evento que promueve el uso de software libre y de código abierto.",
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
      title: "Desarrollo de Software a Medida",
      description:
        "Construcción de aplicaciones y sistemas web adaptados a las necesidades del negocio, con foco en calidad, mantenibilidad y buenas prácticas.",
      icon: "Code2",
      image: "/services/desarrollo.png",
      details: [
        "Relevamiento de requerimientos y diseño de una arquitectura orientada a mantenibilidad y escalabilidad.",
        "Desarrollo full-stack con PHP/Laravel, Ruby on Rails y Node.js, sobre bases de datos relacionales y no relacionales.",
        "Integración continua, control de versiones y buenas prácticas de testing (QA) a lo largo de todo el proyecto.",
        "Despliegue y mantenimiento con Docker y entornos cloud.",
      ],
    },
    {
      title: "Consultoría y Coaching Ágil",
      description:
        "Acompañamiento a equipos en la adopción de Scrum y Kanban, facilitación de ceremonias y mejora continua de la forma de trabajo.",
      icon: "RefreshCw",
      image: "/services/coaching-de-equipos.jpg",
      details: [
        "Diagnóstico del estado ágil del equipo y definición de un plan de mejora continua.",
        "Facilitación de ceremonias Scrum y Kanban: planning, dailies, reviews y retrospectivas.",
        "Coaching individual a Scrum Masters y Product Owners en formación.",
        "Métricas ágiles (velocity, lead time, cycle time) para visibilizar el progreso del equipo.",
      ],
    },
    {
      title: "Gestión de Proyectos",
      description:
        "Coordinación de proyectos de software de punta a punta, combinando una mirada técnica con prácticas ágiles de gestión.",
      icon: "ClipboardList",
      image: "/services/gestion.jpg",
      details: [
        "Planificación, seguimiento y comunicación con stakeholders técnicos y de negocio.",
        "Gestión de alcance, tiempos y riesgos combinando enfoques tradicionales y ágiles.",
        "Coordinación de equipos multidisciplinarios: desarrollo, diseño UX/UI y QA.",
        "Reportes de avance claros y accionables para la toma de decisiones.",
      ],
    },
    {
      title: "Capacitaciones y Talleres",
      description:
        "Charlas y workshops in-company sobre agilidad, Scrum e inteligencia artificial aplicada al desarrollo de software.",
      icon: "GraduationCap",
      image: "/services/talleres.jpg",
      details: [
        "Talleres in-company sobre Scrum, Kanban y fundamentos de agilidad.",
        "Formación práctica en inteligencia artificial aplicada al desarrollo de software.",
        "Contenido adaptado al nivel del equipo, desde introductorio hasta avanzado.",
        "Dinámicas participativas y casos reales para afianzar el aprendizaje.",
      ],
    },
  ],

  // uncomment the following sections to show work experience, education, and publications

  work: [
    {
      role: "Ssr Software Developer",
      org: "Kozaca",
      logo: "/companies/comp_kozaca.jpeg",
      location: "Santa Fe, Argentina · En remoto",
      start: "2025-10",
      end: null,
      summary:
        "Desarrollo y mantenimiento de las plataformas web Red-i (gestión de clínicas) y Convenia Salud (financiadores de salud).",
      highlights: [
        "Implementación de nuevas funcionalidades y mejora continua de módulos críticos del sistema: historia clínica, turnos, portal del profesional y administrativo, facturación, lógica de precios, reglas de negocio para convenios, aranceles por prestador, liquidaciones, entre otras.",
        "Stack: CakePHP y Python (backend), JavaScript y Bootstrap (frontend), MySQL y MongoDB (bases de datos); Docker, GitLab, Visual Studio Code y Trello.",
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
      role: "Docente Universitario de Prácticas Profesionales III",
      org: "UPATecO",
      logo: "/companies/comp_upateco.jpeg",
      start: "2026-03",
      end: null,
      summary:
        "Práctica Profesional III de la Tecnicatura Universitaria en Programación, orientación en Desarrollo de Aplicaciones.",
      highlights: [
        "Responsable de guiar a los estudiantes en su transición al mundo laboral tecnológico, integrando conocimientos técnicos, habilidades profesionales y competencias comunicacionales.",
        "Acompañamiento en el desarrollo de proyectos integrales aplicando buenas prácticas de arquitectura y desarrollo de software.",
        "Simulación de entornos laborales reales y exposición a metodologías ágiles utilizadas en la industria (Scrum, Kanban, etc.).",
        "Seguimiento de prácticas profesionales y proyectos aplicados, incluyendo simulación de entrevistas técnicas y comportamentales.",
        "Desarrollo de habilidades de networking y planificación de carrera profesional.",
      ],
    },
    {
      role: "Docente Universitario de Metodologías Ágiles",
      org: "UPATecO",
      logo: "/companies/comp_upateco.jpeg",
      start: "2025-07",
      end: "2025-10",
      summary:
        "Curso universitario de Gestión de Proyectos Tecnológicos mediante Enfoque Ágil, aprobado por Resolución Rectoral N° 496/25 de UPATecO.",
      highlights: [
        "Formación integral en técnicas, herramientas y métodos ágiles como Scrum, Kanban y Lean Thinking para la gestión de proyectos.",
        "Desarrollo de competencias en planificación colaborativa y aplicación de enfoques iterativos e innovadores.",
        "Fomento del trabajo en equipo, la comunicación efectiva y la mejora continua en el desarrollo de iniciativas tecnológicas.",
      ],
    },
    {
      role: "Scrum Master",
      org: "Proyecto DAR",
      logo: "/companies/comp_dar.jpeg",
      location: "Buenos Aires y alrededores · En remoto",
      start: "2025-06",
      end: "2025-10",
      summary:
        "Colaboración en el desarrollo de una página web para el refugio de animales callejeros Red4Patas, con el objetivo de impulsar las adopciones.",
      highlights: [
        "Acompañamiento a los equipos de desarrollo, diseño UX y QA en la aplicación de buenas prácticas ágiles, fomentando la autoorganización y la mejora continua.",
        "Colaboración en la planificación y seguimiento de tareas, asegurando la integración de todas las áreas.",
        "Participación activa en reuniones con Product Owner, Project Manager y cliente para alinear expectativas y objetivos.",
        "Promoción de un entorno de trabajo colaborativo, orientado a la entrega de valor y a la misión social del proyecto.",
      ],
    },
    {
      role: "Full Stack Developer",
      org: "nuntius IT",
      logo: "/companies/comp_nuntius.jpeg",
      location: "Argentina · Híbrido",
      start: "2021-05",
      end: "2025-05",
      summary:
        "Desarrollo y mantenimiento de un sistema integral de gestión para la importadora internacional Luxus, cubriendo operaciones, comercial, importación, administración, finanzas y facturación. También desarrollo y mantenimiento del sistema de gestión y la página de Bingos del Norte en Salta.",
      highlights: [
        "Backend: Ruby on Rails, Turbo Rails, Stimulus y Python.",
        "Frontend: Node.js, HTML, Bootstrap, Tailwind, JavaScript, TypeScript y CSS.",
        "Aplicación de Scrum, Docker, Azure, GitLab, Visual Studio Code, Miro y Jira.",
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
      role: "Analista Funcional | Business Analyst",
      org: "nuntius IT",
      logo: "/companies/comp_nuntius.jpeg",
      start: "2022-05",
      end: "2024-12",
      summary:
        "Relevamiento y análisis de requerimientos del cliente para el desarrollo de una aplicación de canjes de puntos multi-rubro.",
      highlights: [
        "Identificación de problemas, oportunidades y mejoras del proyecto.",
        "Capacitación al cliente y a usuarios pilotos para el uso de la aplicación web de canjes de puntos.",
      ],
    },
    {
      role: "Scrum Master | Product Owner",
      org: "MakiSan Tech",
      logo: "/companies/comp_makizan.png",
      location: "Argentina · En remoto",
      start: "2024-10",
      end: "2025-03",
      summary:
        "Facilitador, asegurando la comunicación en el equipo y el cumplimiento de objetivos.",
      highlights: [
        "Optimización del flujo de trabajo usando Scrum para el desarrollo de un MVP de un sitio web de eventos en la provincia de Salta.",
        "Liderazgo de un equipo multidisciplinario conformado por diseñador UX/UI, desarrollador front-end y desarrollador back-end, adoptando buenas prácticas ágiles, reduciendo los bloqueos y mejorando su potencial.",
      ],
    },
    {
      role: "Asistente de Investigación | Research Assistant",
      org: "Universidad Nacional de Salta",
      logo: "/companies/comp_unsa.png",
      location: "Salta, Salta, Argentina",
      start: "2020-08",
      end: "2021-08",
      summary:
        "Miembro de un proyecto sobre avances en el reconocimiento e interpretación de textos manuscritos históricos argentinos, becado con la Beca de Estímulo a las Vocaciones Científicas (EVC) del Consejo Interuniversitario Nacional (CIN).",
      highlights: [
        "Desarrollo y configuración de una plataforma para el análisis y procesamiento de imágenes de textos manuscritos históricos de la provincia de Salta.",
        "Preparación y elaboración de artículos publicados en revistas nacionales.",
      ],
      tech: ["Python", "Inteligencia Artificial"],
    },
    {
      role: "Software Developer",
      org: "Universidad Nacional de Salta",
      logo: "/companies/comp_unsa.png",
      location: "En remoto",
      start: "2020-06",
      end: "2021-06",
      summary:
        "Desarrollo de un sistema web para la gestión de información barrial en la Ciudad de Salta, para que encuestadores y supervisores de la Dirección General de Estadísticas (DGE) dispongan de información actualizada para la toma de decisiones.",
      highlights: [
        "Tareas de relevamiento, análisis y diseño del sistema.",
      ],
      tech: ["PHP", "Laravel", "PostgreSQL", "Bootstrap", "Apache"],
    },
    {
      role: "Auxiliar Docente | Teaching Assistant",
      org: "Universidad Nacional de Salta",
      logo: "/companies/comp_unsa.png",
      location: "Salta, Salta, Argentina",
      start: "2018-08",
      end: "2021-05",
      summary:
        "Auxiliar de las materias Elementos de Programación, Programación, Algoritmos y Estructuras de Datos, y Programación Numérica de la Licenciatura en Análisis de Sistemas y la Tecnicatura Universitaria en Programación.",
      highlights: [
        "Preparación de clases de consulta y material de estudio para estudiantes, bajo supervisión de los profesores responsables.",
        "Colaboración en la organización de proyectos grupales estudiantiles, guiando su desarrollo y exposición.",
      ],
      tech: ["Java"],
    },
  ],

  education: [
    {
      school: "Universidad Nacional de La Plata (UNLP)",
      degree: "Maestría y Especialización en Ingeniería de Software",
      start: "2024-04",
      end: null,
      logo: "/studies/uni_unlp.png",
      description: [
        "Trabajo Final Integrador de la Especialización en Ingeniería de Software: \"Revisión sistemática de la literatura sobre la deuda técnica en entornos ágiles de desarrollo de software\", bajo la dirección del Dr. Gustavo Rossi y codirección de la Dra. Alejandra Garrido.",
        "Tesis de la Maestría en Ingeniería de Software: \"Diseño y evaluación de un enfoque basado en Debt Stories para comunicar y priorizar deuda técnica entre perfiles técnicos y de negocio en equipos ágiles\", bajo la dirección de la Dra. Alejandra Garrido y codirección del Dr. Gustavo Rossi.",
      ].join("\n\n"),
    },
    {
      school: "Universidad Tecnológica Nacional - Facultad Regional Resistencia, Chaco (UTN FRRe)",
      degree: "Diplomatura en Testing de Software",
      start: "2026-03",
      end: "2026-07",
      logo: "/studies/uni_utnfrre.jpg",
      url: "https://drive.google.com/file/d/1Dl-leJDsf4kmbgU5WJCqqzJmEvil_mDX/view?usp=sharing",
    },
    {
      school: "Universidad Tecnológica Nacional - Facultad de Buenos Aires (UTN BA)",
      degree: "Diplomatura en Metodologías y Marcos de Trabajo Ágiles",
      start: "2024-04",
      end: "2024-08",
      logo: "/studies/uni_utnba.png",
      description: "Certificado validado con blockchain.",
      url: "https://validator.centrodeelearning.com/validator/6daa6343-381f-42ab-8db6-9be96a28f491",
    },
    {
      school: "Universidad Nacional de Salta (UNSa)",
      degree: "Licenciatura en Análisis de Sistemas",
      start: "2015-01",
      end: "2022-12",
      logo: "/studies/uni_unsa.png",
      description: [
        "Tesis: \"Aplicación de Scrum para el desarrollo de un sistema software de gestión para instituciones con educación domiciliaria y hospitalaria en la provincia de Salta\", dirigida por la Lic. Adriana Binda y el Lic. Martín Díaz.",
        "Marco de trabajo: Scrum y prácticas ágiles. Tecnologías: Laravel, XAMPP, MySQL, JavaScript, Bootstrap, Visual Studio Code y Taiga.",
      ].join("\n\n"),
      url: "https://drive.google.com/file/d/1QZnG_AWNHT4rjs_4kgWeDdBAxcu9E6r5/view?usp=sharing",
    },
  ],

  // publications: [
  //   {
  //     title: "Modern React Patterns: Building Scalable Applications",
  //     type: "blog",
  //     date: "2024-09",
  //     venue: "Dev.to",
  //     url: "https://dev.to/alexchen/modern-react-patterns",
  //   },
  //   {
  //     title: "TypeScript Best Practices for Large-Scale Applications",
  //     type: "talk",
  //     date: "2024-06",
  //     venue: "ReactConf 2024",
  //     url: "https://reactconf.com/2024/talks/typescript-best-practices",
  //   },
  //   {
  //     title: "The Future of Web Performance",
  //     type: "blog",
  //     date: "2024-03",
  //     venue: "CSS-Tricks",
  //     url: "https://css-tricks.com/future-web-performance",
  //   },
  //   {
  //     title: "Building Accessible React Components",
  //     type: "paper",
  //     date: "2023-11",
  //     venue: "ACM Digital Library",
  //     url: "https://dl.acm.org/doi/10.1145/accessible-react",
  //   },
  //   {
  //     title: "Developer Experience: Why It Matters",
  //     type: "talk",
  //     date: "2023-08",
  //     venue: "JSConf US 2023",
  //     url: "https://jsconf.com/2023/talks/developer-experience",
  //   },
  //   {
  //     title: "Micro-Frontends: A Practical Guide",
  //     type: "blog",
  //     date: "2023-05",
  //     venue: "Medium",
  //     url: "https://medium.com/@alexchen/micro-frontends-guide",
  //   },
  // ],

};
