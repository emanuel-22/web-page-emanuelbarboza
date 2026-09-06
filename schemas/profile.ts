import { z } from "zod";

const skillCategorySchema = z.enum([
  "language",
  "framework",
  "database",
  "tool",
]);

const textIconSchema = z.object({
  text: z.string(),
  icon: z.string().optional(),
  category: skillCategorySchema.optional(),
});

const socialSchema = z.object({
  icon: z.string().optional(),
  network: z.string(),
  username: z.string(),
  type: z.enum(["social", "primary"]),
  url: z.url().optional(),
});

const workSchema = z.object({
  id: z.string().optional(),
  role: z.string(),
  org: z.string(),
  // App-relative path (e.g. "/companies/comp_example.png") or absolute URL.
  logo: z.string().optional(),
  location: z.string().optional(),
  start: z.string(),
  end: z.string().nullable().optional(),
  summary: z.string().optional(),
  highlights: z.array(z.string()).optional(),
  tech: z.array(z.string()).optional(),
  url: z.url().optional(),
});

const serviceSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  // Lucide icon name, e.g. "Code2".
  icon: z.string().optional(),
  // Bullet points shown on the dedicated /services detail page.
  details: z.array(z.string()).optional(),
  // App-relative path (e.g. "/services/example.jpg") shown on the /services detail page.
  image: z.string().optional(),
});

const educationSchema = z.object({
  school: z.string(),
  degree: z.string().optional(),
  start: z.string().optional(),
  end: z.string().nullable().optional(),
  // App-relative path (e.g. "/uni_example.png") or absolute URL.
  logo: z.string().optional(),
  // Supports **bold** and *italic*; paragraphs separated by a blank line.
  description: z.string().optional(),
  url: z.url().optional(),
});

const publicationSchema = z.object({
  title: z.string(),
  type: z.enum(["blog", "paper", "talk"]).optional(),
  date: z.string().optional(),
  venue: z.string().optional(),
  url: z.url().optional(),
});

const talkSchema = z.object({
  title: z.string(),
  event: z.string(),
  category: z.enum(["charla", "congreso", "profesional"]),
  role: z.string().optional(),
  date: z.string().optional(),
  description: z.string().optional(),
  // App-relative path (e.g. "/cha_example.png") or absolute URL.
  image: z.string().optional(),
  url: z.url().optional(),
});

const communitySchema = z.object({
  name: z.string(),
  role: z.string(),
  description: z.string().optional(),
  // App-relative path (e.g. "/com_example.png") or absolute URL.
  logo: z.string().optional(),
  url: z.url().optional(),
});

export const certificationCategorySchema = z.enum([
  "agile-management",
  "software-development",
  "ai-data",
  "leadership",
]);

const certificationSchema = z.object({
  title: z.string(),
  issuer: z.string(),
  date: z.string().optional(),
  category: certificationCategorySchema,
  // App-relative path to the certificate file under /public/certifications.
  file: z.string().optional(),
  // External verification link (e.g. Coursera/Credly), preferred over `file` when present.
  url: z.url().optional(),
  // Featured in the homepage's curated selection.
  curated: z.boolean().optional(),
});

const personSchema = z.object({
  name: z.string(),
  headline: z.string().optional(),
  pronouns: z.string().optional(),
  // App-relative path (e.g. "/profile_photo.png") or absolute URL.
  avatar: z.string().optional(),
  location: z.string().optional(),
  status: z.string().optional(),
});

export const profileSchema = z.object({
  version: z.string(),
  id: z.string(),
  lastUpdated: z.string(),
  person: personSchema,
  contact: z.array(socialSchema).optional(),
  about: z
    .object({
      // Paragraphs separated by a blank line. Supports **bold** and *italic*.
      bio: z.string().optional(),
      keywords: z.array(z.string()).optional(),
    })
    .optional(),
  skills: z.array(textIconSchema).optional(),
  services: z.array(serviceSchema).optional(),
  communities: z.array(communitySchema).optional(),
  talks: z.array(talkSchema).optional(),
  work: z.array(workSchema).optional(),
  education: z.array(educationSchema).optional(),
  certifications: z.array(certificationSchema).optional(),
  publications: z.array(publicationSchema).optional(),
  cta: z
    .array(
      z.object({
        label: z.string(),
        url: z.url(),
        style: z.enum(["primary", "secondary"]).optional(),
      })
    )
    .optional(),
});

// Full profile type
export type Profile = z.infer<typeof profileSchema>;

// Individual component types
export type Person = z.infer<typeof profileSchema.shape.person>;
export type Contact = z.infer<typeof profileSchema.shape.contact>;
export type About = z.infer<typeof profileSchema.shape.about>;
export type Skills = z.infer<typeof profileSchema.shape.skills>;
export type SkillCategory = z.infer<typeof skillCategorySchema>;
export type Services = z.infer<typeof profileSchema.shape.services>;
export type Communities = z.infer<typeof profileSchema.shape.communities>;
export type Talks = z.infer<typeof profileSchema.shape.talks>;
export type Work = z.infer<typeof profileSchema.shape.work>;
export type Education = z.infer<typeof profileSchema.shape.education>;
export type Certifications = z.infer<typeof profileSchema.shape.certifications>;
export type Certification = NonNullable<Certifications>[number];
export type CertificationCategory = z.infer<typeof certificationCategorySchema>;
export type Publications = z.infer<typeof profileSchema.shape.publications>;
export type CTA = z.infer<typeof profileSchema.shape.cta>;
