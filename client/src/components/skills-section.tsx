import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Palette, 
  Server, 
  Smartphone, 
  Monitor, 
  Globe,
  Cpu,
  Wrench,
  Layers,
  FileCode,
  FileText,
  Zap,
  Atom,
  Database as DatabaseIcon,
  GitBranch,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare,
  GitBranch as GitIcon,
  Github,
  ExternalLink,
  Palette as FigmaIcon,
  MessageSquare,
  Settings,
  Terminal,
  Package,
  Globe as WebIcon,
  Smartphone as MobileIcon,
  Monitor as DesktopIcon,
  Server as ApiIcon,
  Database as SqlIcon,
  Brackets,
  Monitor as MonitorIcon,
  Server as ServerIcon,
  Smartphone as PhoneIcon,
  Code as CodeIcon,
  Settings as GearIcon,
  User,
  Gem
} from "lucide-react";

// Define skill categories
const skillCategories = [
  { id: "all", name: "All Skills", icon: Brackets, count: 23 },
  { id: "frontend", name: "Frontend", icon: MonitorIcon, count: 7 },
  { id: "backend", name: "Backend", icon: ServerIcon, count: 3 },
  { id: "languages", name: "Languages", icon: CodeIcon, count: 2 },
  { id: "tools", name: "Tools", icon: Gem, count: 5 },
];

// Helper function to get skill level and badge styling
const getSkillLevel = (percentage: number) => {
  if (percentage >= 90) {
    return {
      level: "Expert",
      badgeClass: "bg-gradient-to-r from-green-500 to-emerald-500 shadow-green-500/50",
      glowClass: "shadow-lg shadow-green-500/30"
    };
  } else if (percentage >= 70) {
    return {
      level: "Advanced",
      badgeClass: "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-blue-500/50",
      glowClass: "shadow-lg shadow-blue-500/30"
    };
  } else if (percentage >= 50) {
    return {
      level: "Intermediate",
      badgeClass: "bg-gradient-to-r from-orange-500 to-yellow-500 shadow-orange-500/50",
      glowClass: "shadow-lg shadow-orange-500/30"
    };
  } else {
    return {
      level: "Beginner",
      badgeClass: "bg-gradient-to-r from-red-500 to-pink-500 shadow-red-500/50",
      glowClass: "shadow-lg shadow-red-500/30"
    };
  }
};

// Define all skills with categories and official logos
const allSkills = [
  // Frontend Skills
  { 
    name: "HTML", 
    category: "frontend", 
    percentage: 90, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    isTop: true 
  },
  { 
    name: "CSS", 
    category: "frontend", 
    percentage: 85, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    isTop: true 
  },
  { 
    name: "JavaScript", 
    category: "frontend", 
    percentage: 80, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    isTop: true 
  },
  { 
    name: "TypeScript", 
    category: "frontend", 
    percentage: 75, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    isTop: true 
  },
  { 
    name: "React", 
    category: "frontend", 
    percentage: 70, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    isTop: true 
  },
  { 
    name: "Next.js", 
    category: "frontend", 
    percentage: 65, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    isTop: true 
  },
  { 
    name: "Tailwind CSS", 
    category: "frontend", 
    percentage: 85, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    isTop: true 
  },
  
  // Backend Skills
  { 
    name: "Node.js", 
    category: "backend", 
    percentage: 60, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    isTop: false 
  },
  { 
    name: "Express.js", 
    category: "backend", 
    percentage: 60, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    isTop: false 
  },
  { 
    name: "MySQL", 
    category: "backend", 
    percentage: 70, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    isTop: false 
  },
  
  // Languages
  { 
    name: "C++", 
    category: "languages", 
    percentage: 60, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    isTop: false 
  },
  { 
    name: "PHP", 
    category: "languages", 
    percentage: 45, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    isTop: false 
  },
  
  // Tools
  { 
    name: "VS Code", 
    category: "tools", 
    percentage: 90, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    isTop: false 
  },
  { 
    name: "Git", 
    category: "tools", 
    percentage: 80, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    isTop: false 
  },
  { 
    name: "GitHub", 
    category: "tools", 
    percentage: 85, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    isTop: false 
  },
  { 
    name: "Netlify", 
    category: "tools", 
    percentage: 75, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    isTop: false 
  },
  { 
    name: "Vercel", 
    category: "tools", 
    percentage: 80, 
    logo: "https://assets.vercel.com/image/upload/q_auto/front/assets/design/vercel-triangle-black.svg",
    isTop: false 
  },
  { 
    name: "Figma", 
    category: "tools", 
    percentage: 65, 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    isTop: false 
  },
];

function SkillCard({ skill }: { skill: typeof allSkills[0] }) {
  const [isHovered, setIsHovered] = useState(false);
  const skillLevel = getSkillLevel(skill.percentage);

  return (
    <div className="relative group">
      {/* Floating Tooltip */}
      <div 
        className={`absolute -top-16 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-out ${
          isHovered 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className={`px-3 py-2 rounded-lg text-white text-sm font-semibold ${skillLevel.badgeClass} ${skillLevel.glowClass} backdrop-blur-sm border border-white/20`}>
          {skillLevel.level}
        </div>
        {/* Tooltip arrow */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800/90"></div>
      </div>

      <Card 
        className="relative group hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in fade-in duration-1000 bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-6 text-center">
          {skill.isTop && (
            <Badge className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold shadow-lg">
              Top
            </Badge>
          )}
          
          {/* Official Logo */}
          <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <img 
              src={skill.logo} 
              alt={`${skill.name} logo`}
              className="w-16 h-16 object-contain filter brightness-110 drop-shadow-lg"
              onError={(e) => {
                // Fallback to text if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback text icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg hidden">
              {skill.name.slice(0, 2).toUpperCase()}
            </div>
          </div>
          
          {/* Title */}
          <h4 className="text-lg font-bold text-white mb-3 tracking-wide">{skill.name}</h4>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-700/50 rounded-full h-2 mb-2 overflow-hidden">
            <div 
              className="h-2 rounded-full bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 shadow-lg transition-all duration-1000 ease-out"
              style={{ 
                width: `${skill.percentage}%`,
                boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)'
              }}
            ></div>
          </div>
          
          {/* Percentage */}
          <p className="text-sm text-gray-300 font-medium">{skill.percentage}%</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredSkills, setFilteredSkills] = useState(allSkills);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredSkills(allSkills);
    } else {
      setFilteredSkills(allSkills.filter(skill => skill.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Explore my expertise across various technologies and programming languages that I've mastered throughout my journey.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <Badge 
                  variant="secondary" 
                  className={`ml-1 ${
                    activeCategory === category.id 
                      ? "bg-white/20 text-white" 
                      : "bg-gray-700/50 text-gray-300"
                  }`}
                >
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="animate-in fade-in duration-1000"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>

        {/* Skills Description */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg mb-4">
            Hover over skills to see proficiency levels
          </p>
          <p className="text-gray-500 text-base">
            Skills marked as "Top" are my strongest areas of expertise
          </p>
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No skills found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
