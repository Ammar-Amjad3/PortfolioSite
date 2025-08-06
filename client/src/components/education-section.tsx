import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science (BS), Computer Science",
    period: "2021 - 2025",
    institution: "Government College University, Faisalabad",
    cgpa: "3.0",
    courses: "Web App Dev, DSA, SE, DBMS, OOP, OS, Mobile App Dev",
    icon: GraduationCap,
    color: "blue",
  },
  {
    degree: "FSc Pre-Engineering - A+ Grade",
    period: "2019 - 2021",
    institution: "The Logic School System (Khurrianwala Campus)",
    subjects: "Math, Physics, Computer, English, Islamic Studies",
    icon: School,
    color: "green",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-600"></div>

          {educationData.map((education, index) => (
            <div
              key={education.degree}
              className={`relative flex items-center mb-12 animate-in fade-in slide-in-from-left duration-1000 ${
                index % 2 === 1 ? "md:justify-end" : ""
              }`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 border-4 border-background rounded-full z-10"></div>

              <div className={`ml-16 md:ml-0 ${index % 2 === 1 ? "md:mr-8 md:w-1/2" : "md:ml-8 md:w-1/2"}`}>
                <Card className="shadow-lg border hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          education.color === "blue"
                            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                            : "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                        }`}
                      >
                        {education.period}
                      </span>
                      <education.icon
                        className={`text-xl ${
                          education.color === "blue" ? "text-blue-600" : "text-green-600"
                        }`}
                      />
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>

                    <p
                      className={`font-medium mb-3 ${
                        education.color === "blue"
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-green-600 dark:text-green-400"
                      }`}
                    >
                      {education.institution}
                    </p>

                    {education.cgpa && (
                      <div className="text-muted-foreground mb-4">
                        <span className="font-medium">CGPA: {education.cgpa}</span>
                      </div>
                    )}

                    <div className="text-muted-foreground text-sm">
                      <strong>
                        {education.courses ? "Relevant Courses:" : "Subjects:"}
                      </strong>{" "}
                      {education.courses || education.subjects}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
