// import { Link } from "react-router-dom";
// import { 
//   ArrowRight, 
//   CheckCircle, 
//   MapPin, 
//   Building2, 
//   TrendingUp, 
//   Facebook, 
//   Instagram, 
//   MessageCircle 
// } from "lucide-react";
// import investmentCorridor from "@/assets/investment-corridor.jpg";
// import CountUpNumber from "@/components/CountUpNumber";
// import ServiceCard from "@/components/ServiceCard";
// import { services } from "@/data/services";

// const Home = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex flex-col overflow-hidden">
//         {/* Background Videos - No Filter/Overlay */}
//         <div className="absolute inset-0 z-0">
//           {/* Desktop Video */}
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="hidden md:block w-full h-full object-cover"
//           >
//             <source src="/YAHA LP DESTP.mp4" type="video/mp4" />
//           </video>
          
//           {/* Mobile Video */}
//           <video
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="block md:hidden w-full h-full object-cover"
//           >
//             <source src="/YAHA LP MBL.mp4" type="video/mp4" />
//           </video>
//         </div>
        
//         {/* Hero Content - Position preserved for Laptop, Hidden children for Mobile */}
//         <div className="relative z-20 flex-grow flex items-start container mx-auto px-4 md:px-8 pt-48 md:pt-64 pb-20">
//           <div className="max-w-3xl md:ml-[8%] lg:ml-[12%]">
            
//             {/* Action Buttons Group - HIDDEN on mobile, flex on md (laptop) */}
//             <div className="hidden md:flex flex-col gap-4">
//               <div className="flex flex-wrap items-center gap-4">
//                 <Link to="/properties" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 transition-all shadow-lg transform hover:-translate-y-1">
//                   Explore Properties <ArrowRight size={18} />
//                 </Link>

//                 <a 
//                   href="https://wa.me/918106396021" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold transition-all shadow-lg transform hover:-translate-y-1"
//                 >
//                   <MessageCircle size={20} />
//                   WhatsApp Us
//                 </a>
//               </div>

//               {/* Social Links - HIDDEN on mobile, flex on md (laptop) */}
//               <div className="flex flex-wrap items-center gap-6 px-1">
//                 <a 
//                   href="https://www.facebook.com/share/1E9URqKEay/?mibextid=wwXIfr" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-all text-sm font-bold drop-shadow-md group"
//                 >
//                   <Facebook size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
//                   <span>Yaha Properties</span>
//                 </a>

//                 <a 
//                   href="https://instagram.com/yahaproperties" 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-all text-sm font-bold drop-shadow-md group"
//                 >
//                   <Instagram size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
//                   <span>@yahaproperties</span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Preview */}
//       <section className="section-padding bg-background">
//         <div className="container mx-auto">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="section-title">
//               About <span className="text-primary">Yaha Properties</span>
//             </h2>
//             <p className="text-muted-foreground text-lg leading-relaxed mt-6 mb-4">
//               Yaha Properties is a Tirupati-based real estate firm specializing in legally verified, growth-driven property investments.
//             </p>
//             <p className="text-muted-foreground leading-relaxed mb-8">
//               We help investors and buyers identify high-growth real estate opportunities across Tirupati and surrounding regions.
//             </p>
//             <Link to="/about" className="btn-primary inline-flex items-center gap-2">
//               Read More <ArrowRight size={18} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Key Achievements */}
//       <section className="section-padding bg-secondary">
//         <div className="container mx-auto">
//           <h2 className="section-title text-center mb-12">
//             Our <span className="text-accent">Achievements</span>
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { end: 90000, suffix: "+", label: "Sq Ft Land Sold" },
//               { end: 5000, suffix: "+", label: "Sq Ft Apartments Delivered" },
//               { end: 5, suffix: " Acre", label: "Gated Community Developed" },
//               { end: 50, suffix: "+", label: "Happy Investors" },
//             ].map((stat) => (
//               <div key={stat.label} className="bg-card rounded-xl p-8 text-center shadow-md card-hover">
//                 <CountUpNumber end={stat.end} suffix={stat.suffix} />
//                 <p className="text-muted-foreground font-medium mt-3">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Overview */}
//       <section className="section-padding bg-background">
//         <div className="container mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="section-title">
//               Our <span className="text-primary">Services</span>
//             </h2>
//             <p className="section-subtitle mt-4">
//               Comprehensive real estate services from land acquisition to investment consulting.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {services.slice(0, 8).map((service) => (
//               <ServiceCard key={service.title} {...service} />
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link to="/services" className="btn-primary inline-flex items-center gap-2">
//               View All Services <ArrowRight size={18} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Investment Corridor - Reduced Box Size & Increased Shade */}
//       <section
//         className="relative section-padding"
//         style={{ 
//           backgroundImage: `url(${investmentCorridor})`, 
//           backgroundSize: "cover", 
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat" 
//         }}
//       >
//         <div className="relative container mx-auto">
//           {/* Box Size reduced to max-w-md, shade increased to 60% opacity blue-950 */}
//           <div className="max-w-md bg-blue-950/60 backdrop-blur-md p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
//             <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-6 drop-shadow-md">
//               Investment <span className="text-accent">Corridor</span>
//             </h2>
//             <div className="space-y-4">
//               {[
//                 { icon: MapPin, text: "Tirupati Growth Zones" },
//                 { icon: Building2, text: "Industrial Corridor" },
//                 { icon: TrendingUp, text: "Highway Developments" },
//                 { icon: CheckCircle, text: "TUDA Approved" },
//               ].map((item) => (
//                 <div key={item.text} className="flex items-center gap-3 text-white/90">
//                   <item.icon size={20} className="text-accent flex-shrink-0 drop-shadow-md" />
//                   <span className="text-base md:text-lg font-medium drop-shadow-md">{item.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="section-padding gradient-blue text-center">
//         <div className="container mx-auto">
//           <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
//             Looking for the Right Property Investment?
//           </h2>
//           <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
//             Let our experts guide you to the best investment opportunities in Tirupati.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <a href="https://wa.me/918106396021" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all">
//               Talk To Our Experts
//             </a>
//             <Link to="/services" className="btn-outline-primary border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
//               View Services
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;










