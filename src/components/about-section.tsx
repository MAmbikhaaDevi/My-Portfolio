import { about, education, experience, skills } from "@/lib/data.tsx";
import { Briefcase, GraduationCap, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SkillBadge } from "./skill-badge";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl font-bold tracking-tight">About Me</h2>
        <p className="text-muted-foreground mt-2">My journey, experience, and skills.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <Card className="bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-3">
                <span className="text-4xl">👩‍💼</span>
                Who I Am
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{about.paragraph}</p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-3">
                <Briefcase />
                Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                {experience.map((exp, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="mt-1.5 h-3 w-3 rounded-full bg-primary shrink-0"></div>
                    <div>
                      <h3 className="font-semibold">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company} &bull; {exp.period}</p>
                      <p className="text-sm mt-1">{exp.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-3">
                <GraduationCap />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                {education.map((edu, index) => (
                  <li key={index} className="flex gap-4">
                     <div className="mt-1.5 h-3 w-3 rounded-full bg-primary shrink-0"></div>
                    <div>
                      <h3 className="font-semibold">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">{edu.institution} &bull; {edu.period}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-3">
                <Lightbulb />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <SkillBadge key={index} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
