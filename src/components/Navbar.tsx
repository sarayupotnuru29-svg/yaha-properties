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
//         {/* Height increased to h-32 to accommodate a much larger logo */}
//         <div className="flex items-center justify-between h-28 md:h-32">
//           <Link to="/" className="flex items-center gap-4 group">
//             {/* Forced the logo height to 112px (h-28). 
//                 Added min-h to prevent tailwind from shrinking it. 
//             */}
//             <img 
//               src={logo} 
//               alt="Yaha Properties" 
//               className="h-24 md:h-28 min-h-[96px] md:min-h-[112px] w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
//             />
//             <div className="hidden sm:block">
//               <span className={`font-heading font-bold text-2xl md:text-3xl tracking-tight transition-colors ${
//                 scrolled ? "text-primary" : "text-primary-foreground"
//               }`}>
//                 Yaha Properties
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`font-semibold text-lg transition-colors duration-200 ${
//                   link.path === "/contact"
//                     ? "btn-accent py-2 px-8"
//                     : location.pathname === link.path
//                     ? "text-accent border-b-2 border-accent"
//                     : scrolled
//                     ? "text-foreground hover:text-primary"
//                     : "text-primary-foreground hover:text-accent"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className={`lg:hidden p-2 transition-colors ${
//               scrolled ? "text-foreground" : "text-primary-foreground"
//             }`}
//           >
//             {isOpen ? <X size={36} /> : <Menu size={36} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden bg-background rounded-xl shadow-2xl mb-4 p-6 animate-fade-in-up border border-slate-100">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`block py-4 px-4 rounded-lg font-bold text-xl transition-colors ${
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
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => setIsOpen(false), [location]);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/95 backdrop-blur-md shadow-sm py-0"
//           : "bg-white border-b border-slate-100 py-0"
//       }`}
//     >
//       <div className="container mx-auto px-4 md:px-8">
//         {/* Reduced height from h-28 to h-16/h-20 for a slimmer profile */}
//         <div className="flex items-center justify-between h-16 md:h-20">
//           <Link to="/" className="flex items-center gap-3 group">
//             <img 
//               src={logo} 
//               alt="Yaha Properties" 
//               className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
//             />
//             <div className="hidden sm:block">
//               <span className="font-heading font-bold text-xl md:text-2xl tracking-tight text-slate-900">
//                 Yaha Properties
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-6">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`font-bold text-base transition-all duration-200 ${
//                   link.path === "/contact"
//                     ? "bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90 shadow-sm"
//                     : location.pathname === link.path
//                     ? "text-primary border-b-2 border-primary"
//                     : "text-slate-900 hover:text-primary"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden p-2 text-slate-900 transition-colors"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden bg-white rounded-b-xl shadow-xl p-4 animate-fade-in-up border-t border-slate-100 absolute left-0 right-0 top-16">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`block py-3 px-4 rounded-lg font-bold text-lg transition-colors ${
//                   location.pathname === link.path
//                     ? "bg-primary/10 text-primary"
//                     : "text-slate-900 hover:bg-slate-50"
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
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => setIsOpen(false), [location]);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/95 backdrop-blur-md shadow-sm py-0"
//           : "bg-white border-b border-slate-100 py-0"
//       }`}
//     >
//       <div className="container mx-auto px-4 md:px-8">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           <Link to="/" className="flex items-center gap-3 group">
//             {/* Increased logo size relative to the navbar height */}
//             <img 
//               src={logo} 
//               alt="Yaha Properties" 
//               className="h-14 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
//             />
//             <div className="hidden sm:block">
//               {/* Changed text color to text-primary to match logo brand color */}
//               <span className="font-heading font-bold text-xl md:text-2xl tracking-tight text-primary">
//                 Yaha Properties
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-6">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`font-bold text-base transition-all duration-200 ${
//                   link.path === "/contact"
//                     ? "bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90 shadow-sm"
//                     : location.pathname === link.path
//                     ? "text-primary border-b-2 border-primary"
//                     : "text-slate-900 hover:text-primary"
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden p-2 text-slate-900 transition-colors"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden bg-white rounded-b-xl shadow-xl p-4 animate-fade-in-up border-t border-slate-100 absolute left-0 right-0 top-16">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`block py-3 px-4 rounded-lg font-bold text-lg transition-colors ${
//                   location.pathname === link.path
//                     ? "bg-primary/10 text-primary"
//                     : "text-slate-900 hover:bg-slate-50"
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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-0"
          : "bg-white border-b border-slate-100 py-1"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Adjusted height to h-20 on mobile and h-28 on desktop for a cleaner look */}
        <div className="flex items-center justify-between h-20 md:h-28">
          <Link to="/" className="flex items-center gap-3 group">
            {/* Reduced logo size slightly from the previous "giant" version */}
            <img 
              src={logo} 
              alt="Yaha Properties" 
              className="h-20 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            
            <div className="hidden sm:block">
              {/* Refined text size to md:text-3xl */}
              <span className="font-heading font-bold text-xl md:text-3xl tracking-tight text-primary">
                Yaha Properties
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-bold text-base transition-all duration-200 ${
                  link.path === "/contact"
                    ? "bg-primary text-white py-2.5 px-7 rounded-md hover:bg-primary/90 shadow-md"
                    : location.pathname === link.path
                    ? "text-primary border-b-2 border-primary"
                    : "text-slate-900 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-900 transition-colors"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white rounded-b-xl shadow-xl p-4 animate-fade-in-up border-t border-slate-100 absolute left-0 right-0 top-full">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 px-4 rounded-lg font-bold text-lg transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-slate-900 hover:bg-slate-50"
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