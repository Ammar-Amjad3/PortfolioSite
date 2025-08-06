import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // Direct download via redirect
    window.open("/api/download-resume", "_blank");
  };

  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-background dark:to-muted pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">M Ammar Amjad</span>
              </h1>
              <div className="text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">
                Front-End Developer
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                UI/UX Designer | Learning MERN Stack
              </p>
              <p className="text-muted-foreground max-w-2xl">
                Passionate about crafting responsive interfaces that are visually appealing and optimized for performance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleDownloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                onClick={handleGetInTouch}
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                size="lg"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://www.linkedin.com/in/ammar-amjad-57435b324/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition-colors duration-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Ammar-Amjad3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground text-2xl transition-colors duration-200"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/iam.ammarx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-pink-500 text-2xl transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/MianAmmar56.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-600 text-2xl transition-colors duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/ammaramjad0324?t=DOjl-BkmaxwmWQwsPI4l_w&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-400 text-2xl transition-colors duration-200"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right duration-1000 delay-300">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
                alt="M Ammar Amjad - Professional headshot"
                className="w-80 h-80 rounded-full object-cover shadow-2xl border-8 border-background"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-cyan-500/20"></div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl animate-bounce">
                💻
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
