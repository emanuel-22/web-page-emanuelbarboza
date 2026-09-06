import { Skills } from "@/schemas/profile";
import { Section } from "@/components/shared/section";
import { Icons } from "@/components/shared/icons";

interface SkillsSectionProps {
  skills?: Skills;
  index?: number;
}

export function SkillsSection({ skills, index }: SkillsSectionProps) {
  if (!skills || skills.length === 0) return null;

  return (
    <Section
      id="skills"
      index={index}
      title="Habilidades"
      description="Conocimientos y competencias que fui desarrollando a lo largo de mi experiencia profesional, académica y docente en tecnología, gestión, agilidad e inteligencia artificial."
    >
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon ? Icons[skill.icon] : null;
          return (
            <span
              key={index}
              className="inline-flex items-center gap-2.5 rounded-full border border-border px-5 py-3 text-base transition-colors hover:bg-accent"
            >
              {Icon && <Icon className="h-6 w-6 text-muted-foreground" />}
              {skill.text}
            </span>
          );
        })}
      </div>
    </Section>
  );
}
