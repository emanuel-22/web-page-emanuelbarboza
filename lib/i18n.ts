export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];
export const defaultLocale: Locale = "es";

export const dictionary = {
  es: {
    languageToggle: {
      ariaLabel: "Cambiar idioma",
      switchTo: "English",
    },
    whatsapp: {
      ariaLabel: "Escribir por WhatsApp",
    },
    sections: {
      about: {
        title: "Sobre mí",
      },
      services: {
        title: "Servicios",
        viewAll: "Ver el detalle de mis servicios",
      },
      skills: {
        title: "Habilidades",
        description:
          "Conocimientos y competencias que fui desarrollando a lo largo de mi experiencia profesional, académica y docente en tecnología, gestión, agilidad e inteligencia artificial.",
        categories: {
          language: "Lenguajes",
          framework: "Frameworks y Librerías",
          database: "Bases de Datos",
          tool: "Herramientas",
        },
      },
      communityEvents: {
        title: "Comunidades y Eventos",
      },
      talks: {
        title: "Charlas y Eventos",
        description:
          "Charlas, talleres, conversatorios y eventos en los que participé como speaker, facilitador u organizador, compartiendo experiencias y aprendizajes.",
        categories: {
          charla: "Charla",
          congreso: "Congreso",
          profesional: "Presentación",
        },
        viewMore: "Ver más",
      },
      education: {
        title: "Estudios",
        present: "Actualidad",
        viewCertificate: "Ver certificado",
      },
      experience: {
        title: "Experiencia",
        present: "Actualidad",
        viewAll: "Ver toda mi experiencia",
      },
      formation: {
        title: "Formación",
        studiesHeading: "Estudios",
        certificationsHeading: "Certificaciones",
        certificationsIntro:
          "Una selección de certificaciones que mejor representan mi perfil actual.",
        viewAllCertifications: "Ver todas las certificaciones",
        viewCertificate: "Ver certificado",
        linkedinLearning: {
          label: "Cursos en LinkedIn Learning",
          description: "Todos los cursos que completé en la plataforma.",
        },
        platzi: {
          label: "Cursos en Platzi",
          description: "Mi perfil y trayectoria de aprendizaje en Platzi.",
        },
      },
      publications: {
        title: "Publicaciones",
      },
      communities: {
        title: "Comunidades",
        description:
          "Espacios y comunidades en los que participo, colaboro y comparto experiencias alrededor de la tecnología, la agilidad y el aprendizaje colectivo.",
      },
      contact: {
        title: "Contacto",
        description:
          "Un espacio para conversar sobre proyectos, consultoría, capacitaciones, colaboraciones, eventos o nuevas oportunidades profesionales.",
        copiedToClipboard: (network: string) =>
          `${network} copiado al portapapeles!`,
      },
    },
    certificationCategories: {
      "agile-management": "🔄 Agilidad y gestión",
      "software-development": "💻 Desarrollo de software",
      "ai-data": "🤖 Inteligencia artificial y datos",
      leadership: "🤝 Liderazgo y habilidades blandas",
    },
    certificationsPage: {
      title: "Certificaciones",
      backLink: "Volver al inicio",
      intro:
        "Listado completo de certificaciones, cursos y reconocimientos, agrupados por área.",
      otherPlatforms: "Otras plataformas",
    },
    experiencePage: {
      title: "Experiencia",
      backLink: "Volver al inicio",
      intro: "Historial completo de experiencia laboral y docente.",
    },
    servicesPage: {
      title: "Servicios",
      backLink: "Volver al inicio",
      intro: "Detalle de cada servicio que ofrezco.",
      contactLead: "¿Te interesa alguno de estos servicios? Escribime a",
    },
  },
  en: {
    languageToggle: {
      ariaLabel: "Switch language",
      switchTo: "Español",
    },
    whatsapp: {
      ariaLabel: "Message me on WhatsApp",
    },
    sections: {
      about: {
        title: "About Me",
      },
      services: {
        title: "Services",
        viewAll: "See my services in detail",
      },
      skills: {
        title: "Skills",
        description:
          "Knowledge and competencies I've developed throughout my professional, academic, and teaching experience in technology, management, agility, and artificial intelligence.",
        categories: {
          language: "Languages",
          framework: "Frameworks & Libraries",
          database: "Databases",
          tool: "Tools",
        },
      },
      communityEvents: {
        title: "Communities & Events",
      },
      talks: {
        title: "Talks & Events",
        description:
          "Talks, workshops, panels, and events where I took part as a speaker, facilitator, or organizer, sharing experiences and lessons learned.",
        categories: {
          charla: "Talk",
          congreso: "Conference",
          profesional: "Presentation",
        },
        viewMore: "Learn more",
      },
      education: {
        title: "Education",
        present: "Present",
        viewCertificate: "View certificate",
      },
      experience: {
        title: "Experience",
        present: "Present",
        viewAll: "View my full experience",
      },
      formation: {
        title: "Education & Training",
        studiesHeading: "Education",
        certificationsHeading: "Certifications",
        certificationsIntro:
          "A selection of certifications that best represent my current profile.",
        viewAllCertifications: "View all certifications",
        viewCertificate: "View certificate",
        linkedinLearning: {
          label: "LinkedIn Learning courses",
          description: "All the courses I've completed on the platform.",
        },
        platzi: {
          label: "Platzi courses",
          description: "My profile and learning path on Platzi.",
        },
      },
      publications: {
        title: "Publications",
      },
      communities: {
        title: "Communities",
        description:
          "Spaces and communities where I take part, collaborate, and share experiences around technology, agility, and collective learning.",
      },
      contact: {
        title: "Contact",
        description:
          "A space to talk about projects, consulting, training, collaborations, events, or new professional opportunities.",
        copiedToClipboard: (network: string) =>
          `${network} copied to clipboard!`,
      },
    },
    certificationCategories: {
      "agile-management": "🔄 Agility & Project Management",
      "software-development": "💻 Software Development",
      "ai-data": "🤖 Artificial Intelligence & Data",
      leadership: "🤝 Leadership & Soft Skills",
    },
    certificationsPage: {
      title: "Certifications",
      backLink: "Back to home",
      intro:
        "Full list of certifications, courses, and recognitions, grouped by area.",
      otherPlatforms: "Other platforms",
    },
    experiencePage: {
      title: "Experience",
      backLink: "Back to home",
      intro: "Full work and teaching experience history.",
    },
    servicesPage: {
      title: "Services",
      backLink: "Back to home",
      intro: "Detail of each service I offer.",
      contactLead: "Interested in any of these services? Email me at",
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Locale];
