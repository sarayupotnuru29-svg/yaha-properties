import { Link } from "react-router-dom";
import { MapPin, TrendingUp } from "lucide-react";
import serviceAgricultural from "@/assets/service-agricultural.jpg";
import servicePlots from "@/assets/service-plots.jpg";
import serviceApartments from "@/assets/service-apartments.jpg";
import serviceGated from "@/assets/service-gated.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";

const categories = [
  {
    title: "Agricultural Land Opportunities",
    description: "Premium agricultural land in high-growth zones with verified legal documentation. Ideal for long-term investments with strong appreciation potential.",
    image: serviceAgricultural,
    highlights: ["Verified titles", "High-growth zones", "Revenue documentation"],
  },
  {
    title: "Residential Plot Layouts",
    description: "TUDA-approved residential plot layouts in prime Tirupati locations with complete infrastructure, road access, and utility connections.",
    image: servicePlots,
    highlights: ["TUDA approved", "Infrastructure ready", "Prime locations"],
  },
  {
    title: "Apartment Projects",
    description: "Modern apartment projects with contemporary designs, premium construction quality, and convenient urban locations.",
    image: serviceApartments,
    highlights: ["Modern design", "Quality construction", "Urban locations"],
  },
  {
    title: "Gated Community Developments",
    description: "Secure, well-planned gated communities featuring modern amenities, landscaped gardens, and 24/7 security on highway-facing locations.",
    image: serviceGated,
    highlights: ["Gated security", "Modern amenities", "Highway facing"],
  },
  {
    title: "Industrial Investment Corridors",
    description: "Strategic investments along the Tirupati–Naidupeta industrial corridor with exceptional ROI potential and government-backed development.",
    image: serviceIndustrial,
    highlights: ["Industrial corridor", "High ROI", "SEZ belt"],
  },
];

const Properties = () => {
  return (
    <div>
      <section className="gradient-blue pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-4">
            Properties & <span className="text-accent">Investments</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Discover high-growth real estate opportunities across Tirupati and surrounding regions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto space-y-16">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="rounded-xl shadow-lg w-full h-72 lg:h-96 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
                  {cat.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{cat.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {cat.highlights.map((h) => (
                    <span key={h} className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      <TrendingUp size={14} />
                      {h}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  <MapPin size={16} /> Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding gradient-blue text-center">
        <div className="container mx-auto">
          <h2 className="font-heading font-bold text-3xl text-primary-foreground mb-4">
            Ready to Invest in Your Future?
          </h2>
          <Link to="/contact" className="btn-accent">Talk To Our Experts</Link>
        </div>
      </section>
    </div>
  );
};

export default Properties;
