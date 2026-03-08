// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import logo from "@/assets/logo.png";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "About Us", path: "/about" },
//   { name: "Services", path: "/services" },
//   { name: "Properties", path: "/properties" },
//   { name: "Customers", path: "/customers" },
//   { name: "Contact Us", path: "/contact" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => setIsOpen(false), [location]);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-background/95 backdrop-blur-md shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4 md:px-8">
//         {/* Increased h-20 to h-24 to accommodate a larger logo */}
//         <div className="flex items-center justify-between h-24">
//           <Link to="/" className="flex items-center gap-4">
//             {/* Increased logo height from h-16 to h-20 (80px) or h-24 (96px) depending on your preference */}
//             <img src={logo} alt="Yaha Properties" className="h-20 md:h-22 w-auto transition-transform duration-300 hover:scale-105" />
//             <div className="hidden sm:block">
//               <span className={`font-heading font-bold text-2xl ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
//                 Yaha Properties
//               </span>
//             </div>
//           </Link>

//           <div className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`font-medium transition-colors duration-200 ${
//                   link.path === "/contact"
//                     ? "btn-accent text-sm py-2 px-6"
//                     : location.pathname === link.path
//                     ? "text-accent"
//                     : scrolled
//                     ? "text-foreground hover:text-primary"
//                     : "text-primary-foreground hover:text-accent"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
//           >
//             {isOpen ? <X size={32} /> : <Menu size={32} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden bg-background rounded-xl shadow-xl mb-4 p-4 animate-fade-in-up border border-slate-100">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
//                   location.pathname === link.path
//                     ? "bg-primary/10 text-primary"
//                     : "text-foreground hover:bg-muted"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Properties", path: "/properties" },
  { name: "Customers", path: "/customers" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Height increased to h-32 to accommodate a much larger logo */}
        <div className="flex items-center justify-between h-28 md:h-32">
          <Link to="/" className="flex items-center gap-4 group">
            {/* Forced the logo height to 112px (h-28). 
                Added min-h to prevent tailwind from shrinking it. 
            */}
            <img 
              src={logo} 
              alt="Yaha Properties" 
              className="h-24 md:h-28 min-h-[96px] md:min-h-[112px] w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="hidden sm:block">
              <span className={`font-heading font-bold text-2xl md:text-3xl tracking-tight transition-colors ${
                scrolled ? "text-primary" : "text-primary-foreground"
              }`}>
                Yaha Properties
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold text-lg transition-colors duration-200 ${
                  link.path === "/contact"
                    ? "btn-accent py-2 px-8"
                    : location.pathname === link.path
                    ? "text-accent border-b-2 border-accent"
                    : scrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {isOpen ? <X size={36} /> : <Menu size={36} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-background rounded-xl shadow-2xl mb-4 p-6 animate-fade-in-up border border-slate-100">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-4 px-4 rounded-lg font-bold text-xl transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;