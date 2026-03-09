import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import staffArcLogo from "@/assets/staffarclogo.jpg";

const Footer = () => {
  return (
    <footer className="gradient-blue text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Logo and Name Side-by-Side */}
            <div className="flex items-center gap-3 mb-6 group">
              <img 
                src={logo} 
                alt="Yaha Properties" 
                className="h-16 w-auto drop-shadow-xl transition-transform duration-300 group-hover:scale-110" 
              />
              <span className="font-heading font-bold text-2xl tracking-tighter">
                Yaha Properties
              </span>
            </div>
            
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8 max-w-xs">
              Smart real estate investments in Tirupati. Legally verified, growth-focused property solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/1E9URqKEay/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-all"
                title="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com/yahaproperties" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-all"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/918106396021" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-[#25D366] transition-all"
                title="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-4 lg:pt-0">
            <h3 className="font-heading font-bold text-lg mb-8 border-l-4 border-accent pl-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Properties", path: "/properties" },
                { name: "Customers", path: "/customers" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-accent transition-all text-sm font-medium hover:pl-2">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="pt-4 lg:pt-0">
            <h3 className="font-heading font-bold text-lg mb-8 border-l-4 border-accent pl-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Agricultural Land Sales", 
                "Residential Plots", 
                "Gated Communities", 
                "Apartment Sales", 
                "Investment Consulting", 
                "Property Verification"
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-primary-foreground/70 hover:text-accent transition-all text-sm font-medium hover:pl-2">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="pt-4 lg:pt-0 text-left">
            <h3 className="font-heading font-bold text-lg mb-8 border-l-4 border-accent pl-4">Contact Info</h3>
            <div className="space-y-5">
              <a href="tel:+918106396021" className="flex items-start gap-4 group">
                <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/40 transition-colors">
                  <Phone size={18} className="text-accent" />
                </div>
                <div className="text-sm text-primary-foreground/80 font-medium">
                  <p>8309458058</p>
                  <p>8106396021</p>
                </div>
              </a>
              <a href="mailto:Yahaproperties@gmail.com" className="flex items-start gap-4 group">
                <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/40 transition-colors">
                  <Mail size={18} className="text-accent" />
                </div>
                <p className="text-sm text-primary-foreground/80 font-medium break-all">
                  Yahaproperties@gmail.com
                </p>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <p className="text-sm text-primary-foreground/80 font-medium leading-relaxed">
                  Thukivakam, Renigunta Mandal,<br />
                  Tirupati District, AP, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-foreground/10 mt-16 pt-10 flex flex-col items-center gap-6">
          <p className="text-primary-foreground/50 text-[10px] tracking-widest uppercase font-semibold">
            © {new Date().getFullYear()} Yaha Properties. All rights reserved.
          </p>
          
          <div className="flex justify-center items-center gap-2 text-sm bg-white/5 px-6 py-2 rounded-full border border-white/10">
            Made with <Heart className="inline h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold transition-all"
            >
              <img
                src={staffArcLogo}
                alt="StaffArc logo"
                className="h-5 w-5 object-contain rounded-sm"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;