import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Building2, 
  TrendingUp, 
  Facebook, 
  Instagram, 
  MessageCircle 
} from "lucide-react";
import investmentCorridor from "@/assets/investment-corridor.jpg";
// New mobile-specific import
import investmentCorridorMobile from "@/assets/investment-corridor2.jpg.jpeg"; 
import CountUpNumber from "@/components/CountUpNumber";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { useEffect, useState } from "react";

const Home = () => {
  // Logic to handle background image switching based on window width
  const [bgImage, setBgImage] = useState(investmentCorridor);

  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth < 768) {
        setBgImage(investmentCorridorMobile);
      } else {
        setBgImage(investmentCorridor);
      }
    };

    updateBg();
    window.addEventListener("resize", updateBg);
    return () => window.removeEventListener("resize", updateBg);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hidden md:block w-full h-full object-cover"
          >
            <source src="/YAHA LP DESTP.mp4" type="video/mp4" />
          </video>
          
          <video
            autoPlay
            muted
            loop
            playsInline
            className="block md:hidden w-full h-full object-cover"
          >
            <source src="/YAHA LP MBL.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-20 flex-grow flex items-start container mx-auto px-4 md:px-8 pt-48 md:pt-64 pb-20">
          <div className="max-w-3xl md:ml-[8%] lg:ml-[12%]">
            <div className="hidden md:flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/properties" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-bold flex items-center gap-2 transition-all shadow-lg transform hover:-translate-y-1">
                  Explore Properties <ArrowRight size={18} />
                </Link>

                <a 
                  href="https://wa.me/918106396021" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold transition-all shadow-lg transform hover:-translate-y-1"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 px-1">
                <a 
                  href="https://www.facebook.com/share/1E9URqKEay/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-all text-sm font-bold drop-shadow-md group"
                >
                  <Facebook size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
                  <span>Yaha Properties</span>
                </a>

                <a 
                  href="https://instagram.com/yahaproperties" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-500 transition-all text-sm font-bold drop-shadow-md group"
                >
                  <Instagram size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
                  <span>@yahaproperties</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title">
              About <span className="text-primary">Yaha Properties</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mt-6 mb-4">
              Yaha Properties is a Tirupati-based real estate firm specializing in legally verified, growth-driven property investments.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We help investors and buyers identify high-growth real estate opportunities across Tirupati and surrounding regions.
            </p>
            <Link to="/about" className="btn-primary inline-flex items-center gap-2">
              Read More <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-12">
            Our <span className="text-accent">Achievements</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { end: 90000, suffix: "+", label: "Sq Ft Land Sold" },
              { end: 5000, suffix: "+", label: "Sq Ft Apartments Delivered" },
              { end: 5, suffix: " Acre", label: "Gated Community Developed" },
              { end: 50, suffix: "+", label: "Happy Investors" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-8 text-center shadow-md card-hover">
                <CountUpNumber end={stat.end} suffix={stat.suffix} />
                <p className="text-muted-foreground font-medium mt-3">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="section-subtitle mt-4">
              Comprehensive real estate services from land acquisition to investment consulting.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary inline-flex items-center gap-2">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Investment Corridor - Dynamic Mobile/Desktop Background */}
      <section
        className="relative section-padding transition-all duration-500"
        style={{ 
          backgroundImage: `url(${bgImage})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat" 
        }}
      >
        <div className="relative container mx-auto">
          <div className="max-w-md bg-blue-950/60 backdrop-blur-md p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-6 drop-shadow-md">
              Investment <span className="text-accent">Corridor</span>
            </h2>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Tirupati Growth Zones" },
                { icon: Building2, text: "Industrial Corridor" },
                { icon: TrendingUp, text: "Highway Developments" },
                { icon: CheckCircle, text: "TUDA Approved" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-white/90">
                  <item.icon size={20} className="text-accent flex-shrink-0 drop-shadow-md" />
                  <span className="text-base md:text-lg font-medium drop-shadow-md">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-blue text-center">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Looking for the Right Property Investment?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Let our experts guide you to the best investment opportunities in Tirupati.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/918106396021" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition-all">
              Talk To Our Experts
            </a>
            <Link to="/services" className="btn-outline-primary border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;