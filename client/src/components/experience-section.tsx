import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, CheckCircle } from "lucide-react";

const experiences = [
  {
    title: "Academic Projects & Final Year Project (FYP)",
    company: "Government College University, FSD",
    period: "2021 - 2025",
    description:
      "Completed several academic projects using real-world tools and principles. Gained hands-on experience in Git, React, Firebase, and web design.",
    project: {
      title: "🏠 Smart Classified Property Website",
      description:
        "A real-world full-stack project to browse, list, and manage properties for sale and rent, with features tailored for both users and agents.",
      features: [
        "User/Agent Dashboard",
        "Upload Property Listings",
        "Dynamic Property Search",
        "Admin Panel for Management",
        "Single Property Detail Page",
        "Ratings & Reviews",
        "Saved Properties",
        "Chat Interface",
        "Referral Rewards System",
      ],
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    color: "blue",
  },
  {
    title: "Saylani Mass IT Training (SMIT) Trainee",
    company: "Saylani Welfare International Trust",
    period: "Nov 2023 - Dec 2024",
    description: "Full-stack MERN program graduate with comprehensive training in modern web development technologies.",
    achievements: [
      "Built Firebase-authenticated apps",
      "Hands-on full-stack development",
      "Team-based project simulations",
    ],
    technologies: ["React", "Express.js", "Firebase", "MongoDB", "Node.js"],
    color: "green",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card
              key={experience.title}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300 animate-in fade-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                    <p
                      className={`font-medium ${
                        experience.color === "blue"
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-green-600 dark:text-green-400"
                      }`}
                    >
                      {experience.company}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className={
                      experience.color === "blue"
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                    }
                  >
                    {experience.period}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6">{experience.description}</p>

                {experience.project && (
                  <Card className="bg-muted/50 mb-6">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold mb-3">{experience.project.title}</h4>
                      <p className="text-muted-foreground mb-4">{experience.project.description}</p>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h5 className="font-medium mb-2">Key Features:</h5>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            {experience.project.features.slice(0, 5).map((feature) => (
                              <li key={feature}>• {feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Additional Features:</h5>
                          <ul className="text-muted-foreground text-sm space-y-1">
                            {experience.project.features.slice(5).map((feature) => (
                              <li key={feature}>• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {experience.project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {experience.achievements && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-center text-muted-foreground">
                          <CheckCircle className="text-green-500 mr-3 h-4 w-4" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {experience.technologies?.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
