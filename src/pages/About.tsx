// import { CheckCircle, Award, Users } from "lucide-react";
// import founderPhoto from "@/assets/founder-photo.jpg";
// import yaswanthPhoto from "@/assets/yaswanth-photo.jpeg";

// const About = () => {
//   return (
//     <div>
//       {/* Hero */}
//       <section className="gradient-blue pt-32 pb-20 text-center">
//         <div className="container mx-auto px-4">
//           <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
//             About <span className="text-accent">Yaha Properties</span>
//           </h1>
//           <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
//             Your trusted partner for legally verified, research-driven property investments in Tirupati.
//           </p>
//         </div>
//       </section>

//       {/* About Business */}
//       <section className="section-padding bg-background">
//         <div className="container mx-auto max-w-4xl">
//           <h2 className="section-title text-center mb-8">Who We Are</h2>
//           <p className="text-muted-foreground text-lg leading-relaxed mb-6">
//             Yaha Properties is a Tirupati-based real estate firm specializing in legally verified, research-driven property investments. We focus on identifying high-growth real estate opportunities across Tirupati and surrounding regions.
//           </p>
//           <div className="bg-secondary rounded-xl p-8 mt-8">
//             <h3 className="font-heading font-semibold text-xl text-foreground mb-4 flex items-center gap-2">
//               <Award className="text-accent" size={24} /> Our Achievements
//             </h3>
//             <ul className="space-y-3">
//               {[
//                 "Sold large volumes of agricultural land",
//                 "Facilitated high-value investment transactions",
//                 "Delivered a 5-acre highway-facing gated community",
//                 "Operated across Tirupati–Naidupeta industrial corridor",
//                 "Built a strong base of satisfied investors",
//               ].map((item) => (
//                 <li key={item} className="flex items-start gap-3 text-foreground">
//                   <CheckCircle size={18} className="text-success mt-0.5 flex-shrink-0" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Founder */}
//       <section className="section-padding bg-secondary">
//         <div className="container mx-auto">
//           <h2 className="section-title text-center mb-12">
//             Our <span className="text-primary">Leadership</span>
//           </h2>

//           {/* Founder */}
//           <div className="max-w-5xl mx-auto mb-16">
//             <div className="bg-card rounded-xl overflow-hidden shadow-lg flex flex-col lg:flex-row">
//               <div className="lg:w-80 flex-shrink-0">
//                 <img src={founderPhoto} alt="Kaveripakam Harisai" className="w-full h-80 lg:h-full object-cover" />
//               </div>
//               <div className="p-8 lg:p-10 flex-1">
//                 <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
//                   Founder
//                 </div>
//                 <h3 className="font-heading font-bold text-2xl text-foreground mb-1">Kaveripakam Harisai</h3>
//                 <p className="text-muted-foreground font-medium mb-4">Real Estate Professional</p>
//                 <p className="text-muted-foreground leading-relaxed mb-4">
//                   Real estate professional with expertise in agricultural lands, residential plots, apartments, and investment-based properties. Deep knowledge in property title verification, mutation records, revenue documentation, and mortgage processing.
//                 </p>
//                 <div className="space-y-2">
//                   {[
//                     "Facilitated 90,000+ sq ft of land sales",
//                     "Delivered 5,000+ sq ft apartment projects",
//                     "Developed a 5-acre TUDA gated community layout",
//                   ].map((a) => (
//                     <div key={a} className="flex items-center gap-2 text-sm text-foreground">
//                       <CheckCircle size={16} className="text-success flex-shrink-0" />
//                       <span>{a}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Co-Founder */}
//           <div className="max-w-5xl mx-auto">
//             <div className="bg-card rounded-xl overflow-hidden shadow-lg flex flex-col lg:flex-row-reverse">
//               <div className="lg:w-80 flex-shrink-0">
//                 <img src={yaswanthPhoto} alt="Jeepalem Yaswanth Reddy" className="w-full h-80 lg:h-full object-cover" />
//               </div>
//               <div className="p-8 lg:p-10 flex-1">
//                 <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
//                   Co-Founder
//                 </div>
//                 <h3 className="font-heading font-bold text-2xl text-foreground mb-1">Jeepalem Yaswanth Reddy</h3>
//                 <p className="text-muted-foreground font-medium mb-4">Visionary Real Estate Leader</p>
//                 <p className="text-muted-foreground leading-relaxed mb-4">
//                   A visionary real estate leader with expertise in land acquisition, high-value transactions, and seamless registration execution. Known for 60+ year property record analysis, TUDA-approved project documentation, regulatory compliance, and high-growth investment strategies.
//                 </p>
//                 <div className="flex items-center gap-2 text-sm text-foreground">
//                   <Users size={16} className="text-primary flex-shrink-0" />
//                   <span>Trusted by dozens of investors</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;







