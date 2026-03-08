// import { Link } from "react-router-dom";
// import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Heart } from "lucide-react";
// import logo from "@/assets/logo.png";
// import staffArcLogo from "@/assets/staffarclogo.jpg";

// const Footer = () => {
//   return (
//     <footer className="gradient-blue text-primary-foreground">
//       <div className="container mx-auto px-4 md:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <img src={logo} alt="Yaha Properties" className="h-12 w-auto" />
//               <span className="font-heading font-bold text-xl">Yaha Properties</span>
//             </div>
//             <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
//               Smart real estate investments in Tirupati. Legally verified, growth-focused property solutions.
//             </p>
//             <div className="flex gap-3">
//               <a href="https://facebook.com/yahaproperties" target="_blank" rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
//                 <Facebook size={18} />
//               </a>
//               <a href="https://instagram.com/yahaproperties" target="_blank" rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
//                 <Instagram size={18} />
//               </a>
//               <a href="https://linkedin.com/company/yahaproperties" target="_blank" rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
//                 <Linkedin size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
//             <ul className="space-y-3">
//               {[
//                 { name: "Home", path: "/" },
//                 { name: "About Us", path: "/about" },
//                 { name: "Services", path: "/services" },
//                 { name: "Properties", path: "/properties" },
//                 { name: "Contact Us", path: "/contact" },
//               ].map((link) => (
//                 <li key={link.path}>
//                   <Link to={link.path} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
//             <ul className="space-y-3">
//               {["Agricultural Land Sales", "Residential Plots", "Gated Communities", "Apartment Sales", "Investment Consulting", "Property Verification"].map((s) => (
//                 <li key={s}>
//                   <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
//                     {s}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <Phone size={18} className="mt-0.5 text-accent" />
//                 <div className="text-sm text-primary-foreground/80">
//                   <p>8309458058</p>
//                   <p>8106396021</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <Mail size={18} className="mt-0.5 text-accent" />
//                 <p className="text-sm text-primary-foreground/80">Yahaproperties@gmail.com</p>
//               </div>
//               <div className="flex items-start gap-3">
//                 <MapPin size={18} className="mt-0.5 text-accent" />
//                 <p className="text-sm text-primary-foreground/80">
//                   Thukivakam, Renigunta Mandal,<br />
//                   Tirupati District, Andhra Pradesh, India
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col items-center gap-4">
//           <p className="text-primary-foreground/60 text-sm">
//             © {new Date().getFullYear()} Yaha Properties. All rights reserved.
//           </p>
          
//           {/* Credits Section */}
//           <div className="flex justify-center items-center gap-1 text-sm">
//             Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
//             <a
//               href="https://staffarc.in"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1 text-orange-500 hover:text-orange-400 font-medium transition-colors hover:underline"
//             >
//               <img
//                 src={staffArcLogo}
//                 alt="StaffArc logo"
//                 className="h-5 w-5 object-contain rounded-sm"
//               />
//               StaffArc
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import staffArcLogo from "@/assets/staffarclogo.jpg";

const Footer = () => {
  return (
    <footer className="gradient-blue text-primary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            {/* Increased h-12 to h-16 for a larger footer logo */}
            <div className="flex items-center gap-4 mb-5">
              <img src={logo} alt="Yaha Properties" className="h-16 w-auto" />
              <span className="font-heading font-bold text-2xl">Yaha Properties</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Smart real estate investments in Tirupati. Legally verified, growth-focused property solutions.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com/yahaproperties" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/yahaproperties" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com/company/yahaproperties" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
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
                  <Link to={link.path} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {["Agricultural Land Sales", "Residential Plots", "Gated Communities", "Apartment Sales", "Investment Consulting", "Property Verification"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-accent" />
                <div className="text-sm text-primary-foreground/80">
                  <p>8309458058</p>
                  <p>8106396021</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-accent" />
                <p className="text-sm text-primary-foreground/80">Yahaproperties@gmail.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-accent" />
                <p className="text-sm text-primary-foreground/80">
                  Thukivakam, Renigunta Mandal,<br />
                  Tirupati District, Andhra Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Yaha Properties. All rights reserved.
          </p>
          
          {/* Credits Section */}
          <div className="flex justify-center items-center gap-1 text-sm">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-500 hover:text-orange-400 font-medium transition-colors hover:underline"
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