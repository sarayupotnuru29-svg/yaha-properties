// import { Users, Camera, MapPin } from "lucide-react";

// // Importing all images from assets
// import c_main from "@/assets/customer.jpeg";
// import c1 from "@/assets/customerone.jpeg";
// import c2 from "@/assets/customertwo.jpeg";
// import c3 from "@/assets/customerthree.jpeg";
// import c4 from "@/assets/customerfour.jpeg";
// import c5 from "@/assets/customerfive.jpeg";
// import c6 from "@/assets/customersix.jpeg";
// import c7 from "@/assets/customerseven.jpeg";
// import c8 from "@/assets/customereight.jpeg";
// import c9 from "@/assets/customernine.jpeg";
// import c10 from "@/assets/customerten.jpeg";
// import c11 from "@/assets/customereleven.jpeg";
// import c12 from "@/assets/customertwelve.jpeg";
// import c13 from "@/assets/customerthirteen.jpeg";
// import c14 from "@/assets/customerfourteen.jpeg";
// import c15 from "@/assets/customerfifteen.jpeg";
// import c16 from "@/assets/customersixtheen.jpeg";
// import c17 from "@/assets/customerseventeen.jpeg";
// import c18 from "@/assets/customereighteen.jpeg";
// import c19 from "@/assets/customernineteen.jpeg";
// import c20 from "@/assets/customertwenty.jpeg";
// import c21 from "@/assets/twentyone.jpeg";
// import c22 from "@/assets/twentytwo.jpeg";
// import c23 from "@/assets/twentythree.jpeg";
// import c24 from "@/assets/twentyfour.jpeg";
// import c25 from "@/assets/twentyfive.jpeg";
// import c26 from "@/assets/twentysix.jpeg";

// const Customers = () => {
//   // Array to map through for the gallery
//   const customerImages = [
//     c_main, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
//     c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,
//     c21, c22, c23, c24, c25, c26
//   ].filter(Boolean); // This removes any "undefined" imports if a file is missing

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="gradient-blue pt-32 pb-20 text-center">
//         <div className="container mx-auto px-4">
//           <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
//             Our <span className="text-accent">Customers & Site Visits</span>
//           </h1>
//           <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
//             Glimpses of our growing family of happy investors and successful site tours across Tirupati.
//           </p>
//         </div>
//       </section>

//       {/* Stats/Overview */}
//       <section className="py-12 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div className="p-6 rounded-xl bg-secondary/50">
//               <Users className="mx-auto text-primary mb-4" size={32} />
//               <h3 className="text-2xl font-bold">100+</h3>
//               <p className="text-muted-foreground">Happy Families</p>
//             </div>
//             <div className="p-6 rounded-xl bg-secondary/50">
//               <Camera className="mx-auto text-primary mb-4" size={32} />
//               <h3 className="text-2xl font-bold">500+</h3>
//               <p className="text-muted-foreground">Site Visits Conducted</p>
//             </div>
//             <div className="p-6 rounded-xl bg-secondary/50">
//               <MapPin className="mx-auto text-primary mb-4" size={32} />
//               <h3 className="text-2xl font-bold">Tirupati</h3>
//               <p className="text-muted-foreground">Regional Leader</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Photo Gallery - Masonry Layout */}
//       <section className="section-padding bg-background pt-0">
//         <div className="container mx-auto">
//           <h2 className="section-title text-center mb-12 font-heading">Recent Site Visits</h2>
          
//           <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
//             {customerImages.map((img, index) => (
//               <div 
//                 key={index} 
//                 className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
//               >
//                 <img 
//                   src={img} 
//                   alt={`Site Visit ${index + 1}`} 
//                   className="w-full h-auto block"
//                   loading="lazy"
//                   onError={(e) => {
//                     // Safety check: hide the container if the image fails to load
//                     e.currentTarget.parentElement.style.display = 'none';
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Customers;







import { Users, Camera, MapPin, Instagram } from "lucide-react";

// Importing all images from assets
import c_main from "@/assets/customer.jpeg";
import c1 from "@/assets/customerone.jpeg";
import c2 from "@/assets/customertwo.jpeg";
import c3 from "@/assets/customerthree.jpeg";
import c4 from "@/assets/customerfour.jpeg";
import c5 from "@/assets/customerfive.jpeg";
import c6 from "@/assets/customersix.jpeg";
import c7 from "@/assets/customerseven.jpeg";
import c8 from "@/assets/customereight.jpeg";
import c9 from "@/assets/customernine.jpeg";
import c10 from "@/assets/customerten.jpeg";
import c11 from "@/assets/customereleven.jpeg";
import c12 from "@/assets/customertwelve.jpeg";
import c13 from "@/assets/customerthirteen.jpeg";
import c14 from "@/assets/customerfourteen.jpeg";
import c15 from "@/assets/customerfifteen.jpeg";
import c16 from "@/assets/customersixtheen.jpeg";
import c17 from "@/assets/customerseventeen.jpeg";
import c18 from "@/assets/customereighteen.jpeg";
import c19 from "@/assets/customernineteen.jpeg";
import c20 from "@/assets/customertwenty.jpeg";
import c21 from "@/assets/twentyone.jpeg";
import c22 from "@/assets/twentytwo.jpeg";
import c23 from "@/assets/twentythree.jpeg";
import c24 from "@/assets/twentyfour.jpeg";
import c25 from "@/assets/twentyfive.jpeg";
import c26 from "@/assets/twentysix.jpeg";

const Customers = () => {
  // Array to map through for the gallery
  const customerImages = [
    c_main, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
    c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,
    c21, c22, c23, c24, c25, c26
  ].filter(Boolean); // This removes any "undefined" imports if a file is missing

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-blue pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            Our <span className="text-accent">Customers & Site Visits</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Glimpses of our growing family of happy investors and successful site tours across Tirupati.
          </p>
        </div>
      </section>

      {/* Stats/Overview */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl bg-secondary/50">
              <Users className="mx-auto text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold">100+</h3>
              <p className="text-muted-foreground">Happy Families</p>
            </div>
            <div className="p-6 rounded-xl bg-secondary/50">
              <Camera className="mx-auto text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-muted-foreground">Site Visits Conducted</p>
            </div>
            <div className="p-6 rounded-xl bg-secondary/50">
              <MapPin className="mx-auto text-primary mb-4" size={32} />
              <h3 className="text-2xl font-bold">Tirupati</h3>
              <p className="text-muted-foreground">Regional Leader</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Reel Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="https://www.instagram.com/reel/DRwyDLPk0Db/?igsh=bXlxbnR3czZ5bnlz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
          >
            <Instagram size={24} />
            Watch Our Latest Site Visit Reel
          </a>
        </div>
      </section>

      {/* Photo Gallery - Masonry Layout */}
      <section className="section-padding bg-background pt-0">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-12 font-heading">Recent Site Visits</h2>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {customerImages.map((img, index) => (
              <div 
                key={index} 
                className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <img 
                  src={img} 
                  alt={`Site Visit ${index + 1}`} 
                  className="w-full h-auto block"
                  loading="lazy"
                  onError={(e) => {
                    // Safety check: hide the container if the image fails to load
                    e.currentTarget.parentElement.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customers;