import { CheckCircle, Award, Users, MapPin } from "lucide-react";
import founderPhoto from "@/assets/founder-photo.jpg";
import yaswanthPhoto from "@/assets/yaswanth-photo.jpeg";
import addOne from "@/assets/addone.jpeg";
import addTwo from "@/assets/addtwo.jpeg";

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="gradient-blue pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            About <span className="text-accent">Yaha Properties</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Your trusted partner for legally verified, research-driven property investments in Tirupati.
          </p>
        </div>
      </section>

      {/* About Business */}
      <section className="section-padding bg-background pb-10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title text-center mb-8">Who We Are</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-center">
            Yaha Properties is a Tirupati-based real estate firm specializing in legally verified, research-driven property investments. We focus on identifying high-growth real estate opportunities across Tirupati and surrounding regions.
          </p>
          <div className="bg-secondary rounded-xl p-8 mt-8">
            <h3 className="font-heading font-semibold text-xl text-foreground mb-4 flex items-center gap-2">
              <Award className="text-accent" size={24} /> Our Achievements
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Sold large volumes of agricultural land",
                "Facilitated high-value investment transactions",
                "Delivered a 5-acre highway-facing gated community",
                "Operated across Tirupati–Naidupeta industrial corridor",
                "Built a strong base of satisfied investors",
                "Expertise in TUDA & LP approvals",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <CheckCircle size={18} className="text-success mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Project: 5-Acre Gated Community */}
      <section className="section-padding bg-background pt-0">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-8 justify-center lg:justify-start">
               <MapPin className="text-primary" size={24} />
               <h2 className="text-2xl font-bold font-heading">Our 5-Acre Gated Community Project</h2>
            </div>
            
            {/* Rectangle Layout - Fully Visible Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2">
                <img 
                  src={addOne} 
                  alt="A Promise of Lifestyle & Future in Sacred City Tirupati" 
                  className="w-full h-auto object-contain rounded-lg" 
                />
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-2">
                <img 
                  src={addTwo} 
                  alt="Proposed 40ft Wide Road Site Plan" 
                  className="w-full h-auto object-contain rounded-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-12">
            Our <span className="text-primary">Leadership</span>
          </h2>

          {/* Founder */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-card rounded-xl overflow-hidden shadow-lg flex flex-col lg:flex-row">
              <div className="lg:w-80 flex-shrink-0">
                <img src={founderPhoto} alt="Kaveripakam Harisai" className="w-full h-80 lg:h-full object-cover" />
              </div>
              <div className="p-8 lg:p-10 flex-1">
                <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Founder
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">Kaveripakam Harisai</h3>
                <p className="text-muted-foreground font-medium mb-4">Real Estate Professional</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Real estate professional with expertise in agricultural lands, residential plots, apartments, and investment-based properties. Deep knowledge in property title verification, mutation records, revenue documentation, and mortgage processing.
                </p>
                <div className="space-y-2">
                  {[
                    "Facilitated 90,000+ sq ft of land sales",
                    "Delivered 5,000+ sq ft apartment projects",
                    "Developed a 5-acre TUDA gated community layout",
                  ].map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle size={16} className="text-success flex-shrink-0" />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Co-Founder */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-xl overflow-hidden shadow-lg flex flex-col lg:flex-row-reverse">
              <div className="lg:w-80 flex-shrink-0">
                <img src={yaswanthPhoto} alt="Jeepalem Yaswanth Reddy" className="w-full h-80 lg:h-full object-cover" />
              </div>
              <div className="p-8 lg:p-10 flex-1">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                  Co-Founder
                </div>
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">Jeepalem Yaswanth Reddy</h3>
                <p className="text-muted-foreground font-medium mb-4">Visionary Real Estate Leader</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A visionary real estate leader with expertise in land acquisition, high-value transactions, and seamless registration execution. Known for 60+ year property record analysis, TUDA-approved project documentation, regulatory compliance, and high-growth investment strategies.
                </p>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <Users size={16} className="text-primary flex-shrink-0" />
                  <span>Trusted by dozens of investors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;