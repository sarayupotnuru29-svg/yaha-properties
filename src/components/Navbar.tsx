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
//           ? "bg-white/90 backdrop-blur-md shadow-sm"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4 md:px-8">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo only Link */}
//           <Link to="/" className="flex items-center group">
//             <img 
//               src={logo} 
//               alt="Yaha Properties Logo" 
//               className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
//             />
//           </Link>

//           {/* Desktop Navigation - Orange & Blue Combination */}
//           <div className="hidden lg:flex items-center gap-6">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`font-bold text-base transition-all duration-200 ${
//                   link.path === "/contact"
//                     ? "bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 shadow-md"
//                     : location.pathname === link.path
//                     ? "text-blue-600 border-b-2 border-blue-600" // Active state in Blue
//                     : scrolled 
//                       ? "text-orange-500 hover:text-blue-600" // Scrolled: Orange text, Blue hover
//                       : "text-white hover:text-orange-400 drop-shadow-md" // Transparent: White text, Orange hover
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
//               scrolled ? "text-orange-500" : "text-white"
//             }`}
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden bg-white rounded-b-xl shadow-xl p-4 animate-fade-in-up border-t border-slate-100 absolute left-0 right-0 top-full">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`block py-3 px-4 rounded-lg font-bold text-lg transition-colors ${
//                   location.pathname === link.path
//                     ? "bg-blue-50 text-blue-600"
//                     : "text-orange-500 hover:bg-orange-50 hover:text-blue-600"
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
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo only Link */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Yaha Properties Logo" 
              className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation - Always Orange & Blue */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-bold text-base transition-all duration-200 ${
                  link.path === "/contact"
                    ? "bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 shadow-md"
                    : location.pathname === link.path
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-orange-500 hover:text-blue-600" 
                }`}
                style={{ 
                  // Added a subtle shadow so orange is visible on any background top-scroll
                  textShadow: scrolled ? "none" : "0px 1px 2px rgba(255,255,255,0.8)" 
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle - Always Orange */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-orange-500 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
                    ? "bg-blue-50 text-blue-600"
                    : "text-orange-500 hover:bg-orange-50 hover:text-blue-600"
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