import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Code, BookOpen, Briefcase } from "lucide-react";

export default function ResumeSection() {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch("/api/download-resume");
      const data = await response.json();
      
      if (data.success) {
        window.open(data.url, '_blank');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Download error:", error);
      alert("Resume download will be available soon!");
    }
  };

  return (
    <section id="resume" className="py-20 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">📄 Download My Resume</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Get a comprehensive overview of my skills, experience, and education in a professional format.
          </p>
        </div>

        <Card className="shadow-xl animate-in fade-in slide-in-from-bottom duration-1000">
          <CardContent className="p-12">
            <div className="mb-8">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                M Ammar Amjad - Frontend Developer
              </h3>
              <p className="text-muted-foreground mb-8">
                Complete resume including my technical skills, project experience, education background, and contact information.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Code className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Technical Skills</h4>
                  <p className="text-muted-foreground text-sm">React, JavaScript, TypeScript, Firebase</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Projects</h4>
                  <p className="text-muted-foreground text-sm">15+ completed projects</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-muted-foreground text-sm">BS Computer Science</p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleDownloadResume}
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <Download className="mr-3 h-4 w-4" />
              Download Resume (PDF)
            </Button>
            
            <p className="text-muted-foreground text-sm mt-4">
              Last updated: December 2024 • File size: ~250KB
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
