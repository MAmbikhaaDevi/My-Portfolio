'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/lib/data";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  const categories = ["All", "AI/ML", "Data Science", "Frontend", "UI/UX"];

  const aiMlProjects = projects.filter(p => p.category === 'AI/ML');
  const otherProjects = projects.filter(p => p.category !== 'AI/ML');
  const allProjects = [...aiMlProjects, ...otherProjects];

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl font-bold tracking-tight">My Projects</h2>
        <p className="text-muted-foreground mt-2">A selection of my work across different domains.</p>
      </div>
      <Tabs defaultValue="All" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 mb-8">
          {categories.map(cat => (
            <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="All">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </TabsContent>

        {categories.slice(1).map(category => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter(p => p.category === category)
                .map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
