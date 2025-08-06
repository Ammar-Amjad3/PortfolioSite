import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Smart Property Website",
    description:
      "Full-stack real estate platform with user dashboards, property listings, search functionality, and chat interface for users and agents.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/Ammar-Amjad3",
  },
  {
    title: "React Analytics Dashboard",
    description:
      "Modern analytics dashboard built with React featuring data visualization, real-time updates, and responsive design.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Tailwind CSS", "Firebase"],
    githubUrl: "https://github.com/Ammar-Amjad3",
  },
  {
    title: "E-commerce Application",
    description:
      "Full-featured e-commerce application with product catalog, shopping cart, user authentication, and payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "JavaScript"],
    githubUrl: "https://github.com/Ammar-Amjad3",
  },
  {
    title: "Task Management App",
    description:
      "Productivity app with task tracking, team collaboration, drag-and-drop functionality, and deadline management.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "TypeScript", "Firebase"],
    githubUrl: "https://github.com/Ammar-Amjad3",
  },
  {
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with real-time data, 7-day forecasts, location-based services, and interactive weather maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["JavaScript", "API Integration", "Bootstrap"],
    githubUrl: "https://github.com/Ammar-Amjad3",
  },
  {
    title: "Personal Portfolio",
    description:
      "Responsive personal portfolio website featuring dark mode, smooth animations, contact forms, and optimized performance.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Ammar-Amjad3",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in frontend development and UI/UX design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-in fade-in duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-600">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
          >
            <a href="https://github.com/Ammar-Amjad3" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
