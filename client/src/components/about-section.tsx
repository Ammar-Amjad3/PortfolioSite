import { Card, CardContent } from "@/components/ui/card";
import { User, Mail, Phone, MapPin, GraduationCap, Briefcase } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-1000">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Front-End Developer and UI/UX Designer, currently exploring the MERN Stack. 
              I love crafting responsive interfaces that are visually appealing and optimized for performance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in modern web technologies, I focus on creating user-centered designs 
              that not only look great but also provide exceptional user experiences. My journey in web 
              development has been driven by curiosity and a constant desire to learn and improve.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="text-blue-600 h-5 w-5" />
                  <span className="font-medium">Name:</span>
                  <span className="text-muted-foreground">M Ammar Amjad</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-600 h-5 w-5" />
                  <span className="font-medium">Email:</span>
                  <a
                    href="mailto:ammaramjad0324@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    ammaramjad0324@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-600 h-5 w-5" />
                  <span className="font-medium">Phone:</span>
                  <a
                    href="tel:+923245947204"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    0324-5947204
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600 h-5 w-5" />
                  <span className="font-medium">Location:</span>
                  <span className="text-muted-foreground">Faisalabad, Punjab, Pakistan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-blue-600 h-5 w-5" />
                  <span className="font-medium">Degree:</span>
                  <span className="text-muted-foreground">BS Computer Science</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="text-blue-600 h-5 w-5" />
                  <span className="font-medium">Focus:</span>
                  <span className="text-muted-foreground">Frontend Development</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-muted dark:to-muted animate-in fade-in slide-in-from-right duration-1000 delay-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Quick Facts</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-bold text-blue-600 text-xl">15+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Technologies Learned</span>
                  <span className="font-bold text-blue-600 text-xl">10+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Years of Learning</span>
                  <span className="font-bold text-blue-600 text-xl">4+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Coffee Cups ☕</span>
                  <span className="font-bold text-blue-600 text-xl">∞</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
