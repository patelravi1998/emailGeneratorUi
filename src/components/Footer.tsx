
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-20 md:py-32 bg-gradient-to-b from-white to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 animate-fade-in">
          {/* Company Info */}
          <div className="space-y-8 transform hover:scale-105 transition-transform duration-300">
            <Logo />
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors">
                <div className="glass p-3 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-lg">House-09, Rd no. 15, Mecca, Saudi Arabia</p>
              </div>
              <div className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors">
                <div className="glass p-3 rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <p className="text-lg">+966 0576 XXX XXX</p>
              </div>
              <div className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors">
                <div className="glass p-3 rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <p className="text-lg">contact@tempmail.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="glass p-3 rounded-xl hover:bg-primary hover:text-white transform hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                "Home",
                "Services",
                "Features",
                "News",
                "Blogs",
              ].map((item, index) => (
                <li key={index} className="transform hover:translate-x-2 transition-transform">
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-lg">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Subscribe to Newsletter
            </h3>
            <p className="text-gray-600 text-lg">
              Stay updated with our latest features and releases.
            </p>
            <div className="glass p-2 rounded-xl premium-shadow">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 focus:ring-2 focus:ring-primary/20 text-lg rounded-lg"
                />
                <Button 
                  type="submit" 
                  size="icon"
                  className="bg-primary hover:bg-primary/90 transition-colors rounded-lg"
                >
                  →
                </Button>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              By subscribing you agree to our{" "}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t text-center">
          <p className="text-gray-600 animate-fade-in text-lg">
            ©{new Date().getFullYear()} Temp Mail. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
