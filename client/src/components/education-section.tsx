import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  School, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  ChevronDown,
  ChevronUp,
  Building2
} from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Government College University, Faisalabad",
    period: "Sep 2021 - Jun 2025",
    location: "Faisalabad, Pakistan",
    cgpa: "3.2/4.0",
    status: "In Progress",
    statusColor: "bg-green-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graduation-cap/graduation-cap-original.svg",
    logoBg: "border-blue-400",
    description: "Pursuing a comprehensive Computer Science degree with focus on software engineering, algorithms, and modern web technologies. Actively participating in coding competitions and tech societies.",
    details: [
      "Web Application Development",
      "Data Structures & Algorithms", 
      "Software Engineering",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Operating Systems",
      "Mobile App Development"
    ],
    institutionUrl: "https://gcuf.edu.pk",
    isExpanded: false
  },
  {
    degree: "Intermediate in Pre-Engineering (FSc-PreEngineering)",
    institution: "The Logic School System (Khurrianwala Campus)",
    period: "Sep 2019 - Jun 2021",
    location: "Faisalabad, Pakistan",
    grade: "A+ Grade",
    status: "Completed",
    statusColor: "bg-blue-500",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/school/school-original.svg",
    logoBg: "border-yellow-400",
    description: "Completed intermediate studies with distinction in pre-engineering subjects, building a strong foundation in mathematics, physics, and computer science.",
    details: [
      "Mathematics",
      "Physics", 
      "Computer Science",
      "English",
      "Islamic Studies"
    ],
    institutionUrl: "https://thelogicschool.edu.pk",
    isExpanded: false
  },
];

export default function EducationSection() {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const toggleExpanded = (degree: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [degree]: !prev[degree]
    }));
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-12 h-full w-1 bg-gradient-to-b from-purple-500 via-purple-400 to-purple-600 shadow-lg"></div>

          <div className="space-y-8">
            {educationData.map((education, index) => (
              <div
                key={education.degree}
                className="relative flex items-start animate-in fade-in slide-in-from-left duration-1000"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-10 w-4 h-4 bg-purple-500 border-4 border-gray-900 rounded-full z-10 shadow-lg shadow-purple-500/50"></div>

                {/* Education Card */}
                <div className="ml-16 md:ml-20 flex-1">
                  <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          {/* Institution Logo */}
                          <div className={`w-12 h-12 rounded-full border-2 ${education.logoBg} flex items-center justify-center bg-gray-800/50 backdrop-blur-sm`}>
                            <Building2 className="w-6 h-6 text-white" />
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{education.degree}</h3>
                            <p className="text-blue-400 font-medium">{education.institution}</p>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <Badge className={`${education.statusColor} text-white text-xs font-semibold px-3 py-1`}>
                          {education.status}
                        </Badge>
                      </div>

                      {/* Details Row */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <span>{education.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <MapPin className="w-4 h-4 text-purple-400" />
                          <span>{education.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <GraduationCap className="w-4 h-4 text-purple-400" />
                          <span>{education.cgpa || education.grade}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {education.description}
                      </p>

                      {/* Expandable Details */}
                      {expandedCards[education.degree] && (
                        <div className="mb-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                          <h4 className="text-white font-semibold mb-3">Relevant {education.cgpa ? 'Courses' : 'Subjects'}:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {education.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(education.degree)}
                          className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                        >
                          {expandedCards[education.degree] ? (
                            <>
                              <ChevronUp className="w-4 h-4 mr-1" />
                              Show Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4 mr-1" />
                              Show More Details
                            </>
                          )}
                        </Button>

                        <Button
                          onClick={() => window.open(education.institutionUrl, '_blank')}
                          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Institution
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
