import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">M Ammar Amjad</h3>
            <p className="text-gray-400 mb-4">
              Frontend Developer passionate about creating beautiful and functional web experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ammar-amjad-57435b324/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://github.com/Ammar-Amjad3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/iam.ammarx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => handleNavClick("home")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  className="hover:text-white transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("skills")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("projects")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:ammaramjad0324@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  ammaramjad0324@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923245947204"
                  className="hover:text-white transition-colors duration-200"
                >
                  +92 324 5947204
                </a>
              </li>
              <li>Faisalabad, Punjab, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} M Ammar Amjad. All rights reserved. Built with passion and modern web
            technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
