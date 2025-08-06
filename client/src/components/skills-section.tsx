import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Palette, Server, Smartphone, Monitor } from "lucide-react";

const programmingSkills = [
  { name: "React", percentage: 80, color: "text-blue-600" },
  { name: "JavaScript", percentage: 80, color: "text-yellow-500" },
  { name: "TypeScript", percentage: 80, color: "text-blue-500" },
  { name: "Bootstrap", percentage: 85, color: "text-purple-600" },
  { name: "Tailwind CSS", percentage: 80, color: "text-cyan-500" },
  { name: "Firebase", percentage: 85, color: "text-orange-500" },
];

const tools = [
  { name: "VS Code", icon: Code },
  { name: "Git", icon: Database },
  { name: "GitHub", icon: Server },
  { name: "Netlify", icon: Monitor },
  { name: "Vercel", icon: Smartphone },
  { name: "Cursor", icon: Palette },
];

function CircularProgress({ percentage, color }: { percentage: number; color: string }) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="relative w-32 h-32 mx-auto mb-4">
      <svg className="transform -rotate-90 w-32 h-32">
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-muted-foreground/20"
        />
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className={color}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            strokeLinecap: "round",
            transition: "stroke-dashoffset 2s ease-out",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-semibold">{percentage}%</span>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        {/* Programming Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-12">Programming Languages & Frameworks</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmingSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="text-center animate-in fade-in duration-1000"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CircularProgress percentage={skill.percentage} color={skill.color} />
                <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                <p className="text-muted-foreground text-sm">Professional Level</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12">Tools & Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {tools.map((tool, index) => (
              <Card
                key={tool.name}
                className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in duration-1000"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                    <tool.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-medium">{tool.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
